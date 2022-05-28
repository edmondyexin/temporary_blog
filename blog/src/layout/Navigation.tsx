import { Fragment, useEffect, useState } from "react";
import classes from "./styles/Navigation.module.css";
import icon from "../images/icon.jpg";
import  {Link,useMatch,useResolvedPath} from "react-router-dom";
import setting from "../images/setting.svg";

import type { LinkProps } from "react-router-dom";

const Navigation = () => {

  
    const author = 'Liquid '
    const nav = [
        {
            path:"/",
            title:"HOME/主页",
            key:"index"
        },
        {
            path:"archive",
            title:"ARCHIVES/分类",
            key:"archive"
        },
        {
            path:"log",
            title:"LOG/日志",
            key:"log"
        },
        {
            path:"about",
            title:"ABOUT/关于",
            key:"about"
        }
    ]
    

    return (
        <Fragment>
            <div className={classes.box}>
                <div className={classes.left}>
                    <div className={classes.person}></div>
                    <img src={icon} alt="icon" className={classes.icon} />
                    <h3 className={classes.title}>{author}'s BLOG</h3>
                </div>
                <div className={classes.right}>
                    <nav className={classes.nav}>
                        <ul className={classes.links} >
                            {
                                nav.map((item)=>(
                                    <li key={item.key}>
                                        <CustomLink to={item.path}   >{item.title}</CustomLink>
                                        <div className={classes.bar}></div>
                                    </li>
                                ))
                            }
                        </ul>
                        <Link to="setting">
                            <img className={classes.setting} src={setting} alt="设置" />
                        </Link>
                        {/* <div>mode dark | light </div> */}
                        {/* 待完成 */}
                    </nav>

                </div>
            </div>
        </Fragment>
    );
};
export default Navigation;

function CustomLink({ children, to, ...props }: LinkProps) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          className={match?classes.chosen:classes.link}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }