var array=[3,5,7,34,65,87,90,'rekha','keerthi','gopi','raghava'];

for(var i=0;i< array.length;i++){
    console.log(array[i]);
}

for(a1 of array){
    console.log(a1);
}

array.map(a=>{return a});

array.map(a => {
  return a.length;
});

//looping through array using map()
array.map(a=>{
    if(isNaN(a)){
        return `${a} is string`;
    }else{
        return a+1;
    }
});

//looping through array using filter()

array.filter(a=>{
    if(typeof(a)=="number"){
        return parseInt(a);
    }
});


//looping through array using filter() and reduce()
array.filter(a=>{
    if(typeof(a)=="number"){
        return parseInt(a);
    }
}).reduce((acc,a)=>{
    return acc+=a;
});


array.filter(a=>{
    if(typeof(a)== "string"){
        return a;
    }
});

array.forEach(a=>{
    console.log(a+1)
});

array.every(a=>{
    console.log(a)
})

array.find(a=>{
    if(a.length>3)
        return a;
})

array.every(a=>{
    typeof(a)==='string';
})

array.every(a => {
  typeof a === "number";
});