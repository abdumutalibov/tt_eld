import React from "react";
import styles from "../../styles/Products.module.css";
import { FiMonitor } from "react-icons/fi";
import { IoMdTabletPortrait,IoMdVideocam } from "react-icons/io";
import { IoMapOutline } from "react-icons/io5";
const Products = () => {
  return (
    <section >
    <div className={styles.container} id='products/development'>
      <div className={styles.mainHeading}>
        <h2 className={styles.heading}>Our Products</h2>
        <p className={styles.desc}>
          Working hard for something we don’t care about is called
          
          stressed, working hard for something we love is called
          passion.
        </p>
        <div className={styles.line}></div>
        <div className={styles.mainPanel}>
          <div className={styles.row}>
            <div className={styles.panel}>
              <div className={styles.screen}>
                <FiMonitor />
              </div>
              <div className={styles.feature}>Dispatch Board</div>
              <p className={styles.p}>
                Dispatch Board will streamline day-to-day operations maximizing
                your time so you can focus on better loads and bigger profit.
              </p>
            </div>
            <div className={styles.panel}>
              <div className={styles.screen}>
                <IoMapOutline />
              </div>
              <div className={styles.feature}>Asset Tracker</div>
              <p className={styles.p}>
                TT ELD Asset Tracker is the most effective to secure your asset
                through bottom line. It is for who care about the safety of
                their drivers and trucks.
              </p>
            </div>
            <div className={styles.panel}>
              <div className={styles.screen}>
                <IoMdTabletPortrait />
              </div>
              <div className={styles.feature}>ELD Compliance Solution</div>
              <p className={styles.p}>
                Our FMCSA-certified ELD compliance solution provides users with
                a wide variety of comprehensive features.
              </p>
            </div>
            <div className={styles.panel}>
              <div className={styles.screen}>
                <IoMdVideocam />
              </div>
              <div className={styles.feature}>Dash Camera System</div>
              <p className={styles.p}>
                According to FMCSA research that accident rose over $1,2
                million; with TT ELD camera business will secure both its
                finance and fleet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Products;
