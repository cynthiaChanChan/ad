import styles from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer} id="contact">
            <div className={`${styles.content} container`}>
                <div className={styles.item}>
                    <h6>关于我们</h6>
                    <p>
                        广州驾悦信息科技有限公司，致力于在驾培行业领域进行培训优化、服务升级、品牌策划，驾培智能化多维度整合，力图打造新一代智慧驾培服务。
                    </p>
                    <p>
                        「识伯乐」是公司旗下自主研发的智能驾培教学管理系统，拥有国内领先专利技术。集高科技设备，高精度智能模拟教学系统、数据分析管理系统，为驾校的运营管理提供一体化解决方案。
                    </p>
                </div>
                <div className={styles.item}>
                    <h6>联系我们</h6>
                    <ul className={styles.links}>
                        <li>
                            <a href="tel:020 29899549">
                                电话：020&nbsp;2989&nbsp;9549
                            </a>
                        </li>
                        <li>
                            <a href="tel:189 98390937">
                                手机&amp;微信：189&nbsp;9839&nbsp;0937
                            </a>
                        </li>
                        <li>
                            <a href="mailto:shibole@i-driving.cn">
                                邮箱：shibole@i-driving.cn
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ditu.amap.com/place/B00140TY9J"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                地址：广州市天河区天河路490号壬丰大厦9层
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h6>友情链接</h6>
                    <ul className={styles.links}>
                        <li>
                            <Link href="/">
                                <a>本站首页</a>
                            </Link>
                        </li>
                        <li>
                            <a
                                href="http://www.i-driving.cn"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                驾悦集团
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://ad.i-driving.cn"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                驾悦传媒
                            </a>
                        </li>
                        <li>
                            <a
                                href="http://xc.3hxc.cn"
                                target="_black"
                                rel="noopener noreferrer"
                            >
                                3号学车
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h6>关注我们</h6>
                    <div className={styles.qrcode}></div>
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
