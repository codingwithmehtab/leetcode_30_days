let fns = [x => x + 1, x => x * x, x => 2 * x]  // output = 65
let val = 4

/**
 * @param {Function[]} functions
 * @return {Function}
 */

// composition ke liye hume array ko last mein iterate karna padega 
// or jodne ke jagah par x ki value ko hi har bar update karna padega

{
    const composed = fns => {
        return (x) => {
            return fns.reduceRight((acc, fn) => acc = fn(acc), x )
        }
    }

    // let ans = composed(fns)
    // let x = ans(val)    
    // console.log(x)
}


{
const compose = function(functions) {
    
    return function(x) {
        let num = x
       for(let i=functions.length-1; i >=0; i--){
        let fn = functions[i]
        num = fn(num)
       }
       console.log(num)
       return num
    }
};

// let ans = compose(fns)
// ans(val)

}


{
    const anotherCompose = fns => {
        return (x) => {
            for (let fn  of fns.reverse()){
                x = fn(x)
            }
            return x
        }
    }

    let ans = anotherCompose(fns)
    let x = ans(val)    
    console.log(x)
}