type NavItem = {
    content: string;
    route: string;
    title?: string;
};

const navList: NavItem[] = [
    {
        content: "服务优势",
        title: "驾悦传媒-服务优势-汽车广告驾校宣传",
        route: "/?section=advantages#advantages",
    },
    {
        content: "投放形式",
        route: "/forms",
    },
    {
        content: "经典案例",
        route: "/examples",
    },
    {
        content: "合作客户",
        title: "驾悦传媒-合作客户-服务品牌车企",
        route: "/?section=customers#customers",
    },
    {
        content: "联系我们",
        title: "驾悦传媒-联系我们-驾校落地活动",
        route: "?section=contact#contact",
    },
];

export default navList;
