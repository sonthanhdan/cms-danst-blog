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

* Mã nguồn mở (Open Source)
* Hiệu suất cao: Tốc độ truy vấn (find, update, insert, delete) của MongoDB nhanh hơn hẳn so với các hệ quản trị cơ sở dữ liệu quan hệ (RDBMS)
* Tính sẵn sàng cao – Nhân rộng
* Khả năng mở rộng cao – Sharding : Trong MongoDB có một khái niệm cluster là cụm các node chứa dữ liệu giao tiếp với nhau, khi muốn mở rộng hệ thống ta chỉ cần thêm một node với vào cluster
* Dữ liệu linh hoạt – MongoDB là document database, dữ liệu lưu dưới dạng JSON, không bị bó buộc về số lượng field, kiểu dữ liệu thêm / xóa trường có ít hoặc không ảnh hưởng đến ứng dụng
* Không joins
* Phân phối được
* Biểu diễn dữ liệu trong JSON hoặc BSON
* Hỗ trợ không gian địa lý (Geospatial)
* Tích hợp dễ dàng với BigData Hadoop
* Ngôn ngữ truy vấn dựa trên tài liệu mạnh mẽ như SQL

**Nhược điểm của MongoDB**

* Giao dịch phức tạp do không hỗ trợ join giống như trên RDBMS nên phải viết function join trong code bằng tay khiến tốc đọ giảm xuống
* Dữ liệu phình to gây tốn bộ nhớ do dữ liệu lưu dưới dạng key-value, các collection chỉ khác về value do đó key sẽ bị lặp lại gây tốn bộ nhớ
* MongoDB không có các tính chất ràng buộc như trong RDBMS –> dễ bị làm sai dữ liệu
* Bị giới hạn kích thước bản ghi: mỗi document không được có kích thước > 16Mb và không mức độ các document con trong 1 document không được > 100

**Tốt cho**

1. Danh mục sản phẩm thương mại điện tử.
2. Blog và quản lý nội dung.
3. Quản lý cấu hình.
4. Duy trì dữ liệu dựa trên vị trí – Dữ liệu không gian địa lý.
5. Các trang web di động và mạng xã hội.
6. Phát triển yêu cầu dữ liệu.
7. Mục tiêu không chặt chẽ – thiết kế có thể thay đổi theo thời gian.
8. Hệ thống realtime (thời gian thực) yêu cầu phản hồi nhanh
9. Các hệ thống bigdata với yêu cầu truy vấn nhanh.
10. Các hệ thống có tần suất write/insert lớn
11. Sử dụng làm search engine.

**Không tốt cho**

1. Hệ thống giao dịch cao hoặc nơi mô hình dữ liệu được thiết kế trước.
2. Hệ thống kết hợp chặt chẽ.

## MongoDB hoạt động như thế nào?

MongoDB hoạt động dưới một tiến trình ngầm service, luôn mở một cổng (Cổng mặc định là 27017) để lắng nghe các yêu cầu truy vấn, thao tác từ các ứng dụng gửi vào sau đó mới tiến hành xử lý.

Mỗi một bản ghi của MongoDB được tự động gắn thêm một field có tên “_id” thuộc kiểu dữ liệu ObjectId mà nó quy định để xác định được tính duy nhất của bản ghi này so với bản ghi khác, cũng như phục vụ các thao tác tìm kiếm và truy vấn thông tin về sau. Trường dữ liệu “_id” luôn được tự động đánh index (chỉ mục) để tốc độ truy vấn thông tin đạt hiệu suất cao nhất.

Mỗi khi có một truy vấn dữ liệu, bản ghi được cache (ghi đệm) lên bộ nhớ Ram, để phục vụ lượt truy vấn sau diễn ra nhanh hơn mà không cần phải đọc từ ổ cứng.

Khi có yêu cầu thêm/sửa/xóa bản ghi, để đảm bảo hiệu suất của ứng dụng mặc định MongoDB sẽ chưa cập nhật xuống ổ cứng ngay, mà sau 60 giây MongoDB mới thực hiện ghi toàn bộ dữ liệu thay đổi từ RAM xuống ổ cứng.

Nguồn: viblo.asia

## Tại sao MongoDB có hiệu năng cao?

MongoDB lưu dữ liệu dạng JSON, khi bạn insert nhiều đối tượng thì nó sẽ là insert một mảng JSON gần như với trường hợp insert 1 đối tượng Dữ liệu trong MongoDB không có sự ràng buộc lẫn nhau như trong RDBMS, khi insert, xóa hay update nó không cần phải mất thời gian kiểm tra xem có thỏa mãn các bảng liên quan như trong RDBMS.
Dữ liệu trong MongoDB được đánh chỉ mục (đánh index) nên khi truy vấn nó sẽ tìm rất nhanh.
Khi thực hiện insert, find… MongoDB sẽ khóa các thao tác khác lại, ví dụ khi nó thực hiện find(), trong quá trình find mà có thêm thao tác insert, update thì nó sẽ dừng hết lại để chờ find() xong đã.

Nguồn: [stackjava.com](https://stackjava.com/)



**Các công cụ quản trị:**

Robo3T, Studio 3T, Navicat Premium 12

## Cài đặt

CentOS 7

```
#!/bin/bash

sudo cat <<EOF > /etc/yum.repos.d/mongodb-org.repo
[mongodb-org-4.2] name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
EOF

sudo chmod 777 /etc/yum.repos.d/mongodb-org.repo
sudo yum -y update
sudo yum install -y mongodb-org
sudo systemctl start mongod
sudo systemctl enable mongod

sudo cat <<EOF > /etc/security/limits.conf 
mongod soft nproc 64000
mongod hard nproc 64000
mongod soft nofile 64000
mongod hard nofile 64000
EOF

sudo sysctl -p
sudo systemctl restart mongod

sudo yum install -y policycoreutils-python semanage port -a -t mongod_port_t -p tcp 27017
```



**Allow Remote Access to MongoDB**

Mặc định MongoDB lắng nghe trên `127.0.0.1:27017` để cho phép remote vào mongodb từ bên ngoài vào ta mở tệp cấu hình MongoDB `/etc/mongod.conf` và thay đổi **bindIp** bằng cách thêm các giao diện LAN cần thiết hoặc định cấu hình tệp để liên kết với tất cả các giao diện.

```
# network interfaces
net:
  port: 27017
  bindIp: 127.0.0.1,192.168.0.100 # Enter 0.0.0.0,:: to bind to all interfaces
```

Khởi động lại mongod để áp dụng sửa đổi:

`sudo systemctl restart mongod`

Kiểm tra lại kết nối

`sudo netstat -tnlp`

```
Proto Recv-Q Send-Q Local Address       Foreign Address State  PID/Program name
tcp        0      0 127.0.0.1:27017     0.0.0.0:*       LISTEN 19757/mongod
tcp        0      0 192.168.0.100:27017 0.0.0.0:*       LISTEN 19757/mongod
```

## Các lệnh thường sử dụng

Tạo user

```
// Cú pháp tạo user
db.createUser({
  user: "<name>",
  pwd: passwordPrompt(),      // Or  "<cleartext password>"
  customData: { <any information> },
  roles: [
    { role: "<role>", db: "<database>" } | "<role>",
    ...
  ],
  authenticationRestrictions: [
     {
       clientSource: ["<IP>" | "<CIDR range>", ...],
       serverAddress: ["<IP>" | "<CIDR range>", ...]
     },
     ...
  ],
  mechanisms: [ "<SCRAM-SHA-1|SCRAM-SHA-256>", ... ],
  passwordDigestor: "<server|client>"
})

// cú pháp xác thực
db.auth( {
   user: <username>,
   pwd: passwordPrompt(),   // Or "<cleartext password>"
   mechanism: <authentication mechanism>,
   digestPassword: <boolean>
} )

db.auth( {
   user: <username>,
   pwd: passwordPrompt(),   // Or "<cleartext password>"
   mechanism: <authentication mechanism>,
   digestPassword: <boolean>
} )

use reporting
db.createUser(
   {
     user: "danst",
     pwd: passwordPrompt(),   // Or  "<cleartext password>"
     roles: [ { role: "readWrite", db: "reporting" } ],
     mechanisms: [ "SCRAM-SHA-256" ]
   }
)

use products
db.changeUserPassword("accountUser", "SOh3TbYhx8ypJPxmt1oOfL")

db.grantRolesToUser(
   "accountUser01",
   [ "readWrite" , { role: "read", db: "stock" } ],
   { w: "majority" , wtimeout: 4000 }
)


```



Tạo Document mới

```
db.collection.insert(
   <document or array of documents>,
   {
     writeConcern: <document>,
     ordered: <boolean>
   }
)

db.collection.insertMany(
   [ <document 1> , <document 2>, ... ],
   {
      writeConcern: <document>,
      ordered: <boolean>
   }
)


db.products.insertOne({a:1},{});

db.products.insertMany([{a:1},{a:2}],{});
 


```

Đọc danh sách Document

```
db.collection.count({<query>}, {<options>})
db.collection.find( { qty: { $gt: 4 } } ).limit( 1 ).skip(1).pretty()
db.collection.findOneAndDelete(
   <filter>,
   {
     projection: <document>,
     sort: <document>,
     maxTimeMS: <number>,
     collation: <document>
   }
)

db.collection.findOneAndReplace(
   <filter>,
   <replacement>,
   {
     projection: <document>,
     sort: <document>,
     maxTimeMS: <number>,
     upsert: <boolean>,
     returnNewDocument: <boolean>,
     collation: <document>
   }
)

db.collection.findOneAndUpdate(
   <filter>,
   <update document or aggregation pipeline>, // Changed in MongoDB 4.2
   {
     projection: <document>,
     sort: <document>,
     maxTimeMS: <number>,
     upsert: <boolean>,
     returnNewDocument: <boolean>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ]
   }
)


```

Cập nhật Document

```
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>,
     collation: <document>,
     arrayFilters: [ <filterdocument1>, ... ],
     hint:  <document|string>        // Available starting in MongoDB 4.2
   }
)

db.books.update(
   { _id: 1 },
   {
     $inc: { stock: 5 },
     $set: {
       item: "ABC123",
       "info.publisher": "2222",
       tags: [ "software" ],
       "ratings.1": { by: "xyz", rating: 3 }
     }
   }
)

db.members.updateMany(
   { },
   [
      { $set: { status: "Modified", comments: [ "$misc1", "$misc2" ], lastUpdate: "$$NOW" } },
      { $unset: [ "misc1", "misc2" ] }
   ]
)
```

Xóa Document

```
db.collection.remove(
   <query>,
   <justOne>
)

db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>,
     collation: <document>
   }
)


db.books.remove( { } ) // remove all
db.products.remove( { qty: { $gt: 20 } } ) // remove product qty match > 20
```

Sửa đổi toàn bộ

```
db.collection.bulkWrite(
   [
      { insertOne : <document> },
      { updateOne : <document> },
      { updateMany : <document> },
      { replaceOne : <document> },
      { deleteOne : <document> },
      { deleteMany : <document> }
   ]
)
```

Trên đây là một số câu lệnh hay sử dụng trên mongodb các bạn co thể tham khảo thêm các lệnh khác nâng cao tại trang chủ của MongoDB <https://docs.mongodb.com/manual/>





## Lời kết

## Tham khảo

<https://docs.mongodb.com/manual/introduction/>

<https://docs.mongodb.com/manual/core/sharded-cluster-components/>

<https://docs.mongodb.com/manual/reference/limits/>

<https://docs.mongodb.com/manual/installation/>

<https://docs.mongodb.com/manual/crud/>

<https://tech.bizflycloud.vn/huong-dan-cach-cai-dat-mongodb-34-tren-centos-7-20180309120039152.htm>

<!--StartFragment-->

<https://stackjava.com/mongodb/uu-nhuoc-diem-cua-mongodb-khi-nao-nen-dung-mongodb.html>

<!--EndFragment-->