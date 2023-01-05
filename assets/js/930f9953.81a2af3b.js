"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),h=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=h(a),d=r,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var h=2;h<o;h++)i[h]=a[h];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var n=a(7462),r=(a(7294),a(3905));const o={title:"Attacks and Countermeasures",slug:"/consensus-attacks"},i=void 0,s={unversionedId:"consensus/attacks-and-countermeasures",id:"consensus/attacks-and-countermeasures",title:"Attacks and Countermeasures",description:"Majority Attack",source:"@site/docs/consensus/attacks-and-countermeasures.md",sourceDirName:"consensus",slug:"/consensus-attacks",permalink:"/consensus-attacks",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/consensus/attacks-and-countermeasures.md",tags:[],version:"current",frontMatter:{title:"Attacks and Countermeasures",slug:"/consensus-attacks"},sidebar:"tutorialSidebar",previous:{title:"Timelord Algorithm",permalink:"/timelord-algorithm"},next:{title:"Analysis",permalink:"/consensus-analysis"}},l={},h=[{value:"Majority Attack",id:"majority",level:2},{value:"Extending Many Chains",id:"many-chains",level:2},{value:"Global Hard Drive Space",id:"space",level:2},{value:"100% Attack",id:"100-percent",level:2},{value:"Short Range Replotting Attack",id:"replotting",level:2},{value:"Faster Timelord (But Not 51% Attack)",id:"faster-timelord",level:2},{value:"Selfish Farming",id:"selfish-farming",level:2},{value:"Farmer Bribe Trunk Attack",id:"bribe-trunk",level:2},{value:"Farmer Bribe Foliage Re-Org Attack",id:"bribe-foliage",level:2},{value:"Orphaning Transaction Blocks for Fees",id:"orphaning",level:2},{value:"Orphan Rate",id:"orphan-rate",level:2}],c={toc:h};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"majority"},"Majority Attack"),(0,r.kt)("p",null,"In a majority attack, an attacker creates an alternate chain which eventually reaches a higher weight than the honest chain, and forces users to re-org. This attack is present on many blockchain networks including Chia's, as well as on Proof-of-Work systems. It is colloquially known as a \"51% attack\" because the attacker must control more than half of the blockchain's resources (hashrate for PoW, netspace for PoST) in order to succeed."),(0,r.kt)("p",null,"Chia's consensus makes this attack more complex to evaluate than in Proof-of-Work systems. In analyzing this attack, there are several variables at play:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Number of timelords (regardless of speed)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The attacker must control at least one timelord for the attack to be possible."),(0,r.kt)("li",{parentName:"ul"},"With exactly one timelord, the attacker can only build one private chain."),(0,r.kt)("li",{parentName:"ul"},'With an unbounded number of timelords, the attacker can build multiple chains simultaneously, keeping the best one while discarding the rest. This allows the attacker to create slots with fewer blocks, giving them a "double-dip" advantage, discussed in detail below.'))),(0,r.kt)("li",{parentName:"ul"},"Timelord speed (regardless of number)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the attacker has a single timelord, the amount of storage required for the attack is directly correlated to the speed of the attacker's timelord relative to the speed of the fastest honest timelord on the network."),(0,r.kt)("li",{parentName:"ul"},"For example (ceteris paribus), if the attacker's timelord is twice as fast as the fastest honest timelord on the network, then the attacker's space will be twice as \"valuable.\""),(0,r.kt)("li",{parentName:"ul"},"Additionally, the double-dip advantage will increase as the timelord's speed increases. However, due to the minimum block requirement, this advantage will hit its maximum limit with a timelord that is somewhat less than twice as fast as the fastest honest timelord on the network. Also, multiple timelords are required to gain any double-dip advantage at all."))),(0,r.kt)("li",{parentName:"ul"},"Duration of attack",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For attacks lasting less than one epoch (~4608 blocks or 1 day), we must assume the worst case for the attacker's double-dip advantage, based on the speed and number of timelords."),(0,r.kt)("li",{parentName:"ul"},"For attacks lasting one epoch or longer, the minimum double-dip advantage can always be used. This is because the difficulty will adjust during the attack, so the attacker will lose the ability to create slots with fewer blocks.")))),(0,r.kt)("p",null,"Before we can evaluate the percentage requirements for various scenarios, we must first calculate the range for the double-dip advantage."),(0,r.kt)("p",null,"The paper ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/1910.02218.pdf"},"Proof-of-Stake Longest Chain Protocols: Security vs Predictability")," outlines the equation to derive the minimum percentage of the network space an attacker would be required to have in order to undertake a majority attack, for chains using between 1 and 10 consecutive blocks with the same challenge. However, Chia uses a larger -- and variable -- amount of consecutive blocks with the same challenge. Because of this, we must solve the equation for two additional values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"16 -- This is the minimum number of blocks in a slot. (See the ",(0,r.kt)("a",{parentName:"p",href:"/overflow-blocks#minimum-block-requirement"},"Overflow Blocks and Weight page")," for more info.) In the worst-case scenario, an attacker with an unbounded number of fast timelords could theoretically create a chain that always uses this minimum number, as explained in the next section.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"32 -- This is the targeted number of blocks per sub-slot. (See the ",(0,r.kt)("a",{parentName:"p",href:"/consensus-challenges"},"Challenges page")," for more info.) There will be some natural variance in this number, but an attacker who does not have the fastest timelord will not be able to manipulate it."))),(0,r.kt)("p",null,"Here's the code to solve for these values in Wolfram alpha, where c is the number of consecutive blocks with the same challenge:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"% Wolfram\n% solve q=-(c*p)/(ln(-p)+(c-1)ln(1-p)) , -ln(-p)-(c-1)ln(1-p)=-1+(c-1)*(p/(1-p)), c=16 ,f=1/(1+q)\n% Solution over the reals: p\u2248-0.438787 \u2227 q\u22481.34313 c=32\n% Solution over the reals:p\u2248-0.616585 \u2227 q\u22481.4678 c=16\n% 1/(1+1.4678)= 0.405219\n% 1/(1+1.34313) = 0.4267795\n")),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"DD")," to represent the double-dip advantage,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With a single timelord, ",(0,r.kt)("inlineCode",{parentName:"li"},"DD")," is always 1 (no advantage), regardless of the timelord's speed. This is because the attacker will only be able to build a single private chain."),(0,r.kt)("li",{parentName:"ul"},"With an unbounded number of timelords, ",(0,r.kt)("inlineCode",{parentName:"li"},"DD")," will exist in a range, such that 1.34313 < ",(0,r.kt)("inlineCode",{parentName:"li"},"DD")," < 1.4678. This range has a maximum value due to the minimum of 16 blocks per slot.")),(0,r.kt)("p",null,"In addition to ",(0,r.kt)("inlineCode",{parentName:"p"},"DD"),", we'll use the following variables in our calculations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SH")," is the total space of the honest nodes on the network"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VH")," is the speed of the fastest honest timelord (VDF)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SA")," is the attacker's total space"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"VA")," is the speed of the attacker's timelord (VDF)")),(0,r.kt)("p",null,"Using these variables, the formula to calculate when an attacker is able to create a chain at the same speed as the honest chain is:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SH * VH = SA * VA * DD")),(0,r.kt)("p",null,"If we normalize the network's honest space and fastest timelord to equal 1, then in order for the attack to succeed, the product of the attacker's space, timelord speed, and double-dip advantage must be at least 1:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SA * VA * DD >= 1")),(0,r.kt)("p",null,"The formula to calculate the minimum ",(0,r.kt)("inlineCode",{parentName:"p"},"SA")," then becomes:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SA = 1 / (VA * DD)")),(0,r.kt)("p",null,"Finally, the formula to calculate the minimum netspace percentage required for the attack is:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"% = (SA / (1 + SA)) * 100")),(0,r.kt)("p",null,"The following table shows the minimum required proportion of the total netspace an attacker must have in order to succeed in a majority attack. This table is valid for attacks lasting any amount of time, though sometimes it's overly conservative for attacks lasting more than one epoch. It uses fixed values for the first two columns."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Number of Timelords"),(0,r.kt)("th",{parentName:"tr",align:"center"},"VA (relative to VH)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DD"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SA"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Percent of netspace required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"0"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"N/A"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Without a timelord, the attack is not possible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"66.7%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"With a 0.5x timelord, the attacker must control twice as much space as the rest of the network combined.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.34313"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.489"),(0,r.kt)("td",{parentName:"tr",align:"center"},"59.8%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"With infinite 0.5x timelords, the attacker gains a double-dip advantage, so less space is required versus having a single timelord of the same speed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"50.0%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the attacker has one timelord that's tied with the fastest honest timelord, then the attacker must control more space than the network's honest space.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.34313"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.745"),(0,r.kt)("td",{parentName:"tr",align:"center"},"42.7%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"With infinite timelords tied with the fastest honest timelord on the network, the attacker gains a double-dip advantage.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.5"),(0,r.kt)("td",{parentName:"tr",align:"center"},"33.3%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the attacker has one timelord that's twice as fast as the fastest honest timelord, the attacker must control half as much space as the rest of the network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.4678"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.341"),(0,r.kt)("td",{parentName:"tr",align:"center"},"25.4%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"With infinite 2x timelords, the attacker gains the maximum double-dip advantage.")))),(0,r.kt)("p",null,"For attacks lasting longer than one epoch, ",(0,r.kt)("inlineCode",{parentName:"p"},"DD")," will not exceed 1.34313. In such an attack, the final row from the preceding table will change to the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Number of Timelords"),(0,r.kt)("th",{parentName:"tr",align:"center"},"VA (relative to VH)"),(0,r.kt)("th",{parentName:"tr",align:"center"},"DD"),(0,r.kt)("th",{parentName:"tr",align:"center"},"SA"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Percent of netspace required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Comment"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u221e"),(0,r.kt)("td",{parentName:"tr",align:"center"},"2"),(0,r.kt)("td",{parentName:"tr",align:"center"},"1.34313"),(0,r.kt)("td",{parentName:"tr",align:"center"},"0.372"),(0,r.kt)("td",{parentName:"tr",align:"center"},"27.1%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If the attack longer than one epoch, the double-dip advantage will be minimized.")))),(0,r.kt)("p",null,"Note that if we continue to increase ",(0,r.kt)("inlineCode",{parentName:"p"},"VA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DD")," will always remain at 1.4678 for the first table, and 1.34313 for the second table. The percent of netspace required will decrease linearly."),(0,r.kt)("p",null,"It is reasonable to assume that if a majority attack were attempted, the attacker's timelord wouldn't be significantly faster than the fastest honest timelord. Furthermore, it is unlikely that the attacker could gain access to an unbounded number of timeords, so the attacker would not gain the double-dip advantage. Therefore, Chia uses a base line assumption of 51% of the netspace required for a majority attack to have a chance at succeeding."),(0,r.kt)("p",null,"To reduce the possibility of an attacker gaining access to a fast timelord, Chia network is currently ",(0,r.kt)("a",{parentName:"p",href:"https://www.businesswire.com/news/home/20211013005324/en/Chia-Partners-With-Supranational-to-Create-Industry-Leading-Proof-of-Space-Time-Security"},"developing an ASIC timelord"),"."),(0,r.kt)("h2",{id:"many-chains"},"Extending Many Chains"),(0,r.kt)("p",null,"As discussed in the previous section, if an attacker is making their own private chain, they can choose which block gets infused into the challenge chain, and can therefore try many different infusions, such that they get the best possible chain."),(0,r.kt)("p",null,"Due to the average of 32 blocks with the same challenge, the attacker can only try about 32 different combinations (figuring out which block to include in the challenge chain). The exponential branching that results from trying each of these would give a small boost in space for the attacker. For example, someone with 5 PiB can pretend to have 6 or 7 PiB."),(0,r.kt)("p",null,"The reason for receiving just a minor boost is because the alternative chains being tried are inferior and less likely to overtake the longest one. This has been analyzed in the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.08154"},"PoSAT paper"),"."),(0,r.kt)("p",null,"If there were a new proof of space challenge for every single block, the attacker could multiply their space by a factor of e=2.718, where only 27% would be required to overtake the network. Chia has chosen to mitigate this attack vector by setting the expected number of blocks per sub-slot to 32. This increases the attacker's required space to 42.7%."),(0,r.kt)("p",null,"However, Chia also chose not to increase the number of blocks per sub-slot to a number greater than 32. Doing so would decrease the time between blocks, which would allow a timelord that is only slightly faster than all others to orphan blocks more easily. As it stands, with 32 blocks per sub-slot, an attacker would need to have a significantly faster timelord than everyone else in order to successfully orphan any blocks."),(0,r.kt)("p",null,"Furthermore, the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.08154"},"PoSAT paper")," shows that increasing the number of blocks per challenge increases security at a very slow rate, so increasing this number slightly does not provide much benefit."),(0,r.kt)("p",null,"If the attacker were to manipulate the difficulty, they could change it so that they get fewer reward blocks per slot. Then they could either include or exclude each block, and exponentially extend all chains simultaneously. This would allow the attacker to multiply their space by a small factor. It is not clear whether this attack gains very much, since the attacker must change the difficulty, which requires sacrificing some weight. However, to prevent this attack, there is a requirement that at least 16 reward chain blocks must be created for a challenge block to be included. This brings the attacker's required space in the worst case scenario (with unlimited slightly faster timelords) from 27% up to 42.7%, as discussed above."),(0,r.kt)("h2",{id:"space"},"Global Hard Drive Space"),(0,r.kt)("p",null,"There is a concern that if the Chia network does not have a significant amount of space compared to the available free space of hard drive manufacturers or large companies, then it will be vulnerable to long-range attacks. Therefore the more space taken by the Chia network, the more secure the network is."),(0,r.kt)("p",null,"We believe this type of attack is unlikely, though. Large data centers and companies with significant amounts of storage tend not to have much ",(0,r.kt)("em",{parentName:"p"},"unused")," storage available to hold Chia plots. And the more space that comes onto Chia's network, the lower the rewards per TB. With the netspace currently (December 2021) sitting at 35 EiB, companies will find it difficult to justify buying drives or deleting business data. Furthermore, creating a plot requires a fixed amount of upfront time and money (from current calculations, about 1kWh for a k32, or about 10 cents, which is $1 per terabyte)."),(0,r.kt)("p",null,"The most likely long-term scenario is that rewards per TB will be sufficiently low to discourage people and companies from acquiring new storage just to farm Chia. Most of the new netspace in the future will therefore come from used storage, often from hard disks that otherwise would have been bound for a landfill. This will serve two purposes: preventing the attack laid out here, and keeping Chia green."),(0,r.kt)("h2",{id:"100-percent"},"100% Attack"),(0,r.kt)("p",null,"If the difficulty adjustment were triggered every X timelord slots, as opposed to every X blocks, this would allow for a 100% attack, where all farmers collude to constantly decrease or increase the difficulty."),(0,r.kt)("p",null,"Under normal operation, there are 32 blocks per slot."),(0,r.kt)("p",null,"Under the hypothetical 100% attack:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The difficulty would be artificially cut in half, temporarily allowing 64 blocks to be created per slot."),(0,r.kt)("li",{parentName:"ol"},"The difficulty would then be artificially increased by 4x, temporarily allowing 16 blocks per slot."),(0,r.kt)("li",{parentName:"ol"},"Repeat step 1.")),(0,r.kt)("p",null,"The result of this attack would be to create an average of (64+16)/2 = 40 block rewards per slot, a 25% increase in rewards. This is why Chia chose to trigger the difficulty adjustment based on the number of blocks. If this attack were attempted under the current system, it would slow down and speed up the network, but it would not yield any extra rewards."),(0,r.kt)("h2",{id:"replotting"},"Short Range Replotting Attack"),(0,r.kt)("p",null,"Plotting usually takes a few minutes to a few hours, even on fast hardware, but it is parallelizable and getting faster."),(0,r.kt)("p",null,"Someday in the future, an attacker with high-end hardware could begin creating a plot after a signage point is released, and complete the plot before the infusion point. The attacker could then delete the plot after obtaining the quality rating (or after submitting the proof if it's eligible). This would allow the attacker to create a plot that automatically passes the filter, effectively allowing them to farm without storing any space. This attack only becomes feasible if it is possible to create a plot in less than 28 seconds (before the infusion)."),(0,r.kt)("p",null,"If we assume the worst-case scenario of a farmer being able to create a plot instantly,\nthe question becomes, what is the cost and what is the benefit of the attack?"),(0,r.kt)("p",null,"The cost is the electricity, memory, hardware and infrastructure needed to create a plot. The electricity required to create a k32 plot is currently around $0.10, or around $1 per TB."),(0,r.kt)("p",null,"The benefit would be the same benefit as storing that plot for 80 minutes (the signage point interval times the plot filter constant). This is because the attacker can always create a plot that passes the plot filter. Assuming $5 per year value per terabyte, the value of a 1TB plot for 80 minutes is $0.00094. Therefore with current plotting software and hardware, it is significantly cheaper to store the plots as opposed to recreating them."),(0,r.kt)("p",null,"Another way to look at the benefit of this attack: If the attacker can create a plot that always passes the filter, it will be the equivalent of storing 512 plots locally. Which is cheaper, storing 512 plots or running this attack?"),(0,r.kt)("p",null,"If 1 TB of HDD storage costs $15, it would cost around $750 to purchase enough space to store 512 plots. If we account for a low-end computer on which to run a farmer, the total cost of this system is roughly $1000. Therefore, the replotting attack only becomes economically feasible on a system worth less than $1000. If this attack ever becomes possible, it will likely cost at least an order of magnitude more to run the attack than to store the plots. (And keep in mind, the price of storage tends to fall every year, so the benefit of the attack is constantly decreasing, even as its feasibility is increasing.)"),(0,r.kt)("p",null,"The plot filter constant is very useful to reduce the amount of disk lookups farmers must do. With a plot filter of 512, Instead of 7-9 disk reads per plot every 9 seconds, farmers only need to do about 7-9 reads for every 80 minutes."),(0,r.kt)("p",null,"The downside of the plot filter constant is that it provides a multiplier of replotting benefit to an attacker, so it must not be set too high. With a plot filter constant of 512, 1/512 plots are valid for every challenge. The attacker can then only create plots that pass the filter, therefore not needing to create the other 511/512ths."),(0,r.kt)("p",null,"Setting the filter constant to 512 provides a 512x multiplier. If the replotting attack ever becomes economically feasible, one mitigation would be to decrease the filter, thus decreasing the attack's benefit. The other mitigation would be to increase the minimum plot size, thus decreasing the feasibility of the attack."),(0,r.kt)("p",null,"In any case, this attack will not become feasible until at least 2026, given projected improvements in hardware speed."),(0,r.kt)("h2",{id:"faster-timelord"},"Faster Timelord (But Not 51% Attack)"),(0,r.kt)("p",null,"With the fastest timelord in the system, an attacker can more effectively perform a long-range attack: they can expand their space while farming in a private chain."),(0,r.kt)("p",null,"If the attacker does not reach a total of 40.5% of space (with the timelord boosting and extending many chains as above), the usefulness of the faster timelord decreases substantially. This is because inclusion and exclusion of blocks does not depend on how fast you can perform the VDF, but instead depends on whether it\u2019s less than the sub-slot iterations. Furthermore, an attacker needs the space of the rest of the network in order to advance, and therefore must release the challenges to the network."),(0,r.kt)("p",null,"In certain cases where blocks come very close together, having a faster timelord can allow an attacker to orphan certain blocks, although this does not increase rewards in the short term (it would hurt others, but not benefit the attacker), and has a risk of undermining the network in the long term (orphaning blocks decreases public trust)."),(0,r.kt)("h2",{id:"selfish-farming"},"Selfish Farming"),(0,r.kt)("p",null,"Selfish farming occurs when an attacker farms blocks in private, and only releases them when they are at risk of being surpassed by the honest chain."),(0,r.kt)("p",null,"In Nakamoto PoW this provides significant gains, because at any point at which the miner is ahead of the rest of the network, the rest of the network is wasting their hashpower on a chain that will not win."),(0,r.kt)("p",null,'In Chia consensus, a "selfish" farmer could withhold a proof until just before the infusion point, but this would provide zero benefit versus submitting the proof right away. There can be multiple block winners per signage point, so farming is not a zero-sum game as it is in PoW. Furthermore, the timelord cannot accept proofs for an infusion point that has already passed, so farmers are not allowed to stack a large number of proofs to be infused later.'),(0,r.kt)("h2",{id:"bribe-trunk"},"Farmer Bribe Trunk Attack"),(0,r.kt)("p",null,"An interesting attack explored in the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.08154"},"PoSAT white paper"),' is the bribing attack, which takes advantage of the predictability of the elected "leaders" in each slot. The authors analyze a Proof of Stake chain, and argue that when participants know that they are going to win in advance, there is a potential bribing attack.'),(0,r.kt)("p",null,"In Chia, if participants knew in advance which plots would win, each user could notify an attacker that they'd be willing to participate in the attack. If the number of participants reached a certain threshold, they could completely re-org the chain (or orphan those who do not participate, censor transactions, etc). This attack does NOT require the majority of the space in the network to participate; it only requires a certain threshold of winners within a short time frame. Furthermore, it is undetectable, since the attacker can make a normal looking chain."),(0,r.kt)("p",null,"This problem is not present in this revision of the Chia consensus algorithm. This problem is solved by reducing the predictability: each farmer does not know for sure if their proof of space is fully eligible until the signage point. Therefore an attacker must bribe a large majority of the space to pull off this attack."),(0,r.kt)("h2",{id:"bribe-foliage"},"Farmer Bribe Foliage Re-Org Attack"),(0,r.kt)("p",null,"Since blocks are signed by PoSpace keys, a farmer can theoretically sign multiple blocks with the same PoSpace, at the same height. The attack requires a malicious party to bribe farmers with a certain amount of funds for them to provide a signature of an alternate chain. It does not require the attacker to have a faster timelord."),(0,r.kt)("p",null,"If the attacker can convince every single farmer N blocks deep to sign, they can revert or reorder any transaction in those N blocks. This attack requires 100% compliance, likely from unwitting participants. As soon as those participants learn of the attack, at least some of them would probably stop. It is therefore only a short-term attack."),(0,r.kt)("p",null,"One potential prevention for this attack would be to use fraud proofs. However, these enable other attacks and complicate behavior, so they were not chosen."),(0,r.kt)("p",null,"Instead, the solution is simply to wait longer. After 32 blocks (approximately 10 minutes), we can make a reasonable assumption that at least one farmer is following the protocol and not double signing. If 57.4% is non-colluding (the assumption for 42.7% attack resilience), the probability of a reversal after 32 blocks is ",(0,r.kt)("inlineCode",{parentName:"p"},"0.426^32")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"1.38*10^-12= 0.00000000000138"),". Furthermore, this attack is detectable, so it is not easy to pull off."),(0,r.kt)("p",null,"Each user can choose their own threshold for which they accept a transaction/block as final. For example, in cases where the total network space drops suddenly, users can be more careful and not consider transactions final, in case there is another existing fork, due to a network split."),(0,r.kt)("h2",{id:"orphaning"},"Orphaning Transaction Blocks for Fees"),(0,r.kt)("p",null,"Transaction blocks are different from non-transaction blocks, since they contain transaction fees. These may surpass block rewards. For example, Ethereum has had created some blocks with 2 eth of rewards and 8 eth of fees. (",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1559"},"EIP 1559")," changes the calculation significantly, so this is just a historical example of what is possible in other chains.)"),(0,r.kt)("p",null,"In Chia this will be more extreme, since not every block contains transactions. This leads to attacks where the 2nd place farmer ignores the 1st place in an attempt to win the transaction block. If the 2nd block comes less than 28 seconds after the 1st, they do not specify the previous block, and thus the 2nd place cannot orphan the 1st. The 3rd place could orphan both, but nobody would follow this chain since it is shorter."),(0,r.kt)("p",null,"However, if there are no blocks within 28 seconds of the 1st block, the 2nd could orphan the 1st, but they would have to convince the next block to farm on their alternate chain. An easier attack would be if the attacker controlled both the 2nd and 3rd, in which case they could ignore the first and still be longer. These orphaning attacks do not allow the attacker to steal rewards, but rather allow the attacker to slightly lower the difficulty. Since they are very situational and require a lot of space, attempting this attack will likely harm the network more than the potential gain to the attacker."),(0,r.kt)("h2",{id:"orphan-rate"},"Orphan Rate"),(0,r.kt)("p",null,"In Chia consensus, two competing blocks around the same time can both be included into the blockchain in parallel, without knowing about each other (although at most one can be a transaction block). When multiple blocks are included at the same time, the result is a chain with a higher weight. This means that the orphan rate in Chia will be essentially zero, assuming low network latency. If network latency exceeds the infusion delay (30-40 seconds), then orphaning of a block is almost guaranteed, so it is more of a step-function. This is in contrast with Nakamoto-PoW in which the orphan rate is high if there is network delay, and decreases smoothly as network condition improves, but never reaches zero."))}u.isMDXComponent=!0}}]);