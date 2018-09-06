/**@name indexedDB
 * 
 * window.indexedDB 
 * 
 * */ 

// console.log(window.indexedDB);

var request = window.indexedDB.open('sky',1);

console.log(request);

var db;

request.onsuccess = function(event){
  db = request.result;
  console.log(db);
  console.log('数据库打开成功');

  // var objectStore = db.createObjectStore('person',{keyPath:'id'});
  // console.log(objectStore);
}

// 如果指定的版本号 大于数据库的实际版本号 就会发生数据库升级事件

request.onupgradeneeded=function(event){
  db=event.target.result;
  console.log(db,'11');
}

