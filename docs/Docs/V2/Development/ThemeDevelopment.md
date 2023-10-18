---
lang: zh-CN
title: 主题开发
description:
---

# 主题开发

[[toc]]

## 一.目录结构

> 主题存放于`/public/theme`文件夹下

```
.
├── assets (资源目录)
├── public (公用组件目录，可选的)
├── card.html (卡片详情页，可选的)
├── cards-add.html (卡片添加页，可选的)
├── cards-search.html  (卡片搜索页，可选的)
├── cards-tag.html (卡片标签分类页，可选的)
├── cards.html (卡片标签分类页，可选的)
├── index.html (门户首页)
├── info.ini  (主题版本信息)
├── config.php (主题配置，可选的)
└── show.png (主题预览图)
```

::: warning 注意
当访问至可选文件时如若缺失将自动重定向到 404 页面
:::

## 二.基础变量

### 部分变量命名详解

| 头（前缀） | 说明                   |
| ---------- | ---------------------- |
| **Theme**  | 模板相关               |
| **LC**     | LoveCards 程序本体相关 |
| **View**   | 渲染页面相关           |
| **System** | 系统相关               |

### 全局变量

::: tip 说明
即，`/public/view/index`目录下的模板开发时，所有页面可用的变量
:::

| 参数名                 | 类型     | 描述                   | 返回示例 |
| ---------------------- | -------- | ---------------------- | -------- |
| **Theme**AssetsUrlPath | _String_ | 获取当前模板的资源路径 |          |
| **Theme**Config        | _Array_  | 获取当前模板的配置     |          |
| **View**Keywords       | _String_ | 渲染页面的关键词       |          |
| **View**Description    | _String_ | 渲染页面的介绍         |          |
| **View**Title          | _String_ | 渲染页面的标题         |          |
| **System**Data         | _Array_  | 系统信息               |          |
| **System**Config       | _Array_  | 系统配置               |          |
| **LC**VersionInfo      | _Array_  | 程序本体信息           |          |

### index.html

| **CardsList**-参数名 | 类型    | 描述                     | 返回示例 |
| -------------------- | ------- | ------------------------ | -------- |
| **CardsList**        | _Array_ | 当前页面唯一**卡片列表** |          |

| **CardsTagsList**-参数名 | 类型     | 描述                                     | 返回示例 |
| ------------------------ | -------- | ---------------------------------------- | -------- |
| **CardsTagsList**        | _Array_  | 当前页面唯一**标签列表**                 |          |
| **CardsTagsList**Json    | _String_ | 当前页面唯一**标签列表** Json 格式字符串 |          |

### cards.html

| **CardsList**-参数名             | 类型     | 描述                                       | 返回示例 |
| -------------------------------- | -------- | ------------------------------------------ | -------- |
| **CardsList**                    | _Array_  | 当前页面唯一**卡片列表**                   |          |
| **CardsList**EasyPagingComponent | _String_ | 当前页面唯一**卡片列表**的快捷分页按钮组件 |          |
| **CardsList**Max                 | _Int_    | 当前页面唯一**卡片列表**的每页卡片最大数   |          |

| **CardsTagsList**-参数名 | 类型     | 描述   | 返回示例 |
| ------------------------ | -------- | ------ | -------- |
| **CardsTags**List        | _Array_  | 同上文 |          |
| **CardsTags**ListJson    | _String_ | 同上文 |          |

### card.html

| **Card**-参数名 | 类型    | 描述             | 返回示例 |
| --------------- | ------- | ---------------- | -------- |
| **Card**Model   | _Int_   | 当前卡片模型     |          |
| **Card**Data    | _Array_ | 当前卡片数据     |          |
| **Card**ImgList | _Array_ | 当前卡片相关图片 |          |

| **CardCommentsList**-参数名             | 类型     | 描述                                       | 返回示例 |
| --------------------------------------- | -------- | ------------------------------------------ | -------- |
| **CardCommentsList**                    | _Array_  | 当前页面唯一**评论列表**                   |          |
| **CardCommentsList**EasyPagingComponent | _String_ | 当前页面唯一**评论列表**的快捷分页按钮组件 |          |
| **CardCommentsList**Max                 | _Int_    | 当前页面唯一**评论列表**的每页卡片最大数   |          |

| **CardsTagsList**-参数名 | 类型     | 描述   | 返回示例 |
| ------------------------ | -------- | ------ | -------- |
| **CardsTags**List        | _Array_  | 同上文 |          |
| **CardsTags**ListJson    | _String_ | 同上文 |          |

### cards-add.html

| **CardsTagsList**-参数名 | 类型     | 描述   | 返回示例 |
| ------------------------ | -------- | ------ | -------- |
| **CardsTags**List        | _Array_  | 同上文 |          |
| **CardsTags**ListJson    | _String_ | 同上文 |          |

### cards-search.html

| **CardsList**-参数名             | 类型     | 描述   | 返回示例 |
| -------------------------------- | -------- | ------ | -------- |
| **CardsList**                    | _Array_  | 同上文 |          |
| **CardsList**EasyPagingComponent | _String_ | 同上文 |          |
| **CardsList**Max                 | _Int_    | 同上文 |          |

| **CardsTagsList**-参数名 | 类型     | 描述   | 返回示例 |
| ------------------------ | -------- | ------ | -------- |
| **CardsTags**List        | _Array_  | 同上文 |          |
| **CardsTags**ListJson    | _String_ | 同上文 |          |

### cards-tag.html

| **CardsList**-参数名             | 类型     | 描述   | 返回示例 |
| -------------------------------- | -------- | ------ | -------- |
| **CardsList**                    | _Array_  | 同上文 |          |
| **CardsList**EasyPagingComponent | _String_ | 同上文 |          |
| **CardsList**Max                 | _Int_    | 同上文 |          |

| **CardsTagsList**-参数名 | 类型     | 描述   | 返回示例 |
| ------------------------ | -------- | ------ | -------- |
| **CardsTags**List        | _Array_  | 同上文 |          |
| **CardsTags**ListJson    | _String_ | 同上文 |          |

### 使用变量

[五.语法示例](./ThemeDevelopment.md#五-语法示例)

## 三.配置编写

### 配置格式示例

::: tip 说明
用于实现一些主题设置以及显示，**若无可省略配置文件**  
目前支持格式有:  
`Select`(可用于一些固定选项的变量)  
`Text`(可用于一下自定内容的变量)
:::

::: warning 注意
`Text`配置格式下，后端接收的字符串将会使用 URL 编码`urlencode()`后写入配置文件，但通过`ThemeConfig:Array`获取到的变量则为解码后的内容
:::

```php
<?php
$Config = [
    //选择格式配置
    'Select' => [
        //测试选择格式变量0
        '[TestSelectVar0]' => [
            'Name' => '[TestSelectVar0]的变量名',//变量名
            'Introduction' => '[TestSelectVar0]的变量介绍',//变量介绍
            'Default' => env('ThemeConfig.Select[TestSelectVar0]', 0),//默认选项
            //可选项
            'Element' => [
                0 => false,
                1 => true,
            ],
         //测试选择格式变量1
        '[TestSelectVar1]' => [
            'Name' => '[TestSelectVar1]的变量名',//同上
            'Introduction' => '[TestSelectVar1]的变量介绍',//同上
            'Default' => env('ThemeConfig.Select[TestSelectVar1]', 4),//同上
            //同上
            'Element' => [
                0 => '元素1',
                1 => 'Element1',
                2 => '0',
                3 => '1',
                4 => '2',
                5 => 'three',
                6 => 'test-test',
				...
            ]
        ],
        ...
    //文本格式配置
    'Text' => [
        //文本格式变量0
        '[TestTextVar0]' => [
            'Name' => '[TestTextVar0]的变量名',//同上
            'Introduction' => '[TestTextVar0]的变量介绍',//同上
            'Default' => env('ThemeConfig.TextTheme[TestTextVar0]', '%3Cscript%3E%0A++++++++var+_paq+%3D+window._paq+%3D+window._paq+%7C%7C+%5B%5D%3B%0A++++++++_paq.push%28%5B%22setDocumentTitle%22%2C+document.domain+%2B+%22%2F%22+%2B+document.title%5D%29%3B%0A++++++++_paq.push%28%5B%27trackPageView%27%5D%29%3B%0A++++++++_paq.push%28%5B%27enableLinkTracking%27%5D%29%3B%0A++++++++%28function+%28%29+%7B%0A++++++++++++var+u+%3D+%22%2F%2Fmatomo.fatda.cn%2F%22%3B%0A++++++++++++_paq.push%28%5B%27setTrackerUrl%27%2C+u+%2B+%27matomo.php%27%5D%29%3B%0A++++++++++++_paq.push%28%5B%27setSiteId%27%2C+%279%27%5D%29%3B%0A++++++++++++var+d+%3D+document%2C+g+%3D+d.createElement%28%27script%27%29%2C+s+%3D+d.getElementsByTagName%28%27script%27%29%5B0%5D%3B%0A++++++++++++g.async+%3D+true%3B+g.src+%3D+u+%2B+%27matomo.js%27%3B+s.parentNode.insertBefore%28g%2C+s%29%3B%0A++++++++%7D%29%28%29%3B%0A++++%3C%2Fscript%3E')//同上
        ],
    ]
];

```

### 默认主题的配置及释义

`./config.php`

```php
<?php
$Config = [
    //选择格式配置
    'Select' => [
        //链接资源CDN开关
        'ThemeLinkCDN' => [
            'Name' => '资源CDN开关',
            'Introduction' => 'HTML中的部分Link资源CDN的开关',
            'Default' => env('ThemeConfig.SelectThemeLinkCDN', 0),
            'Element' => [
                0 => false,
                1 => true,
            ]
        ],
        //默认暗色开关
        'ThemeDark' => [
            'Name' => '默认暗色开关',
            'Introduction' => '主题为默认暗色的开关',
            'Default' => env('ThemeConfig.SelectThemeDark', 1),
            'Element' => [
                0 => false,
                1 => true
            ]
        ],
        //MD主题色配置
        'ThemePrimary' => [
            'Name' => '默认暗色开关',
            'Introduction' => '主题为默认暗色的开关',
            'Default' => env('ThemeConfig.SelectThemePrimary', 4),
            'Element' => [
                0 => 'red',
                1 => 'pink',
                2 => 'purple',
                3 => 'deep-purple',
                4 => 'indigo',
                5 => 'blue',
                6 => 'light-blue',
                7 => 'cyan',
                8 => 'teal',
                9 => 'green',
                10 => 'light-green',
                11 => 'lime',
                12 => 'yellow',
                13 => 'amber',
                14 => 'orange',
                15 => 'deep-orange',
                16 => 'brown',
                17 => 'grey',
                18 => 'blue-grey'
            ]
        ],
        //MD强调色配置
        'ThemeAccent' => [
            'Name' => '默认暗色开关',
            'Introduction' => '主题为默认暗色的开关',
            'Default' => env('ThemeConfig.SelectThemeAccent', 1),
            'Element' => [
                0 => 'red',
                1 => 'pink',
                2 => 'purple',
                3 => 'deep-purple',
                4 => 'indigo',
                5 => 'blue',
                6 => 'light-blue',
                7 => 'teal',
                8 => 'green',
                9 => 'light-green',
                10 => 'lime',
                11 => 'yellow',
                12 => 'amber',
                13 => 'orange',
                14 => 'deep-orange',
                15 => 'blue-grey'
            ]
        ],
    ],
    'Text' => [
        //链接资源CDN开关
        'ThemeStatistics' => [
            'Name' => '统计代码',
            'Introduction' => '该代码会插入<head></head>内',
            'Default' => env('ThemeConfig.TextThemeStatistics', '%3Cscript%3E%0A++++++++var+_paq+%3D+window._paq+%3D+window._paq+%7C%7C+%5B%5D%3B%0A++++++++_paq.push%28%5B%22setDocumentTitle%22%2C+document.domain+%2B+%22%2F%22+%2B+document.title%5D%29%3B%0A++++++++_paq.push%28%5B%27trackPageView%27%5D%29%3B%0A++++++++_paq.push%28%5B%27enableLinkTracking%27%5D%29%3B%0A++++++++%28function+%28%29+%7B%0A++++++++++++var+u+%3D+%22%2F%2Fmatomo.fatda.cn%2F%22%3B%0A++++++++++++_paq.push%28%5B%27setTrackerUrl%27%2C+u+%2B+%27matomo.php%27%5D%29%3B%0A++++++++++++_paq.push%28%5B%27setSiteId%27%2C+%279%27%5D%29%3B%0A++++++++++++var+d+%3D+document%2C+g+%3D+d.createElement%28%27script%27%29%2C+s+%3D+d.getElementsByTagName%28%27script%27%29%5B0%5D%3B%0A++++++++++++g.async+%3D+true%3B+g.src+%3D+u+%2B+%27matomo.js%27%3B+s.parentNode.insertBefore%28g%2C+s%29%3B%0A++++++++%7D%29%28%29%3B%0A++++%3C%2Fscript%3E')
        ],
    ]
];

```

### 配置的加载

当你的模板存在`Config.php`文件时，模板将会出现**设置按钮**

![](../../../Images/Docs/V2/Development/ThemeDevelopment/c783cd81f5fe9447c03258813a19133e.jpeg)

进入后，系统将会自动按照不同的配置格式分别加载配置项

![](../../../Images/Docs/V2/Development/ThemeDevelopment/5ab91aa028b9ee38fe8c32651ecf7b96.jpeg)

### 主题配置的使用

通过全局变量`ThemeConfig:Array`获取，例如默认主题的配置，得出的数据结构示例：

```php
^ array:5 [▼
  "ThemeLinkCDN" => true
  "ThemeDark" => false
  "ThemePrimary" => "indigo"
  "ThemeAccent" => "pink"
  "ThemeStatistics" => "<script>\n        var _paq = window._paq = window._paq || [];\n        _paq.push([\"setDocumentTitle\", document.domain + \"/\" + document.title]);\n        _paq.push(['trackPageView']);\n        _paq.push(['enableLinkTracking']);\n        (function () {\n            var u = \"//matomo.fatda.cn/\";\n            _paq.push(['setTrackerUrl', u + 'matomo.php']);\n            _paq.push(['setSiteId', '9']);\n            var d = document, g = d.createElement('script'), s = d.getElementsByTagName('script')[0];\n            g.async = true; g.src = u + 'matomo.js'; s.parentNode.insertBefore(g, s);\n        })();\n    </script>"
]
```

即 Select 遍历后的 Key=>Element['Default'] + Text 遍历后的 Key=>Element['Default'] 输出最终的 Array

## 四.版本信息编写

### 版本信息格式示例

::: tip 说明
用于 LC 系统获取主题信息  
相关支持：  
[获取全部发行版本号](https://github.com/LoveCards/LoveCardsV2/tags)
:::

```ini
{
    "Name": "这里是主题名称",
    ;主题版本，格式一般来说两个点就够了
    "Version": "1.0.0",
    ;适用于的LC版本区间，左闭右开区间，可参照发行版本号
    "SysVersionL": "1.0.0",
    "SysVersionR": "1.0.0",
    "Introduce": "这里是主题介绍",
	"Author": "这里主题作者",
	;
	"SiteUrl": "http(s)://xxx.xxx.com"
}
```

### 默认主题的版本信息及释义

`./info.ini`

```ini
{
	;主题名称
    "Name": "LoveCards default template",
    ;主题版本
    "Version": "1.0.0",
    ;适用于的LC版本区间
    "SysVersionL": "1.0.0",
    "SysVersionR": "1.0.0",
    ;主题介绍
    "Introduce": "LoveCards2.0.0默认壁纸",
    ;主题作者
	"Author": "吃纸怪",
	;主题链接
	"SiteUrl": "lovecards.cn"
}
```

## 五.语法示例

### 1.变量输出

```php
$name = 'LoveCards';
```

在`index.html`主题文件中使用：

```php
Hello,{$name}！
```

模板编译后的结果就是：

::: warning 注意
主题引擎在变量输出时如若为字符串类型将会默认转义后输出，使用`{$name|raw}`写法编译后为`<?php echo $name;?>`
:::

```php
Hello,<?php echo htmlentities($name);?>！
```

这样，运行的时候就会在模板中显示： `Hello,LoveCards！`

注意模板标签的`{`和`$`之间不能有任何的空格，否则标签无效。所以，下面的标签

```php
Hello,{ $name}！
```

将不会正常输出 name 变量，而是直接保持不变输出： `Hello,{ $name}！`

模板标签的变量输出根据变量类型有所区别，刚才我们输出的是字符串变量，如果是数组变量，

```php
$data['name'] = 'LoveCards';
$data['email'] = 'LoveCards@qq.com';
$template->fetch('hello', ['data' => $data]);
```

那么，在模板中我们可以用下面的方式输出：

```php
Name：{$data.name}
Email：{$data.email}
```

或者用下面的方式也是有效：

```php
Name：{$data['name']}
Email：{$data['email']}
```

我们也可以给变量输出提供默认值，例如：

```php
{$user.nickname|default="这家伙很懒，什么也没留下"}
```

### 2.使用函数

### 3.运算符

### 4.原样输出

### 5.注释

### 6.包含文件

### 7.标签

### 8.静态资源

静态资源统一存放在`assets`目录，可自行在目录内另建目录分类，通过`ThemeAssetsUrlPath`获取**资源目录**(即`assets`目录)的位置

```html
<!-- head标签内示例 -->

<!-- 该文件位于 /assets/img/favicon.ico -->
<link rel="shortcut icon" href="{$ThemeAssetsUrlPath}/img/favicon.ico" />

<!-- 该文件位于 /assets/mdui-v1.0.2/css/mdui.min.css -->
<link
    rel="stylesheet"
    href="{$ThemeAssetsUrlPath}/mdui-v1.0.2/css/mdui.min.css"
/>

<!-- body标签内示例 -->

<!-- 该文件位于 /assets/image/error.png -->
<img class="mdui-img-fluid" src="{$ThemeAssetsUrlPath}/image/error.png" />

<!-- 该文件位于 /assets/jquery-3.6.0/jquery.min.js -->
<script src="{$ThemeAssetsUrlPath}/jquery-3.6.0/jquery.min.js"></script>

<!-- 该文件位于 /assets/base.js -->
<script src="{$ThemeAssetsUrlPath}/base.js"></script>
```

::: warning 注意
在参考**默认主题**时，请注意你可能看到如`<script src="{__A-assets__}/clipboard-2.0.6/clipboard.min.js"></script>`，以`{__A-assets__}`开头的路径  
这是因为，**默认主题**与**LC 系统后台**使用同一套 ui 组件库，而系统相关静态资源存放于固定位置(`/public/view/admin/assets`目录下)，可自行查询是否有需要的静态资源并通过`{__A-assets__}`获取文件系统相关静态资源
:::

### 9.API 发送数据

### 10.示例

#### 列表渲染

#### 分页渲染

#### 适配极验

> 目前支持极验的 api 有：  
> `/api/CardsComments/add`  
> `/api/Cards/add`

### 详细语法参考

[介绍 · ThinkTemplate 开发指南 · 看云 (kancloud.cn)](https://www.kancloud.cn/manual/think-template/1286403)
::: warning 建议
主题开发不顺时，及时参考`默认主题`，如有疑问可通过社区询问交流
:::


## 六.API
请参考Apipost文档：[https://console-docs.apipost.cn/preview/ad83ecdb4f10e38b/e187796270055b7b](https://console-docs.apipost.cn/preview/ad83ecdb4f10e38b/e187796270055b7b)

## 七.开发注意

### 前端模板变量调用规范

-   当您需要在 html 中输出数组的某一元素时，我们建议您使用`{$name['element']}`或`{$name[0]}`的形式

-   当您需要在 html 标签的属性中输出数组的某一元素时，我们建议您使用`{$name.element}`或`{$name.0}`的形式

### 主题配置相关

-   当你设置为 bool 类型时前端无法直接输出，可通过判断模板语法简介输出
