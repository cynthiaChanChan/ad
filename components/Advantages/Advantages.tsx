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

    return (
        <section
            className={`${styles.advantages} offset`}
            id="advantages"
            ref={ele}
        >
            <div className={"container"}>
                <Heading heading={heading} attribute="small" />
                <p className={styles.content}>
                    通过驾校媒介&nbsp;服务品牌车企&nbsp;深入购车群体
                    <br />
                    服务：广告宣传&nbsp;品牌传播&nbsp;互联网O2O&nbsp;大数据精准营销&nbsp;活动策划&nbsp;活动执行
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
