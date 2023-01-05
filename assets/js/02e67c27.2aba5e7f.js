"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6727],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||r;return n?o.createElement(m,i(i({ref:t},u),{},{components:n})):o.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5400:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"Coin Set vs UTXO Model",slug:"/coin-set-vs-utxo"},i=void 0,s={unversionedId:"coin-set-model/coin-set-vs-utxo",id:"coin-set-model/coin-set-vs-utxo",title:"Coin Set vs UTXO Model",description:"The UTXO and coin set models of accounting are very similar and are often used interchangeably. This is fine in most contexts; coin set is based on UTXO, and there is a much larger difference between the coin set and account models. However, there are a few key differences, which we'll discuss in this section.",source:"@site/docs/coin-set-model/coin-set-vs-utxo.md",sourceDirName:"coin-set-model",slug:"/coin-set-vs-utxo",permalink:"/coin-set-vs-utxo",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/coin-set-vs-utxo.md",tags:[],version:"current",frontMatter:{title:"Coin Set vs UTXO Model",slug:"/coin-set-vs-utxo"},sidebar:"tutorialSidebar",previous:{title:"Security",permalink:"/coin-set-security"},next:{title:"Coin Set vs Account Model",permalink:"/coin-set-vs-account"}},c={},l=[{value:"First class objects",id:"first-class-objects",level:2},{value:"Transaction/coin processing",id:"transactioncoin-processing",level:2},{value:"Signature type",id:"signature-type",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The UTXO and coin set models of accounting are very similar and are often used interchangeably. This is fine in most contexts; coin set is based on UTXO, and there is a much larger difference between the coin set and account models. However, there are a few key differences, which we'll discuss in this section."),(0,a.kt)("h2",{id:"first-class-objects"},"First class objects"),(0,a.kt)("p",null,"In the UTXO model, ",(0,a.kt)("em",{parentName:"p"},"transactions")," are first class objects. Each transaction has an ID and an output number, which is persisted in the system's overall state."),(0,a.kt)("p",null,"In the coin set model, ",(0,a.kt)("em",{parentName:"p"},"coins"),' are first class objects (everything is a coin). "Transaction" is a term used to represent the spending of some coins and the creation of others. Coins are the only information persisted in the system\'s overall state.'),(0,a.kt)("h2",{id:"transactioncoin-processing"},"Transaction/coin processing"),(0,a.kt)("p",null,"In Bitcoin's UTXO model, an individual block's transactions are organized as a Merkle tree, where each transaction in a block is a leaf, and the coinbase transaction is the root. The leaves must be sorted in topological, or natural, order. If transaction B spends an output of transaction A, then both A and B are allowed to occur in the same block, but A must be stored in an earlier position than B in the Merkle tree. The logic required to build such a tree requires a large amount of processing power. (See this ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/fcats-blockchain-incubator/understanding-the-bitcoin-blockchain-header-a2b0db06b515"},"Medium article")," for more info.)"),(0,a.kt)("p",null,"In Chia's coin set model, each of a block's transactions occur simultaneously. Chia uses two Merkle trees \u2013 one for removing coins, and one for adding them."),(0,a.kt)("p",null,"In a single Chia block, multiple coins can be created, and multiple coins can be spent. Individual coins can even be created and spent in the same block \u2013 these are known as ",(0,a.kt)("em",{parentName:"p"},"ephemeral")," coins. As long as the rules governing how the coins may be spent are followed, and as long as the total value added and removed is balanced (other than the coinbase coins), the transactions are valid."),(0,a.kt)("p",null,"This design comes with two advantages over UTXO: it removes the complex logic required to build a valid Merkle tree, and it reduces the viability of certain types of MEV such as front-running, back-running, and sandwich attacks."),(0,a.kt)("h2",{id:"signature-type"},"Signature type"),(0,a.kt)("p",null,"Chia uses BLS signatures, which allow for all signatures in a block to be combined, as if each block were a single transaction. This happens non-interactively - the parent of each coin is chosen automatically. For example, if three coins are spent and two are created, typically one of the spent coins will be designated as the parent of both of the new coins."),(0,a.kt)("p",null,"Bitcoin has used signatures based on the Elliptic Curve Digital Signature Algorithm (ECDSA) since its inception. These signatures don't allow for transactions to be aggregated, so each one must be validated independently. As of the Taproot upgrade in 2021, Bitcoin is also able to use Schnorr signatures, which allow for aggregation. Schnorr signatures are an improvement over ECDSA, but they don't offer the ability to combine all signatures in a block into a single signature. They also use large Merkle trees to generate M of N multisigs, and they rely on random numbers to aggregate signatures. The BLS signatures used by Chia fix all of these problems, and more."))}d.isMDXComponent=!0}}]);