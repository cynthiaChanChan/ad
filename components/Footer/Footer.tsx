import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            <div className={`${styles.content} container`}>
                <div className={styles.item}>
                    <div className={`${styles.icon_marker} ${styles.icon}`}>
                        <img src="/i-marker.png" alt="icon" />
                    </div>
                    <p>
                        深圳五八驾悦信息网络科技有限公司
                        <br />
                        <a
                            target="_black"
                            href="https://www.amap.com/place/B00140TY9J"
                            rel="noopener noreferrer"
                        >
                            广州市天河区天河路490号壬丰大厦9层
                        </a>
                    </p>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img src="/i-phone.png" alt="icon" />
                    </div>
                    <div className={styles.phone}>
                        <a href="tel:020 2989 9549">Tel : 020-2989 9549</a>
                        <span>Fax : 020-8200 2577</span>
                        <a href="tel:139 1085 3209">Mob：139 1085 3209</a>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img src="/i-mail.png" alt="icon" />
                    </div>
                    <a href="mailto:richard.shi@i-driving.cn">
                        richard.shi@i-driving.cn
                    </a>
                </div>
                <div className={styles.item}>
                    <div className={styles.icon}>
                        <img src="/i-link.png" alt="icon" />
                    </div>
                    <ul className={styles.links}>
                        <Link href="/">
                            <a>本站首页</a>
                        </Link>
                        <a
                            target="_black"
                            href="http://www.i-driving.cn"
                            rel="noopener noreferrer"
                        >
                            驾悦集团
                        </a>
                        <a
                            target="_black"
                            href="http://sbl.i-driving.cn"
                            rel="noopener noreferrer"
                        >
                            识伯乐
                        </a>
                        <a
                            target="_black"
                            href="http://xc.3hxc.cn"
                            rel="noopener noreferrer"
                        >
                            3号学车
                        </a>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <span>粤ICP备14098329号-1</span>Copyright &copy; {year}-
                {year + 3}
                &nbsp;&nbsp;i-driving&nbsp;&nbsp;识伯乐&nbsp;&nbsp;版权所有
            </div>
        </footer>
    );
};

export default Footer;
