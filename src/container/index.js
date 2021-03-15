import React from "react";
import style from "./style/app.module.css";
import Card from "../components/Card";
import Button from "../components/Button";
import { BsMic } from "react-icons/bs";

const App = () => {
  const [translation, setTranslation] = React.useState({
    amount: "",
    currencyCode: "",
  });

  const handleInputChange = (name) => (e) => {
    return {
      ...name,
      [name]: e.target.value,
    };
  };

  return (
    <section className={style.root}>
      <div className={style.resultRoot}>
        <Card className={style.amount}>
          <h1>NGN 50,000</h1>
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
          className="form-control"
          type="text"
          placeholder="how much do you want to translate?"
          onChange={handleInputChange("amount")}
        />
        <select
          name="currencies"
          id="currency_code"
          value="language"
          className={style.currencies}
        >
          <option value="ngn">Nigerian Naira</option>
          <option value="ngn">Indian Rupees</option>
          <option value="ngn">Chinese Yuan</option>
          <option value="ngn">Canadian Dollars</option>
          <option value="ngn">Ghanian Cedis</option>
        </select>
      </div>
    </section>
  );
};

export default App;
