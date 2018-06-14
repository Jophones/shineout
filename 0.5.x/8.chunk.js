webpackJsonp([8],{1098:function(e,t){e.exports="# Rate *评分*\n\nRate 为一个函数，返回一个指定 图标 或 文字 的组件，供多处复用。\n\n<example />\n\n## API\n\n#### Rate function(background, front):ReactClass\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | ReactElement \\| string \\| array | 必填 | 待选项 |\n| front | ReactElement \\| string \\| array | front | 选中项，不填和待选项相同 |\n\n### Rate\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| defaultValue | number | | 默认值 |\n| disabled | bool | false | 是否只读 |\n| max | number | 5 | 选项最大值，整数 |\n| onChange | function(d) | | 值改变回调函数 |\n| repeat | bool | true | \n| size | number \\| string | 20 | 图标大小 |\n| value | number | 0 | 作为可输入组件时，为整数，只读展示时，可以带小数 |"},1099:function(e,t){e.exports=""},1100:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"star"}),l=Object(r.t)(s,s);t.default=function(){return o.a.createElement(l,null)}},1101:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate />\n  )\n}\n"},1102:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"heart-o"}),l=o.a.createElement(c.a,{name:"heart",style:{color:"#ff4d4f"}}),u=Object(r.t)(s,l);t.default=function(){return o.a.createElement(u,null)}},1103:function(e,t){e.exports="/**\n * cn - 颜色\n *    -- 创建函数时设置颜色\n * en - Icon color\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst heartBg = <FontAwesome name=\"heart-o\" />\nconst heart = <FontAwesome name=\"heart\" style={{ color: '#ff4d4f' }} />\nconst HeartRate = Rate(heartBg, heart)\n\nexport default function () {\n  return (\n    <HeartRate />\n  )\n}\n"},1104:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"star"}),l=Object(r.t)(s,s);t.default=function(){return o.a.createElement(l,{max:10,defaultValue:3})}},1105:function(e,t){e.exports="/**\n * cn - 最大值\n *    -- 通过max设置选项最大值\n * en - Array\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate max={10} defaultValue={3} />\n  )\n}\n"},1106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"star"}),l=Object(r.t)(s,s);t.default=function(){return o.a.createElement("div",null,o.a.createElement(l,{size:14}),o.a.createElement(l,{size:20}),o.a.createElement(l,{size:40}))}},1107:function(e,t){e.exports="/**\n * cn - 大小\n * en - Array\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <div>\n      <StarRate size={14} />\n      <StarRate size={20} />\n      <StarRate size={40} />\n    </div>\n  )\n}\n"},1108:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"star"}),l=Object(r.t)(s,s);t.default=function(){return o.a.createElement(l,{value:4,text:["poor","fair","good","very good","excellent"]})}},1109:function(e,t){e.exports="/**\n * cn - 文字\n * en - Text\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate value={4} text={['poor', 'fair', 'good', 'very good', 'excellent']} />\n  )\n}\n"},1110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=n(569),s=o.a.createElement(c.a,{name:"star"}),l=Object(r.t)(s,s);t.default=function(){return o.a.createElement(l,{value:3.6,disabled:!0})}},1111:function(e,t){e.exports="/**\n * cn - 只读\n *    -- 只读状态下，value可以传入小数\n * en - Readonly\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\nimport FontAwesome from '../Icon/FontAwesome'\n\nconst star = <FontAwesome name=\"star\" />\nconst StarRate = Rate(star, star)\n\nexport default function () {\n  return (\n    <StarRate value={3.6} disabled />\n  )\n}\n"},1112:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=Object(r.k)("https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css","facefont"),s=o.a.createElement(c,{name:"question"}),l=[o.a.createElement(c,{name:"cry",style:{color:"#003a8c"}}),o.a.createElement(c,{name:"sad",style:{color:"#222222"}}),o.a.createElement(c,{name:"sleeping",style:{color:"#ffa940"}}),o.a.createElement(c,{name:"happy",style:{color:"#fa541c"}}),o.a.createElement(c,{name:"lol",style:{color:"#fa541c"}})],u=Object(r.t)(s,l);t.default=function(){return o.a.createElement(u,{equal:!1,size:40,value:3})}},1113:function(e,t){e.exports="/**\n * cn - 分级显示\n *    -- 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value\n * en - Array\n */\nimport React from 'react'\nimport { Rate, Icon } from 'shineout'\n\nconst FaceIcon = Icon('https://at.alicdn.com/t/font_662584_hfkafvbgwurkvs4i.css', 'facefont')\nconst background = <FaceIcon name=\"question\" />\nconst front = [\n  <FaceIcon name=\"cry\" style={{ color: '#003a8c' }} />,\n  <FaceIcon name=\"sad\" style={{ color: '#222222' }} />,\n  <FaceIcon name=\"sleeping\" style={{ color: '#ffa940' }} />,\n  <FaceIcon name=\"happy\" style={{ color: '#fa541c' }} />,\n  <FaceIcon name=\"lol\" style={{ color: '#fa541c' }} />,\n]\nconst TextRate = Rate(background, front)\n\nexport default function () {\n  return (\n    <TextRate equal={false} size={40} value={3} />\n  )\n}\n"},1114:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128),c=["A","B","C","D","E"],s=c.map(function(e){return o.a.createElement("span",{style:{color:"red"}},e)}),l=Object(r.t)(c,s);t.default=function(){return o.a.createElement(l,{repeat:!1,value:2})}},1115:function(e,t){e.exports="/**\n * cn - 不重复选项\n *    -- 选项为数组时，设置 repeat 属性为 false 可以平铺选项\n * en - No Repeat\n */\nimport React from 'react'\nimport { Rate } from 'shineout'\n\nconst text = ['A', 'B', 'C', 'D', 'E']\nconst front = text.map(t => <span style={{ color: 'red' }}>{t}</span>)\nconst TextRate = Rate(text, front)\n\nexport default function () {\n  return (\n    <TextRate repeat={false} value={2} />\n  )\n}\n"},1402:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(130),c=n(129),s=n(87),l=n(1098),u=n.n(l),m=n(1099),f=n.n(m),i=Object(s.a)(u.a,f.a),p=[{name:"01-base",title:Object(s.a)("基本用法","Base"),component:n(1100).default,rawText:n(1101)},{name:"02-color",title:Object(s.a)("颜色 \n 创建函数时设置颜色","Icon color"),component:n(1102).default,rawText:n(1103)},{name:"04-max",title:Object(s.a)("最大值 \n 通过max设置选项最大值","Array"),component:n(1104).default,rawText:n(1105)},{name:"05-size",title:Object(s.a)("大小","Array"),component:n(1106).default,rawText:n(1107)},{name:"06-text",title:Object(s.a)("文字","Text"),component:n(1108).default,rawText:n(1109)},{name:"07-disabled",title:Object(s.a)("只读 \n 只读状态下，value可以传入小数","Readonly"),component:n(1110).default,rawText:n(1111)},{name:"08-face",title:Object(s.a)("分级显示 \n 创建组件时可以使用数组显示不同分数下的选项，这种情况下，不支持带小数的value","Array"),component:n(1112).default,rawText:n(1113)},{name:"09-array",title:Object(s.a)("不重复选项 \n 选项为数组时，设置 repeat 属性为 false 可以平铺选项","No Repeat"),component:n(1114).default,rawText:n(1115)}];t.default=Object(r.a)(function(e){return o.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:i,examples:p}))})},569:function(e,t,n){"use strict";var a=n(128);t.a=Object(a.k)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")}});