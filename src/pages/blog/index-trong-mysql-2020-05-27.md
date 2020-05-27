---
templateKey: blog-post
title: Index trong MySQL
date: 2020-05-27T04:20:53.129Z
author: Danst
description: Index trong MySQL
featuredpost: true
featuredimage: /img/mysql-indexing-for-better-performance.jpg
tags:
  - mysql
  - index mysql
---
**Index là gì?**

Chỉ mục Index là bảng tra cứu đặc biệt mà Database Search Engine có thể sử dụng để tăng nhanh thời gian và hiệu suất thu thập dữ liệu.  Hiểu đơn giản, một chỉ mục là một con trỏ tới dữ liệu trong một bảng. Một chỉ mục trong một Database là tương tự như một chỉ mục trong Mục lục của cuốn sách.

**Khi nào cần dùng Index?** 

Khi muốn tăng tốc dộ truy vấn  nên lập index của tất cả field trong mệnh đề WHERE, JOIN, ORBER BY và GROUP BY

**Khi nào không nên dùng index**

Không nên dùng index trong các bảng nhỏ. Các bảng  thường xuyên có các hoạt động update, insert không đánh index trên các cột có số lượng lớn giá trị null Khi có thay dổi cấu trúc bảng đều cần add lại index

**các loại index trong mysql**

**B-tree index** : Dữ liệu index trong B-Tree được tổ chức và lưu trữ theo dạng cây(tree), tức là có root, branch, leaf. Giá trị của các node được tổ chức tăng dần từ trái qua phải.

 **Hash index**:  Hash index sử dụng kỹ thuật hashing, được xây dựng trên một hash table để lưu trữ và tìm kiếm dữ liệu.

Hash table là một cấu trúc dữ liệu mà có thể cho phép thực hiện việc map các cặp keys, values. Hash Table sử dụng Hash function để tính toán một index vào một mảng các buckets, từ đó có thể tìm thấy các giá trị mong muốn.

### Sử dụng index trong mysql

*Tạo index trên một bảng*

```sql
CREATE UNIQUE INDEX index_name ON table_name
```

*Tạo index cho cột chỉ rõ trong bảng* 

```
CREATE UNIQUE INDEX index_name ON table_name (column 1, column 2)
```

*Thêm index cho bảng duy nhất không null* 

```
ALTER TABLE table_name ADD PRIMARY KEY (column 1, new column)
```

*Thêm index cho bảng index duy nhất co thể null* 

```
ALTER TABLE table_name add UNIQUE index_name  (column 1, new column)
```

*Thêm index cho bảng có thể trùng lập* 

```
ALTER TABLE table_name ADD INDEX index_name  (column 1, new column)
```

*Xóa index* 

```
DROP INDEX index_name
```

*Xác nhận các index đã lập*

```
SELECT * FROM USER_INDEXES;
```

## Sử dụng EXPLAIN để tối ưu câu lệnh Msql

```
EXPLAIN SELECT * FROM Country,City WHERE Country.Code=City.CountryCode AND Country.Name LIKE 'A%';

+----+-------------+---------+--------+---------------+---------+---------+------------------------+------+-------------+
| id | select_type | table   | type   | possible_keys | key     | key_len | ref                    | rows | Extra       |
+----+-------------+---------+--------+---------------+---------+---------+------------------------+------+-------------+
|  1 | SIMPLE      | City    | ALL    | NULL          | NULL    | NULL    | NULL                   | 4079 |             |
|  1 | SIMPLE      | Country | eq_ref | PRIMARY       | PRIMARY | 3       | world.City.CountryCode |    1 | Using where |
+----+-------------+---------+--------+---------------+---------+---------+------------------------+------+-------------+
2 rows in set (0.00 sec)
```

**Các thông số quan trọng trong mysql EXPLAIN**

**type** :  cho chúng ta biết về cách access vào table của query đó

**const** :  tốc độ acesss là nhanh nhất 

**eq_ref** :  filed nằm trong câu lệnh join

**ref** :  field được sử dụng trong so sánh where

**index** :  nếu scan toàn bộ field thì rất chậm 

**possible_keys**: list ra các key có thể optimize key:  Key được chính thức optimizer sử dụng để làm index để tìm kiếm.

**rows**: số dòng mysql sẽ select

**Extra**: thông qua thông số này có thể biết được cách để tối ưu query Using where : 
Using index: 
Using filesort: 
Using temporary: trong query có sử dụng distinct thì mysql sẽ phải tạo "bảng tạm" để thực hiện việc này
Using index for group by: Range checked for each record (index map: N)
Not exists: 

## Lời kết

Bằng việc nhìn vào id/select_type, chúng ta sẽ biết "trình tự" access vào các bảng như là vào bảng nào để lấy ra gì, sau đó dùng kết quả đó để kết hợp với bảng khác ra sao.

Bằng việc nhìn vào type/key/ref/rows, chúng ta sẽ biết với mỗi bảng sẽ có những thông tin gì được fetch ra, access vào bảng nào sẽ bị nặng, qua đó tuning index cho việc access vào bảng đó

Bằng việc nhìn vào Extra, chúng ta sẽ biết được hành vi của optimizer , biết là khi access vào bảng nào thì optimizer sẽ dự định làm gì. Qua Extra chúng ta sẽ có một cái nhìn tổng quát về query đó.