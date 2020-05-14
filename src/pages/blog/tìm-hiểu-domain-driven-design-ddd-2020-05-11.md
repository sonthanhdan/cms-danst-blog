---
templateKey: blog-post
title: Tìm hiểu Domain Driven Design (DDD)
date: 2020-05-11T07:18:26.127Z
author: Danst
description: >-
  Sau một thời gian làm việc với Laravel cũng như project công ty mà mình đang
  làm thắc mắc tại sao lại khởi tạo cấu trúc thư mục source code như vậy? Anh
  Tech lead cho mình keyword và thành quả lượm nhặt của em nó. Bài viết này là
  một self learning của mình còn nhiều thiếu xót các senior đọc góp ý thêm nha
  mình sẽ bổ sung dần cho hoàn thiện.
featuredpost: true
featuredimage: /img/dddlayered.png
tags:
  - ddd
  - domain driven design
  - design pattern
---
![Domain Driven Design Eric Evans](/img/domain_driven_design-ericevans.jpg "Domain Driven Design Eric Evans")

# Tìm hiểu Domain Driven Design (DDD)

**Domain Driven Design** (DDD) là một cách tiếp cận cho phát triển các phần mềm phức tạp. Phức tạp do nghiệp vụ kinh doanh nhiều. Cách tiếp cận DDD là kết nối chặt chẽ việc cài đặt phần mềm vơi sự tiến hóa của mô hình kinh doanh:

Dự án đặt sự chú trọng nhiều cho phần nghiệp vụ chính (core domain) và các logic nghiệp vụ liên quan.

– Mô hình hoá của nghiệp vụ là trọng tâm, nền tảng cho mọi cài đặt phần mềm.

– Tăng cường cộng tác giữa nhóm kỹ thuật( developers) và các chuyên gia nghiệp vụ (domain expert) để xây dựng một mô hình tốt giúp xác định và giải quyết hiệu quả bài toán. [wiki](https://en.wikipedia.org/wiki/Domain-driven_design)



## Các Khái niệm cốt lõi của DDD

**Ubiquitous Language** - Ngôn ngữ chung: sử dụng trong cả kỹ thuật và nghiệp vụ được phản ánh trong code và trong cả hệ thống

**Bounded Context** - ngữ cảnh giới hạn: domain độc lập database độc lập phù hợp để áp dụng microservice

## Các thành phần tạo nên DDD

**Entity** ( Thực thể ) dùng để biểu thị các khái niệm mà sự tồn tại của nó liên tục xuyên suốt, dù các thuộc tính có thay đổi.

**Value Object** (Giá trị đối tượng) là loại đối tượng chứa giá trị gì đó Value object chỉ mô tả đặc điểm, thuộc tính của gì đó.

**Service** (Dịch vụ) bao gồm các operations, business policy, process

**Module** (Mô đun) một khung chứa các chức năng

**Aggregates** đảm bảo tính nhất quán của mọi thay đổi đối với phần tử trong nó. Về cấu tạo Aggregate có một đối tượng root là một entity là đối tượng duy nhất tham chiếu ra bên ngoài.

**Factory** dùng cho khởi tạo một Entity hay Value Object phức tạp

**Repository** là kho chứa cho bạn lấy ra hay lưu lại các aggregate



## Kiến trúc ứng dụng dùng DDD

**User Interface** (Tầng giao diện người dùng): chịu trách nhiệm cho hiển thị thông tin, nhận lệnh từ người dùng

**Application** (Tầng ứng dụng) : Phối hợp các xử lý. Lưu ý là không chứa logic nghiệp vụ ở đây

**Domain** (Tầng nghiệp vụ) : chứa các mô hình biểu diễn nghiệp vụ của hệ thống. Thể hiện logic của nghiệp vụ nhưng uỷ quyền việc cài đặt chi tiết cho Infra. Đây là tầng quan trọng nhất

**Infrastructure** (Tầng nền tảng): Cung cấp các gói hỗ trợ, liên lạc, cài đặt chi tiết, sử dụng các thư viện bên ngoài..

## Lời kết



\---

## Tham khảo

Domain-Driven Design - Tackling Complexity in the Heart of Software - Eric Evans <http://dddcommunity.org/>

Domain Driven Design cho mọi người

<https://labs.septeni-technology.jp/design-2/domain-driven-design/domain-driven-design-cho-moi-nguoi/>

Khái niệm cơ bản về Domain Driven Design (DDD)

<https://viblo.asia/p/khai-niem-co-ban-ve-domain-driven-design-ddd-Do754qL4KM6>
