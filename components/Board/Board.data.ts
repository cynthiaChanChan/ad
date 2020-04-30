export const sectionHeading = {
    title: "户外广告大牌",
    subTitle: "视觉传达",
};

export type BoardData = {
    heading: {
        title: string;
        subTitle: string;
    };
    img: string;
};

const boardListData: BoardData[] = [
    {
        heading: {
            title: "优选A级驾校",
            subTitle: "高清宝丽布喷绘 角框钢架搭建",
        },
        img: "./board.jpg",
    },
    {
        heading: {
            title: "休息区",
            subTitle: "Rest area",
        },
        img: "./rest_area.jpg",
    },
    {
        heading: {
            title: "驾校出入口",
            subTitle: "Gateway",
        },
        img: "./gateway.jpg",
    },
    {
        heading: {
            title: "主干道",
            subTitle: "Main Road",
        },
        img: "./main_road.jpg",
    },
];

export default boardListData;
