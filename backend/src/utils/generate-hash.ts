export const randomHash=function(len:number){
let options='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890~!@#$%^&*()_+'
let ans=''
for(let i=0;i<=len;i++){
    ans+=options[Math.floor(Math.random()*len)]
}
return ans
}