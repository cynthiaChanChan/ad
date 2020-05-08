import Head from "next/head";

import Layout from "../components/Layout/Layout";
import ExampleBanner from "../components/ExampleBanner/ExampleBanner";
import CasesContainer from "../components/CasesContainer/CasesContainer";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Examples = () => {
    const router = useRouter();
    const [navIndex, setNavIndex] = useState<null | number>(null);

    useEffect(() => {
        if (router.query && router.query.type) {
            setNavIndex(+router.query.type);
        } else if (!router.asPath.includes("type")) {
            setNavIndex(0);
        }
    }, [router.query]);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="驾悦传媒通过驾校媒介，服务于品牌车企，深入购车群体。是车企广告宣传的最佳渠道，与众多汽车品牌合作，通过车展等落地营销活动向学车人员进行宣传推广。"
                />
                <meta
                    name="keyword"
                    content="广汽本田，东风日产，一汽丰田，一汽大众，上海大众，长安马自达，江淮汽车，雪佛兰，别克，广汽丰田，吉利，奇瑞，汽车品牌，车企，车展，驾校，购车人群，学车，买车"
                />
                <title>驾悦传媒-经典案例</title>
            </Head>
            <Layout>
                <ExampleBanner />
                <section>
                    {navIndex !== null && (
                        <CasesContainer navIndex={navIndex} isBig={true} />
                    )}
                </section>
            </Layout>
        </>
    );
};

export default Examples;
