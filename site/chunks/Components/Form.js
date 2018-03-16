/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'
import log from 'doc/utils/log'
import locate from 'doc/locate'

import cn from 'doc/pages/components/Form/cn.md'
import en from 'doc/pages/components/Form/en.md'

const source = locate(cn, en)

const examples = [
  {
    title: locate('基本用法', 'Base'),
    component: require('doc/pages/components/Form/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-1-base.js'),
  },
  {
    title: locate('标签 \n 通过 labelWidth 和 labelAlign 改变标签宽度和对齐方式', 'Label'),
    component: require('doc/pages/components/Form/example-2-label.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-2-label.js'),
  },
  {
    title: locate('', ''),
    component: require('doc/pages/components/Form/example-3-label.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-3-label.js'),
  },
  {
    title: locate('水平布局', 'Inline'),
    component: require('doc/pages/components/Form/example-4-inline.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-4-inline.js'),
  },
  {
    title: locate('提示 \n 在 Form.Item 上设置提示文案时，提示文案始终显示在组件下方', 'Label'),
    component: require('doc/pages/components/Form/example-5-tip.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-5-tip.js'),
  },
  {
    title: locate('\n 在 Input 或 Input.Group 上设置的 tip，会在组件 focus 时弹出显示', ''),
    component: require('doc/pages/components/Form/example-6-tip.js').default,
    rawText: require('!raw-loader!doc/pages/components/Form/example-6-tip.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))