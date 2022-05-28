import styles from "./styles/Nav.module.css";
import icon from "../../../images/icon.svg";
const Nav:React.FC=()=>{
    const topNav = [
        {
            icon:"",
            title:"工作台",
        },
        {
            icon:"",
            title:"小记",
        },
        {
            icon:"",
            title:"收藏",
        },
        {
            icon:"",
            title:"最近浏览",
        },
    ]
    const tree = [
        {
            name:"个人博客",
            children:[
                "时间规划",
                "你说我听",
                "诗酒茶",
                "柴米油盐"
            ]
        },
        {
            name:"草稿箱",
            children:[
                "2021的那些事情",
                "2022我和她",
                "2023你们之间的故事",
            ]
        },
        {
            name:"回收站",
            children:[  
                "挖矿人生",
                "有鹅选鹅",
                "人生再读"
            ]
        }
    ]
    return(
        <>
            <div className={styles.container}>
                <div className={styles.top}>
                    <ul className={styles.nav_top}>
                        {
                            topNav.map((item)=>(
                                    <li>
                                        <img src={icon} alt="icon.jpg"/>
                                        <span>{item.title}</span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
                <div className={styles.bottom}>
                        {
                            tree.map((item)=>(
                                <ul>
                                    <h2>{item.name}</h2>
                                    {
                                        item.children.map((i)=>(
                                        <li>
                                            <img src={icon} alt="icon.svg" />
                                            {i}
                                        </li>
                                    ))
                                }
                                </ul>
                            ))
                        }
                </div>
            </div>
        </>
    )
}
export default Nav;