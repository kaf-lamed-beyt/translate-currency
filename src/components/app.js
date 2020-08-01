import React from 'react'

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

    // http request

    fetch(tuforty_endpoint, dataParams)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="app__base">
        <h1>Welcome</h1>
      </div>
    )
  }
}
