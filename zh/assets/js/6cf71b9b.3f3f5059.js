"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[414],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},g="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),g=p(n),k=l,N=g["".concat(d,".").concat(k)]||g[k]||u[k]||r;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[g]="string"==typeof t?t:l,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6233:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const r={title:"Logging Reference",slug:"/logging-reference"},i=void 0,o={unversionedId:"reference-client/logging-reference",id:"reference-client/logging-reference",title:"Logging Reference",description:"Chia blockchain nodes consist of several components that each handle different aspects of farming, harvesting, the wallet and general management of a node. Each component creates entries in a single log file debug.log.",source:"@site/docs/reference-client/logging-reference.mdx",sourceDirName:"reference-client",slug:"/logging-reference",permalink:"/zh/logging-reference",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/reference-client/logging-reference.mdx",tags:[],version:"current",frontMatter:{title:"Logging Reference",slug:"/logging-reference"},sidebar:"tutorialSidebar",previous:{title:"OpenBSD Install",permalink:"/zh/openbsd-install"},next:{title:"Password Protected Keys",permalink:"/zh/passphrases-protected-keys"}},d={},p=[{value:"Log file Location:",id:"log-file-location",level:2},{value:"Log File Management:",id:"log-file-management",level:2},{value:"Log Detail Level:",id:"log-detail-level",level:2},{value:"Change the Log Level Output:",id:"change-the-log-level-output",level:2},{value:"Node Components:",id:"node-components",level:2},{value:"Log Message Format:",id:"log-message-format",level:2},{value:"Log Messages Confirming Node Health:",id:"log-messages-confirming-node-health",level:2},{value:"Other Normal Log Messages:",id:"other-normal-log-messages",level:2}],m={toc:p};function g(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Chia blockchain nodes consist of several components that each handle different aspects of farming, harvesting, the wallet and general management of a node. Each component creates entries in a single log file ",(0,l.kt)("inlineCode",{parentName:"p"},"debug.log"),"."),(0,l.kt)("h2",{id:"log-file-location"},"Log file Location:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"OS"),(0,l.kt)("th",{parentName:"tr",align:null},"Location"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Linux"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"~/.chia/mainnet/log/debug.log"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Windows"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"%systemdrive% %homepath% \\.chia\\mainnet\\debug.log")," (",(0,l.kt)("inlineCode",{parentName:"td"},"C:\\Users\\<username>\\.chia\u2026"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MacOS"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"/Users/<username>/.chia/mainnet/log/debug.log"))))),(0,l.kt)("h2",{id:"log-file-management"},"Log File Management:"),(0,l.kt)("p",null,"By default, Chia allows debug.log to grow to 20MB, and then rotates the file by closing debug.log, renaming it to debug.log.1, and renames any existing older log files to debug.log.x, to a maximum of 7 old log files. If a log rotation is required and all 7 old log files exist, the oldest log file is overwritten with the next earliest file; resulting in a maximum of 160MB of the most recent messages being stored."),(0,l.kt)("h2",{id:"log-detail-level"},"Log Detail Level:"),(0,l.kt)("p",null,"Chia is shipped with the debug.log only containing messages at the WARN or ERROR level. Many of the messages needed to fully monitor a node are only visible at the INFO level. Changes to the logging level can be done in the ",(0,l.kt)("inlineCode",{parentName:"p"},"config.yaml")," file in the ",(0,l.kt)("inlineCode",{parentName:"p"},"mainnet/config")," folder."),(0,l.kt)("h2",{id:"change-the-log-level-output"},"Change the Log Level Output:"),(0,l.kt)("p",null,"You are looking for the first reference to logging in the file that looks like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"farmer:\n  logging: &id001\n    log_filename: log/debug.log\n    log_level: WARN\n    log_stdout: false\n")),(0,l.kt)("p",null,"Change the ",(0,l.kt)("inlineCode",{parentName:"p"},"log_level")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"INFO"),", save the file, and restart the node."),(0,l.kt)("h2",{id:"node-components"},"Node Components:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Function"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null},"Signage stuff about signs and things")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester_server"),(0,l.kt)("td",{parentName:"tr",align:null},"Gathers and shares plot information")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timelord_server"),(0,l.kt)("td",{parentName:"tr",align:null},"Manages Verifiable Delay Functions for the node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null},"Controls wallet functions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"This component manages the node")))),(0,l.kt)("h2",{id:"log-message-format"},"Log Message Format:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Content"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Date/time"),(0,l.kt)("td",{parentName:"tr",align:null},"in ISO format, in local timezone")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Node Component"),(0,l.kt)("td",{parentName:"tr",align:null},"see the list above")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Log Level"),(0,l.kt)("td",{parentName:"tr",align:null},"ERROR, WARN, INFO")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Directional Arrow"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Message"),(0,l.kt)("td",{parentName:"tr",align:null},"see below")))),(0,l.kt)("h2",{id:"log-messages-confirming-node-health"},"Log Messages Confirming Node Health:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"09:55:43.847 harvester src.harvester.harvester : INFO     1 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.13772 s. Total 100 plots\n09:55:52.737 harvester src.harvester.harvester : INFO     3 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.43679 s. Total 100 plots\n09:56:01.646 harvester src.harvester.harvester : INFO     2 plots were eligible for farming 2d8b1c58a0... Found 0 proofs. Time: 0.14055 s. Total 100 plots\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"x plots were eligible for farming")," \u2013 This message from the harvester shows how the node responds to challenges. The ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," value shows how many plots passed the initial filter, ",(0,l.kt)("a",{parentName:"p",href:"/faq#what-is-the-plot-filter-and-why-didnt-my-plot-pass-it"},"more on filters here"),"."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The block prefix is shown, and the ",(0,l.kt)("inlineCode",{parentName:"li"},"Found y proofs.")," The ",(0,l.kt)("inlineCode",{parentName:"li"},"y")," value shows how many plots were accepted as proofs, and usually the value is zero. Most of the time if there is a proof you win, but not always as described in the ",(0,l.kt)("a",{parentName:"li",href:"/faq#is-it-possible-to-have-a-proof-but-not-get-a-reward"},"FAQ page"),"."),(0,l.kt)("li",{parentName:"ul"},"Next is ",(0,l.kt)("inlineCode",{parentName:"li"},"Time: x.xxx s")," which shows how long the node took to respond to the challenge. A recommended response time is less than 5 seconds. If this value is greater than 3 seconds a warning will be displayed in the GUI."),(0,l.kt)("li",{parentName:"ul"},"Finally ",(0,l.kt)("inlineCode",{parentName:"li"},"Total x plots")," shows the number of plots recognized by the node. If this doesn't look right ",(0,l.kt)("a",{parentName:"li",href:"/faq#how-do-i-know-if-my-plots-are-ok"},"check your plots are valid"),".")),(0,l.kt)("p",null,"Another log message you will see is ",(0,l.kt)("inlineCode",{parentName:"p"},"Updated Wallet peak to height x, weight y")," - This message is from the ",(0,l.kt)("inlineCode",{parentName:"p"},"wallet_blockchain")," component. Value ",(0,l.kt)("inlineCode",{parentName:"p"},"x")," is the current height of the blockchain and should match the Height shown in the ",(0,l.kt)("inlineCode",{parentName:"p"},"chia show -s")," command. This indicates that the node wallet is fully synced with the network. If that is not the case ",(0,l.kt)("a",{parentName:"p",href:"/faq#why-is-my-wallet-not-synced-why-can-i-not-connect-to-wallet-from-the-gui"},"check here for a common solution"),"."),(0,l.kt)("h2",{id:"other-normal-log-messages"},"Other Normal Log Messages:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component"),(0,l.kt)("th",{parentName:"tr",align:null},"Message"),(0,l.kt)("th",{parentName:"tr",align:null},"Direction"),(0,l.kt)("th",{parentName:"tr",align:null},"Destination"),(0,l.kt)("th",{parentName:"tr",align:null},"Cross component"),(0,l.kt)("th",{parentName:"tr",align:null},"Comment"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mempool_manager"),(0,l.kt)("td",{parentName:"tr",align:null},"add_spendbundle took x seconds"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mempool_manager"),(0,l.kt)("td",{parentName:"tr",align:null},"It took x to pre validate transaction"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Added unfinished_block x, not farmed by us"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Already compactified block:"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Duplicate compact proof. Height: x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Finished signage point x/64:"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Scanning the blockchain for uncompact blocks."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"Updated peak to height x"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_compact_vdf"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_peak"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_peak_timelord"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from timelord_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_peak_wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_signage_point"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_signage_point_or_end_of_sub_slot"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_unfinished_block"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_unfinished_block_timelord"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_block"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_block_header"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_compact_vdf"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_compact_proof_of_time"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from timelord_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_signage_point_or_end_of_sub_slot"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_unfinished_block"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_block"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_compact_vdf"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_signage_point"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_transaction"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_unfinished_block"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"peer"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null},"request_block_header"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null},"respond_block_header"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_peak_wallet"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet_blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"Updated Wallet peak to height x, weight y"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timelord_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_peak_timelord"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timelord_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_unfinished_block_timelord"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timelord_launcher"),(0,l.kt)("td",{parentName:"tr",align:null},"VDF client x: VDF Client: Discriminant ="),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"VDF Client"),(0,l.kt)("td",{parentName:"tr",align:null},"Sending Proof, Sent Proof, Stopped everything!"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester_server"),(0,l.kt)("td",{parentName:"tr",align:null},"farming_info"),(0,l.kt)("td",{parentName:"tr",align:null},"to/from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_signage_point_harvester"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester"),(0,l.kt)("td",{parentName:"tr",align:null},"x plots were eligible for farming"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"Loaded a total of x plots of size y in z seconds"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"Searching directories"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_signage_point"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null},"farming_info"),(0,l.kt)("td",{parentName:"tr",align:null},"from"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"to full_node"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"farmer_server"),(0,l.kt)("td",{parentName:"tr",align:null},"new_signage_point_harvester"),(0,l.kt)("td",{parentName:"tr",align:null},"to"),(0,l.kt)("td",{parentName:"tr",align:null},"localhost"),(0,l.kt)("td",{parentName:"tr",align:null},"from harvester"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Source"),(0,l.kt)("th",{parentName:"tr",align:null},"Level"),(0,l.kt)("th",{parentName:"tr",align:null},"Message"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"daemon asyncio"),(0,l.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Task exception was never retrieved future: ",(0,l.kt)("inlineCode",{parentName:"td"},"<Task finished coro=<WebSocketServer.statechanged() done, defined at src\\daemon\\server.py:316> exception=ValueError('list.remove(x): x not in list')>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node asyncio"),(0,l.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"SSL error in data received protocol: ",(0,l.kt)("inlineCode",{parentName:"td"},"<asyncio.sslproto.SSLProtocol object at 0x7f762544a8>")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Exception: Failed to fetch block ",(0,l.kt)("inlineCode",{parentName:"td"},"N")," from {'host': ",(0,l.kt)("inlineCode",{parentName:"td"},"IP ADDRESS"),", 'port': 8444}, timed out, {'host': ",(0,l.kt)("inlineCode",{parentName:"td"},"IP ADDRESS"),", 'port': 8444}."),(0,l.kt)("td",{parentName:"tr",align:null},"Peer disconnected, other peer connections will take over")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"ERROR"),(0,l.kt)("td",{parentName:"tr",align:null},"Exception: ",(0,l.kt)("inlineCode",{parentName:"td"},"<class 'concurrent.futures._base.CancelledError'>"),", closing connection None."),(0,l.kt)("td",{parentName:"tr",align:null},"Peer disconnected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"[Errno 32]"," Broken pipe ",(0,l.kt)("inlineCode",{parentName:"td"},"IP Address")),(0,l.kt)("td",{parentName:"tr",align:null},"Peer disconnected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"Cannot write to closing transport ",(0,l.kt)("inlineCode",{parentName:"td"},"IP Address")),(0,l.kt)("td",{parentName:"tr",align:null},"Peer disconnected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"Not farming plot ",(0,l.kt)("inlineCode",{parentName:"td"},"plotfilename"),". Size is ",(0,l.kt)("inlineCode",{parentName:"td"},"filesize")," GiB, but expected at least: 99.06 GiB. We assume the file is being copied."),(0,l.kt)("td",{parentName:"tr",align:null},"Periodic scan for new plots have discovered partial file - OK if you are in the middle of copying a file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"Directory: ",(0,l.kt)("inlineCode",{parentName:"td"},"Dir1")," does not exist."),(0,l.kt)("td",{parentName:"tr",align:null},"One of your monitored plot folders is no longer accessible - eg external drive offline - if permanent remove from GUI or ",(0,l.kt)("inlineCode",{parentName:"td"},"chia plots remove -d <Dir1>"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"Have multiple copies of the plot ",(0,l.kt)("inlineCode",{parentName:"td"},"plotfilename"),", not adding it."),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Not checking subdirectory ",(0,l.kt)("inlineCode",{parentName:"td"},"Dir1/directory"),", subdirectories not added by default"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node full_node_server"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection closed: ",(0,l.kt)("inlineCode",{parentName:"td"},"IP Address"),", node id: ",(0,l.kt)("inlineCode",{parentName:"td"},"hex")),(0,l.kt)("td",{parentName:"tr",align:null},"Peer disconnected")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node src.full_node.full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"\u23f2\ufe0f Finished signage point ",(0,l.kt)("inlineCode",{parentName:"td"},"N"),"/64: ",(0,l.kt)("inlineCode",{parentName:"td"},"hex")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"full_node src.full_node.full_node"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Added unfinished_block ",(0,l.kt)("inlineCode",{parentName:"td"},"hex"),", not farmed"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Searching directories ","[",(0,l.kt)("inlineCode",{parentName:"td"},"Dir1"),",",(0,l.kt)("inlineCode",{parentName:"td"},"Dir2"),"]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.plotting.plot_tools"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"Loaded a total of ",(0,l.kt)("inlineCode",{parentName:"td"},"N")," plots of size ",(0,l.kt)("inlineCode",{parentName:"td"},"size")," TiB, in ",(0,l.kt)("inlineCode",{parentName:"td"},"time")," seconds"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"harvester src.harvester.harvester"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"X")," plots were eligible for farming ",(0,l.kt)("inlineCode",{parentName:"td"},"hex"),"... Found ",(0,l.kt)("inlineCode",{parentName:"td"},"Y")," proofs. Time: ",(0,l.kt)("inlineCode",{parentName:"td"},"Time")," s. Total ",(0,l.kt)("inlineCode",{parentName:"td"},"Z")," plots"),(0,l.kt)("td",{parentName:"tr",align:null},"This is a vital message and should be seen at regular intervals. Note that ",(0,l.kt)("inlineCode",{parentName:"td"},"Time")," is ideally < 1s. If drive is in sleep mode, may show ~10 seconds, and should be prevented")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"wallet src.wallet.wallet_blockchain"),(0,l.kt)("td",{parentName:"tr",align:null},"INFO"),(0,l.kt)("td",{parentName:"tr",align:null},"\ud83d\udcb0 Updated wallet peak to height ",(0,l.kt)("inlineCode",{parentName:"td"},"HEIGHT"),", weight ",(0,l.kt)("inlineCode",{parentName:"td"},"WEIGHT"),","),(0,l.kt)("td",{parentName:"tr",align:null})))))}g.isMDXComponent=!0}}]);