const promise1 =new Promise(function(resolve,reject){
    setTimeout(function(){
console.log("async task completed");
let err=0;
if(!err)
resolve({username:"ayush",password:"123"})
else reject("error : something went wrong ")
    },2000)
})
// promise1.then(function(user){
//     console.log(user)
//     return user.username
// })
// .then(function(name){
//     console.log(name);
// })
// .catch(function (err){
//     console.log(err)
// })
// .finally(function(){
//     console.log("default statement")
// })

async function consumePromise(){
    try {
        const response= await promise1
        console.log(response)
        
    } catch (error) {
        console.log(error)
        
    }
}
consumePromise()
// async function getDetails(){
//     const response= await fetch("https://api.github.com/users/hiteshchoudhary")
//     const data =await response.json()
//     console.log(data)
// }
// getDetails()