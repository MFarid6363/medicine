import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <div className={styles.Container}>
      <div className={styles.Links}>
        <Link
          className={
            router.asPath == "/privacy-statement" ? styles.selected : "˝"
          }
          href="/privacy-statement"
        >
          Privacy Statement
        </Link>
        <Link
          className={router.asPath == "/terms-of-use" ? styles.selected : "˝"}
          href="/terms-of-use"
        >
          Terms of Use
        </Link>
        <Link
          className={
            router.asPath == "/delivery-return-policy" ? styles.selected : "˝"
          }
          href="/delivery-return-policy"
        >
          Delivery & Return Policy
        </Link>
        <Link
          className={router.asPath == "/support" ? styles.selected : "˝"}
          href="/support"
        >
          Support
        </Link>
      </div>
      <div className={styles.info}>
        <div>
          <p>
            Daily Herbals website is for informational purposes only and under
            no circumstances is it a public offer.
          </p>
          <p>
            Statements regarding dietary supplements have not been evaluated by
            the FDA and are not intended to diagnose, treat, cure, or prevent
            any disease or health condition. ˝
          </p>
        </div>
        <div>
          <Image src="/images/logos.png" width={200} height={30} />
          <span>SANTORAS SOLUTIONS LTD</span>
          <span>20-22 Wenlock Road, London, United Kingdom, N1 7GU</span>
          <span>support@daily-herbals.com</span>
          <span>+441313670108</span>
        </div>
      </div>
      <p className={styles.copyright}>
        2023 © Daily Herbals. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
