TP 模板开发参数-全局

| 参数名               | 作用                     | 应用示例                                                     |
| -------------------- | ------------------------ | ------------------------------------------------------------ |
|                      | 获取当前模板的服务器路径 | `<script src="{$ThemeDirectoryPath}/masonry-4.2.2/masonry.pkgd.min.js"></script>` |
| ThemeConfig：Array   | 获取当前模板的配置       |                                                              |
| LCVersionInfo：Array |                          |                                                              |
| SystemData：Array    | 系统信息                 | `<title>{$ViewTitle} - {$SystemData['siteName']}</title>`    |
|                      | 渲染页面的关键词         | `<meta name="description" content="{$ViewKeywords}">`        |
| AdminData：Array     | 当前登入管理员数据       |                                                              |
| ViewTitle：String    | 渲染页面的标题           | `<title>{$ViewTitle} - {$SystemData['siteName']}</title>`    |
| SystemConfig：Array  | 系统配置                 |                                                              |
| SystemControllerName | 全局 当前类名            |                                                              |
| SystemActionName     | 全局 当前方法名          |                                                              |