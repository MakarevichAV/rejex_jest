let text = '   ECMAScript16'
let pattern = /^ *ecmascript([1-9]|1[0-6])?$/i
let check = pattern.test(text)
console.log(check)