
import styles from "./styles/About.module.css";
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from "react";
import HeadBlock from "./components/HeadBlock";

export const navToTree = (list:any[])=>{
    if(list.length===0) return [];
    const maxLevel = list[0].level;
    const newList:any[] = [];

    list.forEach((item:any)=>{
        if(item.level <= maxLevel){
            newList.push(item)
        }else{
            if(newList[newList.length-1].children){
                newList[newList.length-1].children.push(item)
            }else{
                newList[newList.length-1].children = [item]
            }
        }
    })
    return newList;
}
const About = ()=>{
    const url = '/md/about.md'
    
    const operations = [
        '使用本站',
        '后台服务',
        '和我约会',
        '咕咕咕~',
        '别催我了',
    ]
    // 记录留在此界面的时间

    let time = '00:00:00'; 

    const moles = [
        '每次坚定的踏出一步，就是奔向理想中的自己',
        '天外有来物，人间存意外',
        '对于不喜欢干的事情迅速做完',
        '继续放大环境的作用，不要把自己想象的太强',
        '学会独自前行 学会独自干事和独自行动'
    ]

    const [article,setArticle] = useState<string>('加载失败')

    const loadArticle = async (url:string)=>{
        const res = await fetch(url);
        const content = await res.text();
        setArticle(content)
    }
    const loadOutline = ()=>{
        const articleNavs = document.querySelectorAll('.artivle-nav')
        const navs:any[] = [];
        articleNavs.forEach((item)=>{
            const level = item.getAttribute('data-level');
            const value = item.textContent;
            const nodeKey = item.id;
            navs.push({
                level,
                value,
                nodeKey
            })
        })

    }
    useEffect(
        ()=>{
            loadArticle(url)
            console.log(article);
        },
        []
    )

    return(
        <>  
        <div className={styles.container}>
            <div className={styles.outline}>
                outline
            </div>
            <div className={styles.content}>
                <ReactMarkdown
                    className={styles.md}
                    children={article}
                    // renderers = {{
                    //     heading:HeadBlock
                    // }}
                />
            </div>
            {/* <div className={styles.tips}>
                <div className={styles.dismiss}>隐藏起来~</div>
                <div className={styles.operations}>
                    <ul>
                        {
                            operations.map((item)=>{
                                return(
                                    <li key={item}>{item} </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={styles.time}>{time}</div>
                <div className={styles.mole}>"mole"</div>
            </div> */}
        </div>
        </>
    )
}
export default About;