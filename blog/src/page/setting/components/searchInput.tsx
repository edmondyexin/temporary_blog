import { Fragment } from "react";
import styles from "./styles/searchInput.module.css";
import searchIcon from "../../../images/search.svg";
const SearchInput =()=>{
    return(
        <Fragment>
            <div className={styles.box}>
                <input className={styles.input} placeholder="搜索"/>
                <img src={searchIcon} alt="search.svg" className={styles.searchIcon}/>
            </div>
        </Fragment>
    )
}
export default SearchInput;