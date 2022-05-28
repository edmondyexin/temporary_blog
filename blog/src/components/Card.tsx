import styles from "./styles/Card.module.css";
const Card =  ()=>{
    return <>
        <div className={styles.container}>
            <h4>文章标题</h4>
            <p>文章简要内容</p>
            <div>尾部： 链接 分组 相关链接</div>
            <footer className={styles.footer}>
                <div className={styles.item}>
                    <span>2021/7/5</span>
                </div>
                <div className={styles.item}>
                    <span>目录测试</span>
                </div>
                <div className={styles.item}>
                    <span>标签测试</span>
                </div>
            </footer>
            
        </div>
    </>
}
export default Card;