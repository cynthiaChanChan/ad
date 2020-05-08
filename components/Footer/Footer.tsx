import Link from "next/link";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();
    const contactEle = useRef<null | HTMLElement>(null);
    const router = useRouter();
    useEffect(() => {
        if (
            router.query.section === "contact" &&
            contactEle &&
            contactEle.current
        ) {
            const offsetTop = contactEle.current.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [router.query.section, router.query.status]);
    return (
        <footer className={styles.footer} id="contact" ref={contactEle}>
            <div className={`${styles.content} container`}>
                <div className={styles.item}>
                    <div className={`${styles.icon_marker} ${styles.icon}`}>
                        <img src="/i-marker.png" alt="icon" />
                    </div>
                    <p>
                        深圳五八驾悦信息网络科技有限公司
                        <br />
                        <a
                            target="_blank"
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
                        <a href="tel:020 2989 9549">Tel: 020-2989&nbsp;9549</a>
                        <span>Fax: 020-8200&nbsp;2577</span>
                        <a href="tel:139 1085 3209">
                            Mob：139&nbsp;1085&nbsp;3209
                        </a>
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
                            target="_blank"
                            href="http://www.i-driving.cn"
                            rel="noopener noreferrer"
                        >
                            驾悦集团
                        </a>
                        <a
                            target="_blank"
                            href="http://sbl.i-driving.cn"
                            rel="noopener noreferrer"
                        >
                            识伯乐
                        </a>
                        <a
                            target="_blank"
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
                &nbsp;&nbsp;i-driving&nbsp;&nbsp;驾悦传媒&nbsp;&nbsp;版权所有
            </div>
        </footer>
    );
};

export default Footer;
