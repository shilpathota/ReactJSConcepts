function x(){
    for(var i=1; i<=3;i++){
    function close(x){
    setTimeout(function(){
        console.log(x);
    },x*1000);
    }
    close(i);
    }
    console.log("set Timeout");
}
x();
//set Timeout
//1
//2
//3


