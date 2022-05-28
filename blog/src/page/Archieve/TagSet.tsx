import styles from "./styles/tagset.module.css";
import tag from "../../images/tag.png";
const tags = [
    {
        'name': 'React',
        'key': 'React',
    },
    {
        'name': 'Vue',
        'key': 'Vue',
    },
    {
        'name': 'Node',
        'key': 'key',
    },
    {
        'name': '阅读',
        'key': 'reading'
    },
    {
        'name': '阅读',
        'key': 'scene'
    },
    {
        'name': '阅读',
        'key': 'scheme'
    },
    {
        'name': '阅读',
        'key': 'photo'
    },
    {
        'name': '生活',
        'key': 'life'
    }
]
const TagSet = () => {
    return (
        <>   
            <div className={styles.tagset}> 
            <div className={styles.head}>
                <img src={tag} alt='this is tag'/> 
                <p>Tags</p>
            </div>
                <ul className={styles.list}>
                    {
                        tags.map((item) => (
                            <li key={item.key} className={styles.item}>
                                <div>
                                    {item.name}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div> 
        </>
    )
}
export default TagSet;