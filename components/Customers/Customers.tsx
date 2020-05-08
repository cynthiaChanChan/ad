import styles from "./Customers.module.scss";
import Heading from "../Heading/Heading";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

const Customers = () => {
    const icons: string[] = [];
    for (let i = 1; i <= 28; i++) {
        icons.push(`/client${i}.png`);
    }
    const heading = { title: "合作客户", subTitle: "Our customers" };
    const ele = useRef<null | HTMLElement>(null);
    const router = useRouter();
    useEffect(() => {
        if (router.query.section === "customers" && ele && ele.current) {
            const offsetTop = ele.current.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [router.query.section, router.query.status]);
    return (
        <section className={styles.customers} id="customers" ref={ele}>
            <div className="container">
                <Heading heading={heading} attribute="small" />
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
