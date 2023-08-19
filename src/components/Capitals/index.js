import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeCapitalId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    const {target} = event
    this.setState({activeCapitalId: target.value})
  }

  getCountry = () => {
    const {activeCapitalId} = this.state
    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === activeCapitalId,
    )
    return activeCountryAndCapital.country
  }

  render() {
    const {activeCapitalId} = this.state
    const country = this.getCountry()
    return (
      <div className="capitals-app-container">
        <div className="capitals-container">
          <h1 className="capitals-heading">Countries And Capitals</h1>
          <div className="capitals-question-container">
            <select
              className="capitals-select"
              onChange={this.onChangeCapital}
              value={activeCapitalId}
            >
              {countryAndCapitalsList.map(eachCountryAndCapital => (
                <option
                  className="capitals-option"
                  key={eachCountryAndCapital.id}
                  value={eachCountryAndCapital.id}
                >
                  {eachCountryAndCapital.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="capitals-question">is capital of which country?</p>
          </div>
          <p className="capitals-country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
