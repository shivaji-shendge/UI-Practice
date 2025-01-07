for(let i=1;i<=100;i++){
    let j=2;
    let count=0;
    while(j<i){
        if(i%j==0)
        count++;
        j++;
    }
    if(count==0) console.log(i);
}