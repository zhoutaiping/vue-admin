// 判断是否是数组
export function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

// 判断数组中是否有重复值
export function isRepeat(arr) {
  if (!isArray(arr)) {
    console.warn('[arr] must be array')
    return
  }
  const set = new Set(arr)
  return set.size !== arr.length
}

// 数组正则判断
export function arrTest(arr, reg, split) {
  if (split) arr = arr.split(',')
  if (!isArray(arr)) {
    console.warn('[arr] must be array')
    return
  }
  let ret = true
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!reg.test(item)) {
      ret = false
    }
  }
  return ret
}

// 数组中的布尔转数字
export function arrBooleanToNumber(obj) {
  for (const k in obj) {
    obj[k] = obj[k] ? 1 : 0
  }
  return obj
}

// 数组转排序对象
export function arrToSortObj(arr) {
  const obj = {}
  let i = 0
  arr.forEach(item => {
    obj[item] = i
    i++
  })
  return obj
}

// 数组合并
export function arrMerge(arr1, arr2) {
  return Array.prototype.concat.apply([], arguments)
}

