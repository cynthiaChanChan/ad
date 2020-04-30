import styles from "./Heading.module.scss";

type HeadingProps = {
    heading: {
        title: string;
        subTitle: string;
    };
    className?: string;
    attribute?: string;
};

const Heading = ({
    heading: { title, subTitle },
    className,
    attribute,
}: HeadingProps) => (
    <div
        className={`${styles.wrapper} ${className} ${
            attribute && styles[attribute]
        }`}
    >
        <h3 className={styles.heading}>{title}</h3>
        <h2 className={styles.sub_heading}>{subTitle}</h2>
    </div>
);

export default Heading;
