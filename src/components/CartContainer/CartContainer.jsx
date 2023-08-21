import * as React from "react";
import styles from "./styles.module.css";
import { useRouter } from "next/router";
import { getCurrency, getCurrencyName } from "@/helpers/getCurrency";
import useUser from "@/providers/userProvider";
import Image from "next/image";
import ls from "local-storage";
import { lsBusket } from "@/constants/localStorage";

function CartContainer({ products, onChangeProductQuantity, onRemoveProduct }) {
  const { currency } = useUser();
  return (
    <section className="container">
      <ul className="products">
        {products.map((product, index) => {
          return (
            <li className={styles.row} key={index}>
              <div className={`${styles.col} ${styles.left}`}>
                <div className={styles.thumbnail}>
                  <a href="#">
                    <Image
                      src={product.image}
                      width={150}
                      height={200}
                      alt={product.name}
                    />
                  </a>
                </div>
                <div className={styles.detail}>
                  <div className={styles.name}>
                    <a href="#">{product.name}</a>
                  </div>
                  <div className={styles.description}>
                    {product.option.name}
                  </div>
                  <div className={styles.price}>
                    {formatCurrency(
                      product.price[currency] *
                        product.option.priceMultiplication,
                      getCurrencyName(currency)
                    )}{" "}
                  </div>
                </div>
              </div>

              <div className={`${styles.col} ${styles.right}`}>
                <div className={styles.quantity}>
                  <input
                    type="text"
                    className={styles.quantity}
                    step="1"
                    value={product.quantity}
                    onChange={(event) => onChangeProductQuantity(index, event)}
                  />
                </div>

                <div className={styles.remove}>
                  <svg
                    onClick={() => onRemoveProduct(index)}
                    version="1.1"
                    className="close"
                    x="0px"
                    y="0px"
                    viewBox="0 0 60 60"
                    enableBackground="new 0 0 60 60"
                  >
                    <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                  </svg>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Summary({
  subTotal,
  discount,
  tax,
  onEnterPromoCode,
  checkPromoCode,
}) {
  const total = subTotal - discount + tax;
  const { currency } = useUser();
  const router = useRouter();

  return (
    <section className={`${styles.container} ${styles.summaryContainer}`}>
      {/* <div className={styles.promotion}>
        <label htmlFor={styles.promoCode}>Have A Promo Code?</label>
        <input type="text" onChange={onEnterPromoCode} />
        <button type="button" onClick={checkPromoCode} />
      </div> */}

      <div className={styles.summary}>
        <ul>
          <li>
            Subtotal{" "}
            <span>{formatCurrency(subTotal, getCurrencyName(currency))}</span>
          </li>
          {discount > 0 && (
            <li>
              Discount{" "}
              <span>{formatCurrency(discount, getCurrencyName(currency))}</span>
            </li>
          )}
          <li></li>
          <li className={styles.total}>
            Total{" "}
            <span>{formatCurrency(total, getCurrencyName(currency))}</span>
          </li>
        </ul>
      </div>

      <div className={styles.checkout}>
        <button onClick={() => router.push("/checkout")} type="button">
          Check Out
        </button>
      </div>
    </section>
  );
}

const PROMOTIONS = [
  {
    code: "SUMMER",
    discount: "50%",
  },
  {
    code: "AUTUMN",
    discount: "40%",
  },
  {
    code: "WINTER",
    discount: "30%",
  },
];
const TAX = 0;

const Page = ({ prod }) => {
  const { currency } = useUser();
  const router = useRouter();
  const CLONE_PRODUCTS = JSON.parse(JSON.stringify(prod));
  const [products, setProducts] = React.useState(prod);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);

  React.useEffect(() => {
    setProducts(prod);
  }, [prod]);

  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return (
      total +
      product.price[currency] *
        product.option.priceMultiplication *
        +product.quantity
    );
  }, 0);
  const discount = (subTotal * discountPercent) / 100;
  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...products];

    // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
    if (value === "") {
      cloneProducts[index].quantity = value;
    } else if (valueInt > 0 && valueInt < 100) {
      cloneProducts[index].quantity = valueInt;
    }
    ls.set(lsBusket, JSON.stringify(cloneProducts));
    setProducts(cloneProducts);
  };

  const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index != i;
    });
    ls.set(lsBusket, JSON.stringify(filteredProduct));
    setProducts(filteredProduct);
  };

  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };

  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };

  return (
    <div>
      {products.length > 0 ? (
        <div>
          <CartContainer
            products={products}
            onChangeProductQuantity={onChangeProductQuantity}
            onRemoveProduct={onRemoveProduct}
          />

          <Summary
            subTotal={subTotal}
            discount={discount}
            tax={TAX}
            onEnterPromoCode={onEnterPromoCode}
            checkPromoCode={checkPromoCode}
          />
        </div>
      ) : (
        <div className={styles.emptyProduct}>
          <h3>There are no products in your cart.</h3>
          <button onClick={() => router.push("/shop")}>Shopping now</button>
        </div>
      )}
    </div>
  );
};

export default Page;

function formatCurrency(value, currency) {
  return Number(value).toLocaleString("en-US", {
    style: "currency",
    currency: currency,
  });
}
