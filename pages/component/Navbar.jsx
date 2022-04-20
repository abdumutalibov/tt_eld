import React from "react";
import styles from "../../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.eld}>
         <Link href="/">
        <img
          className={styles.logo}
          src="https://tteld.com/assets/images/custom/logo.svg"
          alt=""
        />
      </Link>
     
      <ul>
        <li className={styles.listItem}>
          <Link href="#products/design">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="#products/development">Products</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="#products/production">Features</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/photograph">Pricing</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/products/contact">Request Demo</Link>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Navbar;
