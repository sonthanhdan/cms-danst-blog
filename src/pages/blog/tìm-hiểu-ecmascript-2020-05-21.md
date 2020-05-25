---
templateKey: blog-post
title: Tìm hiểu ECMAScript
date: 2020-05-21T01:32:22.271Z
author: Danst
description: Tìm hiểu ECMAScript
featuredpost: true
featuredimage: /img/ecmascript.jpg
tags:
  - javascript
  - es6
---
## Lịch sử

ES6 là chữ viết tắt của ECMAScript 6, là phiên bản mới nhất của chuẩn ECMAScript. ECMAScript do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn của ngôn ngữ Javascript. Bạn cứ nghĩ xem hiện nay có khá nhiều trình duyệt Browser ra đời và nếu mỗi Browser lại có cách chạy Javascript khác nhau thì các trang web không thể hoạt động trên tất cả các trình duyệt đó được, vì vậy cần có một chuẩn chung để bắt buộc các browser phải phát triển dựa theo chuẩn đó.

ES6 ra đời vào năm 2015 nên cái tên ES2015 được lấy làm tên chính thức với nhiều tính năng mới học hỏi các ngôn ngữ cấp cao khác, hy vọng dần theo thời gian Javascript trở thành một ngôn ngữ lập trình hướng đối tượng.

Phiên bản sắp ra trong năm 2017 đó là phiên bản ES7 cũng đang được nghiên cứu và phát triển, họ cũng nhắm đến các kiến thức mới lạ như async function, observer, .. Hy vọng sẽ có nhiều biến động mới.

ES6 là một thế hệ tiếp theo của JavaScript, ủy ban kỹ thuật ecma 39 chi phối đặc tả ecma, họ đã phát hiện ra các tính năng mới cho javascript. ES6 không thể biên dịch trực tiếp trong các trình duyệt, vì vậy cần một trình biên dịch từ ES6 đến ES5, để biên dịch bằng babel, nó tạo ra javascript tương thích với trình duyệt.

## Các tính năng mới của ES6

**Constants**

Hỗ trợ khai báo hằng số còn được gọi là "các biến không thay đổi"), tức là các biến không thể được gán lại nội dung mới;

```javascript
Object.defineProperty(typeof global === "object" ? global : window, "PI", {

   value:        3.141593,

   enumerable:   true,

   writable:     false,

   configurable: false

})

PI > 3.0;

ES6:

const PI = 3.141593

PI > 3.0
```



**Arrows  function** : là một cú pháp mới trong ES6 cho bạn định nghĩa function Bạn có thể tạo hàm bằng cách sử dụng dấu mũi tên =>.

**Classes** : định nghĩa trực quan OOP hơn với bảng mẫu OOP-style

**Enhanced object literals**  (pending todo research)

**Template strings** : cú pháp mới cho phép tạo chuổi multiline. Sử dụng linh hoạt các biến hoặc phương thức không cần phải mất công cộng chuỗi nữa, code rõ ràng hơn nhiều.

**Destructuring Assignment**: cú pháp giúp ta có thể khởi tạo các biến từ một mảng bằng một dòng code đơn giản. Tính năng này khá giống với hàm list trong PHP. Nghĩa là nó sẽ phân các giá trị trong mảng vào các biến theo thứ tự hay nói cách khác nó sẽ  tách các phần tử của Array hoặc Object thành nhiều biến chỉ bằng một đoạn code duy nhất.

**Default Parameter + Rest Parameter + Spread  Parameter**

**Default Parameter**: gán giá trị mặc định cho các tham số.

**Rest Parameter**: tham số còn lại, Tổng hợp các đối số còn lại thành tham số duy nhất của các hàm

**Spread  Parameter**: cho phép chuyển đổi một chuỗi thành nhiều argument

**Block – Scoped Constructs Let and Const**

Định nghĩa biến với từ khóa let, cách định nghĩa này thì biến chỉ tồn tại trong phạm vi khối của nó (Block Scope)

Block Scoped là phạm vi trong một khối, nghĩa là chỉ hoạt động trong phạm vi được khai báo bời cặp {}.

let tạo ra một biến chỉ có thể truy cập được trong block bao quanh nó, khác với var - tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó.

Biến const : dùng để khai báo một hằng số - là một giá trị không thay đổi được trong suốt quá trình chạy.

**New Built-In Methods**

**Object Property Assignment**: Hàm mới để gán các thuộc tính vô số của một hoặc nhiều đối tượng nguồn vào một đối tượng đích.

```javascript
var dest = { quux: 0 }

var src1 = { foo: 1, bar: 2 }

var src2 = { foo: 3, baz: 4 }

Object.assign(dest, src1, src2)
```

**Array Element Finding**: hàm mới cho phép tìm kiếm các phần tử trong mảng

```javascript
\[ 1, 3, 4, 2 ].find(x => x > 3) // 4

\[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2
```

**String Repeating**: Chức năng lặp lại chuỗi mới

```javascript
"foo".repeat(3) // ES6

Array(3 + 1).join("foo"); // ES5
```

**String Searching**

```javascript
"hello".startsWith("ello", 1) // true

"hello".endsWith("hell", 4)   // true

"hello".includes("ell")       // true

"hello".includes("ell", 1)    // true

"hello".includes("ell", 2)    // false
```

**Iterators + for..of**  (pending todo research)

**Generators**  (pending todo research)

**Unicode**  (pending todo research)

**Modules:** Hỗ trợ import / export module hoặc giá trị mà không gây ô nhiễm namespace

**Module loaders**  (pending todo research)

**Map + Set + Weakmap + Weakset**  (pending todo research)

**Proxies**  (pending todo research)

**Symbols**  (pending todo research)

**Subclassable built-ins**  (pending todo research)

**Promises**  (pending todo research)

**Math + Number + String + Array + Object APIs**  (pending todo research)

**Binary and octal literals**  (pending todo research)

**Reflect API**  (pending todo research)

**Tail calls**  (pending todo research)

## Tại sao nên sử dụng ES6

## ES7 (ES2016)

Array.prototype.includes()

Exponentiation operator

## ES8 (ES2017)

Async Functions (Brian Terlson)

Shared memory and atomics (Lars T. Hansen)

Object.values/Object.entries (Jordan Harband)

String padding (Jordan Harband, Rick Waldron)

Object.getOwnPropertyDescriptors() (Jordan Harband, Andrea Giammarchi)

Trailing commas in function parameter lists and calls (Jeff Morrison)

## ES9 (ES2018)

Asynchronous Iteration (Domenic Denicola, Kevin Smith)

Rest/Spread Properties (Sebastian Markbåge)

New regular expression features:

RegExp named capture groups (Gorkem Yakin, Daniel Ehrenberg)

RegExp Unicode Property Escapes (Mathias Bynens)

RegExp Lookbehind Assertions (Gorkem Yakin, Nozomu Katō, Daniel Ehrenberg)

s (dotAll) flag for regular expressions (Mathias Bynens)

Object.entries / Object.values (Array’s values / key equivalence for objects)

String padding myString.padStart(2); // or padEnd

Trailing comma function test(a,b,c, ) // notice the comma after c

## ES10 (ES2019)

Array.flat: \[[1,2],3]).flat() // \[1,2,3]

Array.flatMap: equivalent of map().flat()

Object.fromEntries: reverse operation from Object.entries (see here)

String.trimStart() & String.trimEnd(): Remove extra spaces in a string

Optional Catch binding: remove the need to add a param to the catch (Now you can do } catch {instead of } catch(e) {

Function.toString has been revisited to have a consistent behaviour 🥳🥳🥳

Symbol Description

BigInt — arbitrary large numbers (Thanks @redeyes2015 for correction)

Improvement on Unicode support for JSON.stringify()

Array.sort now retains order if keys are equal

## Lời kết

## Tài liệu tham khảo

<https://medium.com/engineered-publicis-sapient/javascript-es6-es7-es10-where-are-we-8ac044dfd964><https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4>

<http://es6-features.org>

<http://www.developer-cheatsheets.com/es6>

<https://github.com/lukehoban/es6features#arrows>

<https://github.com/lukehoban/es6features#classes>

<https://github.com/lukehoban/es6features#enhanced-object-literals>

<https://github.com/lukehoban/es6features#template-strings>

<https://github.com/lukehoban/es6features#destructuring>

<https://github.com/lukehoban/es6features#default--rest--spread>

<https://github.com/lukehoban/es6features#let--const>

<https://github.com/lukehoban/es6features#iterators--forof>

<https://github.com/lukehoban/es6features#generators>

<https://github.com/lukehoban/es6features#unicode>

<https://github.com/lukehoban/es6features#modules>

<https://github.com/lukehoban/es6features#module-loaders>

<https://github.com/lukehoban/es6features#map--set--weakmap--weakset>

<https://github.com/lukehoban/es6features#proxies>

<https://github.com/lukehoban/es6features#symbols>

<https://github.com/lukehoban/es6features#promises>

<https://github.com/lukehoban/es6features#math--number--string--array--object-apis>

<https://github.com/lukehoban/es6features#tail-calls>

<http://2ality.com/2016/02/async-functions.html>

<http://2ality.com/2017/01/shared-array-buffer.html>

<http://2ality.com/2015/11/stage3-object-entries.html>

<http://2ality.com/2015/11/string-padding.html>