import Link from "next/link";

import styles from "./Cases.module.scss";
import Heading from "../Heading/Heading";
import casesData from "./Cases.data";

const Cases = () => {
    const heading = { title: "经典案例", subTitle: "Classic case" };
    const { caseList, imgList } = casesData;
    return (
        <section className={styles.cases}>
            <Heading heading={heading} attribute="smalll" />
            <div className={styles.wrapper}>
                <ul className={styles.case_list}>
                    {caseList.map(
                        ({ logo, name, link, linkName }): React.ReactNode => (
                            <li
                                className={styles.case}
                                key={name}
                                style={{
                                    background: `center / contain no-repeat url('${logo}')`,
                                }}
                            >
                                <span>{name}</span>
                                <Link href={link}>
                                    <a className={styles.link}>{linkName}</a>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
                <ul className={styles.img_list}>
                    {imgList.map(
                        (img, idx): React.ReactNode => (
                            <li key={idx} className={styles.imgBox}>
                                <img src={img} alt="case image" />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Cases;
