/*
 Navicat Premium Data Transfer

 Source Server         : my_database
 Source Server Type    : MySQL
 Source Server Version : 80032
 Source Host           : localhost:3306
 Source Schema         : blog

 Target Server Type    : MySQL
 Target Server Version : 80032
 File Encoding         : 65001

 Date: 01/05/2023 18:57:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `add_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pub_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES (1, 'python', 'admin', '2022-11-04T06:31:41.183720Z', '2022-11-04T06:31:41.183720Z', 'Python 基础教程', 'python，python开发，python教程', 'Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。', 'Python 是一种解释型、面向对象、动态数据类型的高级程序设计语言。\\r\\n\\r\\nPython 由 Guido van Rossum 于 1989 年底发明，第一个公开发行版发行于 1991 年。\\r\\n\\r\\n像 Perl 语言一样, Python 源代码同样遵循 GPL(GNU General Public License) 协议。\\r\\n\\r\\n官方宣布，2020 年 1 月 1 日， 停止 Python 2 的更新。\\r\\n\\r\\nPython 2.7 被确定为最后一个 Python 2.x 版本。\\r\\n\\r\\n\\r\\n谁适合阅读本教程？\\r\\n本教程适合想从零开始学习 Python 编程语言的开发人员。当然本教程也会对一些模块进行深入，让你更好的了解 Python 的应用。\\r\\n\\r\\n本教程主要针对 Python 2.x 版本的学习，如果你使用的是 Python 3.x 版本请移步至Python 3.X 版本的教程。\\r\\n\\r\\n本教程所有实例基于 Python2.7。\\r\\n\\r\\n\\r\\n学习本教程前你需要了解\\r\\n在继续本教程之前，你应该了解一些基本的计算机编程术语。如果你学习过 PHP，ASP 等编程语言，将有助于你更快的了解 Python 编程。');
INSERT INTO `article` VALUES (2, 'Vue3', 'admin', '2022-11-04T06:38:17.713075Z', '2022-11-04T06:38:17.713075Z', 'Vue3+VueRouter+Vite+pinia组件化开发实战入门', 'vue，vue3开发，vue3教程, pinia, vite', '本课程作为前端组件化开发的入门实战课程，力求精简，将通过一个博客的案例整合相关的技术点，以及每一个技术点在实战中的基础应用，以实战为最终目的，力求能带领大家快速上手。', '前言\\r\\n本教程命名为 《Vue3 + VueRouter + Vite + pinia组件化开发实战入门》，本课程融合了Vue3组件化开发相关几个技术栈，相关案例全部采用Vue3提供的组合式 API (Composition API)进行讲解， 并且不会涉及选项式API，这对刚开始学习Vue的同学非常友好，不会有固有思维的限制，上手更加容易！\\r\\n\\r\\n本课程作为前端组件化开发的入门实战课程，力求精简，将通过一个博客的案例整合相关的技术点，以及每一个技术点在实战中的基础应用，以实战为最终目的，力求能带领大家快速上手。\\r\\n\\r\\n本课程与其他课程的区别\\r\\nVue3相关的课程网上可能有一大堆，不得不说现在获取知识太便捷了，我自己也是磕磕绊绊一路走过来的，踩过无数的坑。 与很多人一样，在看了很多视频教程之后，发现大部分教程只是把Vue3官方文档完整复述一遍，浪费了时间不说，到头还是不知道相关的知识点在开发中如何去使用，在什么情况下使用，完全是一脸懵逼的状态，导致无法上手真实的项目，！\\r\\n\\r\\n基于这样一个痛点，在趟过了无数浑水之后，诞生了本套课程，相关后端API接口完全采用真实项目接口，在实现前端功能的同时也能清楚后端的工作原理，相关后端的API接口开发也将会打造成独立的课程，通过前后端两个真实的简单的博客项目完全搞懂每个技术点！\\r\\n\\r\\n声明\\r\\n本套教程配套的详细开发文档均会配套免费分享给大家，文字加视频，助力大家学习更轻松！\\r\\n\\r\\n说明\\r\\n前置知识\\r\\ncss相关知识\\r\\nJavaScript相关知识\\r\\nhtml相关知识\\r\\n网站开发相关基础知识，比如知道什么是get请求，post请求，这是基础！\\r\\n对跨域相关知识点拥有概念\\r\\n相关参考文档\\r\\nVue3官方文档：https://cn.vuejs.org/\\r\\nVueRouter官方文档：https://router.vuejs.org/zh/\\r\\nVite官方文档：https://cn.vitejs.dev/\\r\\npina官方文档：https://pinia.vuejs.org/zh/');
INSERT INTO `article` VALUES (3, 'Vue3', 'admin', '2022-12-06T00:42:33.255928Z', '2022-12-06T00:42:33.255953Z', '什么是Pinia ?', 'Pinia', 'Pinia 最初是在 2019 年 11 月左右重新设计使用 Composition API 。', '介绍#\\r\\nWatch a free video lesson on Vue School\\r\\nPinia 最初是在 2019 年 11 月左右重新设计使用 Composition API 。从那时起，最初的原则仍然相同，但 Pinia 对 Vue 2 和 Vue 3 都有效，并且不需要您使用组合 API。 除了安装和 SSR 之外，两者的 API 都是相同的，并且这些文档针对 Vue 3，并在必要时提供有关 Vue 2 的注释，以便 Vue 2 和 Vue 3 用户可以阅读！\\r\\n\\r\\n为什么要使用 Pinia？#\\r\\nPinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。 如果您熟悉 Composition API，您可能会认为您已经可以通过一个简单的 export const state = reactive({}). 这对于单页应用程序来说是正确的，但如果它是服务器端呈现的，会使您的应用程序暴露于安全漏洞。 但即使在小型单页应用程序中，您也可以从使用 Pinia 中获得很多好处：\\r\\n\\r\\ndev-tools 支持\\r\\n跟踪动作、突变的时间线\\r\\nStore 出现在使用它们的组件中\\r\\ntime travel 和 更容易的调试\\r\\n热模块更换\\r\\n在不重新加载页面的情况下修改您的 Store\\r\\n在开发时保持任何现有状态\\r\\n插件：使用插件扩展 Pinia 功能\\r\\n为 JS 用户提供适当的 TypeScript 支持或 autocompletion\\r\\n服务器端渲染支持\\r\\n基本示例#\\r\\n这就是使用 pinia 在 API 方面的样子（请务必查看 Getting Started 以获取完整说明）。 您首先创建一个 Store ：\\r\\n\\r\\n// stores/counter.js\\r\\nimport { defineStore } from \'pinia\'\\r\\n\\r\\nexport const useCounterStore = defineStore(\'counter\', {\\r\\n  state: () => {\\r\\n    return { count: 0 }\\r\\n  },\\r\\n  // 也可以定义为\\r\\n  // state: () => ({ count: 0 })\\r\\n  actions: {\\r\\n    increment() {\\r\\n      this.count++\\r\\n    },\\r\\n  },\\r\\n})\\r\\n然后你在一个组件中 使用 它：\\r\\n\\r\\nimport { useCounterStore } from \'@/stores/counter\'\\r\\n\\r\\nexport default {\\r\\n  setup() {\\r\\n    const counter = useCounterStore()\\r\\n\\r\\n    counter.count++\\r\\n    // 带自动补全 ✨\\r\\n    counter.$patch({ count: counter.count + 1 })\\r\\n    // 或使用 action 代替\\r\\n    counter.increment()\\r\\n  },\\r\\n}\\r\\n你甚至可以使用一个函数（类似于一个组件setup()）来为更高级的用例定义一个Store：\\r\\n\\r\\nexport const useCounterStore = defineStore(\'counter\', () => {\\r\\n  const count = ref(0)\\r\\n  function increment() {\\r\\n    count.value++\\r\\n  }\\r\\n\\r\\n  return { count, increment }\\r\\n})\\r\\n如果你还不熟悉 setup() 和 Composition API，别担心，Pinia 也支持一组类似的 map helpers like Vuex。 您以相同的方式定义存储，但随后使用 mapStores()、mapState() 或 mapActions()：\\r\\n\\r\\nconst useCounterStore = defineStore(\'counter\', {\\r\\n  state: () => ({ count: 0 }),\\r\\n  getters: {\\r\\n    double: (state) => state.count * 2,\\r\\n  },\\r\\n  actions: {\\r\\n    increment() {\\r\\n      this.count++\\r\\n    }\\r\\n  }\\r\\n})\\r\\n\\r\\nconst useUserStore = defineStore(\'user\', {\\r\\n  // ...\\r\\n})\\r\\n\\r\\nexport default {\\r\\n  computed: {\\r\\n    // other computed properties\\r\\n    // ...\\r\\n    // gives access to this.counterStore and this.userStore\\r\\n    ...mapStores(useCounterStore, useUserStore)\\r\\n    // gives read access to this.count and this.double\\r\\n    ...mapState(useCounterStore, [\'count\', \'double\']),\\r\\n  },\\r\\n  methods: {\\r\\n    // gives access to this.increment()\\r\\n    ...mapActions(useCounterStore, [\'increment\']),\\r\\n  },\\r\\n}\\r\\n您将在核心概念中找到有关每个 map helper 的更多信息。\\r\\n\\r\\n为什么是 Pinia#\\r\\nPinia（发音为 /piːnjʌ/，类似于英语中的“peenya”）是最接近有效包名 piña（西班牙语中的_pineapple_）的词。 菠萝实际上是一组单独的花朵，它们结合在一起形成多个水果。 与 Store 类似，每一家都是独立诞生的，但最终都是相互联系的。 它也是一种美味的热带水果，原产于南美洲。\\r\\n\\r\\n一个更现实的例子#\\r\\n这是一个更完整的 API 示例，您将与 Pinia 一起使用即使在 JavaScript 中也具有类型。 对于某些人来说，这可能足以在不进一步阅读的情况下开始使用，但我们仍然建议您查看文档的其余部分，甚至跳过此示例，并在阅读完所有_核心概念_后返回。\\r\\n\\r\\nimport { defineStore } from \'pinia\'\\r\\n\\r\\nexport const todos = defineStore(\'todos\', {\\r\\n  state: () => ({\\r\\n    /** @type {{ text: string, id: number, isFinished: boolean }[]} */\\r\\n    todos: [],\\r\\n    /** @type {\'all\' | \'finished\' | \'unfinished\'} */\\r\\n    filter: \'all\',\\r\\n    // type 会自动推断为 number\\r\\n    nextId: 0,\\r\\n  }),\\r\\n  getters: {\\r\\n    finishedTodos(state) {\\r\\n      // 自动完成! ✨\\r\\n      return state.todos.filter((todo) => todo.isFinished)\\r\\n    },\\r\\n    unfinishedTodos(state) {\\r\\n      return state.todos.filter((todo) => !todo.isFinished)\\r\\n    },\\r\\n    /**\\r\\n     * @returns {{ text: string, id: number, isFinished: boolean }[]}\\r\\n     */\\r\\n    filteredTodos(state) {\\r\\n      if (this.filter === \'finished\') {\\r\\n        // 自动调用其他 getter ✨\\r\\n        return this.finishedTodos\\r\\n      } else if (this.filter === \'unfinished\') {\\r\\n        return this.unfinishedTodos\\r\\n      }\\r\\n      return this.todos\\r\\n    },\\r\\n  },\\r\\n  actions: {\\r\\n    // 任何数量的参数，返回一个 Promise 或者不返回\\r\\n    addTodo(text) {\\r\\n      // 你可以直接改变状态\\r\\n      this.todos.push({ text, id: this.nextId++, isFinished: false })\\r\\n    },\\r\\n  },\\r\\n})\\r\\n与 Vuex 的比较#\\r\\nPinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法。最终，我们意识到 Pinia 已经实现了我们在 Vuex 5 中想要的大部分内容，并决定实现它 取而代之的是新的建议。\\r\\n\\r\\n与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的规范，提供了 Composition-API 风格的 API，最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持。\\r\\n\\r\\nRFC#\\r\\n虽然 Vuex 通过 RFC 从社区收集尽可能多的反馈，但 Pinia 没有。 我根据我开发应用程序、阅读其他人的代码、为使用 Pinia 的客户工作以及在 Discord 上回答问题的经验来测试想法。 这使我能够提供一种适用于各种情况和应用程序大小的有效解决方案。 我经常发布并在保持其核心 API 不变的同时使库不断发展。\\r\\n\\r\\n与 Vuex 3.x/4.x 的比较#\\r\\nVuex 3.x 是 Vuex 的 Vue 2 而 Vuex 4.x 是 Vue 3\\r\\n\\r\\nPinia API 与 Vuex ≤4 有很大不同，即：\\r\\n\\r\\nmutations 不再存在。他们经常被认为是 非常 冗长。他们最初带来了 devtools 集成，但这不再是问题。\\r\\n无需创建自定义复杂包装器来支持 TypeScript，所有内容都是类型化的，并且 API 的设计方式尽可能利用 TS 类型推断。\\r\\n不再需要注入、导入函数、调用函数、享受自动完成功能！\\r\\n无需动态添加 Store，默认情况下它们都是动态的，您甚至都不会注意到。请注意，您仍然可以随时手动使用 Store 进行注册，但因为它是自动的，您无需担心。\\r\\n不再有 modules 的嵌套结构。您仍然可以通过在另一个 Store 中导入和 使用 来隐式嵌套 Store，但 Pinia 通过设计提供平面结构，同时仍然支持 Store 之间的交叉组合方式。 您甚至可以拥有 Store 的循环依赖关系。\\r\\n没有 命名空间模块。鉴于 Store 的扁平架构，“命名空间” Store 是其定义方式所固有的，您可以说所有 Store 都是命名空间的。');
INSERT INTO `article` VALUES (4, 'JavaScript', 'admin', '2022-12-06T00:42:33.255928Z', '2022-12-06T00:42:33.255953Z', 'JavaScript为什么这么强大?', 'JavaScript?', 'JavaScript非常强大', 'JavaScript是一门广泛应用于Web前端开发的脚本语言。它由Netscape公司（现为Mozilla公司）在1995年首次发布，最初命名为“LiveScript”，后来更名为JavaScript。\r\n\r\nJavaScript 是一种解释型语言，其代码需要被浏览器解析和执行。它是一种基于对象和事件驱动的语言。与HTML和CSS相比，JavaScript负责处理用户交互和实现动态效果以及业务逻辑。\r\n\r\nJavaScript可以通过标准文档对象模型（DOM）让网页拥有了丰富的交互特性，从而成为构建现代Web应用的重要组成部分。JavaScript同时还支持异步操作、服务器端开发等功能。\r\n\r\n现在，JavaScript已经成为最流行的编程语言之一，在众多领域都得到广泛应用，例如Web前端开发、游戏开发、跨平台开发、移动应用开发等方面。同时也在各大公司拥有着广泛的应用，如Google、Facebook、微软、阿里巴巴、腾讯等技术巨头均使用JavaScript进行开发。');
INSERT INTO `article` VALUES (58, 'Vue-Router', 'admin', '2023-03-31T16:00:00.000Z', '2023-04-14T16:00:00.000Z', 'Vue3之路由篇（Vue-Router）', '嵌套路线映射  动态路由  模块化，基于组件的路由器配置  路由参数，查询，通配符', 'Vue路由器是Vue.js的官方路由器，它与Vue.js核心深度集成，使用Vue轻松构建单页应用程序变得轻而易举。', '前言\n在编写vue里的SPA（Single Page Application单页面应用）时，我们始终绕不开路由的使用，vue-router4.0版里有一些重要更新，在这里分享给大家。\n什么是Vue-Router？\nVue路由器是Vue.js的官方路由器，它与Vue.js核心深度集成，使用Vue轻松构建单页应用程序变得轻而易举。功能包括：\n嵌套路线映射\n动态路由\n模块化，基于组件的路由器配置\n路由参数，查询，通配符\n查看由Vue.js过渡系统提供动力的过渡效果\n细粒度的导航控制\n带有自动活动CSS类的链接\nHTML5历史记录模式或哈希模式\n可自定义的滚动行为\n网址的正确编码\n路由安装\nnpm i vue-router@4\n复制代码\n路由模式\ncreateWebHistory 创建history路由模式\ncreateWebHashHistory 创建hash路由模式\ncreateMemoryHistory 创建基于内存的历史记录\n这三种路由方式都有一个可选参数base，为每个URL前面的基本路径，默认为/');
INSERT INTO `article` VALUES (59, 'JavaScript', 'admin', '2023-03-31T16:00:00.000Z', '2023-04-14T16:00:00.000Z', 'JS Promise', 'JavaScript Promise 异步 封装', 'Promise是一个用来代表异步操作结果的对象，我们可以通过观察者模式观察异步操作的结果。在其它语言里面，我们多多少少接触过future，deferred这些概念,Promise其实就是Javascript的类似实现', '前言\n之前我写过一篇文章，讨论了为什么async await中的错误可以被try catch，而setTimeout等api不能，有小伙伴提出之前面试被面试官问过为什么Promise的错误不能try catch，为什么要这么设计。好吧，虽然Promise这个话题大家都聊烂了，今天我们再来展开聊聊🤭。\n什么是Promise\nPromise是一个用来代表异步操作结果的对象，我们可以通过观察者模式观察异步操作的结果。在其它语言里面，我们多多少少接触过future，deferred这些概念,Promise其实就是Javascript的类似实现。\n根据MDN定义：\nA Promise is in one of these states:\n\npending: initial state, neither fulfilled nor rejected.\nfulfilled: meaning that the operation was completed successfully.\nrejected: meaning that the operation failed.\n\n一个fulfilled Promise有一个fulfillment值，而rejected Promise则有一个rejection reason。\n为什么要引入Promise？\n异步处理在我们日常开发中是很常见的场景，在Promise出现之前，我们都是通过回调来处理异步代码的结果，但是出现了一些问题：\n\n回调地狱，在有多个异步逻辑存在依赖关系时，我们只能在回调里嵌套，这些深度嵌套的代码让代码难以阅读和维护，业界称之为回调地狱\n回调也没用标准的方式来处理错误，大家都凭自己的喜好来处理错误，可能我们使用的库跟api都定义了一套处理错误的方式，那我们把多个库一起搭配使用时，就需要花额外的精力去把他们处理皮实\n有时候我们需要对一个已经完成的逻辑注册回调。这也没有统一的标准，对于大部分代码，我们根本就不能对这些已经执行完的代码注册回调，有些会同步执行回调，有些会异步执行回调，我们根本不可能记住所有api的机制，要么每次使用时我们都要研究这个api的实现机制，要么我们可能就在写bug\n而且，如果我们想对一个异步逻辑注册多个回调，这也要看api提供方支不支持\n最重要的，如果有统一的方式来处理错误跟正确结果的话，我们就有可能实现一套通用的逻辑来简化代码复杂度,这种自己发挥的情况就很难\n\n是的，Promise的出现就是为了解决这所有的问题。\n怎么创建Promise\nPromise构造函数\nPromise有一个构造函数，接收一个函数作为参数，这个传入构造函数里的函数被称作executor。\nPromise的构造函数会同步地调用executor，executor又接收resolve函数跟reject函数作为参数，然后我们就可以通过这两个函数俩决定当前Promise的状态（resolve进入fulfilled或者reject进入rejected）。\n我们在resolve Promise时，可以直接给它一个值，或者给它另外一个Promise，这样最终是fulfilled还是rejected将取决于我们给它的这个Promise最后的状态。\n假如我们现在有一个promise a：\n\n如果我们在promise a里面调用resolve，传入了另一个promise b，promise a的状态将取决于promise b的执行结果\n如果我们直接传给resolve一个普通的值，则promise a带着这个值进入fulfilled状态\n如果我们调用reject，则promise a带着我们传给reject的值进入rejected状态\n\nPromise在一开始都是pending状态，之后执行完逻辑之后变成settled（fulfilled或者rejected），settled不能变成pending，fulfilled不能变成rejected，rejected也不能变成fulfilled。总之一旦变成settled状态，之后就不会再变了。\n我们也不能直接拿到Promise的状态，只能通过注册handler的方式，Promise会在恰当的时机调用这些handler，JavaScript Promise可以注册三种handler：\n\nthen 当Promise进入fulfilled状态时会调用此函数\ncatch 当Promise进入rejected状态时会调用此函数\nfinally当Promnise进入settled状态时会调用此函数（无论fulfilled还是rejected）\n\n这三个handler函数都会返回一个新的Promise，这个新的Promise跟前面的Promise关联在一起，他的状态取决于前面Promise状态以及当前handler的执行情况。');
INSERT INTO `article` VALUES (60, 'Django', 'admin', '2023-04-07T16:00:00.000Z', '2023-04-15T16:00:00.000Z', 'Django简介、ORM、核心模块', 'python Django ORM 核心模块 数据库功能', ' Django是一种开源的大而且全的Web应用框架，是由python语言来编写的。他采用了MVC模式，什么是MVC？大家不要着急，MVC这么好的东西我在下面会精细的讲一下！Django最初是被开发来用于管理劳伦斯出版集团下的一些以新闻为主内容的网站。一款CMS（内容管理系统）软件。并于 2005 年 7 月在 BSD 许可证下发布。这套框架是以比利时的吉普赛爵士吉他手 Django Reinhardt 来命名的', 'Django优点\n强大的数据库功能\n    用 python 的类继承，几行代码就可以拥有一个丰富、动态的数据库操作接口（API），如果需要，你也能执行 SQL 语句ORM（Object-Relational Mapping“对象-关系-映射”），它实现了数据模型与数据库的解耦，即数据模型的设计不需要依赖于特定的数据库，通过简单的配置就可以轻松更换数据库\n自带强大的后台功能\n    在admin.py中写入需要实现功能的代码，几行简单的代码就可以实现你当管理员的梦。再也不用为设计管理员而发愁了！\n优雅的网址\n    在urls.py中用正则匹配网址，传递到对应的函数，随意你自己定义，网址可以如你所想，如你所愿。 (需要注意的是:正则是一种独立的语法，并不是哪个语言所拥有的。)\n具有模板系统\n    模板系统大大的降低了开发者头疼脑热的概率。因为模板系统设计简单，容易扩展。代码，样式分开设计。查找更清晰，修改更容易！\n缓存系统\n    Django和memcached、redis或者其他的缓存系统联用，提高了页面的加载速度。让用户的体验度更好了！\ntemplates 文件夹views.py 中的函数渲染 templates 中的 Html 模板，得到动态内容的网页，当然可以用缓存来提高速度。\n国际化\n    这么好的东西，想不走上国际化都难啊。想要网页显示不同语言，比如中文、英文、还有各种语言。只需要在一个文件的设置中稍微那么修改一下。页面就会穿上各种语言的外衣。\nDjango 的 App 理念很好。\n    App 可插拔，是不可多得的思想。不需要了，可以直接删除，对系统影响不大。\n怎么样？Django是否强大到不可想象的地步了？不过大家也不用高兴的太早了。因为代码还是要写的，只不过用上了Django开发网站的时候更快速，更便捷了而已！\nDjango具有以下特点：\n\n功能完善、要素齐全：该有的、可以没有的都有，常用的、不常用的工具都用。Django提供了大量的特性和工具，无须你自己定义、组合、增删及修改。但是，在有些人眼里这被认为是‘臃肿’不够灵活，发挥不了程序员的主动能力。（一体机和DIY你更喜欢哪个？^-^）\n完善的文档：经过十多年的发展和完善，Django有广泛的实践经验和完善的在线文档（可惜大多数为英文）。开发者遇到问题时可以搜索在线文档寻求解决方案。\n强大的数据库访问组件：Django的Model层自带数据库ORM组件，使得开发者无须学习其他数据库访问技术（SQL、pymysql、SQLALchemy等）。当然你也可以不用Django自带的ORM，而是使用其它访问技术，比如SQLALchemy。\n灵活的URL映射：Django使用正则表达式管理URL映射，灵活性高。\n丰富的Template模板语言：类似jinjia模板语言，不但原生功能丰富，还可以自定义模板标签。\n自带免费的后台管理系统：只需要通过简单的几行配置和代码就可以实现一个完整的后台数据管理控制平台。\n完整的错误信息提示：在开发调试过程中如果出现运行错误或者异常，Django可以提供非常完整的错误信息帮助定位问题。\n\n好了，开始正式跟大家说MVC 、MVT、ORM\n大部分开发语言中都有 MVC\nMVC 框架的核心思想是： 解耦.即数据模型的设计不需要依赖于特定的数据库，通过简单的配置就可以轻松更换数据库\n降低各功能模块之间的耦合性，方便变更，更容易重构代码，最大程度上实现代码的重用\nM 表示 model，主要用于对数据库层的封装\nV 表示 view，用于向用户展示结果\nC 表示 controller，是核心，用于处理请求、获取数据、返回结果\nM代表的是模型(Model), V代表的是视图(View), C代表的是控制(Contrle)\nMVT\nDjango 是一款 python 的 Web 开发框架\n与 MVC 有所不同，属于 MVT 框架(是不是跟没说一样？不过我真的找不到更合适的语句了)\nM 表示 model，负责与数据库交互\nV 表示 view，是核心，负责接收请求、获取数据、返回结果\nT 表示 template，负责呈现内容到浏览器\n什么是ORM？最后在给大家说一下Django中的核心模块：在坚持一下就看完了\nDjango核心模块\nurls.py\n网址入口，关联到对应的 views.py 中的一个函数（或者 generic 类），访问网址就对应一个函数。小心在设置函数的时候写错单词哦！\nviews.py\n处理用户发出的请求，从 urls.py 中对应过来, 通过渲染 templates 中的网页可以将一些想要看到的内容输入到网页上。\nmodels.py\n与数据库操作相关，存入或读取数据时用到这个，当然用不到数据库的时候 你可以不使用。\nforms.py\n表单，用户在浏览器上输入数据提交，对数据的验证工作以及输入框的生成等工作。\ntemplates 文件夹\nviews.py 中的函数渲染 templates 中的 Html 模板，得到动态内容的网页，当然可以用缓存来提高速度。这么好的东西，不用确实可惜！\nadmin.py\n后台，这个就是可以用很少代码就能实现后台管理的神奇东东\nsettings.py\nDjango 的设置，配置文件，比如 DEBUG 的开关，静态文件的位置等。\n结语\n总之，Django的功能很强大，包括DRF等一些框架，要学的还有很多，一起加油哇');
INSERT INTO `article` VALUES (61, 'Flask', 'admin', '2023-03-31T16:00:00.000Z', '2023-04-21T16:00:00.000Z', 'Python Flask 介绍', '轻量级 易用性 可扩展性 灵活性 集成度高 RESTful支持', 'Python Flask是一个轻量级的Web应用程序框架，它是使用Python编写的，用于快速开发Web应用程序和API。它的设计理念是简单、易用和可扩展。', '一、概述\nPython Flask是一个轻量级的Web应用程序框架，它是使用Python编写的，用于快速开发Web应用程序和API。它的设计理念是简单、易用和可扩展。\n以下是Python Flask的一些主要特点：\n\n\n轻量级：Flask没有多余的库和工具包，使其非常轻量级，这也意味着您可以根据需要添加自己的库。\n\n\n易用性：Flask的API非常简单，易于理解和学习，因此它非常适合初学者。\n\n\n可扩展性：Flask是可扩展的，您可以添加插件来增强其功能，并且可以很容易地将其与其他库和框架集成。\n\n\n灵活性：Flask允许您选择所需的组件，例如模板引擎、数据库、表单验证等等。\n\n\n集成度高：Flask支持与其他Python库和框架的集成，如SQLAlchemy、WTForms、Jinja2等等。\n\n\nRESTful支持：Flask易于使用RESTful API，并且可以轻松地创建RESTful Web服务。\n\n\n总之，Python Flask是一个功能强大、易于使用、可扩展和灵活的Web框架，它被广泛应用于Web应用程序和API的开发。\n官网：flask.net.cn/\n二、Flask 架构\nFlask 是一个使用 Python 编写的 Web 应用程序框架。它使用了 Werkzeug 工具箱和 Jinja2 模板引擎。\nFlask 框架主要由以下模块组成：\n\n应用模块：Flask 的核心模块，是整个 Web 应用程序的入口，负责接收 HTTP 请求并返回响应。它还负责路由、错误处理、上下文等功能。\n\n\n路由模块：Flask 使用装饰器来定义 URL 路由和视图函数之间的映射关系。\n\n\n视图模块：视图函数是 Flask Web 应用程序的核心，它处理 HTTP 请求并返回响应，可以返回 HTML 页面、JSON 数据等。\n\n\n模板模块：Flask 使用 Jinja2 模板引擎来生成 HTML 页面。模板引擎提供了丰富的语法和过滤器，可以轻松地生成复杂的 HTML 页面。\n\n\n数据库模块：Flask 可以轻松地与多种数据库集成，包括 MySQL、PostgreSQL、SQLite 等。\n\n\n表单模块：Flask-WTF 是 Flask 的表单处理扩展，提供了方便的表单处理方法，可以轻松地创建表单、验证表单数据等。\n\n\n扩展模块：Flask 的扩展模块提供了各种功能，如邮件发送、缓存、登录认证等。\n\n\nFlask 的设计理念是简单、灵活、易于扩展，它不会限制开发者的选择，可以根据开发者的需求选择各种第三方扩展来增加功能。同时，Flask 也提供了一些基础的功能和工具，方便开发者快速搭建 Web 应用程序。\n三、应用模块\n应用模块是 Flask 框架的核心模块之一，它负责创建 Flask 应用程序对象，并定义一些应用程序级别的配置和功能。应用模块通常包括以下内容：\n\n\n创建应用程序对象：使用 Flask 类创建应用程序对象。Flask 类的构造函数需要传入应用程序的名称作为参数。\n\n\n配置应用程序：可以使用 config 属性来配置应用程序的基本属性，如调试模式、密钥、数据库连接等。\n\n\n注册路由：使用 route 装饰器来注册 URL 路由和视图函数之间的映射关系。路由定义了 HTTP 请求的 URL 地址和视图函数之间的映射关系。\n\n\n定义视图函数：视图函数是处理 HTTP 请求的函数，可以返回 HTML 页面、JSON 数据等。视图函数通常使用 route 装饰器定义 URL 路由。\n\n\n上下文管理：Flask 应用程序使用上下文对象来管理请求上下文和应用上下文。请求上下文包含了每个 HTTP 请求的相关信息，如请求头、请求参数等。应用上下文包含了应用程序的相关信息，如配置信息、数据库连接等。\n\n\n错误处理：Flask 应用程序可以通过注册错误处理函数来处理 HTTP 请求中出现的错误，如 404 错误、500 错误等。\n\n\n扩展管理：Flask 应用程序可以通过注册扩展对象来增加应用程序的功能，如数据库连接、缓存、邮件发送等。\n\n\n启动应用程序：通过 run 方法启动应用程序，使其可以接收 HTTP 请求。\n\n\n应用模块是 Flask 应用程序的核心模块之一，它负责管理整个应用程序的生命周期，是开发 Flask Web 应用程序的重要组成部分。\n\n四、路由模块\n路由模块是 Flask 应用程序的核心组成部分之一，它实现了 URL 路由和视图函数之间的映射关系。在 Flask 中，我们可以通过定义路由模块来为应用程序添加不同的路由规则，使得应用程序可以响应不同的 URL 请求。\n在 Flask 中，可以使用装饰器来定义路由模块。常用的装饰器包括：\n\n@app.route(rule, options)：定义路由规则和处理函数之间的映射关系。其中 rule 参数表示路由规则，options 参数表示路由的配置选项。\n');
INSERT INTO `article` VALUES (62, 'pinia', 'admin', '2023-04-06T16:00:00.000Z', '2023-04-21T16:00:00.000Z', 'pinia 简介与简单使用', 'Pinia Vuex5.0 Eduardo vue.js composition api', 'Pinia是一款全新的状态管理库（下一个版本的Vuex,   应该是Vuex5.0）。Pinia的作者(Eduardo)是vue.js的核心成员，目前Pinia已经被vue官方仓库接管了。Pinia最初是个实验，目的是重新设计Vue状态管理在composition api上的样子', '介绍\nPinia是一款全新的状态管理库（下一个版本的Vuex,   应该是Vuex5.0）。Pinia的作者(Eduardo)是vue.js的核心成员，目前Pinia已经被vue官方仓库接管了。Pinia最初是个实验，目的是重新设计Vue状态管理在composition api上的样子。（提案链接 github.com/vuejs/rfcs/…\nPinia的特点\n\n同时支持Vue2和Vue3\n\n除了安装和ssr配置外，两者的api都是相同的\n文档主要针对Vue3进行说明，必要的时候会对Vue2注释\n\n\n支持Vue devtools\n\n跟踪action、mutations\n在使用容器的组件中就可以观察到容器本身\n支持time travel 调试功能\n在vue2中pinia使用vuex现有的接口，不能跟vuex同时使用\nvue3中的调试工具还不够完美，比如还没有time-travel调试功能\n\n\n模块热更新\n\n修改容器无须重新加载页面\n热更新的时候保持原有状态\n\n\n支持使用插件拓展Pinia功能\n比vuex有更好的typescript 支持，使用过程非常舒服\n支持服务端渲染\n使用方式跟vuex基本上相似\n\nPinia没有mutation，在action中既可以是异步，也可以是同步的。\n没有模块嵌套功能，没有命名空间模块\n不再需要注入、导入函数，调用他们享受自动补全\n无须动态添加store\n无论是使用方式，还是调试都非常方便');
INSERT INTO `article` VALUES (63, 'axios', 'admin', '2023-04-10T16:00:00.000Z', '2023-04-19T16:00:00.000Z', 'axios全攻略', 'vue-resource axios 官方文档', 'axios 的官方文档本身就非常详细！！有这个还要什么自行车！！所以推荐大家学习这种库，最好详细阅读其官方文档。大概翻译了一下 axios 的官方文档，相信大家只要吃透本文再加以实践，axios 就是小意思啦！！', '随着 vuejs 作者尤雨溪发布消息，不再继续维护vue-resource，并推荐大家使用 axios 开始，axios 被越来越多的人所了解。本来想在网上找找详细攻略，突然发现，axios 的官方文档本身就非常详细！！有这个还要什么自行车！！所以推荐大家学习这种库，最好详细阅读其官方文档。大概翻译了一下 axios 的官方文档，相信大家只要吃透本文再加以实践，axios 就是小意思啦！！\n\n如果您觉得本文对您有帮助，不妨点个赞或关注收藏一下，您的鼓励对我非常重要。\n\naxios 简介\naxios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端，它本身具有以下特征：\n\n从浏览器中创建 XMLHttpRequest\n从 node.js 发出 http 请求\n支持 Promise API\n拦截请求和响应\n转换请求和响应数据\n取消请求\n自动转换JSON数据\n客户端支持防止 CSRF/XSRF');

-- ----------------------------
-- Table structure for article_comments
-- ----------------------------
DROP TABLE IF EXISTS `article_comments`;
CREATE TABLE `article_comments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_id` int NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pub_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_comments
-- ----------------------------
INSERT INTO `article_comments` VALUES (1, 58, '管理员', '这篇文章非常好！', '2023-04-21T16:00:00.000Z');
INSERT INTO `article_comments` VALUES (2, 58, '管理员', '很棒的文章', '2023-04-19T16:00:00.000Z');
INSERT INTO `article_comments` VALUES (3, 59, '管理员', '太好了', '2023-04-14T16:00:00.000Z');
INSERT INTO `article_comments` VALUES (4, 58, '张三', '测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1测试评论1', '2023-04-15T16:00:00.000Z');
INSERT INTO `article_comments` VALUES (5, 58, '李四', '测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二测试评论二', '2023-04-19T16:00:00.000Z');
INSERT INTO `article_comments` VALUES (6, 58, '管理员', '测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三测试评论三', '2023-05-01T09:46:55.936Z');
INSERT INTO `article_comments` VALUES (7, 58, '管理员', 'status', '2023-05-01T09:47:23.726Z');
INSERT INTO `article_comments` VALUES (15, 59, '管理员', '太棒了', '2023-05-01T09:59:55.627Z');

-- ----------------------------
-- Table structure for article_tags
-- ----------------------------
DROP TABLE IF EXISTS `article_tags`;
CREATE TABLE `article_tags`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `article_id` int NOT NULL,
  `tags_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `forgin_key_article_id`(`article_id`) USING BTREE,
  INDEX `forgin_key_tags_id`(`tags_id`) USING BTREE,
  CONSTRAINT `forgin_key_article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `forgin_key_tags_id` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of article_tags
-- ----------------------------
INSERT INTO `article_tags` VALUES (1, 1, 1);
INSERT INTO `article_tags` VALUES (2, 2, 2);
INSERT INTO `article_tags` VALUES (3, 2, 3);
INSERT INTO `article_tags` VALUES (4, 2, 4);
INSERT INTO `article_tags` VALUES (5, 2, 5);
INSERT INTO `article_tags` VALUES (6, 3, 4);
INSERT INTO `article_tags` VALUES (7, 4, 2);

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `add_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pub_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `keywords` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `parent_id` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 37 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES (1, '2022-11-04T06:22:15.133772Z', '2022-11-04T06:22:15.133772Z', 'Vue3', 'Vue3，vue开发，vue教程', 'vue是一款非常优秀的前端渐进式框架', NULL);
INSERT INTO `category` VALUES (2, '2022-11-04T06:23:37.903661Z', '2022-11-04T06:23:37.903661Z', 'python', 'python，python开发，python教程', 'python是当下非常流行的后端开发语言', NULL);
INSERT INTO `category` VALUES (3, '2022-11-04T06:25:04.501852Z', '2022-11-04T06:25:04.501852Z', 'JavaScript', 'js, es6, nodejs', 'js是web开发中不可缺少的脚本语言', NULL);
INSERT INTO `category` VALUES (4, '2022-11-04T06:26:48.886623Z', '2022-11-04T06:26:48.886623Z', 'Django', 'django, django开发，django教程', 'django是python web开发中非常有效的web开发框架', 2);
INSERT INTO `category` VALUES (5, '2022-11-04T06:27:35.742589Z', '2022-11-04T06:27:35.742589Z', 'Flask', 'flask, flask开发，flask教程', 'Flask是python web开发中一款非常轻量级的web开发框架', 2);
INSERT INTO `category` VALUES (34, '2023-03-31T16:00:00.000Z', '2023-04-15T16:00:00.000Z', 'Vue-Router', '嵌套路线映射   动态路由   模块化，基于组件的路由器配置', 'Vue路由器是Vue.js的官方路由器，它与Vue.js核心深度集成，使用Vue轻松构建单页应用程序变得轻而易举。', 1);
INSERT INTO `category` VALUES (35, '2023-04-25T16:00:00.000Z', '2023-04-26T16:00:00.000Z', 'pinia', 'pinia 动态模块 Vue3 极轻', 'Pinia 是什么? Pinia 是一个用于 Vue 的状态管理库，类似 Vuex, 是 Vue 的另一种状态管理方案 Pinia 支持 Vue2 和 Vue3', 1);
INSERT INTO `category` VALUES (36, '2023-04-14T16:00:00.000Z', '2023-04-15T16:00:00.000Z', 'axios', 'vuejs 尤雨溪 vue-resource axios', '随着 vuejs 作者尤雨溪发布消息，不再继续维护vue-resource，并推荐大家使用 axios 开始，axios 被越来越多的人所了解。', NULL);

-- ----------------------------
-- Table structure for category_article
-- ----------------------------
DROP TABLE IF EXISTS `category_article`;
CREATE TABLE `category_article`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int NOT NULL,
  `article_id` int NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `forgin_category_id`(`category_id`) USING BTREE,
  INDEX `forgin_article_id`(`article_id`) USING BTREE,
  CONSTRAINT `forgin_article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `forgin_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 33 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of category_article
-- ----------------------------
INSERT INTO `category_article` VALUES (1, 1, 2);
INSERT INTO `category_article` VALUES (2, 1, 3);
INSERT INTO `category_article` VALUES (3, 2, 1);
INSERT INTO `category_article` VALUES (4, 3, 4);
INSERT INTO `category_article` VALUES (27, 34, 58);
INSERT INTO `category_article` VALUES (28, 3, 59);
INSERT INTO `category_article` VALUES (29, 4, 60);
INSERT INTO `category_article` VALUES (30, 5, 61);
INSERT INTO `category_article` VALUES (31, 35, 62);
INSERT INTO `category_article` VALUES (32, 36, 63);

-- ----------------------------
-- Table structure for tags
-- ----------------------------
DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `add_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `pub_date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tags
-- ----------------------------
INSERT INTO `tags` VALUES (1, '2022-11-04T06:29:37.689785Z', '2022-11-04T06:29:37.689785Z', 'python3');
INSERT INTO `tags` VALUES (2, '2022-11-04T06:29:42.797808Z', '2022-11-04T06:29:42.797808Z', 'vue3');
INSERT INTO `tags` VALUES (3, '2022-11-04T06:29:52.875921Z', '2022-11-04T06:29:52.875921Z', 'VueRouter');
INSERT INTO `tags` VALUES (4, '2022-11-04T06:29:57.788677Z', '2022-11-04T06:29:57.788677Z', 'pinia');
INSERT INTO `tags` VALUES (5, '2022-11-04T06:30:02.323541Z', '2022-11-04T06:30:02.323541Z', 'vite');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 136 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'admin', '123456', '管理员', 'administrator');
INSERT INTO `user` VALUES (2, 'zhangsan', '123456', '张三', 'consumer');
INSERT INTO `user` VALUES (3, 'lisi', '123456', '李四', 'consumer');
INSERT INTO `user` VALUES (4, 'wangwu', '123456', '王五', 'consumer');
INSERT INTO `user` VALUES (136, '测试用户一', '123456', '测试用户一', 'administrator');

SET FOREIGN_KEY_CHECKS = 1;
