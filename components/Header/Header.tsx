import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import navList from "./Header.data";

const Header = () => {
    const route = useRouter().route;
    const [isClicked, setIsClicked] = useState(false);

    useEffect((): void => {
        const body = document.querySelector("body");
        if (body) {
            body.className = isClicked ? "fixed" : "";
        }
    }, [isClicked]);

    const handleClick = useCallback(() => {
        setIsClicked(!isClicked);
    }, [isClicked]);

    return (
        <header className={styles.header}>
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a className={styles.logo}>
                        <img src="/logo.png" alt="logo" />
                    </a>
                </Link>
                <div
                    className={`${styles.nav_button} ${
                        isClicked ? styles.expand : ""
                    }`}
                    onClick={handleClick}
                >
                    <span className={styles.nav_icon}>&nbsp;</span>
                </div>
                <ul
                    className={`${styles.nav_list} ${
                        isClicked ? styles.open : ""
                    }`}
                >
                    <li className={route === "/" ? styles.active : ""}>
                        <Link href="/">
                            <a>首&nbsp;&nbsp;页</a>
                        </Link>
                    </li>
                    {navList.map(
                        ({ url, content }, idx): React.ReactNode => (
                            <li
                                key={idx}
                                className={route === url ? styles.active : ""}
                            >
                                <Link href={url}>
                                    <a>{content}</a>
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </header>
    );
};

export default Header;
