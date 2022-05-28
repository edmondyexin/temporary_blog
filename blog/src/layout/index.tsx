import { Fragment } from "react";
import styles from "./styles/Index.module.css";

import github_link1 from "../images/github1.svg";
import github_link2 from "../images/github2.svg";
import email_link1 from "../images/email1.svg";
import email_link2 from "../images/email2.svg";
const Index = ()=>{
    const mole = '心若没有栖息的地方，到哪里都是在流浪'
    return(
        <Fragment>
            <div className={styles.container}>
                <p className={styles.mole}> 
                    {mole}
                </p>
                <ul className={styles.iconList}>
                    <li>
                        <a className={styles.github} href="#">
                            <img src={github_link1} alt="github.svg" />
                        </a>
                    </li>
                    <li>
                        <a className={styles.email} href="#">
                            <img src={email_link1} alt="email.svg" />
                        </a>
                    </li>
                </ul>
            </div>
            
        </Fragment>
    )
}
export default Index;