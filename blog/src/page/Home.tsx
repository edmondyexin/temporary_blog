import Layout from "../layout/index";
import Card from "../components/Card";
import styles from "./styles/Home.module.css";

const Home = ()=>{
    return (
            <div className={styles.container}>
                <Layout />
                <h2 >一些文章（质量排序）</h2>
                <div className={styles.cardbox}>
                    <div className={styles.cardlist}>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <h2>一点作品</h2>
                <div>
                    暂无作品
                </div>
            </div>
    )
}
export default Home;