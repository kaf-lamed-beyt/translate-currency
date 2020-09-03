import React from 'react'
import Input from './InputCurrency'

// query parameters
const moneyValue = '506.54'
const currency = 'NGN'
const language = 'en'

// api globals
const api_key =
  'tuforty_159FvsJ263hXlcbEJVCpxvW9VqWm9JBRF06uhuhMoeAELDuTEMGjdFUvgHxn'
const tuforty_endpoint = `https://tuforty.com/api/v1/translator/money?value=${moneyValue}&language=${language}&currency=${currency}`

const dataParams = {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
    Authorization: `Bearer ${api_key}`,
    'Access-Control-Allow-Origin': 'http://localhost:1234/',
  },
}
export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      translatedResult: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    const { isLoading } = this.state

    if (isLoading) {
      return <p>Loading ...</p>
    }

    fetch(tuforty_endpoint, dataParams)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ translatedResult: data.translatedResult })
      )
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { translatedResult } = this.state

    return (
      <div className="app__base">
        <h1>Welcome</h1>
        <Input />
        {translatedResult.map((currency_details, index) => {
          return (
            <div key={index}>
              <h3>{currency_details.language}</h3>
              <p>{currency_details.whole_unit}</p>
              <p>{currency_details.currency}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
