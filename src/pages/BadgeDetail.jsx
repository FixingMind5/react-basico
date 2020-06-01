import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

// Components
import Badge from '../components/Badge';
import api from '../api';

// images
import confLogo from '../images/platziconf-logo.svg';

// Styles
import './styles/BadgeDetail.css'
import DeleteBadgeModal from '../components/DeleteBadgeModal';

class BadgeDetail extends Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        
        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({ loading: false, data: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    };

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    };

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null })

        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }

    render() {
        if (this.state.loading) {
            return "Loading"
        }

        if (this.state.error) {
            return this.state.error.message
        }

        const badge = this.state.data;

        return (
            <div>
                <div className="BadgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="logo de la conferencia"/>
                            </div>
                            <div className="col-6 BadgeDetails__hero-attendant-name">
                                <h1>
                                    {badge.firstName} {badge.lastName}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge 
                                firstName={badge.firstName}
                                lastName={badge.lastName}
                                email={badge.email}
                                jobTitle={badge.jobTitle}
                                twitter={badge.twitter}
                            />
                        </div>
                        <div className="col">
                            <h2>Actions</h2>
                            <div>
                                <div>
                                    <Link
                                        to={`/badges/${badge.id}/edit`}
                                        className="btn btn-primary mb-4">
                                        Edit
                                    </Link>
                                </div>
                                <div>
                                    <button onClick={this.handleOpenModal} className="btn btn-danger">
                                        Delete
                                    </button>
                                    {<DeleteBadgeModal 
                                        isOpen={this.state.modalIsOpen}
                                        onClose={this.handleCloseModal}
                                        onBadgeDelete={this.handleDeleteBadge}
                                    />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetail;