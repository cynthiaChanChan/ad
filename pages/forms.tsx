import Head from "next/head";

import Layout from "../components/Layout/Layout";
import FormsContainer from "../components/FormsContainer/FormsContainer";
import ExampleBanner from "../components/ExampleBanner/ExampleBanner";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { AppContext } from "../providers/app.provider";

const Products = () => {
    const router = useRouter();
    const [navIndex, setNavIndex] = useState<null | number>(null);
    const { subPageTitle, setSubPageTitle } = useContext(AppContext);
    useEffect(() => {
        if (router.query && router.query.type) {
            setNavIndex(+router.query.type);
        } else if (!router.asPath.includes("type")) {
            setNavIndex(0);
        }
        if (router.query.section !== "contact") {
            setSubPageTitle("驾悦传媒-投放形式");
        }
    }, [router.query, router.query.section]);
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="汽车广告全方位宣传，互联网+驾校营销方案。驾悦传媒广告投放形式包括：户外广告大牌，WIFI页面广告，落地营销活动，学车平台。"
                />
                <meta
                    name="keyword"
                    content="驾校大牌，驾校wifi，主题驾校，驾校休息厅，驾校海报，驾校落地活动，驾校探针，驾校车展，驾校毕业礼包，驾校学车宝典，驾校广告牌，驾校户外广告，驾校活动广告，汽车驾校广告，驾校汽车广告，驾校媒体广告，驾校广告资源，驾校校园推广"
                />
                <title>{subPageTitle}</title>
            </Head>
            <Layout>
                <ExampleBanner />
                <section>
                    {navIndex !== null && (
                        <FormsContainer navIndex={navIndex} />
                    )}
                </section>
            </Layout>
        </>
    );
};

export default Products;
