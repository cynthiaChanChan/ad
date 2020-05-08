type NavItem = {
    content: string;
    route: string;
    queryString?: string;
};

const navList: NavItem[] = [
    {
        content: "服务优势",
        route: "/?section=advantages",
    },
    {
        content: "投放形式",
        route: "/forms",
        queryString: "?type=0",
    },
    {
        content: "经典案例",
        route: "/examples",
        queryString: "?type=0",
    },
    {
        content: "合作客户",
        route: "/?section=customers",
    },
    {
        content: "联系我们",
        route: "/?section=contact",
    },
];

export default navList;
