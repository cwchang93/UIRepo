# Coding Questions

### 1. 實作符合下面的函式
```js
add(2,5); //7
add(2)(5);
``` 

### 2. 下面兩個輸出結果？ 
```js
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

```js
var foo = "Hello";
var bar;
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```

### 3. 下面的輸出結果？
```js
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```

### 4. 下面的console結果？
```js
console.log(this);

const JW ={
    name: 'Jinwei',
    yearOfBirth:1990,
    functionInObj:function(){
        console.log(this);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    },
}
```

### 5. 試說明method borrrowing;
