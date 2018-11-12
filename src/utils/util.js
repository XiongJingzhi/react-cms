export default {
  formatDate(time) {
    if (!time) {
      return ''
    }
    function format(value) {
      return value > 9 ? value : '0' + value
    }
    const d = new Date(time)
    const year = d.getFullYear()
    const month = format(d.getMonth() + 1)
    const date = format(d.getDate())
    const week = d.getDay()
    const array = ['日','一','二','三','四','五','六']
    const weeks = array[week]
    const hours = format(d.getHours())
    const minutes = format(d.getMinutes())
    const second = format(d.getSeconds())
    const str = `${year}/${month}/${date} 星期${weeks} ${hours}:${minutes}:${second}`
    return str
  },
  isNight() {
    let now = new Date()
    let hour = now.getHours()
    return hour > 19 || hour < 6 ? true: false
  }
}