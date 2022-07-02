let result=1
let index=1;
while (true) {
    result=result*index; 
    index=index+1
    if (index>10){
        break;
    }
}
console.log("El factorial de 10 es: " + result)