import styles from "./styles/Anchor.module.css"
import React from "react";
const Anchor:React.FC<any>= (props)=>{
    return (
        <>
            <a className={styles.link} href={props.id}>{props.label}</a>
        </>
    )
}
export default Anchor;