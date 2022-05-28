import  {Fragment} from "react"
import Nav from "./components/Nav";
import SearchInput from "./components/searchInput";
import Recent from "./Recent";
import styles from "./styles/Index.module.css";
import { Scrollbars } from 'react-custom-scrollbars';
import Author from "./components/Author";
import Announce from "./components/Annouce";

const options = {
    mouseWheel: true,
    scrollbars: true,
    freeScroll: true,
    invertWheelDirection: true,
    momentum: false,
    }


const Index = ()=>{
    return(
        <Fragment>
            <div className={styles.container}>
                <div className={styles.left}>
                    <Scrollbars>
                        <Nav/> 
                    </Scrollbars>
                </div>
                <div className={styles.center}>
                    <Scrollbars >
                        <div className={styles.center_top} >
                            <div className={styles.center_title}>
                                最近浏览 xxx.subtitle
                            </div>
                            <SearchInput/>
                        </div>
                        <Recent/>
                    </Scrollbars>
                    
                    {/* <div className={styles.top}>
                        <div className={styles.title}>{title}</div>
                        <SearchInput/>
                        <button >新建文章</button>
                    </div>
                    <main>
                        <ul>
                            <li>博文1</li>
                            <li>博文1</li>
                            <li>博文1</li>
                            <li>博文1</li>
                            <li>博文1</li>
                        </ul>
                    </main> */}
                </div>
                <div className={styles.right}>
                    {/* 右侧 作者信息 */}
                    <Author/>
                    <Announce/>
                </div>
            </div>
        </Fragment>
    )
}
export default Index;