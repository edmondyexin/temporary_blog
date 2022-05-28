import styles from './styles/Tag.module.css'

interface prop{
    title:string
}
const Tag = (props:prop)=>{
    return(
        <>
            <div className={styles.container}>
                <p>{props.title}</p>
            </div>
        </>
    )
}
export default Tag;