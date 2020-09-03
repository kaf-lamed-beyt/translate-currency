import React, { useState } from 'react'

export default function Input() {
  const [currency, setCurrency] = useState('')

  const handleCurrencyInput = (event) => {
    setCurrency(event.target.value)

    console.log(event.target)
  }

  return (
    <div className="input__base">
      <input
        type="text"
        name="currency"
        id="currency"
        onChange={handleCurrencyInput}
        value={currency}
      />
    </div>
  )
}
