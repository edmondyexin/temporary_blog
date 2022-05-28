import styles from "./styles/exterLink.module.css";
import icon from "../../images/link.png"
const data = [
    {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    },
    {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    },
    {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    },
    {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    },
    {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    }, {
        link:'www.baidu.com',
        desc:'百度一下，你就知道',
        key:'baidu',
        source:''
    }
]

const ExternalLinks = ()=>{
    return(
        <>
            <div className={styles.externalLinks}>
                <div className={styles.head}>
                    <img src={icon} alt ="this is pic"/>
                    <p>友情链接</p>
                    </div>
                <ul className={styles.list}>
                    {
                        data.map((item)=>(
                            <li key={item.key} className={styles.item}>
                                <p>{item.source}后面用icon代替</p>
                                <a href={item.link}>desc</a>
                                <div className={styles.bar}></div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
export default ExternalLinks;