import Head from "next/head";

import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Advantages from "../components/Advantages/Advantages";
import Media from "../components/Media/Media";
import Cases from "../components/Cases/Cases";
import Customers from "../components/Customers/Customers";

const Products = () => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="驾悦传媒 - 中国大型品牌驾校媒体，致力于为客户提供高品质广告发布、驾校深度活动等渠道增值服务，将品牌声音有效持续传递给潜在购车人群等驾校市场。"
                />
                <meta
                    name="keyword"
                    content="驾悦传媒，驾校媒体，驾校传媒，驾校媒介，驾校活动，试乘试驾，试驾体验，汽车媒体，驾校广告，主题驾校，汽车销售渠道，驾校落地体验，驾校大牌，落地活动，物料公司，制作安装，汽车品牌，驾校广告宣传，购车，驾校市场"
                />
                <title>驾悦传媒-首页</title>
            </Head>
            <Layout>
                <Banner />
                <AboutUs />
                <Advantages />
                <Media />
                <Cases />
                <Customers />
            </Layout>
        </>
    );
};

export default Products;
