import styles from "./styles/box.module.css";
const Box:React.FC = (props)=>{
    return(
        <div children={props.children} className={styles.box}></div>
    )
}

export default Box;