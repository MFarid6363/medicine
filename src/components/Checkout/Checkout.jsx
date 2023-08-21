import React, { useState } from "react";
import styles from "./styles.module.css";
import ls from "local-storage";
import { lsBusket } from "@/constants/localStorage";
import useUser from "@/providers/userProvider";
import map from "lodash/map";
import { reduce } from "lodash";
import BasicAlerts from "../Reusable/Alert/Alert";
import { getCurrency } from "@/helpers/getCurrency";

const CheckoutContainer = () => {
  const { goodsList, currency } = useUser();
  const [terms, setTerms] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    houseNumber: "",
    apartment: "",
    apartment: "",
    city: "",
    county: "",
    postcode: "",
    phone: "",
    email: "",
    additionalInfo: "",
  });

  const [alert, setAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (terms) {
      ls.set(lsBusket, []);
      setAlert("success");
      setAlertMsg("Order succesfully created");
    } else {
      setAlert("error");
      setAlertMsg("Please accept terms of use");
    }
  };

  return (
    <div>
      <form className={styles.Form} onSubmit={handleSubmit}>
        <div className={styles.Container}>
          <h2>Biling details</h2>
          <div>
            <label>First name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Last name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Company name (optional)</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Country / Region *</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Street address *</label>
            <input
              type="text"
              name="houseNumber"
              placeholder="House number and street name"
              value={formData.houseNumber}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="apartment"
              placeholder="Apartment, suite, unit, etc. (optional)"
              value={formData.apartment}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>County (optional)</label>
            <input
              type="text"
              name="county"
              value={formData.county}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Postcode *</label>
            <input
              type="text"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]*" // Only allow numbers
              required
            />
          </div>
          <div>
            <label>Email address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Additional information</label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.Order}>
          <h2>Your order</h2>
          <div className={styles.OrderInfo}>
            <div className={styles.head}>
              <span>PRODUCT</span>
              <span>SUBTOTAL</span>
            </div>
            <div>
              {map(goodsList, (item) => (
                <>
                  <span>{`${item.name} - ${item.option.name} x ${item.quantity}`}</span>
                  <span>
                    {(
                      item.option.priceMultiplication *
                      item.price[currency] *
                      item.quantity
                    ).toFixed(2)} {getCurrency(currency)}
                  </span>
                </>
              ))}
            </div>
            <div>
              <span>Subtotal</span>
              <span>
                {reduce(
                  goodsList,
                  function (sum, item) {
                    return (
                      sum +
                      item.option.priceMultiplication *
                        item.price[currency] *
                        item.quantity
                    );
                  },
                  0
                ).toFixed(2)}{" "}
                {getCurrency(currency)}
              </span>
            </div>
            <div>
              <span>Total</span>
              <span>
                {" "}
                {reduce(
                  goodsList,
                  function (sum, item) {
                    return (
                      sum +
                      item.option.priceMultiplication *
                        item.price[currency] *
                        item.quantity
                    );
                  },
                  0
                ).toFixed(2)}{" "}
                {getCurrency(currency)}
              </span>
            </div>
          </div>
          <div className={styles.select}>
            <input
              type="checkbox"
              value={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <p>
              You agree to the{" "}
              <a href="/terms-of-use" target="_blank">
                Terms of Use
              </a>
              . You authorize regular charges to your credit card *
            </p>
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <BasicAlerts alertMsg={alertMsg} type={alert} setAlert={setAlert} />
    </div>
  );
};

export default CheckoutContainer;
