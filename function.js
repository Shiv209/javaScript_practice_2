function addfunc(v1,v2=23){ // named function in js
    return v1+v2;
}
console.log("addition is: "+addfunc(25));

//lamda method

const mulfunc = (v1,v2) => v1*v2;

console.log("multiplication is: "+mulfunc(23,22));

//function of an array

const sum = (...args) => {  //declared as a lamda expresson
    let res = 0;
    for(const val of args){
        res += val;
    }
    return res;
}

console.log("sum: "+sum(22,15,36,78,33,55,67));
