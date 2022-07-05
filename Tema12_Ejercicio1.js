
function fibonacci(a) {
    let result=[0,1]

    for (let i = 1; i<=a; i++){
        result.push(result[i-1]+result[i])
    }
    return result
}

fibonacci(10)