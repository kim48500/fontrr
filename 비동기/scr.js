//비동기 
console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3')
//async/awaot

const ws = (msg, ms) => {
    return new Promise((resolve) =>
        setTimeout(() => {
            console.log(msg);
            resolve()

        }, ms),
    );



};
const run = async () => {
    
    await ws('1', 1000);
   
    await ws('2', 1000);
    
    await ws('3',1000);
};
run();