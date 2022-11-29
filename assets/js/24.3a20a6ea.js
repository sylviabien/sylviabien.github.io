(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{295:function(t,a,r){"use strict";r.r(a);var e=r(13),s=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[t._v("#")]),t._v(" 🔖概述")]),t._v(" "),a("div",{staticClass:"language-txt line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-txt"}},[a("code",[t._v('<font style="background: MediumSpringGreen">\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录"}},[t._v("#")]),t._v(" 目录")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#目录"}},[t._v("目录")])]),a("li",[a("a",{attrs:{href:"#_0-类型系统"}},[t._v("0.类型系统")]),a("ul",[a("li",[a("a",{attrs:{href:"#推荐教材"}},[t._v("推荐教材")])])])]),a("li",[a("a",{attrs:{href:"#_1-动-静态语言"}},[t._v("1.动/静态语言")])]),a("li",[a("a",{attrs:{href:"#_2-强-弱类型语言"}},[t._v("2.强/弱类型语言")])]),a("li",[a("a",{attrs:{href:"#_3-判断-类型安全语言"}},[t._v("3.判断：类型安全语言？")])]),a("li",[a("a",{attrs:{href:"#_4-分类-编程范式"}},[t._v("4.分类：编程范式")])]),a("li",[a("a",{attrs:{href:"#推荐链接"}},[t._v("推荐链接")])])])]),a("p"),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("blockquote",[a("p",[t._v("语言分类方法")])]),t._v(" "),a("h2",{attrs:{id:"_0-类型系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-类型系统"}},[t._v("#")]),t._v(" 0.类型系统")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("来自，冯新宇的"),a("a",{attrs:{href:"https://www.bilibili.com/video/BV1wF411c75B?spm_id_from=333.999.0.0&vd_source=0bfc8d96ae196e7e4b13f92b20e7bd4e",target:"_blank",rel:"noopener noreferrer"}},[t._v("视频讲解"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("类型系统其实在编程语言里面其实是一个很"),a("strong",[t._v("关键")]),t._v("的概念，或者说一些特性，但是其实"),a("strong",[t._v("反而在我们的编译课程中，这方面介绍得比较少")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801105131372.png",alt:""}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801105030842.png",alt:"image-20220801105030842"}})]),t._v(" "),a("ul",[a("li",[t._v("我们讲到类型系统，往往，我们不可避免的，要讲，所谓的动态/静态类型语言")]),t._v(" "),a("li",[t._v("动态/静态类型语言，实际上是指，我们在什么时候，做类型检查以及这个程序或许变量的类型在程序执行过程当中会不会发生变化。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801105506029.png",alt:"image-20220801105506029"}})]),t._v(" "),a("ul",[a("li",[t._v("动态类型语言，我们主要包括各种脚本语言\n"),a("ul",[a("li",[t._v("动态类型语言，因为你的类型会变的话，你很难在编译的时候做预判，所以一般以解释执行为主、")]),t._v(" "),a("li",[t._v("性能差：\n"),a("ul",[a("li",[t._v("1方面，在运行过程中要检查类型是不是匹配")]),t._v(" "),a("li",[t._v("1方面，因为编译器没有编译的过程，或者说，即便是你想编译，比如现在是脚本语言，但是我能不能给他写个编译器，就提升了他的性能？实际上是不容易做到的，因为类型会变的话，编译器也没办法做有效性的静态的编译和优化。")])])]),t._v(" "),a("li",[t._v("可靠性差：\n"),a("ul",[a("li",[t._v("如果类型不匹配的错误，要在执行过程当中才能发现")])])]),t._v(" "),a("li",[t._v("难以支持大规模的软件开发\n"),a("ul",[a("li",[t._v("因为太自由了")])])])])])]),t._v(" "),a("p",[t._v("静态类型语言")]),t._v(" "),a("ul",[a("li",[t._v("类型检查在编译期完成\n"),a("ul",[a("li",[t._v("如果有类型不匹配的错误，在编译期间就能报错")])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801110155005.png",alt:"image-20220801110155005"}})]),t._v(" "),a("ul",[a("li",[t._v("举例子：")])]),t._v(" "),a("p",[t._v("体现，这2种，在编程约束上的1个区别")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801110524008.png",alt:"image-20220801110524008"}})]),t._v(" "),a("ul",[a("li",[t._v("还有，结合2者的区别")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801111314833.png",alt:"image-20220801111314833"}})]),t._v(" "),a("h3",{attrs:{id:"推荐教材"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐教材"}},[t._v("#")]),t._v(" 推荐教材")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/HACV/picture/img/image-20220801112525156.png",alt:"image-20220801112525156"}})]),t._v(" "),a("h2",{attrs:{id:"_1-动-静态语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-动-静态语言"}},[t._v("#")]),t._v(" 1.动/静态语言")]),t._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("graph")]),t._v(" LR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("动态语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("静态语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[a("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("动态")]),t._v("语言：是一类在"),a("strong",[t._v("运行")]),t._v("时可以改变其结构的语言：例如新的函数、对象、"),a("strong",[t._v("甚至代码可以被引进")]),t._v("，"),a("strong",[t._v("已有的函数可以被删除")]),t._v("或是其他结构上的变化。通俗点说就是在运行时代码可以根据某些条件改变自身结构。")],1),t._v(" "),a("ul",[a("li",[t._v("主要动态语言:"),a("code",[t._v("Object-C")]),t._v("、"),a("code",[t._v("C#")]),t._v("、"),a("code",[t._v("JavaScript")]),t._v("、"),a("code",[t._v("PHP")]),t._v("、"),a("code",[t._v("Python")]),t._v("等")])]),t._v(" "),a("p",[a("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("静态")]),t._v("语言：与动态语言相对应的，运行时结构不可变的语言就是静态语言。如"),a("code",[t._v("Java")]),t._v("、"),a("code",[t._v("C")]),t._v("、"),a("code",[t._v("C++")]),t._v("。"),a("br"),t._v("\nJava不是动态语言，但Java可以称之为“"),a("strong",[t._v("准动态语言")]),t._v("”。即Java有一定的动态性，我们可以利用反射机制获得类似动态语言的特性。Java的动态性让编程的时候更加灵活!")],1),t._v(" "),a("div",{staticClass:"language-cpp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("var"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nvar"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h2",{attrs:{id:"_2-强-弱类型语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-强-弱类型语言"}},[t._v("#")]),t._v(" 2.强/弱类型语言")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Wiki百科："),a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%BC%B7%E5%BC%B1%E5%9E%8B%E5%88%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("强弱类型"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Wiki百科："),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Strong_and_weak_typing#Definitions_of_%22strong%22_or_%22weak%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("Strong and weak typing"),a("OutboundLink")],1)])])]),t._v(" "),a("p",[a("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("强类型语言")]),t._v("？")],1),t._v(" "),a("ul",[a("li",[t._v("要求变量的使用要严格符合规定，所有变量都必须先定义后才能使用")])]),t._v(" "),a("p",[t._v("比如，Fortran是强变量类型的编程语言，他的变量类型必须在编译时确定，并且不允许改变。")]),t._v(" "),a("p",[a("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("弱类型语言")]),t._v("？")],1),t._v(" "),a("p",[t._v("比如，JavaScript")]),t._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("graph")]),t._v(" LR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("强类型语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("弱类型语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("ul",[a("li",[t._v("其他参考，知乎，"),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/62570358",target:"_blank",rel:"noopener noreferrer"}},[t._v("什么是强类型语言，什么是弱类型语言，为什么python也是强类型语言。"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_3-判断-类型安全语言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-判断-类型安全语言"}},[t._v("#")]),t._v(" 3.判断：类型安全语言？")]),t._v(" "),a("ul",[a("li",[t._v("Wiki百科："),a("a",{attrs:{href:"https://zh.wikipedia.org/zh-cn/%E5%9E%8B%E5%88%A5%E5%AE%89%E5%85%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("类型安全"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("参考自《编译原理》，“龙书”第2版，P300")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("不是所有的语言都适合进行自动垃圾回收")]),t._v("。为了使垃圾回收器能够工作，他必选知道任何给定的数据元素或一个元素的分量是否为「或可否被用作」一个指向某块已分配存储空间的指针。\n"),a("ul",[a("li",[t._v("在一种语言中，如果"),a("strong",[t._v("任何数据分量")]),t._v("的"),a("strong",[t._v("类型")]),t._v("都是可确定的，那么这种语言就称为**类型安全（typesafe）**的。\n"),a("ul",[a("li",[t._v("对于某些类型安全的语言，比如ML，我们"),a("font",{staticStyle:{background:"yellow"}},[t._v("可以在「编译时刻」确定")]),t._v("数据的类型。")],1),t._v(" "),a("li",[t._v("另外一些"),a("strong",[t._v("类型安全")]),t._v("语言，比如"),a("font",{staticStyle:{background:"pink"}},[t._v("Java")]),t._v("，其类型"),a("font",{staticStyle:{background:"yellow"}},[t._v("不能在「编译时刻」确定")]),t._v("，但是"),a("font",{staticStyle:{background:"yellow"}},[t._v("可以在「运行时刻」确定")]),t._v("「这个称为：**动态类型（dynamically typed）**语言」")],1)])])])])]),t._v(" "),a("p",[t._v("如果一个语言"),a("strong",[t._v("既不是：静态类型安全的")]),t._v("，"),a("strong",[t._v("也不是：动态类型安全的")]),t._v("，他就被称为不安全的（unsafe）")]),t._v(" "),a("div",{staticClass:"language-mermaid line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-mermaid"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("graph")]),t._v(" LR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("静态类型安全语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("动态类型安全语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  语言"),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("--\x3e")]),t._v("不安全语言"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  A"),a("span",{pre:!0,attrs:{class:"token inter-arrow-label"}},[a("span",{pre:!0,attrs:{class:"token arrow-head arrow operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token label property"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token arrow operator"}},[t._v("===")])]),t._v("B\t\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[a("font",{staticStyle:{background:"MediumSpringGreen"}},[t._v("类型安全")]),t._v("的语言，不适合使用自动垃圾回收机制。\n"),a("ul",[a("li",[t._v("遗憾的是，有些最重要语言却是"),a("strong",[t._v("类型不安全")]),t._v("的，比如"),a("font",{staticStyle:{background:"pink"}},[t._v("C和C++")])],1),t._v(" "),a("li",[t._v("在不安全语言中，存储地址可以进行任意操作：可以将任意的算术运算应用于指针，创建出一个新的指针，并且"),a("strong",[t._v("任何整数都可以被强制转化为指针")]),t._v("。")]),t._v(" "),a("li",[t._v("因此"),a("strong",[t._v("从理论上")]),t._v("来说：一个程序可以在任何时候引用内存中的任何位置！这样，没有哪个内存位置可能被认为是不可访问的，也就无法安全地收回任何存储空间。\n"),a("ul",[a("li",[t._v("但是，在实践中，大部分C和C++程序并没有随意地生成指针。因此人们开发了一个在理论上不正确，但是实践经验表明很有效的垃圾回收器。")])])])])],1),t._v(" "),a("li",[t._v("在C++中允许不同类型指针之间进行强制转换（"),a("code",[t._v("C#")]),t._v("是类型安全的）")])]),t._v(" "),a("h2",{attrs:{id:"_4-分类-编程范式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-分类-编程范式"}},[t._v("#")]),t._v(" 4.分类：编程范式")]),t._v(" "),a("h2",{attrs:{id:"推荐链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐链接"}},[t._v("#")]),t._v(" 推荐链接")]),t._v(" "),a("ul",[a("li",[t._v("TIOBE"),a("a",{attrs:{href:"https://www.tiobe.com/tiobe-index/",target:"_blank",rel:"noopener noreferrer"}},[t._v("编程社区指数"),a("OutboundLink")],1),t._v("（The TIOBE Programming Community index）")])])])}),[],!1,null,null,null);a.default=s.exports}}]);