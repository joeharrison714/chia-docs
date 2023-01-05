"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(r,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[c]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),o=n(7294),i=n(6010),l=n(2389),s=n(7392),r=n(7094),u=n(2466);const p="tabList__CuJ",c="tabItem_LNqP";function h(e){const{lazy:t,block:n,defaultValue:l,values:h,groupId:d,className:m}=e,k=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=h??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,s.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===l?l:l??k.find((e=>e.props.default))?.props.value??k[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,r.U)(),[T,C]=(0,o.useState)(f),v=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=d){const e=w[d];null!=e&&e!==T&&y.some((t=>t.value===e))&&C(e)}const A=e=>{const t=e.currentTarget,n=v.indexOf(t),a=y[n].value;a!==T&&(N(t),C(a),null!=d&&b(d,String(a)))},I=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",p)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>v.push(e),onKeyDown:I,onClick:A},l,{className:(0,i.Z)("tabs__item",c,l?.className,{"tabs__item--active":T===t})}),n??t)}))),t?(0,o.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,l.Z)();return o.createElement(h,(0,a.Z)({key:String(t)},e))}},2546:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),i=n(5488),l=n(5162);const s={slug:"/guides/cat-creation-tutorial",title:"CAT Creation Tutorial"},r=void 0,u={unversionedId:"guides/cat/cat-creation-tutorial",id:"guides/cat/cat-creation-tutorial",title:"CAT Creation Tutorial",description:"This tutorial is for creating Chia Asset Tokens (CATs). This CAT standard allows you to create fungible tokens on the Chia blockchain. This step-by-step guide will go through creating your own CATs.",source:"@site/docs/guides/cat/cat-creation-tutorial.md",sourceDirName:"guides/cat",slug:"/guides/cat-creation-tutorial",permalink:"/zh/guides/cat-creation-tutorial",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/cat/cat-creation-tutorial.md",tags:[],version:"current",frontMatter:{slug:"/guides/cat-creation-tutorial",title:"CAT Creation Tutorial"},sidebar:"guides",previous:{title:"CAT Guide",permalink:"/zh/guides/cat-developer-guide"},next:{title:"Custody Tool Description",permalink:"/zh/guides/custody-tool-description"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"CAT Issuance Granularity",id:"cat-issuance-granularity",level:2},{value:"Setting up your Chia Environment",id:"setting-up-your-chia-environment",level:2},{value:"CAT Admin Tool",id:"cat-admin-tool",level:2},{value:"Creating a Single Issuance CAT",id:"creating-a-single-issuance-cat",level:2},{value:"Creating a Multiple Issuance CAT",id:"creating-a-multiple-issuance-cat",level:2},{value:"Add a CAT to Your Wallet",id:"add-a-cat-to-your-wallet",level:2},{value:"Preparing for Mainnet",id:"preparing-for-mainnet",level:2},{value:"Conclusion",id:"conclusion",level:2}],h={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial is for creating Chia Asset Tokens (CATs). This CAT standard allows you to create fungible tokens on the Chia blockchain. This step-by-step guide will go through creating your own CATs."),(0,o.kt)("p",null,"Alternatively, if you're looking for non-fungible tokens on Chia, check out our ",(0,o.kt)("a",{parentName:"p",href:"https://devs.chia.net/guides/nft-intro"},"NFT guide"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Welcome to the world of CATs! We're excited to have you here, and we can't wait to see the creative ideas you come up with."),(0,o.kt)("p",null,"This tutorial will help you jump right in and get started with issuing your own CATs. There are a few things you should know before we begin."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/cats"},"CAT primitive page")," was finalized as of January 2022. However, to minimize your risk of running into unexpected results, we recommend that you do following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generate a new public/private key pair for each CAT you issue. This key pair should be used for issuing one specific CAT ",(0,o.kt)("strong",{parentName:"li"},"and nothing else"),". It should also be the only key pair on your computer while issuing the CAT."),(0,o.kt)("li",{parentName:"ul"},"Test thoroughly on testnet before issuing your CAT to mainnet.")),(0,o.kt)("p",null,"For any questions regarding this tutorial, head over to the #chialisp channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://keybase.io/team/chia_network.public"},"Keybase team")," forum, where there are lots of friendly folks who can help you."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cat-issuance-granularity"},"CAT Issuance Granularity"),(0,o.kt)("p",null,"CAT denominations, as well as the rules behind issuance and melting, can take some getting used to. Here are a few things to keep in mind before you issue your CAT:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Most Chia wallets choose to display their value in XCH. However, this is a purely cosmetic choice because Chia's blockchain only knows about mojos. One XCH is equal to one trillion (1,000,000,000,000) mojos."),(0,o.kt)("li",{parentName:"ul"},"In a similar vein, Chia Network has made the design decision to map 1 CAT to 1000 mojos. This ratio will be the same for all CATs.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Theoretically, it would be possible to set the CAT:mojo ratio to something other than 1:1000 for a specific CAT, but we strongly recommend against doing this. The official Chia wallet will not support CATs with a ratio other than 1:1000. Additionally, if you created your own wallet with support for different ratios, users of this wallet would almost certainly be confused and accidentally spend too much or too little money, by multiple orders of magnitude. Please don't attempt this.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The melt value of a single token is 1000 mojos. This remains true regardless of the token's face value or its circulating supply."),(0,o.kt)("li",{parentName:"ul"},"A token's face value and its melt value are not necessarily correlated, let alone matched.")),(0,o.kt)("p",null,"With one XCH, you can issue 1 billion CATs. The face value of these tokens could be zero, or multiple XCH, or anywhere in between. This value is decided by the market -- it's worth whatever someone is willing to pay for it. The value of the tokens has nothing to do with the underlying XCH, other than their 1000-mojo melt value."),(0,o.kt)("p",null,"These concepts are discussed in greater detail in our ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/cats#valuation"},"CAT primitive page"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"setting-up-your-chia-environment"},"Setting up your Chia Environment"),(0,o.kt)("p",null,"There are two phases of issuing a CAT. First, you will test your issuance on testnet. Once ready, you will issue on mainnet."),(0,o.kt)("p",null,"We'll start with installing Chia's testnet."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you already have Chia version 1.3+ installed, you can switch to testnet and then skip to the ",(0,o.kt)("a",{parentName:"p",href:"#cat-admin-tool"},"CAT admin tool"),". If you are currently running on the mainnet, you can switch to testnet with ",(0,o.kt)("inlineCode",{parentName:"p"},"chia configure -t true"),".")),(0,o.kt)("p",null,"Ensure that you have a Python version between 3.7 and 3.9 installed by running ",(0,o.kt)("inlineCode",{parentName:"p"},"python3 --version"),"."),(0,o.kt)("p",null,"First, we will install Chia."),(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",label:"Linux/macOS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-blockchain.git -b main --recurse-submodules\ncd chia-blockchain\nsh install.sh\n. ./activate\nchia init\nchia init --fix-ssl-permissions\nsh install-gui.sh\n"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/chia-blockchain.git -b main --recurse-submodules\ncd chia-blockchain\n.\\Install.ps1\n.\\venv\\Scripts\\Activate.ps1\nchia init\nchia init --fix-ssl-permissions\n.\\Install-gui.ps1\n")))),"At this point, you can switch to testnet.",(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia configure -t true\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Run and sync the Chia GUI:")),(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",label:"Linux/macOS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-blockchain/chia-blockchain-gui\nnpm run electron &\n"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd chia-blockchain/chia-blockchain-gui\nnpm run electron\n")))),(0,o.kt)("p",null,"You will be given the option to run in ",(0,o.kt)("strong",{parentName:"p"},"Farming Mode")," or ",(0,o.kt)("strong",{parentName:"p"},"Wallet Mode"),". Choose ",(0,o.kt)("strong",{parentName:"p"},"Wallet Mode"),", which will only run the light wallet. You do ",(0,o.kt)("em",{parentName:"p"},"not")," need to run a full node in order to issue a CAT."),(0,o.kt)("p",null,"If you already have a ",(0,o.kt)("strong",{parentName:"p"},"Private key with public fingerprint"),", select it when the GUI loads. Otherwise, select ",(0,o.kt)("strong",{parentName:"p"},"CREATE A NEW PRIVATE KEY"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Status: Syncing")," should appear in the upper right corner of the GUI. Within a few minutes, this should change to ",(0,o.kt)("strong",{parentName:"p"},"Status: Synced"),"."),(0,o.kt)("p",null,"If your TXCH balance is 0, you can get some TXCH from the ",(0,o.kt)("a",{parentName:"p",href:"https://testnet10-faucet.chia.net"},"Testnet10 faucet"),". This is testnet Chia and is not worth anything."),(0,o.kt)("h2",{id:"cat-admin-tool"},"CAT Admin Tool"),(0,o.kt)("p",null,"Now we will set up the CAT admin tool, which will help you to issue your CATs:"),(0,o.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"mac",label:"Linux/macOS",mdxType:"TabItem"},(0,o.kt)("p",null,"Your Linux installation may not come with Python's development tools installed by default. To be sure that these tools are installed, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y build-essential python3-dev\n")),(0,o.kt)("p",null,"Next, we will install the CAT admin tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/CAT-admin-tool.git -b main --recurse-submodules\ncd CAT-admin-tool\npython3 -m venv venv\n. ./venv/bin/activate\npython3 -m pip install --upgrade pip setuptools wheel\npip install .\n"))),(0,o.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Chia-Network/CAT-admin-tool.git -b main --recurse-submodules\ncd CAT-admin-tool.\npython -m venv venv\n.\\venv\\Scripts\\Activate.ps1\npip install .\npip install chia-dev-tools --no-deps\npip install pytest\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You might receive an error such as ERROR: Failed building wheel for CAT-admin-tool. This is likely safe to ignore. As long as you can run cats --help without errors, the tool has been installed properly.")))),"Your environment should be all set, but let's make sure:",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cats --help"),". You should get a usage statement.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdv --help"),". You should get another usage statement.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Verify that ",(0,o.kt)("strong",{parentName:"p"},"Status: Synced")," is showing in the upper right side of the Chia GUI.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure you have some TXCH in your wallet."))),(0,o.kt)("p",null,"Your environment is now set up and you are ready to start issuing CATs!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-a-single-issuance-cat"},"Creating a Single Issuance CAT"),(0,o.kt)("p",null,"If you're a visual learner, please see our ",(0,o.kt)("a",{parentName:"p",href:"/guides/single-issuance-cat-video-series"},"Single Issuance CAT video tutorial"),"."),(0,o.kt)("p",null,"To get started, you will create a single-issuance CAT. This is the default way to issue a CAT. It's also the simplest. It contains a TAIL that only allows the CAT to issue tokens once."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"A TAIL is a Chialisp program that defines the rules for issuing and melting tokens. Learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.chia.net/cats#tail"},"Token and Asset Issuance Limitations program"),".")),(0,o.kt)("p",null,"A CAT with a single-issuance TAIL will be useful for anyone who wants to create a token with a guaranteed fixed supply."),(0,o.kt)("p",null,"First, figure out how many tokens you want to issue. Because creating a single token takes 1,000 mojos, you will multiply your supply by 1,000 to figure out how much TXCH (or XCH on mainnet) is needed. For example, if you want to issue 1 million tokens, you'll need 1 billion mojos (1/1000 of a TXCH/XCH)."),(0,o.kt)("p",null,"Take note of your ",(0,o.kt)("strong",{parentName:"p"},"Receive Address")," in the Chia GUI. You'll need it for the next step."),(0,o.kt)("p",null,"After confirming you are within the admin tool directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <mojos> -m <fee in mojos> --as-bytes --select-coin\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommend that you include a fee with your transaction. This fee will ensure that your transaction is processed in front of any dust in the mempool. Whether you're running on testnet or mainnet, the recommended fee amount is 100 million mojos (",(0,o.kt)("inlineCode",{parentName:"p"},"-m 100000000"),"). Even though you will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"cats")," command multiple times, the fee will only be applied once when the transaction is pushed to the network.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--select-coin")," flag will choose a coin from your wallet for issuing your tokens. The final line of the output will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Name: <Coin ID>"),". You\u2019ll use the coin ID value in the next step."),(0,o.kt)("p",null,"Run the same command again, this time removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--select-coin")," flag and adding a new flag, ",(0,o.kt)("inlineCode",{parentName:"p"},"--curry <Coin ID>"),". It\u2019s very important to preface the coin ID with ",(0,o.kt)("inlineCode",{parentName:"p"},"0x")," here to make CLVM interpret the value as bytes and not a string. Here\u2019s the full command to run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/genesis_by_coin_id.clsp.hex --send-to <your receive address> --amount <mojos> -m <fee in mojos> --as-bytes --curry 0x<Coin ID>`\n")),(0,o.kt)("p",null,"If everything's good so far, this command will give the following output:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"The transaction has been created, would you like to push it to the network? (Y/N)")),(0,o.kt)("p",null,"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,o.kt)("p",null,"The output will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset ID: <Asset ID>"),". Copy the ",(0,o.kt)("strong",{parentName:"p"},"asset ID")," value which you'll need in the next step. Meanwhile, the transaction to create your CAT is being pushed to the blockchain."),(0,o.kt)("p",null,"Congratulations! You have issued your first CAT. You still need to tell your wallet about it, though."),(0,o.kt)("p",null,"Next, jump to ",(0,o.kt)("a",{parentName:"p",href:"#add-a-cat-to-your-wallet"},"Add a CAT to Your Wallet"),"."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"creating-a-multiple-issuance-cat"},"Creating a Multiple Issuance CAT"),(0,o.kt)("p",null,"If you're a visual learner, please see our ",(0,o.kt)("a",{parentName:"p",href:"/guides/multiple-issuance-cat-video-series"},"Multiple Issuance CAT video tutorial"),"."),(0,o.kt)("p",null,"Next we\u2019ll create a CAT capable of issuing tokens multiple times. This CAT uses a delegated TAIL, which is much more flexible than the previous one. As long as you sign a puzzle hash that you specify, you can issue new tokens using whatever TAIL you want. This allows for features such as rebate offers and distributed issuing and retiring of tokens."),(0,o.kt)("p",null,"We\u2019ll set up this CAT to delegate the same TAIL we set up previously. What this means is that nobody else can issue new tokens until you allow it. Keep in mind that this is only one of many possible implementations of a delegated TAIL."),(0,o.kt)("p",null,"First, we will find a coin to issue, and create a new spendbundle:"),(0,o.kt)("p",null,"First, figure out how many tokens you want to issue. Because creating a single token takes 1,000 mojos, you will multiply your supply by 1,000 to figure out how much TXCH (or XCH on mainnet) is needed. For example, if you want to issue 1 million tokens, you'll need 1 billion mojos (1/1000 of a TXCH/XCH)."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Just as with the Single Issuance CAT, we recommend that you include a fee with your transaction. This fee will ensure that your transaction is processed in front of any dust in the mempool. Whether you're running on testnet or mainnet, the recommended fee amount is 100 million mojos (",(0,o.kt)("inlineCode",{parentName:"p"},"-m 100000000"),"). Even though you will run the ",(0,o.kt)("inlineCode",{parentName:"p"},"cats")," command multiple times, the fee will only be applied once, when the transaction is pushed to the network.")),(0,o.kt)("p",null,"Take note of your Receive Address in the Chia GUI. You'll need it for the next step."),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show"),". Take note of your ",(0,o.kt)("strong",{parentName:"p"},"fingerprint")," and ",(0,o.kt)("strong",{parentName:"p"},"master public key"),"."),(0,o.kt)("p",null,"After confirming you are within the admin tool directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cats --tail ./reference_tails/delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <XCH mojos> -m <fee in XCH mojos> --as-bytes --select-coin\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"--select-coin")," flag will choose a coin from your wallet to issue the CAT from. The final line of the output will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Name: <Coin ID>"),". You\u2019ll use the ",(0,o.kt)("strong",{parentName:"p"},"coin ID")," in the next step."),(0,o.kt)("p",null,"Now that you have a coin, you can create a full delegated TAIL. In our case, the TAIL it delegates will be of the single-issuance variety."),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp curry ./reference_tails/genesis_by_coin_id.clsp.hex -a 0x<Coin ID>\n")),(0,o.kt)("p",null,"Keep in mind the 0x before the coin ID is necessary. The result of this command will be a ",(0,o.kt)("strong",{parentName:"p"},"delegated puzzle"),", which you\u2019ll pass in as part of the solution to your main TAIL."),(0,o.kt)("p",null,"Run the same command again, with the additional ",(0,o.kt)("inlineCode",{parentName:"p"},"--treehash")," flag. This will give you the ",(0,o.kt)("strong",{parentName:"p"},"treehash")," of the puzzle you just created:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdv clsp curry ./reference_tails/genesis_by_coin_id.clsp.hex -a 0x<Coin ID> --treehash\n")),(0,o.kt)("p",null,"Sign the treehash (you do ",(0,o.kt)("em",{parentName:"p"},"not")," need 0x here) with the fingerprint you noted above by running this command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia keys sign -d <treehash> -f <Fingerprint> -t m -b\n")),(0,o.kt)("p",null,"The last two flags are for the path and bytes. Make sure the resulting public key corresponds to the fingerprint you just used. Copy the ",(0,o.kt)("strong",{parentName:"p"},"signature")," to use in the next step."),(0,o.kt)("p",null,"Run the same ",(0,o.kt)("inlineCode",{parentName:"p"},"cats")," command as above, but remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"--select-coin")," flag and add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--solution")," flag, passing in the delegated puzzle you just calculated. This must be surrounded by quotes and parenthesis and it must contain a solution, which we'll leave empty. Add the ",(0,o.kt)("inlineCode",{parentName:"p"},"--signature")," flag as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'cats --tail ./reference_tails/delegated_tail.clsp.hex --curry 0x<Master public key> --send-to <wallet address> -a <amount in mojos to issue> -m <fee in XCH mojos> --as-bytes --solution "(<delegated puzzle> ())" --signature <Signature>\n')),(0,o.kt)("p",null,"This command will give the following output: ",(0,o.kt)("inlineCode",{parentName:"p"},"The transaction has been created, would you like to push it to the network? (Y/N)")),(0,o.kt)("p",null,"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"Y"),"."),(0,o.kt)("p",null,"The output will be ",(0,o.kt)("inlineCode",{parentName:"p"},"Asset ID: <Asset ID>"),". Copy the ",(0,o.kt)("strong",{parentName:"p"},"asset ID"),", which you'll need in the next step. Meanwhile, the transaction to create your CAT is being pushed to the blockchain."),(0,o.kt)("p",null,"Because this CAT uses a delegated TAIL, you can issue more by re-doing step 1 from this section. After you run the \u201ccdv rpc pushtx\u201d command, the balance in your CAT wallet will increase according to the new issuance."),(0,o.kt)("h2",{id:"add-a-cat-to-your-wallet"},"Add a CAT to Your Wallet"),(0,o.kt)("p",null,"Switch to the Chia GUI. Within a few minutes, your balance should decrease by the number of mojos you spent issuing tokens (+ fees). It will not show up in your transaction history."),(0,o.kt)("p",null,"Now you can add a wallet ID for your new CAT. In the upper left corner, click ",(0,o.kt)("strong",{parentName:"p"},"+ ADD TOKEN"),", then click ",(0,o.kt)("strong",{parentName:"p"},"+ Custom"),". Enter the name of your CAT (it can be anything) in the first text field. For the second field, paste the asset ID you saved from a few steps ago. Click ",(0,o.kt)("strong",{parentName:"p"},"ADD"),"."),(0,o.kt)("p",null,"You will now see your token in your wallet with the full issued quantity. As a reminder, this should be the number of mojos spent divided by 1,000 (as each CAT token requires 1,000 mojos to issue)."),(0,o.kt)("p",null,"If you see a ",(0,o.kt)("strong",{parentName:"p"},"Total Balance")," of 0, you may need to refresh your wallet with ",(0,o.kt)("inlineCode",{parentName:"p"},"chia start wallet-only -r"),". You should now see the correct balance."),(0,o.kt)("p",null,"You now have access to your CAT in the GUI. You can send and receive your new tokens just like you would with regular XCH."),(0,o.kt)("h2",{id:"preparing-for-mainnet"},"Preparing for Mainnet"),(0,o.kt)("p",null,"After you are comfortable with issuing your CAT on testnet, you may wish to move to mainnet. ",(0,o.kt)("strong",{parentName:"p"},"Please keep in mind that there are extra risks inherent to publishing code on a public blockchain.")," If your CAT and/or TAIL have not been created securely, your funds could potentially be bricked or stolen. ",(0,o.kt)("strong",{parentName:"p"},"Proceed with caution.")),(0,o.kt)("p",null,"That said, issuing a CAT to mainnet isn't very different from issuing one to testnet. You can continue to run off of the ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," code branch, using the light wallet."),(0,o.kt)("p",null,"When you are ready to issue your CAT to mainnet, the first step is to switch to mainnet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"chia configure -t false\n")),(0,o.kt)("p",null,"The second step is to generate a new key pair and store the mnemonic in a secure manner. You can generate your key with ",(0,o.kt)("strong",{parentName:"p"},"Create a new private Key")," in the GUI. This will work in the same manner as earlier for our testnet CAT."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"We recommend the new keypair being used exclusively for the CAT ownership."),(0,o.kt)("p",{parentName:"admonition"},"The key pair you are about to use will control the issuing and retirement of these tokens ",(0,o.kt)("strong",{parentName:"p"},"forever.")," If the private key were ever compromised, an attacker could issue new tokens and melt any they owned into regular XCH."),(0,o.kt)("p",{parentName:"admonition"},"The only way to nullify an attack would be to keep track of illegitimate issuances (luckily all of this is fully visible on the public ledger), issue a new CAT, and then offer an exchange of legitimate old CATs for the new CAT type."),(0,o.kt)("p",{parentName:"admonition"},"This would be a complex and time-consuming process that would likely result in people being sold counterfeit CATs at some point. It\u2019s very important to ",(0,o.kt)("strong",{parentName:"p"},"keep your private key secret"),".")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can generate keys from the CLI as well.\nUse ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show")," to see your available keys. Take note of their fingerprint as you will want to ",(0,o.kt)("em",{parentName:"p"},"not")," use an existing key.\nGenerate a key with ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys generate"),", followed by ",(0,o.kt)("inlineCode",{parentName:"p"},"chia keys show --show-mnemonic-seed")," to reveal the 24 words.")),(0,o.kt)("p",null,"Copy your new key pair's ",(0,o.kt)("strong",{parentName:"p"},"mnemonic seed (24 secret words)")," to a secure offline location. These 24 words are all you'll need to restore your wallet in the future."),(0,o.kt)("p",null,"Finally, you can go through the same process to create a CAT now using real XCH on mainnet."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Congratulations! You've created your first CAT. What now?"),(0,o.kt)("p",null,"Well, hopefully you can share your CAT with the world and get some traction. In the meantime, you can learn more about the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/puzzles/genesis_by_coin_id.clvm"},"Single Issuance TAIL")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Chia-Network/chia-blockchain/blob/main/chia/wallet/puzzles/delegated_tail.clvm"},"Multi Issuance TAIL"),"."),(0,o.kt)("p",null,"This guide was for fungible tokens. Now you can learn about ",(0,o.kt)("a",{parentName:"p",href:"/guides/nft-intro"},"non-fungible tokens"),"."))}d.isMDXComponent=!0}}]);