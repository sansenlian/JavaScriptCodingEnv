import readline from 'readline';
import chalk from 'chalk'
// ---------------------- 开始 ----------------------- 定义有颜色的console
export const _remaind = {};
_remaind.success = (tips = '', str = '') => {
    console.log(`${ chalk.green(tips) } ${str}`)
}

_remaind.warn = (tips = '', str = '') => {
    console.log(`${ chalk.yellow(tips) } ${str}`)
}
_remaind.info = (tips = '', str = '') => {
    console.log(`${ chalk.blue(tips) } ${str}`)
}
// ------------------------ 结束 --------------------- 定义有颜色的console

// ---------------------- 开始 ----------------------- 定义读取文件io
var fs = require('fs');

var fPath = './input.log';
var fRead = fs.createReadStream(fPath, {encoding: 'utf8'});
var res; // 返回读行的结果
/*const options = {
    ioFlag: true // 此处 hack 掉循环时关闭流之后的输入数据提示
}*/
const readFile = () =>{
    return new Promise((resolve, reject)=>{
        // 文件读取中事件
        fRead.on('data', (chunk) => {
            resolve(chunk);
        })
    })
};
export const read = async () => {
    // if (!options.ioFlag) return;
    _remaind.success('--------------------------------- 程序开始')
    _remaind.info('从 input.log 中读取数据, 数据为: ')
    return await readFile();
}

export const print = (msg) => {
    _remaind.success('运行结果: ', msg)
    rl.close();
    // options.ioFlag = false;
}
// ---------------------- 结束 ----------------------- 定义读取文件io