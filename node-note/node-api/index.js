// 断言模块 assert 模块提供了断言测试的函数，用于测试不变式；
const assert = require('assert');

// 缓冲器 buffer 
const buffer = Buffer.alloc(10);

// child_process 子进程模块提供了衍生子进程的功能
const { spawn } = require('child_process');
const ls = spawn('ls',['-lh','/usr']);

ls.stdout.on('data',(data) =>{
  // console.log(`输出：${data}`);
});

// cluster 集群模块 允许简单容易的创建恭喜服务器端口的子进程
const cluster = require('cluster');

// 控制台 console 呃呃呃，这个一直在用

// crypto加密 提供了加密功能
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256',secret).update('I love cupcakes').digest('hex');
// console.log(hash);

// dgram 模块 提供了UDP 数据包socket的实现

const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('error',(err)=>{
  // console.log(`服务器异常： \n${err.stack}`);
});

server.on('message', (msg, rinfo) => {
  // console.log(`服务器收到：${msg} 来自 ${rinfo.address}:${rinfo.port}`);
});

server.on('listening', () => {
  const address = server.address();
  // console.log(`服务器监听 ${address.address}:${address.port}`);
});

server.bind(3000);

// dns 域名服务器
const dns = require('dns');

dns.lookup('iana.org',(err,address,family)=>{
  // console.log('IP 地址: %j 地址族: IPv%s', address, family);
})

// err 异常

// events事件

// fs 文件系统 重点
const fs=require('fs');

// fs.unlink('/tmp/hello',(err)=>{

// })

// global 全局变量 如 URL

// http 服务器和客户端
const http = require ('http');

// https 
const https = require('https');

// module 模块

// net 网络
const net = require('net');

// os 操作系统
const os = require('os');

// path 路径
const psth = require('path');

// process 进程 全局变量

// querystring 查询字符串
const querystring = require('querystring');

// querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,{ decodeURIComponent: gbkDecodeURIComponent });

// url 
const url = require('url');

// vm 虚拟机
const vm = require('vm');

// zlib 压缩
const zlib = require('zlib');

// v8
const v8 = require('v8');

// util 实用工具
const util = require('util');

// tty 终端
const tty = require('tty');

// strem 流
const strem = require('stream');

// 安全传输层
const tls = require('tls');

// timer 定时器



// console.log(timeout);
// console.log(tls);
// console.log(strem);
// console.log(tty);
// console.log(util);
// console.log(v8);
// console.log(zlib);
// console.log(vm);
// console.log(url);
// console.log(querystring);
// console.log(path);
// console.log(os);
// console.log(net);
// console.log(https);
// console.log(http);
// console.log(cluster);
// console.log(buffer);
// console.log(assert);
