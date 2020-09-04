import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currencyCode: '',
      moneyValue: '',
      language: '',
      translatedResult: [],
      isLoading: false,
    }
  }
    componentDidMount() {
      const { currencyCode, moneyValue, language, isLoading } = this.state

      const API_URL = `https://tuforty.com/api/v1/translator/money?value=${moneyValue}&language=${language}&currency=${currencyCode}`
      const API_KEY =
        'tuforty_159FvsJ263hXlcbEJVCpxvW9VqWm9JBRF06uhuhMoeAELDuTEMGjdFUvgHxn'

    if (isLoading) {
      return <p>Loading...</p>
    }

    fetch(API_URL, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${API_KEY}`,
      },
    })
      .then(response => response.json())
      .then(response => this.setState({ translatedResult: response.translatedResult })
      .catch(error => console.log(error))
    )
  }

  render() {
    return <div className="app-__base"></div>
  }
}
