import React from "react";
import styles from "./styles.module.css";

const Faq = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.row}>
        <span>SHIPPING</span>
        <div className={styles.Questions}>
          <span>What Shipping Methods Are Available?</span>
        </div>
        <div className={styles.answers}>
          <p>
            We can deliver your orders by regular mail or you can choose
            delivery by courier (USPS, DHL, UPS, etc.).
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div className={styles.Questions}>
          <span>Do You Ship Internationally?</span>
        </div>
        <div className={styles.answers}>
          <p>We can deliver your orders all over Europe and North America</p>
        </div>
      </div>
      <div className={styles.row}>
        <span>PAYMENT</span>
        <div className={styles.Questions}>
          <span>What Payment Methods Are Accepted?</span>
        </div>
        <div className={styles.answers}>
          <p>Visa and Mastercard credit and debit cards</p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div className={styles.Questions}>
          <span>Is Buying Online Safe?</span>
        </div>
        <div className={styles.answers}>
          <p>
            It is safe to buy online if you buy from trusted sellers like Daily
            Herbals. If your concern is about doing online payment, you don’t
            have to worry either as now it is absolutely safe to do online
            transactions as all online stores are obligated to comply with the
            strictest PCI DSS (Payment Card Industry Data Security Standards)
            regulations enforced by credit card networks like Visa or Mastercard
            and GDPR (General Data Protection Regulation) in Europe. This
            website is no exception.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span>ORDERS & RETURNS</span>
        <div className={styles.Questions}>
          <span>How do I place an Order?</span>
        </div>
        <div className={styles.answers}>
          <p>
            Before you start making purchases, create your personal account by
            clicking on the Login/Register button in the upper right corner of
            the main page. This done, just put the goods you feel like buying in
            the necessary quantity in the cart by pressing the button Add to
            cart and follow the directions. It will be easy and comfortable.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div className={styles.Questions}>
          <span>Can I return the goods purchased from your shop?</span>
        </div>
        <div className={styles.answers}>
          <p>
            This option is provided, but it has limitations. You can learn more
            from our managers by contacting them via the contact form or via
            email support@daily-herbals.com
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div className={styles.Questions}>
          <span>When will my order be delivered/shipped?</span>
        </div>
        <div className={styles.answers}>
          <p>
            After you submit your order on Daily Herbals website it may take a
            few days for the store to process your order. If you’d like to know
            the current status of your order, please contact the store directly
            at support@daily-herbals.com. Once your order has been processed,
            you’ll receive an email from the store notifying you about the
            tracking and shipping details on your order.
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <span></span>
        <div className={styles.Questions}>
        </div>
        <div className={styles.answers}>
          <p>
            If you do not receive a shipping confirmation, please contact us to
            obtain tracking information to use for the latest progress on your
            order’s estimated delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
