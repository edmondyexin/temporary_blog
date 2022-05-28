import { Fragment, ReactChild, ReactFragment, ReactPortal } from "react";
import Index from ".";
import Footer from "./Footer";
import Navigation from "./Navigation";
import classes from "./styles/Layout.module.css";
const Layout = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; })=>{
    return(
        <Fragment>
            <div className={classes.background}>
                <Navigation />
                    {/* <Index/> */}
                <main>{props.children}</main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </Fragment>
    )
}
export default Layout;