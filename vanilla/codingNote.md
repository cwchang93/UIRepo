# 基礎語法 & 常搞混的syntax
### 1. split
把字串切成Array的語法; <br />  
不給參數會直接把整團當作array第一個值

### 常見地雷區: 少了一個空格
```js
const sentence = "How are you doing, JW?";

sentence.split(); // ["How are you doing, JW?"]

sentence.split(""); // ["H", "o", "w", " ", "a", "r", "e", " ", "y", "o", "u", " ", "d", "o", "i", "n", "g", ",", " ", "J", "W", "?"]

sentence.split(" "); // ["How", "are", "you", "doing,", "JW?"]

```

### 2. reverse
把array的順序顛倒; <br />
```js
const sentenceArr = ["How", "are", "you", "doing,", "JW?"];

sentenceArr.reverse(); // ["JW?", "doing,", "you", "are", "How"]

```

### 3. join
#### arr.join([separator]);  default separator = ",";
把array變回字串;
```js



```
