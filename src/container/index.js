import React from "react";
import style from "./style/app.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { BsMic } from "react-icons/bs";

import { currencies, languages } from "../../src/currencies";

const App = () => {
  const [translation, setTranslation] = React.useState({
    amount: "",
    currencyCode: "",
  });

  const handleInputChange = (name) => (e) => {
    setTranslation({
      ...name,
      [name]: e.target.value,
    });
  };

  return (
    <section className={style.root}>
      <div className={style.resultRoot}>
        <Card className={style.amount}>
          <p className={style.title}>Amount</p>
          <input
            name="amount"
            className={style.h1}
            type="text"
            defaultValue={translation.amount}
            placeholder="NGN50,000"
          />
        </Card>
        <Card className={style.inwords}>
          <p className={style.title}>Amount in words</p>
          <p className={style.translated}>
            Omo!! I neva sabi O. But e be like say e go show sha
          </p>
        </Card>
      </div>
      <Button className="btn--rounded-md btn--primary">
        <BsMic />
      </Button>
      <div className={style.inputRoot}>
        <input
          name="amount"
          className="form-control controls"
          type="number"
          value={translation.amount}
          placeholder="amount"
          onChange={handleInputChange("amount")}
        />
        <select
          name="currencies"
          id="currency_code"
          defaultValue="language"
          className={`controls ${style.currencies}`}
        >
          <option value="value" defaultValue>
            Currency
          </option>
          {currencies.map((currency, index) => {
            return (
              <option value={currency.currecny_code} key={index}>
                {currency.name}
              </option>
            );
          })}
        </select>
        <select
          name="currencies"
          id="currency_code"
          defaultValue="language"
          className={`controls ${style.currencies}`}
        >
          <option value="value" defaultValue>
            Language
          </option>
          {languages.map((language, index) => {
            return (
              <option value={language.code} key={index}>
                {language.lang}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
};

export default App;
