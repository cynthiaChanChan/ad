import styles from "./HeadingWithBorder.module.scss";

type HeadingProps = {
    title: string;
    className?: string;
};

const HeadingWithBorder = ({ title, className }: HeadingProps) => (
    <h3 className={`${styles.heading} ${className}`}>{title}</h3>
);

export default HeadingWithBorder;
