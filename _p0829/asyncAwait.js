function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{//해당 Promise의 결과값을 2초의 대기시간을 두고 도출
            const success = true;
            if(success){
                resolve('Data fetched successfully');
            }else{
                reject('Failed to fetch Data.')
            }
        },2000);
    });
}

async function getData() {//async-await는 try catch문을 사용하여 오류를 걸러낸다.*****
    try{
        const result = await fetchData();
        console.log(result);
    }catch (error){
        console.error(error);
    }
}

getData();