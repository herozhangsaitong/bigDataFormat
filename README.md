## 安装
```js
    npm install big-data-formats
```


## 导入
```js

const getName = require('big-data-formats')

```

## 格式化时间
```js
// 调用 dataFormat() 方法 格式化时间
const d = dates.dataFormat(new Date())
// 结果 2022-08-28 17:22:27
```

## 转译html中的特殊字符
```js
// 调用 htmlFormat() 方法 转译html中的特殊字符
const arr1 = '<h1>你好呀<span>kagkdkahsdkjask</span></h1>'
console.log(dates.htmlFormat(arr1))
// 结果 &lt;h1&gt;你好呀&lt;span&gt;kagkdkahsdkjask&lt;/span&gt;&lt;/h1&gt;
```

## 转译html中的特殊字符
```js
// 定义的html字符串
const arr1 = '<h1>你好呀<span>kagkdkahsdkjask</span></h1>'
// 调用htmlFormat() 方法
const str = dates.htmlFormat(arr1)
console.log(str)
// 结果 &lt;h1&gt;你好呀&lt;span&gt;kagkdkahsdkjask&lt;/span&gt;&lt;/h1&gt;
```

## 还原html中的字符特殊用法
```js
// 定义特殊字符串
const str1 = '&lt;h1&gt;你好呀&lt;span&gt;kagkdkahsdkjask&lt;/span&gt;&lt;/h1&gt;'
// 调用htmlUnFormat()方法
const str2 = dates.htmlUnFormat(str1)
//结果： <h1>你好呀<span>kagkdkahsdkjask</span></h1>
console.log(str2)

```

## 开源协议
ISC

