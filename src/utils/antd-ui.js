import Vue from 'vue'

import Icon from 'ant-design-vue/lib/icon'
import Badge from 'ant-design-vue/lib/badge'
// import Col from 'ant-design-vue/lib/col'
// import Row from 'ant-design-vue/lib/row'
// import Button from 'ant-design-vue/lib/button'
// import Input from 'ant-design-vue/lib/input'
// import Select from 'ant-design-vue/lib/select'
// import Dropdown from 'ant-design-vue/lib/dropdown'
// import Skeleton from 'ant-design-vue/lib/skeleton'
// import Spin from 'ant-design-vue/lib/spin'
// import Form from 'ant-design-vue/lib/form'
// import Checkbox from 'ant-design-vue/lib/checkbox'
// import Tooltip from 'ant-design-vue/lib/tooltip'
// import Menu from 'ant-design-vue/lib/menu'
// import Anchor from 'ant-design-vue/lib/anchor'
// import Popover from 'ant-design-vue/lib/popover'
// import Tabs from 'ant-design-vue/lib/tabs'
// import Carousel from 'ant-design-vue/lib/carousel'

// Vue.use(Col)
// Vue.use(Row)
// Vue.use(Dropdown)
// Vue.use(Button)
// Vue.use(Skeleton)
// Vue.use(Spin)
// Vue.use(Input)
// Vue.use(Form)
// Vue.use(Select)
// Vue.use(Checkbox)
// Vue.use(Tooltip)
// Vue.use(Menu)
// Vue.use(Anchor)
// Vue.use(Popover)
// Vue.use(Tabs)
// Vue.use(Carousel)
Vue.use(Icon)
Vue.use(Badge)

import message from 'ant-design-vue/lib/message'
Vue.prototype.$message = message
Vue.prototype.message = message
