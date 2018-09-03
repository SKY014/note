/**
 * @name lodash笔记
 * @author sky014
 * @version 1.0
 * 
 * */ 

/**
 * @name Array方法 methods
 * 
 * */ 

let arr=[1,2,3,4,5,6,7,8];
let arr1=[0,1,false,2,'',3];


/**
 * chunk(大块) 返回一个新的数组
 * params1 array 被加工的数组
 * params2 每一块的长度
 * 
 * 
 * */ 

let chunk_arr=_.chunk(arr,2);
// console.log(chunk_arr);

/**
 * compact 使简洁 返回一个新的过滤过的数组
 * params1 arr 被简洁的数组
 * 
 * */ 

let compact_arr=_.compact(arr1);
console.log(compact_arr);

/**
 * concat
 * 
 * */ 




