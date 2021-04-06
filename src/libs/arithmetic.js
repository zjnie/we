// 冒泡排序
export function bubbleSort(arr, flag = true) {
  if (!Array.isArray(arr)) {
    throw new Error('第一个参数必须是数组类型')
  }
  
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return flag ? arr : arr.reverse()
}

// 快速排序
export function quickSort(arr, flag = true) {
  if (!Array.isArray(arr)) {
    throw new Error('第一个参数必须是数组类型')
  }
  
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  
  const middle = [arr[0]]
  const left = []
  const right = []
  
  for (let i = 1; i < len; i++ ) {
    if (arr[i] === middle[0]) {
      middle.push(arr[i])
    }
    else if (arr[i] < middle[0]) {
      left.push(arr[i])
    }
    else {
      right.push(arr[i])
    }
  }
  
  return [].concat(quickSort(left), middle, quickSort(right))
}

// 插入排序
export function insertSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('第一个参数必须是数组类型')
  }
  
  const len = arr.length
  if (len <= 1) {
    return arr
  }
  let cur, pre, preIndex
  for (let i = 1; i < len; i++) {
    cur = arr[i]
    preIndex = i - 1
    while (preIndex > -1) {
      pre = arr[preIndex]
      if (cur < pre) {
        arr[preIndex] = cur
        arr[preIndex + 1] = pre
      }
      preIndex--
    }
  }
  
  return arr
}

// 选择排序
export function selectSort(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('第一个参数必须是数组类型')
  }
  
  
}