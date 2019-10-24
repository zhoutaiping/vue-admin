import { deepClone } from '../utils'

function Form(form, rules = {}) {
  this.$rules = rules
  this.$disabled = false
  this.$processing = false
  this._init(form)
}

// 初始化
Form.prototype._init = function(form) {
  this.$raw = deepClone(form)

  // 字段映射
  Object.keys(form).forEach(key => {
    this[key] = form[key]
  })
}

// 提交操作
Form.prototype.submit = function() {
  this.$disabled = true
  this.$processing = true
}

// 验证未通过
Form.prototype.invalid = function(time = 500) {
  setTimeout(() => {
    this.$disabled = false
    this.$processing = false
  }, time)
}

// 完成
Form.prototype.finish = function(time = 500) {
  this.$disabled = false
  this.$processing = false
}

// 虚拟延迟
Form.prototype.excessive = async function(time = 1500) {
  this.$disabled = true
  this.$processing = true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      this.$disabled = false
      this.$processing = false
      resolve()
    }, time)
  })
}

// 禁用表单
Form.prototype.disabled = function() {
  this.$disabled = true
}

// 重置表单
Form.prototype.reset = function() {
  this.$disabled = false
  this.$processing = false

  const { $raw: form } = this
  Object.keys(form).forEach(key => {
    this[key] = form[key]
  })
}

export default Form
