import React from 'react'
import styles from "../../styles/Features.module.css";
import { IoMdTabletPortrait, } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";

const Features = () => {
  return (
    <div>
          <section className={styles.container} id='products/production'>
<div className={styles.mainCard}>
        <div className={styles.card}>

                <div className={styles.brand}><IoMdTabletPortrait/> </div>
                <div className={styles.line}></div>
            <h2 className={styles.title}>Driver App on any sceen</h2>
            <p className={styles.desc}>Right measurement of the fleet help you set up precise business. Our Driver App provides a most comprehensive solutions to the market.</p>
        </div>
        <div className={styles.F_right}>
            <img className={styles.F_img1} src="https://tteld.com/assets/images/custom/mockup1.png" alt="device"/>
            <img className={styles.F_img2} src="https://tteld.com/assets/images/custom/driverAppBg.jpg" alt="" />
            </div>
</div>
<div>

</div>
    </section>
    <section className={styles.cont}>
      <div className={styles.mainCard}>
        <div className={styles.card}>
          
          <div className={styles.fadeInUp}>
            <img className={styles.F1_img1} src="https://tteld.com/assets/images/custom/dispatcher.png" alt="" />
            <img className={styles.F2_img2} src="https://tteld.com/assets/images/custom/dispatcherBg.png" alt="" />
           <div className={styles.F2_right}>

        <div className={styles.brand}><FiMonitor/> </div>
        <div className={styles.lines}></div>
        <h2 className={styles.feature}>Flexible Dispatch Board</h2>
        <p className={styles.feature2}>Dispatch Board is the go-to dispatching software - created with carrier needs in mind. Dispatch Board will streamline day-to-day operations maximizing your time so you can focus on better loads and bigger profit.</p>
          </div>
          </div>
          
        </div>

      </div>
    </section>
    <section className={styles.container} id='products/production'>
<div className={styles.mainCard}>
        <div className={styles.card}>

                <div className={styles.brand}><IoMdTabletPortrait/> </div>
                <div className={styles.line}></div>
            <h2 className={styles.title}>Chat on drivers and dispatchers</h2>
            <p className={styles.desc}>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
        </div>
        <div className={styles.F_right}>
            <img className={styles.F_img1} src="https://tteld.com/assets/images/custom/chat.png" alt="device"/>
            <img className={styles.F_img2} src="https://tteld.com/assets/images/custom/chatBg.jpg" alt="" />
            </div>
</div>
<div>

</div>
    </section>
    <section className={styles.cont}>
      <div className={styles.mainCard}>
        <div className={styles.card}>
          
          <div className={styles.fadeInUp}>
            <img className={styles.F1_img1} src="https://tteld.com/assets/images/custom/gps.png" alt="" />
            <img className={styles.F2_imgs2} src="https://tteld.com/assets/images/custom/gpsBg.png" alt="" />
           <div className={styles.F2_right}>

        <div className={styles.brand}><FiMonitor/> </div>
        <div className={styles.lines}></div>
        <h2 className={styles.feature}>GPS Tracking</h2>
        <p className={styles.feature2}>Keep up with demand - dispatch and track your fleet with real-time GPS, leveraging weather and traffic data to exceed your customers expectations.</p>
          </div>
          </div>
          
        </div>

      </div>
    </section>
    </div>

  )
}

export default Features