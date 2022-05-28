import Card from "../../components/Card";
import styles from "./styles/list.module.css"

const List = ()=>{

    const hint = "你对什么感兴趣"   

    return(
        <>
        <div className={styles.searchBox}>
            <input className={styles.search_input} placeholder={hint}/>
            <img src="/images/search.png" alt="ic-search" className={styles.ic_search}/>
            <p>搜一搜</p>
        </div>
        <div className="content">
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className={styles.page}>
            <p className={styles.prePage}>上一页</p>
            <div className={styles.pre}>
            </div>
            <p>  当前为 xx页 </p>
            <div className={styles.next}>
            </div>
            <p className={styles.nextPage}>下一页</p>
            <p className={styles.pageNum}>共xx页</p>
        </div>
        </>
    )
}
export default List;