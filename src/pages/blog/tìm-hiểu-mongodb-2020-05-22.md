---
templateKey: blog-post
title: Tìm hiểu MongoDB
date: 2020-05-22T08:38:30.553Z
author: Danst
description: Tìm hiểu MongoDB
featuredpost: true
featuredimage: /img/mongodb.jpg
tags:
  - mongodb
---
**MongoDB** là một cơ sở dữ liệu mã nguồn mở, đa nền tảng. NoSQL: None-Relational SQL (Không có quan hệ) được viết bằng C++. MongoDB hướng đối tượng, đơn giản, linh động và có thể mở rộng. MongoDB lưu trữ dự liệu theo dạng collection thay vì table như trên MySQL. MongoDB sử dụng JSON hoặc BSON document để lưu trữ dữ liệu. Các collection này là một tập hợp của các document có các field được biểu diễn theo cặp key: value giống như JSON.

**NoSQL**: None-Relational SQL

**JSON**: JavaScript Object Notation

**BSON**: Binary JSON

**RDBMS** : Relational database management system

**ACDI**: (Atomic, Consistency, Isolation, Durability)

Các thuật ngữ hay sử dụng trong MongoDB

**_id** – Là trường bắt buộc có trong mỗi document. Trường **_id** đại diện cho một giá trị duy nhất trong document MongoDB

**Collection** – Là nhóm của nhiều document trong MongoDB

**Cursor** – Đây là một con trỏ đến tập kết quả của một truy vấn

**Document** – Một bản ghi thuộc một Collection thì được gọi là một Document

**Field** – Một cặp bao gồm key : value

## Ưu và nhược điểm của MongoDB

**Ưu điểm của MongoDB**

* Document oriented
* Hiệu suất cao
* Tính sẵn sàng cao – Nhân rộng
* Khả năng mở rộng cao – Sharding
* Năng động – Không có lược đồ cứng nhắc.
* Linh hoạt – thêm / xóa trường có ít hoặc không ảnh hưởng đến ứng dụng
* Dữ liệu không đồng nhất
* Không joins
* Phân phối được
* Biểu diễn dữ liệu trong JSON hoặc BSON
* Hỗ trợ không gian địa lý (Geospatial)
* Tích hợp dễ dàng với BigData Hadoop
* Ngôn ngữ truy vấn dựa trên tài liệu mạnh mẽ như SQL
* Các bản phân phối cloud như AWS, Microsoft, RedHat, dotCloud và SoftLayer, v.v … Trên thực tế, MongoDB được xây dựng cho cloud. Kiến trúc mở rộng quy mô tự nhiên của nó, được kích hoạt bởi sharding, liên kết tốt với quy mô và sự nhanh nhẹn có được nhờ điện toán đám mây.

**Nhược điểm của MongoDB**

* Một nhược điểm của NoSQL là hầu hết các giải pháp đều không tuân thủ ACID mạnh mẽ (Atomic, Consistency, Isolation, Durability) như các hệ thống RDBMS được thiết lập tốt hơn.
* Giao dịch phức tạp
* Không có chức năng hoặc thủ tục lưu trữ tồn tại nơi bạn có thể liên kết logic

**Tốt cho**_:_

1. Danh mục sản phẩm thương mại điện tử.
2. Blog và quản lý nội dung.
3. Phân tích thời gian thực và ghi nhật ký tốc độ cao, bộ nhớ đệm và khả năng mở rộng cao.
4. Quản lý cấu hình.
5. Duy trì dữ liệu dựa trên vị trí – Dữ liệu không gian địa lý.
6. Các trang web di động và mạng xã hội.
7. Phát triển yêu cầu dữ liệu.
8. Mục tiêu không chặt chẽ – thiết kế có thể thay đổi theo thời gian.

**Không tốt cho**:

1. Hệ thống giao dịch cao hoặc nơi mô hình dữ liệu được thiết kế trước.
2. Hệ thống kết hợp chặt chẽ.

## MongoDB hoạt động như thế nào?

MongoDB hoạt động dưới một tiến trình ngầm service, luôn mở một cổng (Cổng mặc định là 27017) để lắng nghe các yêu cầu truy vấn, thao tác từ các ứng dụng gửi vào sau đó mới tiến hành xử lý.

Mỗi một bản ghi của MongoDB được tự động gắn thêm một field có tên “_id” thuộc kiểu dữ liệu ObjectId mà nó quy định để xác định được tính duy nhất của bản ghi này so với bản ghi khác, cũng như phục vụ các thao tác tìm kiếm và truy vấn thông tin về sau. Trường dữ liệu “_id” luôn được tự động đánh index (chỉ mục) để tốc độ truy vấn thông tin đạt hiệu suất cao nhất.

Mỗi khi có một truy vấn dữ liệu, bản ghi được cache (ghi đệm) lên bộ nhớ Ram, để phục vụ lượt truy vấn sau diễn ra nhanh hơn mà không cần phải đọc từ ổ cứng.

Khi có yêu cầu thêm/sửa/xóa bản ghi, để đảm bảo hiệu suất của ứng dụng mặc định MongoDB sẽ chưa cập nhật xuống ổ cứng ngay, mà sau 60 giây MongoDB mới thực hiện ghi toàn bộ dữ liệu thay đổi từ RAM xuống ổ cứng.

Nguồn: viblo.asia



**Các công cụ quản trị:**

Robo3T, Studio 3T, Navicat Premium 12

## Cài đặt

Mac / Linux

Window

## Các lệnh thường sử dụng

## Lời kết

## Tham khảo
