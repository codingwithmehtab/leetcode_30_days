/*

2621. Sleep
Easy
premium lock icon
Companies
Hint
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

Note that minor deviation from millis in the actual sleep duration is acceptable.

 

Example 1:

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
Example 2:

Input: millis = 200
Output: 200
Explanation: It should return a promise that resolves after 200ms.
 

Constraints:

1 <= millis <= 1000

*/

{
    async function sleep (millis) {
        let promise = new Promise((resolve, reject)=> {
            setTimeout(() => {
                resolve ("foo")
            }, millis);
        })
        let result = await promise.then(val=> val)
        return result
    }

    let x = sleep(2).then(val => val)
    // console.log(x)
}

{
    // 3. When you want to do something after the promise resolves (but before returning)
    async function sleepAndLog(ms) {
        let count = 10
  await new Promise(resolve => setTimeout(resolve, ms)).then (()=> count+=ms)

  console.log(`Slept for ${count} ms`);
}

let x = sleepAndLog(4)

// ✅ await makes sure console.log happens only after sleep finishes.
}