function count(){
    for(var i=1; i <= 10; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
}

count();