import { Fragment } from "react"
import styles from "./styles/Footer.module.css";
const Footer = ()=>{
    return(
        <Fragment>
            <h2>Footer 测试</h2>
            <div className={styles.footer}>
                <div className={styles.time}>
                    ;copy 2021-now
                </div>
                <div className={styles.visit}>
                    访问次数： 留言次数：
                </div>
                <div className={styles.author}>
                    Powered by liquidHeart in 2021
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;