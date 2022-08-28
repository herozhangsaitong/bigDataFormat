// 定义转化 HTML
function htmlFormat(htmlstr) {
    return htmlstr.replace(/<|>|"|&/g, match => {
        switch(match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '"':
                return '&quot;'
            case '&':
                return '&amp;'
        }
         
    })
}

// 还原 HTML
function htmlUnFormat(htmlstr) {
    return htmlstr.replace(/&lt;|&gt;|&quot;|&amp;/g, match => {
        switch(match) {
            case '&lt;':
                return '<;'
            case '&gt;':
                return '>'
            case '&quot;':
                return '"'
            case '&amp;':
                return '&'
        }
         
    })
}

module.exports = {
    htmlFormat,
    htmlUnFormat
}