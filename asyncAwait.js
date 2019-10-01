function first(){
    return 'HIIIIII'
}

first();

function first1(){
    return new Promise(()=>{
        return "HIIIIIII"
    },3000);
}

first1();

async function firstOne(){
    const out=await first1();
    console.log(out);
}

var keepHisPromise=true;
promise1=new Promise(function(resolve, reject){
    if(keepHisPromise){
        resolve('keeps his promise');
    }else{
        reject('doesnt keep his  promise');
    }
});

var keepHistPromise=false;
promise1=new Promise((resolve, reject)=>{
    if(keepHisPromise){
        resolve('keeps promise ')
    }else{
        reject('doesnt keep his promise');
    }
});