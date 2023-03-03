(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{355:function(e,a,t){"use strict";t.r(a);var r=t(7),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"研发流程中涉及到的角色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#研发流程中涉及到的角色"}},[e._v("#")]),e._v(" 研发流程中涉及到的角色")]),e._v(" "),a("ul",[a("li",[e._v("PM(Product Manager)\n产品经理，又称品牌经理。写PRD文档的。")]),e._v(" "),a("li",[e._v("RD(Research and Development engineer)\n研发工程师，俗称 Java 猿、PHP猿、GO猿、Python猿。")]),e._v(" "),a("li",[e._v("QA(Quality Assurance)\n"),a("ul",[a("li",[e._v("测试的同学，QA的主要职责就是质量保证工作，属于质量保证部门。")]),e._v(" "),a("li",[e._v("大公司都是几个高级QA带着一帮外包QA工作。")])])]),e._v(" "),a("li",[e._v("OP(Operator)\n运维的同学，搞服务器会算法的大佬。")]),e._v(" "),a("li",[e._v("FE(Front-End)\n前端开发同学，也属于研发部门。")]),e._v(" "),a("li",[e._v("UE(User Experience)\n用户体验，主要研究交互的优不优雅啥的，感觉比"),a("code",[e._v("UI")]),e._v("高级。")]),e._v(" "),a("li",[e._v("UI(User Interface)\n用户界面，设计产品原型图的同学。")]),e._v(" "),a("li",[e._v("DBA(Database Administrator)\n数据库管理员，专门研究数据库的大佬。")]),e._v(" "),a("li",[e._v("SRE(Site Reliability Engineer)\n网站可靠性工程师，是软件工程师和系统管理员的结合，一个SRE工程师基本上需要掌握很多知识：算法，数据结构，编程能力，网络编程，分布式系统，可扩展架构，故障排除。")]),e._v(" "),a("li",[e._v("MRD(Market Requirements Document)\n市场需求文档，唯一不用猿们看的文档，因为是PM给老大们看的。")]),e._v(" "),a("li",[e._v("PRD\n产品需求文档，需要猿们经常看的文档。")])]),e._v(" "),a("h2",{attrs:{id:"开发过程当中的git分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发过程当中的git分支管理"}},[e._v("#")]),e._v(" 开发过程当中的git分支管理")]),e._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),a("p",[e._v("多人参与开发时的 GIT 分支管理模型，使用的是gitlab来作代码管理与权限控制。")]),e._v(" "),a("h3",{attrs:{id:"服务器部署环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务器部署环境"}},[e._v("#")]),e._v(" 服务器部署环境")]),e._v(" "),a("p",[e._v("通常来讲，服务器端分如下几种运行、部署环境")]),e._v(" "),a("ul",[a("li",[e._v("staging：用于开发功能时给 RD 测试用，代码、数据库都是测试环境的。数据库")]),e._v(" "),a("li",[e._v("preview：用于代码部署到生产环境前的测试，代码是准生产版本，数据库是生产环境的。")]),e._v(" "),a("li",[e._v("production：生产环境，代码、数据库都是生产环境的。")])]),e._v(" "),a("p",[e._v("以上环境的代码稳定版依次提升。")]),e._v(" "),a("h3",{attrs:{id:"分支种类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支种类"}},[e._v("#")]),e._v(" 分支种类")]),e._v(" "),a("p",[e._v("为配合以上几种部署环境，代码库分如下几种类型的分支")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("staging 分支：用于 staging 环境的部署。")])]),e._v(" "),a("li",[a("p",[e._v("master 分支：GIT 的默认分支，提供最新、稳定的代码。")])]),e._v(" "),a("li",[a("p",[e._v("preview 分支：用于 preview 环境的部署。")])]),e._v(" "),a("li",[a("p",[e._v("release 分支：用于 production 环境的部署，保持代码随时可发布到生产环境。")])])]),e._v(" "),a("p",[e._v("以上几个分支会永久存在于代码库中，在开发功能、修复 BUG 的过程当中，还会用到几种分支。")]),e._v(" "),a("h4",{attrs:{id:"开发新功能时会用到的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发新功能时会用到的"}},[e._v("#")]),e._v(" 开发新功能时会用到的")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("dev 分支：\n以 dev_xxx 命名。xxx 表示**功能**的简单描述。\n\nfeature 分支：\n以 feature_xxx 命名，其中，xxx 表示对**子功能**的简单描述。\n一个功能会拆成若干个子功能，每一个 RD 开发 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" 个子功能。\n\ndev 分支与 feature 分支的区别：\n一个新功能一般须要多个 RD 参与开发。RD 在各自的 feature 分支提交代码。存在一种状况，RD B 的代码依赖 RD A，而这个时候两我的写的代码都不稳定，不适合往 master 分支合并。此时，RD A 将本身的代码先合入 dev 分支，RD B 基于 dev 分支进行开发。\n\n修复常规 bug 时会用到的：\nbugfix：以 bugfix_xxx 命名。xxx 表示 bug 的简单描述。\n\n修复紧急 bug 时会用到的：\nhotfix：以 hotfix_xxx 命名。xxx 表示 bug 的简单描述。\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("p",[e._v("综上，通常状况，咱们一共会用到如下几种分支： staging、master、preview、release、dev、feature、bugfix、hotfix 。")]),e._v(" "),a("h3",{attrs:{id:"分支的生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支的生命周期"}},[e._v("#")]),e._v(" 分支的生命周期")]),e._v(" "),a("p",[e._v("示意图")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/hashqueue/blog-image-hosting@master/images/git-%E5%88%86%E6%94%AF%E7%A4%BA%E6%84%8F%E5%9B%BE-cea766b35a074d9f872cecc679de69ad.png",alt:"git-分支示意图"}})]),e._v(" "),a("h4",{attrs:{id:"master-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#master-分支"}},[e._v("#")]),e._v(" master 分支")]),e._v(" "),a("p",[e._v("默认存在，master 分支上保持最新的、稳定的代码。\n从如下分支合并(merged from)：\ndev、bugfix、hotfix")]),e._v(" "),a("h3",{attrs:{id:"preview-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preview-分支"}},[e._v("#")]),e._v(" preview 分支")]),e._v(" "),a("p",[e._v("从如下分支合并(merged from)：\nmaster\n合入如下分支：\n一旦拉出，再也不合入其它分支\n说明：\npreview 分支用于代码部署到生产环境前的预发布，用于正式上线前的最后一次测试。master 分支的代码部署到生产环境前，先用 merge (发 merge request 或用 git merge 命令，下同)把代码合入 preview 分支。")]),e._v(" "),a("h3",{attrs:{id:"release-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-分支"}},[e._v("#")]),e._v(" release 分支")]),e._v(" "),a("p",[e._v("从如下分支合并(merged from)：\nmaster\n合入如下分支：\n一旦拉出，再也不合入其它分支\n说明：\npreview 分支的代码在预生产环境测试经过后，master 分支上、合入 preview 分支的结点，往 release 分支 merge 一次。")]),e._v(" "),a("h3",{attrs:{id:"staging-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#staging-分支"}},[e._v("#")]),e._v(" staging 分支")]),e._v(" "),a("p",[e._v("从如下分支合并(merged from)：\nfeature\n合入如下分支：\n一旦拉出，再也不合入其它分支\n说明：\nstaging 分支的代码给 RD 测试功能用。RD 在 feature 开发完子功能后，把代码提交到 feature 分支，再把 feature 分支合到 staging 分支。最后在 xbox 上部署staging 环境，进行测试。")]),e._v(" "),a("h3",{attrs:{id:"dev-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dev-分支"}},[e._v("#")]),e._v(" dev 分支")]),e._v(" "),a("p",[e._v("派生自如下分支(forked from)：\nmaster\n合入如下分支：\nmaster\n说明：\ndev 分支用于多人开发同一个功能时提交代码。它的存在时间跟新功能开发的时间相同。新功能开始开发时，它从 master 分支 fork 出来；新功能开发结束时，它被合入 master 分支，而后删除。")]),e._v(" "),a("h3",{attrs:{id:"feature-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feature-分支"}},[e._v("#")]),e._v(" feature 分支")]),e._v(" "),a("p",[e._v("派生自如下分支(forked from)：\ndev\n合入如下分支：\nstaging、dev\n说明：\nfeature 分支用于 RD 我的提交代码。开发新功能时，每一个 RD 从 dev 分支 fork 出本身的 feature 分支，不一样 RD 在远程代码仓库不共享 feature 分支。当代码可测试时，先提交到 feature 分支，再 merge 到 staging 分支、发布、测试。测试通过后，merge 到 dev 分支。若是另一个 RD 须要依赖你的代码，他须要先将本身 feature 分支 rebase(用 git rebase 命令)到最新的 dev 分支(包含你的代码)，而后进行开发。")]),e._v(" "),a("h3",{attrs:{id:"bugfix-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bugfix-分支"}},[e._v("#")]),e._v(" bugfix 分支")]),e._v(" "),a("p",[e._v("派生自如下分支(forked from)：\nmaster\n合入如下分支：\nstaging、master\n说明：\nbugfix 分支用于修复常规、不紧急的 bug。RD 开始修复 bug 时，从 master 分支 fork 出 bugfix 分支。提交修复代码后，把 bugfix 分支 merge 到 staging，在staging 环境发布、测试。测试经过后，再把 bugfix 分支 merge 到 master，而后删除。")]),e._v(" "),a("h3",{attrs:{id:"hotfix-分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hotfix-分支"}},[e._v("#")]),e._v(" hotfix 分支")]),e._v(" "),a("p",[e._v("派生自(forked from)：\nrelease\n合入如下分支：\nstaging、master、preview、release\n说明：\nhotfix 分支用于修复生产环境的、紧急的 bug。RD 开始修复紧急 bug 时，从 release 分支 fork 出 hotfix 分支。提交修复代码后，把 hotfix 分支 merge 到 staging，在 staging 环境发布、测试。在 staging 测试经过后，再把 hotfix 分支 merge 到 preview，在 preview 环境进行测试。测试也经过后，再 merge 到 master、release 分支。")]),e._v(" "),a("h3",{attrs:{id:"典型场景举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#典型场景举例"}},[e._v("#")]),e._v(" 典型场景举例")]),e._v(" "),a("p",[e._v("下面举例一些常见场景，以及分支的操做步骤。")]),e._v(" "),a("h4",{attrs:{id:"开发新的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发新的功能"}},[e._v("#")]),e._v(" 开发新的功能")]),e._v(" "),a("ol",[a("li",[e._v("某 RD 先从 master 分支 fork 出 dev 分支，命名为 dev_xxx 。")]),e._v(" "),a("li",[e._v("参与开发这个功能的 RD 基于 dev_xxx 分支 fork 出 feature_xxx_RDA，feature_xxx_RDB 等分支。")]),e._v(" "),a("li",[e._v("各 RD 在本身的 feature 分支开发子功能。")]),e._v(" "),a("li",[e._v("RD A 在本身的分支 feature_xxx_RDA 上提交了几个工具类，这些类会给其余 RD 用。他把 feature_xxx_RDA push（用 git push 命令）到远程仓库，再 merge 到 staging，在 staging 环境发布、测试。若是测试发现问题，他再提交一个commit 到 feature_xxx_RDA 分支，而后 merge 到 staging，再发布、测试。测试经过后，他把 feature_xxx_RDA merge 到 dev_xxx 分>支，而后继续开发其它功能。")]),e._v(" "),a("li",[e._v("RD B 的工做依赖 RD A 开发的工具类。他把 feature_xxx_RDB rebase 到 最新的 dev_xxx 分支，而后进行开发。")]),e._v(" "),a("li",[e._v("全部 RD 开发完后，某 RD 再把 dev_xxx 分支 merge 到 master 分支，而后删除 dev_xxx 分支。\n某 RD 再把 master 分支 merge 到 preview 分支。")]),e._v(" "),a("li",[e._v("在 preview 测试经过后，再把 master 分支 merge 到 release 分支，而后发布到生产环境。")])]),e._v(" "),a("h4",{attrs:{id:"修复常规-bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复常规-bug"}},[e._v("#")]),e._v(" 修复常规 bug")]),e._v(" "),a("ol",[a("li",[e._v("某 RD 领到一个 bug。开始修复时，他从 master 分支 fork 出 bugfix 分支，命名为 bugfix_xxx 。")]),e._v(" "),a("li",[e._v("RD 在 bugfix_xxx 分支上提交修复代码，本身测试经过后，merge 到 staging，而且在 staging 环境发布、测试。若是测试发现问题，他再提交一个 commit 到 bugfix_xxx 分支，而后再 merge 到 staging，再发布、测试。直到测试彻底经过，他把 bugfix_xxx merge 到 master 分支，而后删除 bugfix_xxx 分支。")]),e._v(" "),a("li",[e._v("由于是常规 bug，他不须要立刻把修复的代码部署到生产环境。等待下一次发布周期便可。")])]),e._v(" "),a("h4",{attrs:{id:"修复线上紧急-bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修复线上紧急-bug"}},[e._v("#")]),e._v(" 修复线上紧急 bug")]),e._v(" "),a("p",[e._v("紧急 bug 是指若是不立刻修复，会形成重大损失的 bug。操作步骤如下")]),e._v(" "),a("ol",[a("li",[e._v("某 RD 领到一个紧急 bug。开始修复时，他从 release 分支 fork 出 hotfix 分支，命名为 hotfix_xxx。")]),e._v(" "),a("li",[e._v("RD 在 hotfix_xxx 分支进行修复。提交代码后，他把 hotfix_xxx merge 到 staging，而且在 staging 环境发布、测试。若是测试发现问题，他再提交一个 commit 到 hotfix_xxx 分支，而后再 merge 到 staging，再发布、测试。直到测试彻底经过，他把 hotfix_xxx merge 到 preview 分支，在 preview 环境测试。若是测试发现问题，继续在 hotfix_xxx 分支提交修复代码，再 merge 到 staging 进行测试。")]),e._v(" "),a("li",[e._v("preview 环境测试经过后，RD 把 hotfix_xxx merge 到 release 分支。上线，在生产环境观察 bug 是否修复。")]),e._v(" "),a("li",[e._v("若是生产环境还有问题，继续在 hotfix_xxx 修复，而后在 staging、preview 测试，测试经过再从新上线。这种状况应该尽量"),a("strong",[e._v("避免")]),e._v("，保证一次上线修复成功。")]),e._v(" "),a("li",[e._v("生产环境验证没问题后，RD 把 hotfix_xxx merge 到 master，而后删除hot_xxx 分支。")])]),e._v(" "),a("p",[a("strong",[e._v("建议：请勿在周五发布任何正式环境分支，以避免出现问题。")])]),e._v(" "),a("h3",{attrs:{id:"分支命名的建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命名的建议"}},[e._v("#")]),e._v(" 分支命名的建议")]),e._v(" "),a("p",[e._v("master、release、staging、preview 分支以它类型名字命名。")]),e._v(" "),a("p",[e._v("推荐的命名方式")]),e._v(" "),a("ul",[a("li",[e._v("对 dev 分支，建议以 dev_xxx_时间戳，其中，xxx 表示功能的英文简单描述，多个分词间用下划线分隔，时间戳用 yyyyMMdd 格式。如“保险礼品后台”功能的开发分支，可命名为 dev_ins_gift_20170329。")]),e._v(" "),a("li",[e._v("对 feature、bugfix、hotfix 分支，建议以 前缀_xxx_姓名 命名，其中前缀指 feature、bugfix、hotfix，xxx 表示功能的简单描述，姓名是负责开发功能的 RD 名字拼音。如修复链接数泄漏 bug 的分支，可命名为 bugfix_fix_conn_leak_zhangsan 。")])]),e._v(" "),a("h3",{attrs:{id:"分支命名反例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支命名反例"}},[e._v("#")]),e._v(" 分支命名反例")]),e._v(" "),a("ol",[a("li",[e._v("不包含任何前缀")]),e._v(" "),a("li",[e._v("只包含前缀、时间戳")]),e._v(" "),a("li",[e._v("只包含前缀、姓名")]),e._v(" "),a("li",[e._v("其它可读性低的命名")])]),e._v(" "),a("h3",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5e6aee85e51d4527235b766d",target:"_blank",rel:"noopener noreferrer"}},[e._v("PM、RD、FE、UE ......都是些啥？"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5d82e1f3e51d4561d044cd88",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git 分支管理规范"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/f96f4c8ce80c",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发过程中的git分支管理"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.shangmayuan.com/a/80ff4fbcc5b042c7bfe88331.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("开发过程当中的git分支管理-全"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);