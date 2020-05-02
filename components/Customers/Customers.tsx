import styles from "./Customers.module.scss";
import Heading from "../Heading/Heading";

const Customers = () => {
    const icons: string[] = [];
    for (let i = 1; i <= 28; i++) {
        icons.push(`/client${i}.png`);
    }
    const heading = { title: "合作客户", subTitle: "Our customers" };
    return (
        <section className={styles.customers} id="customers">
            <div className="container">
                <Heading heading={heading} />
                <ul className={styles.list}>
                    {icons.map(
                        (icon, idx): React.ReactNode => (
                            <li key={idx} className={styles.icon}>
                                <img src={icon} alt="icon" />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Customers;
