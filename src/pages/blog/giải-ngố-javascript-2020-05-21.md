---
templateKey: blog-post
title: Giải ngố javascript
date: 2020-05-21T05:43:22.374Z
author: danst
description: Giải ngố về javascript
featuredpost: true
featuredimage: /img/javascript-illustration.png
tags:
  - javascript
---
## Prototype là cái gì?

**Prototype** là một khái niệm cơ bản và cốt lõi của ngôn ngữ Javascript, bất kì ai muốn nắm vững ngôn ngữ này đều phải hiểu về khái niệm prototype trong Js. Javascript không kế thừa kiểu class-based mà kế thừa trong Javascript là dựa vào protype (từ ES5 trở về trước), điều này khiến prototype trở nên rất quan trọng.

Từ các phiên bản ES5 trở về trước, Javascript không có khái niệm class, và do vậy mà nó không thể thực hiện việc kế thừa để mở rộng ứng dụng như các ngôn ngữ OOP khác. Tuy nhiên, prototype giúp chúng ta thực hiện kế thừa theo một cách gần tương tự như thế: Javascript thực hiện kế thừa theo cơ chế prototype-based.

**Hàm higher-order** (higher-order function) là hàm có hoạt động dựa trên 1 hàm khác, tức là: nó có thể nhận hàm (function) làm tham số đầu vào, hoặc sẽ return ra 1 hàm khác. Một trong 2 điều kiện đó xảy ra thì được gọi là hàm higher-order.

**Hàm callback** làm hàm được truyền vào “hàm-khác” như một tham số đầu vào, sau đó sẽ được gọi kích hoạt bên trong “hàm-khác” này.

## Closures là gì?

Nói một cách ngắn gọn thì closure là một hàm con (inner function) nằm bên trong 1 hàm khác (outer function). Ta đã biết rằng closure thì không thể truy cập tới con trỏ this của hàm cha (outer function)

## Scope (tầm vực) của biến.

Thứ 1: Biến được khai báo bên trong hàm sẽ là biến cục bộ, và biến cục bộ thì có thể được truy cập bên trong hàm (không có khái niệm scope trong 1 khối lệnh).

Thứ 2: Biến được khai báo bên ngoài hàm sẽ là biến toàn cục, và có thể được truy cập từ bất cứ đâu.

## **Khái niệm hoisting**

Khi code sử dụng javascript, có một khái niệm cũng khá là đặc biệt là hoisting. Với khái niệm này, javascript quy định, mọi khai báo biến đều được đưa lên trên cùng của một tầm vực. Tức là mặc kệ bạn khai báo biến ở vị trí nào trong 1 hàm, thì tự động nó sẽ kéo lên trên cùng của hàm để khai báo (javascript tự động thực hiện ngầm cho khái niệm này).

## Con trỏ this?

Trong các ngôn ngữ OOP điển hình như C++, PHP, Java, … khái niệm con trỏ “this” tương đối dễ hiểu, nó gắn liền với thực thể (instance) đang được kích hoạt. Ở javascript thì mọi chuyện có vẻ phức tạp hơn, giá trị của this gắn liền với context mà nó được gọi

Hàm Bind() này được sử dụng với mục đích trả về cho ta một hàm khác với ngữ cảnh con trỏ “this” đã được thiết đặt. Nói cách khác, hàm bind() cho phép chúng ta gán giá trị của một đối tượng cụ thể nào đó vào con trỏ “this” của hàm được kích hoạt.

Apply() và Call() hai hàm này cũng giúp chúng ta gán được tường minh giá trị của con trỏ “this” bên trong hàm được kích hoạt, tuy nhiên điều khác biệt lớn nhất so với hàm bind() chính là việc hàm apply() và call() sẽ kích hoạt ngay hàm được gọi chứ không trả về một hàm khác như bind().

## IIFE: Immediately Invoked Function Expression

 Có nghĩa là khởi tạo một function và thực thi nó ngay lập tức. IIFE hữu ích khi chúng ta muốn đóng gói code để nó không ảnh hưởng đến các biến toàn cục. Nó hữu ích khi chúng ta viết những thư viện.

(function(){

 //code here

})();

## Async

Async function cho phép chúng ta viết promise-base code bởi vì nếu nó là synchronous, nhưng không chặn luồng thực thi. Nó hoạt động asynchronously thông qua event-loop. Các hàm Async sẽ luôn trả về một giá trị. Sử dụng async chỉ đơn giản ngụ ý rằng một promise sẽ được trả lại và nếu promise không được trả về, JavaScript tự động kết thúc và resolved promise với giá trị của nó.



## Await

Await operator được sử dụng để chờ một Promise. Nó chỉ có thể được sử dụng bên trong Async block. Từ khóa Await làm JavaScript chờ cho đến khi promise trả về kết quả. Chú ý rằng nó chỉ làm cho async function block và chờ chứ không phải là cả chương trình.



## Libuv



Thư viện hỗ trợ đa nền tảng tập trung vào asynchronous I/O, chủ yếu được phát triển để sử dụng bởi Node.js
