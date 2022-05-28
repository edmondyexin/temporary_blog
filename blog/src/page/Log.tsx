/* eslint-disable no-unreachable */
import styles from "./styles/Log.module.css";
import portrait from "../images/temp.png";
import Item from "./components/DairyItem";
const Log = () => {
  // 掠过数据获取部分 死数据绑定进行渲染
  const personInfo = {
    qq: '577221179',
    name:'_ye某_',
    github: 'https://github.com/edmondyexin',
    status:'喜欢做点东西的随性 developer ',
    mole:'你对我的存在有些许印象'
  }

  const words = '本站由来：希冀在网络上留下一个属于自己的空间'
  const version = {
    update: [
      '2021/12/25 正式创建',
      '2021/12/30 功能添加 完善和修改',
      '2022/1/1 页面移动端适配',
      '2022/1/1 本界面森系主题需重新调整',
    ]
  }
  return (
    <>
   
      <div className={styles.container}>
        <img className={styles.forest} alt='forest' src="/images/ic_log.png"></img>
        <div className={styles.left} >
          <div className={styles.author}>
            <div className={styles.author_title}>帅气作者</div>
            <img src={portrait} alt="头像" />
            <p className={styles.name}>{personInfo.name}</p>
            <p className={styles.info}>QQ:{personInfo.qq}</p>
            <p className={styles.info}>github:<a href={personInfo.github}>Edmondyexin</a></p>
            <p className={styles.info}>{personInfo.status}</p>
            <p className={styles.info}>{personInfo.mole}</p>
          </div>
          <div className={styles.progress}>
              <div className={styles.progress_title}>本站建设情况</div>
              <ul>
                {version.update.map((item) => {
                  return (
                    <li>
                      <p>{item}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
         </div>
        <div className={styles.middle}>
          
          <div className={styles.log}>
              <span className={styles.log_title}>博文更新日志</span>
              <Item/>
              <Item/>
              <Item/>
          </div>
          <div className={styles.word}>
              {words}
          </div>
        </div>
      </div>
    </>
  )
}
export default Log;