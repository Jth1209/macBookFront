let promise = new Promise((resolve,reject) =>{
    let a = 1 + 2;
    if(a == 2){
        resolve('Success');
    }else{
        reject('Failed');
    }
})

promise.then((message)=>{
    console.log('This is in the then: ' + message);//then은 resolve를 실행시켜준다.
}).catch((message)=>{
    console.log('This is in the catch: ' + message)//catch는 reject를 실행시켜준다.
})