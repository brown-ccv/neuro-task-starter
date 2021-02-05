(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),o=(n(0),n(86)),r={id:"folders",title:"Project Organization"},s={unversionedId:"folders",id:"folders",isDocsHomePage:!1,title:"Project Organization",description:"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders.",source:"@site/docs/folders.md",slug:"/folders",permalink:"/docs/folders",editUrl:"https://github.com/brown-ccv/honeycomb/edit/documentation/honeycomb/docs/folders.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Best Practices",permalink:"/docs/best_practices"}},l=[{value:"<code>package.json</code>",id:"packagejson",children:[]},{value:"<code>assets/</code>",id:"assets",children:[]},{value:"<code>public/</code>",id:"public",children:[]},{value:"<code>src/</code>",id:"src",children:[]}],c={toc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project directory is organized to be very modular and composable. In general, files and functions should be relatively small and self-contained, global scope should not be used (and definitely not mutated), and only the pieces of code needed for any given file should be imported. This keeps the code maintainable with clear lineage and purpose for each piece of code. Below are descriptions of the main files and folders."),Object(o.b)("h3",{id:"packagejson"},Object(o.b)("inlineCode",{parentName:"h3"},"package.json")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," file contains metadata about your project and scripts to run tasks related to your task. The ",Object(o.b)("inlineCode",{parentName:"p"},"name")," should be updated to your task's name and ",Object(o.b)("inlineCode",{parentName:"p"},"scripts")," can be added as desired, but otherwise this file should not be edited manually.  To remove or add a dependency use ",Object(o.b)("inlineCode",{parentName:"p"},"npm install")," or ",Object(o.b)("inlineCode",{parentName:"p"},"npm uninstall")," with the ",Object(o.b)("inlineCode",{parentName:"p"},"-D")," flag if installing a dev dependency."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"package-lock.json")," contains metadata about the package installation. It should never be manually updated."),Object(o.b)("h3",{id:"assets"},Object(o.b)("inlineCode",{parentName:"h3"},"assets/")),Object(o.b)("p",null,"The icons used for the installed applications are put here."),Object(o.b)("h3",{id:"public"},Object(o.b)("inlineCode",{parentName:"h3"},"public/")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"public")," directory contains files that are used as assets in the built app. The ",Object(o.b)("inlineCode",{parentName:"p"},"favicon.ico")," is the small icon you can see in the browser tab (on Chrome) - it is set to Brown's logo in the project. The ",Object(o.b)("inlineCode",{parentName:"p"},"index.html")," contains the shell of your website - the name displayed on the tab can be changed here, otherwise it shouldn't need to be edited. The scripts included in the file are for ",Object(o.b)("inlineCode",{parentName:"p"},"psiturk")," as are the files in the ",Object(o.b)("inlineCode",{parentName:"p"},"lib/")," directory."),Object(o.b)("h4",{id:"electronjs"},Object(o.b)("inlineCode",{parentName:"h4"},"electron.js")),Object(o.b)("p",null,"This file contains all of the code relating to the electron app. This includes the event-marker, throwing errors via dialog windows, saving data, and reading files."),Object(o.b)("h4",{id:"config"},Object(o.b)("inlineCode",{parentName:"h4"},"config/")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"config")," directory contains the config files needed for the electron app.  This includes the event-marker details and event codes."),Object(o.b)("p",null,"Note: the productId can be overwritten by the environment variable EVENT_MARKER_PRODUCT_ID"),Object(o.b)("h3",{id:"src"},Object(o.b)("inlineCode",{parentName:"h3"},"src/")),Object(o.b)("p",null,"This folder contains the code for the app, the vast majority of changes and code should go here."),Object(o.b)("h4",{id:"appjs"},Object(o.b)("inlineCode",{parentName:"h4"},"App.js")),Object(o.b)("p",null,"This is the starting point for the app. The ",Object(o.b)("inlineCode",{parentName:"p"},"<Experiment>")," component initializes a ",Object(o.b)("inlineCode",{parentName:"p"},"jspsych")," experiment. This is also where communication is set up with the ",Object(o.b)("inlineCode",{parentName:"p"},"electron")," and ",Object(o.b)("inlineCode",{parentName:"p"},"psiturk")," processes."),Object(o.b)("h4",{id:"appcss"},Object(o.b)("inlineCode",{parentName:"h4"},"App.css")),Object(o.b)("p",null,"This is where styling for the app is housed. If colors, fonts, spacing, etc. need to be set, do it here."),Object(o.b)("h4",{id:"assets-1"},Object(o.b)("inlineCode",{parentName:"h4"},"assets/")),Object(o.b)("p",null,"This folder contains any static files that are used by the app, such as images."),Object(o.b)("h4",{id:"config-1"},Object(o.b)("inlineCode",{parentName:"h4"},"config/")),Object(o.b)("p",null,"In the ",Object(o.b)("inlineCode",{parentName:"p"},"config/")," directory, there are ",Object(o.b)("inlineCode",{parentName:"p"},".js")," files which contain settings for the different parts of the task.  Every task should have a ",Object(o.b)("inlineCode",{parentName:"p"},"main")," config and a ",Object(o.b)("inlineCode",{parentName:"p"},"trigger")," config (assuming use of the event marker). The ",Object(o.b)("inlineCode",{parentName:"p"},"main")," config has all global settings for the task (such as whether it is in mturk mode or not), load the appropriate language file, and set up a default (or only) configuration object for the task. The ",Object(o.b)("inlineCode",{parentName:"p"},"trigger")," config has settings specific to the event marker and uses a slightly different style of javascript as it is imported both in the React app as well as the electron process."),Object(o.b)("p",null,"Other config files can be used to add settings for specific blocks or sub-sections of the experiment."),Object(o.b)("h4",{id:"language"},Object(o.b)("inlineCode",{parentName:"h4"},"language/")),Object(o.b)("p",null,"Any language that is displayed in the experiment should be stored in this folder. Usage of language json files allows for easy internationalization of the task (e.g. english and spanish) as well as allows for mturk specific language. This also makes it easy to re-use common phrases in many places in the task."),Object(o.b)("h4",{id:"lib"},Object(o.b)("inlineCode",{parentName:"h4"},"lib/")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"lib/")," directory contains utility functions and markup that is used in the tasks.  This allows for functions and html to be re-used wherever needed. The ",Object(o.b)("inlineCode",{parentName:"p"},"lib/utils.js")," file contains functions that are generally useful across many tasks, whereas ",Object(o.b)("inlineCode",{parentName:"p"},"lib/taskUtils.js")," contains functions specific to this task."),Object(o.b)("h4",{id:"libmarkup"},Object(o.b)("inlineCode",{parentName:"h4"},"lib/markup")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"markup")," files should contain primarily templates for HTML that is used throughout the task. Typically this will be a function that takes in some parameters and then returns a string with html."),Object(o.b)("h4",{id:"timelines"},Object(o.b)("inlineCode",{parentName:"h4"},"timelines")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jspsych")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"timelines")," to control what ",Object(o.b)("inlineCode",{parentName:"p"},"trials")," are displayed in what order.  ",Object(o.b)("inlineCode",{parentName:"p"},"timelines")," can contain other ",Object(o.b)("inlineCode",{parentName:"p"},"timelines"),", which is why there may be several files in this directory.  The ",Object(o.b)("inlineCode",{parentName:"p"},"main.js")," file should have the timeline that is called by ",Object(o.b)("inlineCode",{parentName:"p"},"App.js"),"."),Object(o.b)("h4",{id:"trials"},Object(o.b)("inlineCode",{parentName:"h4"},"trials")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"jspsych")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"trials")," as its base unit of an experiment. These trials do things such as display some stimulus or request a response."))}d.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,u=p["".concat(r,".").concat(h)]||p[h]||b[h]||o;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);