import styles from "./styles/Author.module.css";

const Author = ()=>{
    return(
        <>
            <div className={styles.container}>
                <div className={styles.portrait}>

                </div>
                <p>欢迎回来</p>
                <p>你已经写了xxx篇博客</p>
                <p>上次更新时间为： time</p>
            </div>

        </>
    )
}
export default Author;