(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["d3c8920c"],{"6074743a":function(e,n,i){"use strict";i.d(n,"__esModule",{value:!0}),i.d(n,"useMermaidCode",{enumerable:!0,get:function(){return a;}});var r=i("5b220c3d");let t=e=>{let n=[];n.push("graph LR"),n.push("classDef baseNode fill:#fff,stroke:none,stroke-width:0px,rx:5,ry:5,font-size:14px");let i=(e,r)=>{let t=`node_${e.id.replace(/[^a-z0-9]/gi,"_")}`,a=e.label.replace(/"/g,"'");r?"mvp"===e.targetType?a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(22, 119, 255);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`:"extension"===e.targetType&&(a=`<span style="display:inline-block;width:8px;height:8px;background-color:rgb(160, 160, 160);border-radius:50%;margin-inline-end:8px;vertical-align:middle;"></span>${a}`):(n.push(`style ${t} font-size:16px`),a=`**${a}**`),n.push(`${t}["${a}"]:::baseNode`),e.link&&n.push(`click ${t} "#${e.link}"`),r&&n.push(`${r} --> ${t}`),e.children&&e.children.length>0&&e.children.forEach(e=>i(e,t));};return i(e),n.join("\n");},a=e=>(0,r.useMemo)(()=>t(e),[e]);},d3c8920c:function(e,n,i){"use strict";var r=i("852bbaa9")._;i.d(n,"__esModule",{value:!0}),i.d(n,"default",{enumerable:!0,get:function(){return h;}});var t=i("777fffbe"),a=i("f19d2b93"),s=i("5b220c3d"),o=i("3835a2b7"),l=i("9c86e52a"),d=t._(i("23546486")),c=i("6074743a");let u=(0,o.createStyles)(({cssVar:e})=>({container:(0,o.css)`
    width: 100%;
    min-height: 600px;
    height: fit-content;
    background-color: ${e.colorBgLayout};
    border: 1px solid #e8e8e8;
    border-radius: ${e.borderRadiusLG};
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  `,chartContainer:(0,o.css)`
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    > svg {
      margin: auto;
    }
  `,title:(0,o.css)`
    position: absolute;
    top: 20px;
    inset-inline-start: 20px;
    font-size: ${e.fontSizeLG};
    z-index: 10;
  `,tips:(0,o.css)`
    display: flex;
    position: absolute;
    bottom: 20px;
    inset-inline-end: 20px;
    z-index: 10;
    border-radius: 4px;
    font-size: ${e.fontSize};
  `,mvp:(0,o.css)`
    margin-inline-end: ${e.marginMD};
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${e.marginXS};
      background-color: rgb(22, 119, 255);
      border-radius: 50%;
      content: '';
    }
  `,extension:(0,o.css)`
    display: flex;
    align-items: center;
    &::before {
      display: block;
      width: 8px;
      height: 8px;
      margin-inline-end: ${e.marginXS};
      background-color: rgb(160, 160, 160);
      border-radius: 50%;
      content: '';
    }
  `})),p={cn:{MVPPurpose:"MVP \u884C\u4E3A\u76EE\u7684",extensionPurpose:"\u62D3\u5C55\u884C\u4E3A\u76EE\u7684",behaviorMap:"\u884C\u4E3A\u6A21\u5F0F\u5730\u56FE"},en:{MVPPurpose:"MVP behavior purpose",extensionPurpose:"Extension behavior purpose",behaviorMap:"Behavior Map"}};var h=({data:e})=>{let n=(0,s.useRef)(null),{styles:t}=u(),[o]=(0,d.default)(p),h=(0,l.useRouteMeta)(),b=(0,c.useMermaidCode)(e),f=(0,s.useRef)(!1);return(0,s.useEffect)(()=>(f.current=!1,(async()=>{if(n.current&&b)try{let e=(await Promise.all([i.ensure("vendors_0"),i.ensure("2bf1ac51")]).then(i.dr(r,i.bind(i,"2bf1ac51")))).default;if(f.current)return;e.initialize({startOnLoad:!1,theme:"base",securityLevel:"strict",flowchart:{htmlLabels:!0,curve:"linear",rankSpacing:150,nodeSpacing:10}});let t=`mermaid-${Date.now()}`,{svg:a}=await e.render(t,b);!f.current&&n.current&&(n.current.innerHTML=a);}catch{!f.current&&n.current&&(n.current.innerHTML="Render Error");}})(),()=>{f.current=!0;}),[b]),(0,a.jsxs)("div",{className:t.container,children:[(0,a.jsx)("div",{className:t.title,children:`${h.frontmatter.title} ${o.behaviorMap}`}),(0,a.jsx)("div",{ref:n,className:t.chartContainer}),(0,a.jsxs)("div",{className:t.tips,children:[(0,a.jsx)("div",{className:t.mvp,children:o.MVPPurpose}),(0,a.jsx)("div",{className:t.extension,children:o.extensionPurpose})]})]});};}}]);