import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/AboutUs/AboutUs";
import Advantages from "../components/Advantages/Advantages";
import Media from "../components/Media/Media";
import Cases from "../components/Cases/Cases";
import Customers from "../components/Customers/Customers";

const Products = () => {
    return (
        <Layout>
            <Banner />
            <AboutUs />
            <Advantages />
            <Media />
            <Cases />
            <Customers />
        </Layout>
    );
};

export default Products;
