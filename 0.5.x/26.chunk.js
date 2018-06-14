webpackJsonp([26],{1142:function(e,t){e.exports="# Textarea *多行文本框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| autosize | bool | false | 高度是否随内容自动变化 |\n| defaultValue | string \\| number | | 默认值 |\n| delay | number | 400 | 用户输入触发 onChange 和校验间隔时间，单位 毫秒。|\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(d) | | 值改变回调函数 |\n| placeholder | string | | 同原生 input 标签的 placeholder |\n| popover | string | | 信息弹出位置，可选值为 \\['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right'] |\n| rows | number | 4 | 最小行高，同原生 textarea rows 属性 |\n| style | object | 无 | 最外层扩展样式 |\n| tip | string \\| ReactElement | | 提示信息 |\n| value | string \\| number | | defaultValue 和 value 可以同时设置，defaultValue 会被value覆盖<br />在Form中，value会被表单接管，value无效 |\n"},1143:function(e,t){e.exports="# Textarea\n\n<example />"},1144:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128);t.default=function(){return o.a.createElement(r.y,{rows:6,placeholder:"input something"})}},1145:function(e,t){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function () {\n  return (\n    <Textarea rows={6} placeholder=\"input something\" />\n  )\n}\n"},1146:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(128);t.default=function(){return o.a.createElement(r.y,{rows:2,autosize:!0,style:{maxHeight:200},placeholder:"autosize"})}},1147:function(e,t){e.exports="/**\n * cn - 自适应高度\n *    -- autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 style.maxHeight 即可\n * en - Autosize\n */\nimport React from 'react'\nimport { Textarea } from 'shineout'\n\nexport default function () {\n  return (\n    <Textarea rows={2} autosize style={{ maxHeight: 200 }} placeholder=\"autosize\" />\n  )\n}\n"},1404:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n.n(a),r=n(130),u=n(129),i=n(87),s=n(1142),l=n.n(s),c=n(1143),m=n.n(c),p=Object(i.a)(l.a,m.a),f=[{name:"1-base",title:Object(i.a)("基本用法","Base"),component:n(1144).default,rawText:n(1145)},{name:"2-autosize",title:Object(i.a)("自适应高度 \n autosize 为 true 时，rows 为最小高度，如果要设置最大高度，使用 style.maxHeight 即可","Autosize"),component:n(1146).default,rawText:n(1147)}];t.default=Object(r.a)(function(e){return o.a.createElement(u.b,Object.assign({},e,{codes:void 0,source:p,examples:f}))})}});