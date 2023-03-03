(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{325:function(t,s,a){"use strict";a.r(s);var e=a(7),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("要实现这个功能需要借助"),s("code",[t._v("Python3")]),t._v("中的"),s("code",[t._v("itertools")]),t._v("模块中的"),s("code",[t._v("islice")]),t._v("类，详细说明详见"),s("a",{attrs:{href:"https://docs.python.org/zh-cn/3.8/library/itertools.html?highlight=itertools",target:"_blank",rel:"noopener noreferrer"}},[t._v("itertools的Python官方文档介绍"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h3",{attrs:{id:"测试csv文件内容如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试csv文件内容如下"}},[t._v("#")]),t._v(" 测试csv文件内容如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hashqueue/blog-image-hosting@master/images/2020-12-07_00-02-b2ae26015c1c46edb3f84cab5b01e587.png",alt:"2020-12-07_00-02"}})]),t._v(" "),s("p",[t._v("我想是想的效果是读取该csv文件后自动在读取结果中把表头的内容去掉，其实可以定义一个计数器变量index，index的初始值为0，每循环一次，index就+1，判断如果index=1的话，就不打印本次循环的内容。这样一来也可以实现这种效果。但是这样写的代码执行效率偏低，最后还是想到用Python自带的工具类"),s("code",[t._v("islice")]),t._v("来实现这个功能。")]),t._v(" "),s("h3",{attrs:{id:"示例代码如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例代码如下"}},[t._v("#")]),t._v(" 示例代码如下")]),t._v(" "),s("div",{staticClass:"language-python line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" csv\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" itertools "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" islice\npath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home/w/PycharmProjects/recruitment/interview/management/commands/candidate.csv'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf-8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    reader "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" csv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" dialect"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'excel'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" row "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" islice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reader"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("h3",{attrs:{id:"程序执行结果如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#程序执行结果如下"}},[t._v("#")]),t._v(" 程序执行结果如下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hashqueue/blog-image-hosting@master/images/2020-12-07_00-05-e2b546e46b974dccbe0288395bd331bf.png",alt:"2020-12-07_00-05"}})]),t._v(" "),s("h3",{attrs:{id:"islice的用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#islice的用法"}},[t._v("#")]),t._v(" islice的用法")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hashqueue/blog-image-hosting@master/images/2020-12-07_00-15-67be98c7322c4cdda8e89e7cde1ba5ff.png",alt:"2020-12-07_00-15"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);