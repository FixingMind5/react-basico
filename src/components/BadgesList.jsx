import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Styles
import './styles/BadgesList.css'
import Gravatar from './Gravatar';

class BadgesListItem extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar className="BadgesListItem__avatar" email={this.props.badge.email} />
        <div>
          <p className="font-weight-bold">{this.props.badge.firstName} {this.props.badge.lastName}</p>
          <p className="BadgesListItem__twitter">@{this.props.badge.twitter}</p>
          <p>{this.props.badge.jobTitle}</p>
        </div>
      </div>
    )
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    /** A function */
    const results = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setFilteredBadges(results);
  }, 
  /* Values that force the function to repeat */ 
  [ badges, query ]
  )

  return { query, setQuery, filteredBadges }
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);
   

  if (filteredBadges.length === 0) {
    return <div>
      <div className="form-group">
        <label>Search Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
              setQuery(e.target.value)
            }
          }
        />
      </div>
      <h1>No se encontraron resultados</h1>
      <Link to="/badges/new" className="btn btn-primary" >Create Badge</Link>
    </div>
  }

  return (
    <div>
      <div className="form-group">
        <label>Search Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={e => {
              setQuery(e.target.value)
            }
          }
        />
      </div>
      <ul className="BadgesList" className="list-unstyled">
        {filteredBadges.map( badge => {
          return (
            <li key={badge.id}>
              <Link to={`/badges/${badge.id}`} className="text-reset text-decoration-none">
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BadgesList;