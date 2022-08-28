function dapZero(n) {
    return n > 9 ? n : '0' + n
}

function dataFormat(dataStr) {

    const dt = new Date(dataStr)

    const y = dt.getFullYear()
    const m = dapZero(dt.getMonth() + 1)
    const d = dapZero(dt.getDate())

    const hh = dapZero(dt.getHours())
    const mm = dapZero(dt.getMinutes())
    const ss = dapZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}


module.exports = {
    dataFormat
}