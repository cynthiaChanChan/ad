type BannerItem = {
    total: string;
    title: string;
    unit?: string;
};

type Service = BannerItem[];

const bannerList: Service = [
    { total: "253", title: "覆盖城市" },
    { total: "10500", unit: "+", title: "优质驾校资源" },
    { total: "358", unit: "+", title: "驾校考场" },
    { total: "78", unit: "%", title: "影响购车群体" },
];

export default bannerList;
