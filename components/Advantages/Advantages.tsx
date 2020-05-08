import styles from "./Advantages.module.scss";
import Heading from "../Heading/Heading";
import advantageList from "./Advantages.data";
import Advantage from "../Advantage/Advantage";
import { useRef, useEffect } from "react";
import { useRouter } from "next/router";

const Advantages = () => {
    const heading = { title: "服务优势", subTitle: "Service advantages" };
    const ele = useRef<null | HTMLElement>(null);
    const router = useRouter();
    useEffect(() => {
        if (router.query.section === "advantages" && ele && ele.current) {
            const offsetTop = ele.current.offsetTop;
            window.scrollTo({
                top: offsetTop - 80,
                left: 0,
                behavior: "smooth",
            });
        }
    }, [router.query.section, router.query.status]);
    return (
        <section className={styles.advantages} id="advantages" ref={ele}>
            <div className={"container"}>
                <Heading heading={heading} attribute="small" />
                <p className={styles.content}>
                    通过驾校媒介，服务品牌车企，深入购车群体
                    <br />
                    我们提供：广告宣传 &amp; 品牌传播、互联网O2O &amp;
                    大数据精准营销、活动策划 &amp; 落地执行
                </p>
                <ul className={styles.list}>
                    {advantageList.map(
                        (item): React.ReactNode => (
                            <Advantage key={item.title} advantage={item} />
                        )
                    )}
                </ul>
            </div>
        </section>
    );
};

export default Advantages;
