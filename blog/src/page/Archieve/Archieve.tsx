
import styles from "./styles/archieve.module.css";
import Category from "./Category";
import ExternalLinks from "./ExterLink";
import TagSet from "./TagSet";
import List from "./List";
const Archive =()=>{
    return (
        <div className={styles.archive_page}>
            <div className={styles.block_box}>
                <div className={styles.block}>
                </div>
            </div>
            
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.tags}>
                            <TagSet />
                    </div>
                    <div className={styles.links}>
                        <ExternalLinks/>
                    </div>
                </div>
                <div className={styles.right}>
                    <Category/>
                    <List/>
                </div>
            </div>
            
        </div>
    )
}

export default Archive;