export const sectionHeading = {
    title: "Wi-Fi  页面广告",
    subTitle: "呈现形式",
};

export type WifiData = {
    title: string;
    content: string;
    img: string;
    isImgSmall?: boolean;
};

const wifiListData: WifiData[] = [
    {
        title: "连接网络",
        content: "通过手机，连接对应</br>Wi-Fi进入引导页面",
        img: "/wifi_connects.png",
        isImgSmall: true,
    },
    {
        title: "引导页",
        content: "连接Wi-Fi进入引导页</br>观看十秒广告即可认证上网",
        img: "/wifi_guide.png",
    },
    {
        title: "认证首页",
        content: "输入手机号码</br>认证后即可免费上网",
        img: "/wifi_login.png",
    },
    {
        title: "成功上网",
        content: "通过认证后即可成功免费上网",
        img: "/wifi.png",
        isImgSmall: true,
    },
];

export default wifiListData;
