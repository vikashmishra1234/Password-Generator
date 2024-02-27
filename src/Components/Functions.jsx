export const upperCase=()=>{
    const string = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    const a=string.slice(Math.floor(Math.random()*10),Math.floor(Math.random()*string.length))
    console.log(a)
}
