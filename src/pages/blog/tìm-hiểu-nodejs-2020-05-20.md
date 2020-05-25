---
templateKey: blog-post
title: Tìm hiểu Nodejs
date: 2020-05-20T13:34:55.239Z
author: Danst
description: Tìm hiểu Nodejs
featuredpost: true
featuredimage: /img/nodejs.jpg
tags:
  - nodejs
---
**Node.js là gì?**

Nodejs là một nền tảng (Platform) phát triển độc lập được xây dựng ở trên Javascript Runtime của Chrome mà chúng ta có thể xây dựng được các ứng dụng mạng một cách nhanh chóng và dễ dàng mở rộng.

Nodejs được xây dựng và phát triển từ năm 2009, bảo trợ bởi công ty Joyent, trụ sở tại California, Hoa Kỳ. Dù sao thì chúng ta cũng nên biết qua một chút chút lịch sử của thứ mà chúng ta đang học một chút chứ nhỉ?

Phần Core bên dưới của Nodejs được viết hầu hết bằng C++ nên cho tốc độ xử lý và hiệu năng khá cao.

Nodejs tạo ra được các ứng dụng có tốc độ xử lý nhanh, realtime thời gian thực.

Nodejs áp dụng cho các sản phẩm có lượng truy cập lớn, cần mở rộng nhanh, cần đổi mới công nghệ, hoặc tạo ra các dự án Startup nhanh nhất có thể.

- - -

**Những ứng dụng nên viết bằng Nodejs**

Websocket server: Các máy chủ web socket như là Online Chat, Game Server…

Fast File Upload Client: là các chương trình upload file tốc độ cao.

Ad Server: Các máy chủ quảng cáo.

Cloud Services: Các dịch vụ đám mây.

RESTful API: đây là những ứng dụng mà được sử dụng cho các ứng dụng khác thông qua API.

Any Real-time Data Application: bất kỳ một ứng dụng nào có yêu cầu về tốc độ thời gian thực. Micro Services: Ý tưởng của micro services là chia nhỏ một ứng dụng lớn thành các dịch vụ nhỏ và kết nối chúng lại với nhau. Nodejs có thể làm tốt điều này.

**Những kết luận sai lầm về Nodejs**

Thứ nhất, Nodejs là một nền tảng (platform), không phải Web Framework, cũng không phải ngôn ngữ lập trình.

Thứ hai, Nodejs không hỗ trợ đa luồng, nó là một máy chủ đơn luồng.

Và một điều nữa, Nodejs không dành cho người mới tinh mà chưa biết gì về lập trình, vì như đã nói ở trên, Nodejs không phải là ngôn ngữ lập trình, để học được Nodejs thì bạn cần phải biết về Javascript, kỹ thuật lập trình, một số giao thức…

Cài đặt Nodejs

MacOS

brew install node

nvm (node version manager)là một cách phổ biến để chạy Node.js. Nó cho phép bạn dễ dàng chuyển đổi phiên bản Node.js và cài đặt các phiên bản mới để thử và dễ dàng khôi phục nếu có sự cố. Tham khảo <https://github.com/creationix/nvm>

npm viết tắt của Node package manager là một công cụ tạo và quản lý các thư viện lập trình Javascript cho Node.js

npx (npm package executor) là một công cụ giúp bạn execute các package từ npm registry một cách đơn giản và nhanh chóng. 

Cài đặt: 

```shell
npm install -g npx
```

**V8 JavaScript Engine**

V8 cung cấp môi trường thời gian chạy trong đó JavaScript thực thi. DOM và các API nền tảng web khác được cung cấp bởi trình duyệt. V8 được viết bằng C ++ và nó liên tục được cải thiện. Nó là thiết bị cầm tay và chạy trên Mac, Windows, Linux và một số hệ thống khác. V8 luôn phát triển, giống như các công cụ JavaScript khác xung quanh, để tăng tốc Web và hệ sinh thái Node.js.

Mỗi yêu cầu (request) từ phía người dùng được NodeJS coi là một sự kiện (event), chúng được đặt vào một Event Queue (Hàng đợi sự kiện). NodeJS sử dụng quy tắc FIFO (First In First Out), điều này có nghĩa là những yêu cầu đến trước sẽ được xử lý trước.

**Event Loop**  : Là một vòng lặp vô tận, nó sẽ chuyển các yêu cầu sang Thread Pool (Bể chứa các luồng), đồng thời mỗi yêu cầu sẽ được đăng ký một hàm Callback. Khi một yêu cầu được xử lý xong, hàm Callback tương ứng sẽ được gọi thực thi.

**Thread Pool**  : Là một chương trình viết bằng ngôn ngữ C++, nó hỗ trợ đa luồng (Multi Threads), chính vì vậy tại đây các yêu cầu sẽ được xử lý trên các luồng khác nhau. NodeJS cũng hỗ trợ đa tiến trình (Multi Processes), điều này có nghĩa là chúng có thể được thực thi trên các lõi (Core) khác nhau.

Khi một yêu cầu được xử lý xong, NodeJS sẽ gọi hàm Callback (Đã được đăng ký cho yêu cầu này) để thực thi nó.

Một số framework Node.js phổ biến:

**Express.js** , một trong những cách đơn giản nhưng mạnh mẽ nhất để tạo máy chủ web. Cách tiếp cận tối giản của nó, không bị ảnh hưởng, tập trung vào các tính năng cốt lõi của máy chủ, là chìa khóa thành công của nó.

**Meteor.js** , một khung công tác đầy đủ cực kỳ mạnh mẽ, cung cấp cho bạn một cách tiếp cận đẳng cấu để xây dựng các ứng dụng bằng JavaScript, chia sẻ mã trên máy khách và máy chủ. Khi một công cụ sẵn có cung cấp mọi thứ, giờ đây sẽ tích hợp với các ứng dụng libs React, Vue và Angular. Có thể được sử dụng để tạo các ứng dụng di động là tốt.

**koa.js** , được xây dựng bởi cùng một đội ngũ đằng sau Express, nhằm mục đích thậm chí đơn giản hơn và nhỏ hơn, xây dựng trên nền tảng kiến ​​thức hàng năm. Dự án mới ra đời từ nhu cầu tạo ra những thay đổi không tương thích mà không làm gián đoạn cộng đồng hiện tại.

**Next.js** , một khung để kết xuất các ứng dụng React được hiển thị phía máy chủ.

**Micro** , một máy chủ rất nhẹ để tạo các dịch vụ HTTP không đồng bộ.

**Socket.io** , một công cụ giao tiếp thời gian thực để xây dựng các ứng dụng mạng.

**Sails.js** :  kế thừa mô hình MVC (Model-View-Controller) giống như Laravel được viết dựa trên Express.js 

**Một số lưu ý cho ứng dụng Node.js an toàn**

* Chống DOS, DDOS hay brute-force mật khẩu

Rate limit request

```javascript
const express = require('express');
const rateLimit = require("express-rate-limit");
const app = express();
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);
```

* Lọc dữ liệu người dùng gửi lên server
* Sử dụng biến môi trường (.env)
* Dùng brcrypt hoặc pbkdf2 để băm mật khẩu
* Giới hạn kích thước payload request gửi lên server

Tài liệu tham khảo

https://html5hive.org/wp-content/uploads/2018/04/Learn-and-Master-Nodejs.pdf