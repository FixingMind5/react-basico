import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';
import Badge from '../components/Badge';

import api from '../api'

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      },
    });
  }

  handleSubmit = async element => {
    element.preventDefault();
    this.setState({ loading: true, error: null })

    try {
      await api.badges.create(this.state.form)
      this.setState({ loading: false })

      this.props.history.push("/badges")
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }

  render() {
    return(
      <div>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero--image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'first name'}
                lastName={this.state.form.lastName || 'last name'}
                twitter={this.state.form.twitter || 'twitter'}
                jobTitle={this.state.form.jobTitle || 'job title'}
                email={this.state.form.email || 'email'}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default BadgeNew;