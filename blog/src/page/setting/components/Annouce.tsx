import styles from "./styles/Announce.module.css";
const Announce = ()=>{
    return(
        <>
            <div className={styles.container}>
                <p className={styles.title}>版本更新：</p>
                <ul className={styles.list}>
                    <li className={styles.item}>优化了xxx管理 时间：xxx</li>
                    <li className={styles.item}>优化了xxx管理 时间：xxx</li>
                    <li className={styles.item}>优化了xxx管理 时间：xxx</li>
                    <li className={styles.item}>优化了xxx管理 时间：xxx</li>
                    <li className={styles.item}>优化了xxx管理 时间：xxx</li>
                </ul>
                <p className={styles.mole}>你的期待，是我继续改进的源头</p>
            </div>
        </>
    )
}
export default Announce;