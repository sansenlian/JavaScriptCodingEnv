import {read as readfile, print,_remaind} from './dist/file-io';
import {read} from "./lib/file-io";

var _line_index = 0;
readfile().then(_data=>{
    _remaind.info(_data)
    _data = _data.split('\n')
    function readline() {
        let res = _data[_line_index];
        _remaind.warn("读取一行字符串: ")
        _remaind.info(res)
        _line_index++;
        return res;
    }
    _remaind.success("------------------------------- 以下是自己的结果")
    customCode(readline,readline);
});
/**
 * @method  customCode      笔试的时候代码写在这个函数里
 * @param   {readline}      牛客网读取一行
 * @param   {read_line}     赛码网读取一行
 * @author                  sansenlian@foxmail.com
 * @date                    2019年08月05日11:00:38
 * @warning                 读取的是字符串, 一般如果是数字的话就要全部转成数字
 */
function customCode(readline,read_line) {
    // ======================================================================================== 以下是自己的代码, 复制到编辑器








    const strToNumber = (linestr)=>{
        let arr = linestr.split(/\s+/);
        arr = arr.map((item)=>Number(item)); // 字符串转成数字类型
        return arr;
    }
    // -------------------------------------------------------
    readline()
    read_line()

    










    // ===================================================================================================== 编辑结束
}
function utils() {
    let res = [];
    res.forEach((i) => console.log(i));     // 迭代输出
}








/* ------------------------------------------ 直接复制用于模拟debug
        for(let i = 0;i<len;i++){

        }
    console.log("-------------- 1 -------------- ")
    console.log("-------------- 2 -------------- ")
    console.log("-------------- 3 -------------- ")
    console.log("-------------- 4 -------------- ")
    console.log("-------------- 5 -------------- ")
    console.log("-------------- 6 -------------- ")
    console.log("-------------- 7 -------------- ")
    console.log("-------------- 8 -------------- ")
    console.log("-------------- 9 -------------- ")
    console.log("-------------- 10 -------------- ")
    console.log("-------------- 11 -------------- ")
    console.log("-------------- 12 -------------- ")
*/