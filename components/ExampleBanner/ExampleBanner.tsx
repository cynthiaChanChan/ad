import styles from "./ExampleBanner.module.scss";

const ExampleBanner = () => (
    <section className={styles.banner}>
        <div className={styles.heading_box}>
            <h4 className={styles.sub_heading}>驾校全新体验之旅</h4>
            <div className={styles.line} />
            <h1 className={styles.heading}>
                互联网<span>+</span>驾校营销方案
            </h1>
        </div>
    </section>
);

export default ExampleBanner;
