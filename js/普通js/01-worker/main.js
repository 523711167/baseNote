console.time("test");
let count = 0;
for (let i = 0; i < 10; i++) {
    let worker = new Worker('worker.js');
    /**
     * 1. 创建worker对象,传递work.js
     * 2. 执行postMessage传递40
     * 3. work.js的self.addEventListener监听,self.postMessage传递回主线程监听
     * 4. worker.addEventListener回调函数执行
     */
    worker.postMessage(40);
    worker.addEventListener("message", (event) => {
        count++;
        if (count == 10) {
            console.timeEnd("test");
        }
        worker.terminate();
    })
}
console.log('执行完成')