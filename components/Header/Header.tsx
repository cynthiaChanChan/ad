import { useState, useEffect, useCallback, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./Header.module.scss";
import navList from "./Header.data";
import { AppContext } from "../../providers/app.provider";

const Header = () => {
    const router = useRouter();
    const [isClicked, setIsClicked] = useState(false);
    const { setSubPageTitle } = useContext(AppContext);
    useEffect((): void => {
        const body = document.querySelector("body");
        if (body) {
            body.className = isClicked ? "fixed" : "";
        }
    }, [isClicked]);

    const handleClick = useCallback(() => {
        setIsClicked(!isClicked);
    }, [isClicked]);

    const handleLinkClick = useCallback(
        (e, href, title?: string) => {
            const body = document.querySelector("body");
            if (body) {
                body.className = "";
            }
            setIsClicked(false);
            if (href.indexOf("#contact") > -1) {
                const titleElem = document.querySelector("title");
                if (titleElem && titleElem.textContent) {
                    setSubPageTitle(title || "");
                }
            }
        },
        [isClicked, router.query.section]
    );

    return (
        <header className={styles.header} id="top">
            <div className={`${styles.container} container`}>
                <Link href="/">
                    <a
                        className={styles.logo}
                        onClick={(e) => handleLinkClick(e, "/")}
                    >
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
                    <li className={router.route === "/" ? styles.active : ""}>
                        <Link href="/">
                            <a onClick={(e) => handleLinkClick(e, "/")}>
                                首&nbsp;&nbsp;页
                            </a>
                        </Link>
                    </li>
                    {navList.map(
                        ({ route, content, title }, idx): React.ReactNode => (
                            <li
                                key={idx}
                                className={
                                    router.route === route ? styles.active : ""
                                }
                            >
                                <Link href={route}>
                                    <a
                                        onClick={(e) =>
                                            handleLinkClick(e, route, title)
                                        }
                                    >
                                        {content}
                                    </a>
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
