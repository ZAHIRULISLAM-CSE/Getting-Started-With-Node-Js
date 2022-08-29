var array=[10,14,16,18,20]
console.log(array[2]);
array.push(40);
console.log(array);
console.log(array.length);
array.pop();
console.log(array);
console.log(array.length);


//add element in first position
array.unshift(100);
console.log(array);

//remove the first element
array.shift();
console.log(array);

//add element in specific index

array.splice(2, 0, 10000);
console.log(array);