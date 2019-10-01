var array=[1,2,5,7];
var array1=['rekha','keerthi','sruthi'];
var array2=[3,6,'rekha','keerthi',9];


array1.find(obj=>{
    obj.startsWith('r')
})
undefined
array1.find(obj=>{
    obj.startsWith('k')
})
undefined
array1.find(obj=>{
    console.log(obj.startsWith('k'))
})
VM1292:2 true
3VM1292:2 false
undefined
array1.find(obj=>{
    console.log(obj.startsWith('r'))
})
4VM1299:2 false
undefined
array1.find(obj=>{
    console.log(obj.startsWith('s'))
})
VM1331:2 false
3VM1331:2 true

array1.concat('panchaparvala')
(5) ["kanthi", "sruthi", "keerthi", "saradhi", "panchaparvala"]

array1
(4) ["kanthi", "sruthi", "keerthi", "saradhi"]

array1.fill('sai raghava',1)
(4) ["kanthi", "sai raghava", "sai raghava", "sai raghava"]

array1.fill('sai raghava1',1,3)
(4) ["kanthi", "sai raghava1", "sai raghava1", "sai raghava"]

array1.push('kanthi')
4
array1
(4) ["rekha", "keerthi", "sruthi", "kanthi"]

array1.pop('raghava')
"kanthi"
array1
(3) ["rekha", "keerthi", "sruthi"]
array1.pop('raghava')
"sruthi"
array1.pop()
"keerthi"
array1.pop()
"rekha"
array1.pop()
undefined

array1.unshift('saradhi')
5
array1
(5) ["saradhi", "rekha", "kanthi", "sruthi", "keerthi"]

array1.shift('rekha')
"saradhi"
array1
(4) ["rekha", "kanthi", "sruthi", "keerthi"]
array1.shift()
"rekha"
array1
(3) ["kanthi", "sruthi", "keerthi"]


for(var i=0;i<array.length;i++){
    console.log(array[i]);
}

for(i=0;i<array1.length;i++){
    console.log(array1[i]);
}

for(i=0;i<array2.length;i++){
    console.log(array2[i]);
}
VM540:6 1
VM540:6 2
VM540:6 5
VM540:6 7
VM540:10 rekha
VM540:10 keerthi
VM540:10 sruthi
VM540:14 3
VM540:14 6
VM540:14 rekha
VM540:14 keerthi
VM540:14 9
