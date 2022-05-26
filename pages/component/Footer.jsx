import React from "react";
import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.myFooter}>
        <img
          className={styles.logo}
          src="https://tteld.com/assets/images/custom/logo-footer.png"
          alt=""
        />
        <div className={styles.myFooterContact}>
          <div className={styles.myFooterBottom}>
            <img
              className={styles.myFooterImg}
              src="https://tteld.com/assets/images/custom/footer-email.png"
              alt="img"
            />
            <a className={styles.myFooterTxt} href="mailto:info@tteld.com">
              Info@tteld.com
            </a>
          </div>
          <div className={styles.myFooterBottom}>
            <img
              className={styles.myFooterImg}
              src="https://tteld.com/assets/images/custom/footer-mobile.png"
              alt="img"
            />
            <a className={styles.myFooterTxt} href="mailto:info@tteld.com">
              +1(833) 888-8353
            </a>
          </div>
          <div
            className={styles.myFooterBottom}
          id={styles.L}
            // style={{ borderBottom: "solid 1px rgb(215, 203, 203)" }}
          >
            <img
              className={styles.myFooterImg}
              src="https://tteld.com/assets/images/custom/footer-location.png"
              alt="img"
            />
            <a className={styles.myFooterTxt} href="mailto:info@tteld.com" >
              799 N Court Street, Medina OH 44256
            </a>
          </div>
          
          <div className={styles.iconCont}>
            <a href="https://t.me/tteld" className={styles.FooterIcons}>
              <img
                className={styles.FooterIconsA}
                src="https://tteld.com/assets/images/custom/footer-tg.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.youtube.com/channel/UCKIH0l2298mzb0ElCJ-lpPw"
              className={styles.FooterIcons}
            >
              <img
                className={styles.FooterIconsA}
                src="https://tteld.com/assets/images/custom/footer-youtube.png"
                alt="img"
              />
            </a>
            <a
              href="https://www.instagram.com/tteld_com/"
              className={styles.FooterIcons}
            >
              <img
                className={styles.FooterIconsA}
                src="https://tteld.com/assets/images/custom/footer-instagram.png"
                alt="img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
