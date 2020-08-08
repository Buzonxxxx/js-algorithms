// splice: 從 start 位置開始"移除"指定的元素個數，然後插入新元素。刪除的元素會當做新的 Array 物件傳回
// array.splice(start, deleteCount, item1, ....., itemX)
const arr7 = [ 1, 2, 3 ];
console.log(arr7.splice(0, 1));
// [ 1 ]
console.log(arr7);
// [ 2, 3 ]
const arr8 = [ 1, 2, 3 ];
console.log(arr8.splice(1, 2, 'xd'));
// [ 2, 3 ]
console.log(arr8);
// [ 1, 'xd' ]
