import styles from "./styles/DairyItem.module.css"
import Tag from "./Tag"
const Item:React.FC = (props)=>{
    const tags = [
        '生活',
        '摄影',
        '美好'
    ]
    return(
        <>
            <div className={styles.container}>
                <div className={styles.img_container}>
                    <img src="/images/pic1.jpg" alt="test.png"/>
                </div>
                <div className={styles.content}>
                    <p className={styles.title}>title:标题</p>
                    <p className={styles.outline}>content: 大纲内容 ，心若没有栖息的地方，到哪里都是在流浪</p>
                    <div className={styles.footer}>
                        <div className={styles.tags}>
                            <ul>
                            {
                                tags.map((item)=>{
                                    return(
                                        <li key={item} className={styles.item}>
                                            <Tag title={item}/>
                                        </li>
                                    ) 
                                })
                            }
                            </ul>
                        </div>
                        <div className={styles.date}>2021/02/03</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item;