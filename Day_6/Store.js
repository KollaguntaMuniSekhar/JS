const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a*b;
   
    },
    function(a,b){
        return a-b;
    }
];
let first =arr[0];//change are a[1] for fisrt index like that
let ans=first(5,2);
console.log(ans);