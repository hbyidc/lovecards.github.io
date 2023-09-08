import { defaultTheme } from "vuepress";
import { NavbarItem } from "./Navbar";
import Sidebar from "./Sidebar";

export default {
    // 页面标题
    title: "LoveCards | 文档",
    // 网页描述
    description: "在我筑起的“领域”中，众人皆可“倾心倾意”",
    head: [
        // 页面icon
        ["link", { rel: "icon", href: "/logo.png" }],
    ],
    // 端口号
    port: 3000,
    markdown: {
        // 代码块行号
        lineNumbers: true,
    },
    theme: defaultTheme({
        repo: 'LoveCards/lovecards.github.io',
        docsDir: 'docs',
        editLinkText: '🤔不完美，前往修改',
        logo: "/logo.png",
        navbar: NavbarItem,
        sidebar: Sidebar,
    }),
};
