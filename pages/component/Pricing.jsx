import React from "react";
import styles from "../../styles/Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.container} id='products/pricing'>
      <h2 className={styles.heading}>Pricing plans</h2>
      <p className={styles.desc}>
        You can even use our demo version to check the whole  system
      </p>
      <div className={styles.line}></div>
      <div className={styles.pricingPanel}>
        <div>
          <h4 className={styles.text}>Pro</h4>
          <p className={styles.curreny}>$105</p>
          <div className={styles.Per}>Per month for a driver</div>
          <div className={styles.pricingBody}>
              <div className={styles.ul}>
              <li>ELD</li>
              <li>Fleet Management</li>
              <li>Log Annotiation</li>
              <li>Asset Tracker</li>
              <li>IFTA Reports</li>
              <li>GPS Tracking</li>
              <li>Tracking History</li>
              <li>Chat and Walkie talkie</li>
              <li>Driver Alarm</li>
              </div>
          </div>
        </div>
              <a className={styles.btn} href="https://app.tteld.com/#/auth/signin">Get Started</a>
      </div>
    </div>
  );
};

export default Pricing;
