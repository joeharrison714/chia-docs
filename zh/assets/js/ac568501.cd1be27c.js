"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2868],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=h(o),u=r,p=c["".concat(l,".").concat(u)]||c[u]||m[u]||n;return o?a.createElement(p,i(i({ref:t},d),{},{components:o})):a.createElement(p,i({ref:t},d))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,i=new Array(n);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<n;h++)i[h]=o[h];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},6411:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>h});var a=o(7462),r=(o(7294),o(3905));const n={title:"Timelords",slug:"/timelord-architecture"},i=void 0,s={unversionedId:"architecture/timelords",id:"architecture/timelords",title:"Timelords",description:'Timelords support the network by creating sequential proofs of time (using a Verifiable Delay Function) and broadcasting them approximately every nine seconds. This provides "deterministic randomness", which is used to decide the winning proofs of space.',source:"@site/docs/architecture/timelords.md",sourceDirName:"architecture",slug:"/timelord-architecture",permalink:"/zh/timelord-architecture",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/architecture/timelords.md",tags:[],version:"current",frontMatter:{title:"Timelords",slug:"/timelord-architecture"},sidebar:"tutorialSidebar",previous:{title:"Harvesters",permalink:"/zh/harvester-architecture"},next:{title:"Pools",permalink:"/zh/pool-architecture"}},l={},h=[{value:"Types of Timelords",id:"types-of-timelords",level:2},{value:"The Fastest Timelords",id:"the-fastest-timelords",level:2},{value:"Running a Timelord",id:"running-a-timelord",level:2},{value:"Installing a Timelord",id:"installing-a-timelord",level:2},{value:"Regular Timelords",id:"regular-timelords",level:3},{value:"Bluebox Timelords",id:"bluebox-timelords",level:3},{value:"The Future of Timelords",id:"the-future-of-timelords",level:2},{value:"Timelords and Attacks",id:"timelords-and-attacks",level:2},{value:"Terminology",id:"terminology",level:2}],d={toc:h};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Timelords support the network by creating sequential proofs of time (using a ",(0,r.kt)("a",{parentName:"p",href:"/proof-of-time"},"Verifiable Delay Function"),') and broadcasting them approximately every nine seconds. This provides "deterministic randomness", which is used to decide the winning proofs of space.'),(0,r.kt)("p",null,"Since this computation is sequential, very little energy is consumed, as opposed to proof-of-work systems, where computation is parallelizable. For example, if 100 timelords are doing the same computation on a proof of time, they will all create the exact same output."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The timelord algorithm is explained in the ",(0,r.kt)("a",{parentName:"p",href:"/timelord-algorithm"},"Timelord Algorithm page"),".")),(0,r.kt)("p",null,"A timelord is required to connect to exactly one full node, typically on the same machine. This connection is verified with a certificate. This 1:1 architecture has a large security benefit: it keeps the timelord sandboxed in its own private network. That way, the full node protocol is the only protocol that requires total security. If more than one full node could connect to the same timelord, it would add a potential attack vector to the network."),(0,r.kt)("p",null,"Timelords do not directly earn rewards. Furthermore, only the fastest timelord on the network will broadcast proofs at any given time. Therefore, only one timelord is required to keep the network running, and most farmers will not feel compelled to run one. However, farmers with multi-PiB farms may want to run a timelord, both for redundancy and for protection against temporary local latency issues."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Chia network is currently ",(0,r.kt)("a",{parentName:"p",href:"https://www.businesswire.com/news/home/20211013005324/en/Chia-Partners-With-Supranational-to-Create-Industry-Leading-Proof-of-Space-Time-Security"},"developing an ASIC timelord"),". This will add redundancy to the network, while reducing the possibility of an attacker creating their own timelord that is significantly faster than anyone else's.")),(0,r.kt)("p",null,"If someone controls the fastest timelord in the world, it doesn't give them much of an advantage at winning rewards. However, they could potentially orphan or censor other farmers, depending on how much faster their timelord is."),(0,r.kt)("p",null,"Furthermore, an attacker with a significantly faster timelord than anyone else could potentially run a long-range attack against the network with less than 42.7% of the total netspace. For security purposes, it is very important to maintain open designs of VDF hardware."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can learn about potential attacks against Chia's network in the ",(0,r.kt)("a",{parentName:"p",href:"/consensus-attacks"},"Attacks and Countermeasures page"),".")),(0,r.kt)("h2",{id:"types-of-timelords"},"Types of Timelords"),(0,r.kt)("p",null,"There are two primary types of Timelords: Regular and Blueboxes."),(0,r.kt)("p",null,"The first is the core Timelord that takes in Proofs of Space and uses a single fastest core to perform repeated squaring in a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/vdf-competition/blob/master/classgroups.pdf"},"class group of unknown order")," as fast as possible. Beside each running VDF (referred to as a vdf_client in the application and source) is a set of proof generation threads that accumulate the proof that the time calculation's number of iterations was done correctly."),(0,r.kt)("p",null,"The second are Bluebox Timelords. Blueboxes are most any machine - especially things like old servers or gaming machines - that scour the historical chain looking for uncompressed proofs of time. So that the chain moves quickly, the regular Timelords use a faster method of generating proofs of time but the proofs are larger, which takes your Raspberry Pi a lot more time and effort to validate and sync the blockchain. A Bluebox picks up an uncompressed Proof of Time and recreates it, but this time with the slower and more compact proofs generated at the end. Those are then gossiped around to everyone so they can replace the large and slow to verify Proofs of Time with the compact and much quicker to validate version of exactly the same thing."),(0,r.kt)("h2",{id:"the-fastest-timelords"},"The Fastest Timelords"),(0,r.kt)("p",null,"There are three known fastest Timelords seen so far. The fastest known was seen around September of 2020 on the testnet blockchain, where it was generating VDF iterations at about 360,000 iterations per second (or ips.) It disappeared after a few weeks. We speculate that it was an Intel cloud customer playing with pre-release Rocket Lake CPUs that have two channels of ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AVX-512#IFMA"},"AVX-512 IFMA")," support. The Timelord source code has an implementation of IFMA but it's not enabled by default as the very few CPUs that do have one channel of IFMA don't gain much speed from it - primarily because they're mostly found in power saving laptops. The second \"known\" fast Timelord is an ",(0,r.kt)("a",{parentName:"p",href:"https://ieeexplore.ieee.org/abstract/document/9301680"},"academic research project"),". It is estimated that it may be in the 400k-500k ips range once modified to run our 1024 bit width version. The originators used the ",(0,r.kt)("a",{parentName:"p",href:"https://www.tsmc.com/english"},"TSMC")," 28-nm CMOS technology for their prototype. Until Rocket Lake is generally available (which is soon as of this writing in early March) the fastest Timelord is a water-cooled Intel Core i9-10900K running un-overclocked with 16 GiB of RAM. Sooner or later we will overclock it... It maintains about 200k-210k ips."),(0,r.kt)("h2",{id:"running-a-timelord"},"Running a Timelord"),(0,r.kt)("p",null,"First of all, the network only requires one running Timelord to keep moving (liveness.) The way Timelords race is like they are on a series of 100 meter dashes. Each one takes off with the last good Proof of Space and tries to get to the total number of iterations required to complete a given Proof of Space. Better Proofs of Space require less iterations to prove. When the fastest Timelord announces the Proof of Time for this Proof of Space all of the other Timelords stop racing and are magically teleported to the starting line of the next 100 meter dash to start it all over again."),(0,r.kt)("p",null,"It's good to have a few Timelords out there. There can be things like routing flaps or the overzealous backhoe that takes large swaths of the internet offline. If the fastest Timelord was just about to win the current dash when its internet blinked off in a fury of construction misadventure, then the second fastest will win that dash and the next dashes - until the fastest returns. One of the key things about Proofs of Time is that given the same Proof of Space, their output and proof are always the same (though the proofs can be larger or smaller and harder or easier to validate - they all end up with the same outcome.)"),(0,r.kt)("p",null,"The Company plans to run a few Timelords around the world - and some backups too - just to make sure that all Farmers and nodes can hear the beat that the Timelords are calling."),(0,r.kt)("h2",{id:"installing-a-timelord"},"Installing a Timelord"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you want to run a Timelord on Linux, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/BUILD_TIMELORD.md"},"BUILD_TIMELORD.md"),". Information on blue boxes coming soon.")),(0,r.kt)("p",null,"Timelords execute sequential verifiable delay functions (proofs of time or VDFs), that get added to\nblocks to make them valid. This requires fast CPUs and a few cores per VDF as well as completing the install steps above and running the following from the chia-blockchain directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\nsh install-timelord.sh\nchia start timelord &\n")),(0,r.kt)("h3",{id:"regular-timelords"},"Regular Timelords"),(0,r.kt)("p",null,"Due to restrictions on how ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Microsoft_Visual_C%2B%2B"},"MSVC")," handles 128 bit numbers and how Python relies upon MSVC, it is not possible to build and run Timelords of all types on Windows - yet. We have a plan to use GCC and some tools to enable vdf_client on Windows in a way that will be compatible with a Windows install of chia-blockchain. However it's a bit convoluted to get it working right. On MacOS x86_64 and all Linux distributions, building a Timelord is as easy as running ",(0,r.kt)("inlineCode",{parentName:"p"},"sh install-timelord.sh")," in the venv of a ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," style chia-blockchain install. Try ",(0,r.kt)("inlineCode",{parentName:"p"},"./vdf_bench square_asm 400000")," once you've built Timelord to give you a sense of your optimal and unloaded ips. Each run of ",(0,r.kt)("inlineCode",{parentName:"p"},"vdf_bench"),' can be surprisingly variable and, in production, the actual ips you will obtain will usually be about 20% lower due to load of creating proofs. The default configuration for Timelords is good enough to just let you start it up. Set your log level to INFO and then grep for "Estimated IPS:" to get a sense of what actual ips your Timelord is achieving. We will shortly modify the Timelord build process to support MacOS ARM64 as well - which is a cakewalk compared to Windows...'),(0,r.kt)("h3",{id:"bluebox-timelords"},"Bluebox Timelords"),(0,r.kt)("p",null,"For now, Blueboxes are also restricted to basically anything but Windows. Our plans to port to Windows will make Blueboxes available there as well though. Once you build the Timelord with ",(0,r.kt)("inlineCode",{parentName:"p"},"sh install-timelord.sh")," in the venv, you will need to make two changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.chia/VERSION/config.yaml"),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"timelord:")," section you will want to set ",(0,r.kt)("inlineCode",{parentName:"p"},"bluebox_mode:")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". Then you need to proceed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"full_node:")," section and set ",(0,r.kt)("inlineCode",{parentName:"p"},"send_uncompact_interval:")," to something greater than 0. We recommend ",(0,r.kt)("inlineCode",{parentName:"p"},"300")," seconds there so that your Bluebox has some time to prove through a lot of the un-compacted Proofs of Time before the node drops more into its lap. The default settings may otherwise work but if the total effort is a little too much for whatever machine you are on you can also lower the ",(0,r.kt)("inlineCode",{parentName:"p"},"process_count:")," from 3 to 2, or even 1, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"timelord_launcher:")," section. You know it is working if you see ",(0,r.kt)("inlineCode",{parentName:"p"},"VDF Client: Sent proof")," in your logs at INFO level."),(0,r.kt)("h2",{id:"the-future-of-timelords"},"The Future of Timelords"),(0,r.kt)("p",null,"Having an open-source ASIC Timelord that everyone can buy inexpensively is the Company's goal. We had originally expected that we would proceed from general-purpose CPUs to FPGAs and then ASICs. It turns out that squaring in class groups of unknown order at 1024 bit widths is both FPGA hard and slightly ASIC hard. It also was a pleasant surprise that Intel's AVX-512 IFMA was almost perfectly created for this application. As such, we will be fostering ASIC efforts over the medium term. We are happy to lose money on an ongoing project to create and enhance an open-source PCI card that would be available for say $250 for anyone who wishes to run the fastest Timelords in the world too."),(0,r.kt)("h2",{id:"timelords-and-attacks"},"Timelords and Attacks"),(0,r.kt)("p",null,"One of the things that is great about ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1tmRIb7lgi4QfKkNaxuKOBHRmwbVlGL4f7EsBDr_5xZE/edit"},"Chia's new consensus"),' is that it makes it almost impossible for a Farmer with a maliciously faster Timelord to selfishly Farm. Due to the way the new consensus works, a Farmer with a faster Timelord is basically compelled to prove time for all the farmers winning blocks around him also. Having an "evil" faster Timelord can give a benefit when attempting to 51% attack the network, so it is still important that over time we push the Timelord speeds as close to the maximum speeds of the silicon processes available. We expect to have the time and the resources to do that right and make open-source hardware versions widely available.'),(0,r.kt)("h2",{id:"terminology"},"Terminology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'VDF: verifiable delay function, another way to say "proof of time"'),(0,r.kt)("li",{parentName:"ul"},'Timelord launcher: a small program which launches "vdf client" processes over and over, to perform the actual VDF calculations.'),(0,r.kt)("li",{parentName:"ul"},"VDF client: a C++ process which performs a VDF computation and then shuts down"),(0,r.kt)("li",{parentName:"ul"},"Timelord: The timelord communicates with the node, and is what decides which VDF tasks to assign to which clients. The vdf clients connect through HTTP to the timelord. So you can have the timelord in a separate machine as the timelord launcher")))}c.isMDXComponent=!0}}]);