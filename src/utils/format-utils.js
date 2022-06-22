// 获取播放音乐
export function getPalySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}
// 格式化时间
export function formatTime(time) {

  const fen = parseInt(time / (1000 * 60)) + ''
  const miao = parseInt(parseInt(time % (1000 * 60)) / 1000) + ""
  const fenStr =  fen.length === 1 ? '0' + fen : fen
  const miaoStr =  miao.length === 1 ? '0' + miao : miao
  return fenStr + ":" + miaoStr
}
