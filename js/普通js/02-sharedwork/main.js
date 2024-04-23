console.time("test");
let count = 0;
for (let i = 0; i < 10; i++) {
    /**
     * shared共享work(为同一个work),必须是指向的同一个文件
     * 1. 创建sharedwork,传递share.js
     * 2. 执行port.postMessage方法,
     * 3. 触发share.js的onconnect方法
     * 4. 触发onmessage
     * 实际等同于单线程执行,主要是可以共享,shared不可以使用DOM
     */
    let worker = new SharedWorker('share.js');
    worker.port.postMessage(40);
    worker.port.onmessage = (event) => {
        console.log(event.data)
        count++;
        if (count == 10) {
            console.timeEnd("test");
        }
    }
}
