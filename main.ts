let ask: any;
ask = prompt('write your number')

let result: any;
result = (ask == 0) ? 'Число 0': (ask %2 ==0)? 'Це число є парним' : 'Це число не є парним'
console.log(result)


