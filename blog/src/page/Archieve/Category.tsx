import styles from "./styles/category.module.css"
const category = [
    {
        'name':'React',
        'key':'React',
    },
    {
        'name':'Vue',
        'key':'Vue',
    },
    {
        'name':'Node',
        'key':'key',
    },
    {
        'name':'阅读',
        'key':'reading'
    },
    {
        'name':'阅读',
        'key':'scene'
    },
    {
        'name':'阅读',
        'key':'scheme'
    },
    {
        'name':'阅读',
        'key':'photo'
    },
    {
        'name':'生活',
        'key':'life'
    }
]

const Category = ()=>{
    return(
        <>
        <div className={styles.text}>
            <h2 className={styles.title}>一揪分类</h2>
            <p className={styles.tip}>tip: 请点击你喜欢的标签</p>
        </div>
       
            <ul className={styles.list}>
                {
                    category.map((item)=>(
                        <li key={item.key} className={styles.item}>
                            <div>
                                {item.name}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
export default Category;