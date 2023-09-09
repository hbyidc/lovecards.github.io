//基础顶栏配置
export const NavbarItem = [
    { text: "首页", link: "/" },
    {
        text: "版本",
        children: [
            { text: "V2.X", link: "/Docs/V2/QuickStart/" },
            { text: "V1.X", link: "/Docs/V1/QuickStart/" },
        ],
    },
    { text: "官网", link: "https://lovecards.cn", target: "_blank" },
    { text: "组织", link: "https://github.com/LoveCards", target: "_blank" },
    // { text: "论坛", link: "https://forum.lovecards.cn", target: "_blank" },
    // {
    //     text: "交流群",
    //     link: "https://jq.qq.com/?_wv=1027&k=qM8f2RMg",
    //     target: "_blank",
    // },
];
