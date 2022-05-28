import styles from "./styles/Recent.module.css";

import icon from "../../images/blog.svg";
const Recent = ()=>{
    const data =[
        {
            title:"文档编辑器全新上线，让你爱上写作"
        },
    ]
    for(let i = 0;i<20;i++){
        data.push({
            title:"文档编辑器全新上线，让你爱上写作"
        },)
    }
    return(
        <>
        <div className={styles.container}>
            <div className={styles.body}>
                <p className={styles.title}>名称</p>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <div className={styles.item_content}>
                            <img src={icon} alt="icon.svg" className={styles.icon} />
                            <span className={styles.blog_title}>文档编辑器全新上线，让你爱上写作</span>
                        </div>
                    </li>
                    {
                        data.map((item)=>(
                            <li className={styles.item}>
                        <div className={styles.item_content}>
                            <img src={icon} alt="icon.svg" className={styles.icon} />
                            <span className={styles.blog_title}>{item.title}</span>
                        </div>
                    </li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </>
    )
}
export default Recent;