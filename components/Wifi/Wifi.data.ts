export const sectionHeading = {
    title: "学车平台",
    subTitle: "汽车广告展示",
};

export type WifiData = {
    title: string;
    content: string;
    img: string;
};

const wifiListData: WifiData[] = [
    {
        title: "3号学车驾校",
        content:
            "3号学车是驾悦集团旗下的一个驾校招生平台,驾校通过率高，学员零投诉，也因其优质的贴心服务，深受学员好评。",
        img: "./fly.png",
    },
    {
        title: "3号学车平台",
        content:
            "自2014年以来持续为驾校提供招生服务，在招生板块力求创新，深受业内驾培人士的青睐",
        img: "./platform.png",
    },
    {
        title: "3号学车网站",
        content: "网站集合了全国各地区的驾校和学车学员，具有明显的广告效果",
        img: "./homepage.png",
    },
];

export default wifiListData;
