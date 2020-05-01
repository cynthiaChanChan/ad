import styles from "./Advantages.module.scss";
import Heading from "../Heading/Heading";
import advantageList from "./Advantages.data";
import Advantage from "../Advantage/Advantage";

const Advantages = () => {
    const heading = { title: "服务优势", subTitle: "Service advantages" };
    return (
        <section className={styles.advantages}>
            <div className={"container"}>
                <Heading heading={heading} attribute="small" />
                <p className={styles.content}>
                    通过驾校媒介，服务品牌车企，深入购车群体。 <br />
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
