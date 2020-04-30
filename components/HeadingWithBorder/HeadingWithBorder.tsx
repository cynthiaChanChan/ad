import styles from "./HeadingWithBorder.module.scss";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
};

const HeadingWithBorder = ({
    heading: { title, subTitle },
    className,
}: HeadingProps) => (
    <div className={`${styles.wrapper} ${className}`}>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.sub_heading}>{subTitle}</p>
    </div>
);

export default HeadingWithBorder;
