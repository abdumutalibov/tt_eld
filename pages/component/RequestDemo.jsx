import React from "react";
import styles from "../../styles/RequestDemo.module.css";
import { IoCallOutline, IoMapOutline, IoMailOutline } from "react-icons/io5";

const RequestDemo = () => {
  return (
    <div className={styles.container} id="products/request">
      <h2 className={styles.title}>Request demo</h2>
      <p className={styles.desc}>
        Any questions? We`re here to help. Fill out the form and we will be in
        touch.
      </p>
      <div className={styles.line}></div>
      <div className={styles.row}>
        <div className={styles.mainContact}>
          <div className={styles.contact}>
            <div className={styles.icons}>
              <IoCallOutline />
            </div>
            <p className={styles.c_title}>Call Us</p>
            <p className={styles.c_text}>(833) 888-8353</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.icons}>
              <IoMailOutline />
            </div>
            <p className={styles.c_title}>Email Us</p>
            <p className={styles.c_text}>info@tteld.com</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.icons}>
              <IoMapOutline />
            </div>
            <p className={styles.c_title}>Visit Office</p>
            <p className={styles.c_text}>
              799 N Court Street,
              <br /> Medina OH 44256{" "}
            </p>
            <p className={styles.c_text}> </p>
          </div>
        </div>
        <form className={styles.newUser}>
          <div className={styles.newUser}>
            <input
              className={styles.input}
              name='name'
              type="text"
              placeholder="Your Name*"
              required

            />
            <input
              className={styles.input}
              name='email'
              type="email"
              placeholder="Your Email*"
              required

            />
          </div>
          <div className={styles.newUserItem}>
            <input
              className={styles.input}
              name='company'
              type="text"
              placeholder="Company Name*"
              required

            />
            <input
              className={styles.input}
              name='truckAmount'
              type="number"
              placeholder="Amount of trucks*"
              required

            />
          </div>
          
          <div className={styles.newUserItem}>
            <input
              className={styles.inputs}
              name='phone'
              type="text"
              placeholder="Phone*"
              required

            />
          </div>
          <div className={styles.newUserItem}>
          <textarea required   rows="5" name="message" className={styles.textarea} placeholder="Type your message here..."/>
          </div>
          <div className={styles.inpWrapper}>
          <input type="submit" className={styles.btn_btn} value="Send Message"/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestDemo;
