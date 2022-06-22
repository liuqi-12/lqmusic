// 格式化播放量
export function formattPlayCount(count) {
  let num = count + ''
  if(num<10000) {
    return num
  } else {
    return parseInt(num/10000) + "万"
  }
}

// 切分数组
export function chunk(arr,size) {
  const newArr = []
  for (let i = 0; i < arr.length; i =i+size) {
    newArr.push(arr.slice(i,i+size))
  }
  return newArr
}

// 生成随机整数
export function randomPintNum(rang) {
  return parseInt(Math.random() * rang)
}
