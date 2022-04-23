import { useEffect, useState } from "react";
import styles from "../../styles/Navbar.module.css";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(100);
  const [boxShadow, setBoxShadow] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 100;

    if (backgroundTransparacyVar < 100) {
      let paddingVar = 30 - backgroundTransparacyVar * 120;
      let boxShadowVar = backgroundTransparacyVar * 0.01;
      setBackgroundTransparacy(backgroundTransparacyVar);
      setPadding(paddingVar);
      setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);
  return (
    <div className={styles.containers}
    style={{
      background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
      padding: `${padding}px 0px`,
      boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
    }}
    
    >
      <div className={styles.eld}>
        <a href="">
          <img
            className={styles.logo}
            src="https://tteld.com/assets/images/custom/logo.svg"
            alt=""
          />
        </a>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.a} href="#products/design">Home</a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.a} href="#products/development">Products</a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.a} href="#products/production">Features</a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.a} href="#products/pricing">Pricing</a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.a} href="#products/request">Request Demo</a>
          </li>
        </ul>

        <div className={styles.wrapper}>
          <div className={styles.hamburger} onClick={() => setOpen(!open)}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
      </div>
      {
        <ul className={styles.menu} style={{ left: open ? "0px" : "-500vw" }}>
          <li className={styles.menuItem}>
            <a className={styles.h}  href="#products/design">Home</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.h} href="#products/development">Products</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.h} href="#products/production">Features</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.h} href="#products/pricing">Pricing</a>
          </li>
          <li className={styles.menuItem}>
            <a className={styles.h} href="#products/request">Request Demo</a>
          </li>
        </ul>
      }
    </div>
  );
};

export default Navbar;
// style={{left: open ? '0px' : "-500vw"}}
