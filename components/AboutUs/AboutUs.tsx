import styles from "./AboutUs.module.scss";

const AboutUs = () => (
    <section className={styles.banner}>
        <h3 className={styles.sub_heading}>关于我们</h3>
        <h2 className={styles.heading}>About me</h2>
        <p className={styles.content}>「驾悦传媒」，中国大型品牌驾校媒体</p>
        <p>
            致力于为客户提供高品质广告发布、驾校深度活动等渠道增值服务，将品牌声音有效持续传递给潜在购车人群的驾校市场
        </p>
    </section>
);

export default AboutUs;
