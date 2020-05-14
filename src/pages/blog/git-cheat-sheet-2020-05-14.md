---
templateKey: blog-post
title: Git cheat sheet
date: 2020-05-14T07:01:50.432Z
author: Danst
description: Git cheat sheet
featuredpost: true
featuredimage: /img/git.png
tags:
  - git-flow
---
[**Git**](https://vi.wikipedia.org/wiki/Git_(ph%E1%BA%A7n_m%E1%BB%81m)) là một hệ thống kiểm soát phiên bản mã nguồn mở và miễn phí, được Linus Torvalds tạo ra vào năm 2005. Không giống như các hệ thống kiểm soát phiên bản tập trung cũ hơn như SVN và CVS, Git được phân phối: mọi nhà phát triển đều có lịch sử đầy đủ về kho lưu trữ mã của họ. Điều này làm cho bản sao ban đầu của kho lưu trữ chậm hơn, nhưng các hoạt động tiếp theo như cam kết, đổ lỗi, khác biệt, hợp nhất và đăng nhập nhanh hơn đáng kể.

Git cũng hỗ trợ tuyệt vời cho việc phân nhánh, hợp nhất và viết lại lịch sử kho lưu trữ, điều này dẫn đến nhiều quy trình và công cụ sáng tạo và mạnh mẽ. Yêu cầu kéo là một trong những công cụ phổ biến như vậy cho phép các nhóm cộng tác trên các nhánh Git và xem xét hiệu quả mã của nhau. Git là hệ thống kiểm soát phiên bản được sử dụng rộng rãi nhất trên thế giới hiện nay và được coi là tiêu chuẩn hiện đại để phát triển phần mềm.

Git thật sự rất hữu dụng trong việc quản lí source code nhưng đối với một devveloper thành thạo việc sử dụng git không là vấn đề gì đối với developer mới thì hơi khó khăn một chút. git-flow (A successful Git branching model) là là một tập các thao tác mở rộng của git nhằm cung cấp các thao tác repository (kho mã nguồn) ở mức cao dựa trên mô hình phân nhánh của Vincent Driessen. là một giải pháp dựa trên merge. Nó không rebase các nhánh tính năng. git-flow chia các branch model thành các luồng công việc riêng biệt. Mỗi branch đăt tả cho một luồng công việc khác nhau. 

Các loại branch chính trong git-flow

**master brach** là branch được tạo mới repository và tạo mặc định trong Git. Những người mới bắt đầu thường có xu hướng commit trực tiếp và branch master, nhưng trong git-flow thì ta không commit trực tiếp vào master, mà đây chỉ là branch dùng để thực hiện merge.

**develop branch** là branch trung tâm cho việc phát triển. Do với mỗi thay đổi ta lại ngắt branch feature tương ứng cho nên có thể nói đây là branch được dùng nhiều nhất trong quá trình phát triển. Cần đặt tên branch sao cho người khác có thể biết được ngay nội dung thay đổi là gì. Mỗi branch được ngắt ra để làm này sau khi làm xong ta lại merge vào develop, merge xong sẽ xóa nó đi.

**release branch** là branch dùng để release sản phẩm như đúng tên gọi của nó. Khi release sản phẩm thì có rất nhiều những task liên quan khác cần thiết nữa, những task liên quan đó sẽ được release trên branch release mà ta ngắt ra từ branch develop. Sau khi release xong, sẽ merge vào branch master và branch develop, ghi release tag vào merge commit của branch master sau đó xóa branch release đi.

**hotfix branch** Khi release sản phẩm cũng có khi ta phát hiện ra bug rất nghiêm trọng, chắc hẳn mọi người cũng từng trải qua vấn đề này rồi nhỉ? Những lúc như vậy ta sẽ ngắt ra branch hotfix trực tiếp từ branch master để tiến hành sửa, sau khi sửa xong sẽ merge vào master và develop và ghi lại release tag. Sau đó sẽ xóa branch hotfix đi.

**support branch** Cũng không phải project nào cũng cần, có chăng nó đặc thù với những project cần tiếp tục support các version cũ. Ở branch này sẽ thực hiện lưu version cũ và release.

Bắt đầu một tính năng

Bình thường đối với git

```
git checkout master
git fetch origin
git reset --hard origin/mastergit checkout -b new-feature
git status

git add <some-file>

git commit
git push -u origin new-feature
```

Với git flow

```
git flow feature start my-feature
git status
git add <some-file>
git commit
git flow feature finish my-feature 
```



git tag

Tag là chức năng đặt tên một cách dễ hiểu để có thể dễ dàng tham chiếu commit.

Trên Git có thể sử dụng 2 loại tag là lightweigh tag và annotated tag. Thêm nữa, tag đã đính kèm một lần là cố định, vị trí không di chuyển được như branch.

Lightweigh tag

* Temporary tag là cái không thể thay đổi
* Có thể đặt tên

Annotated tag

* Có thể đính kèm tên và email của người thực hiện và ngày
* Có thể đặt tên
* Có thể đính kèm bình luận
* Có thể đính kèm chữ ký

Annotated tag sẽ trở nên quan trọng khi có kế hoạch đánh dấu commit quan trọng. Thông thường dùng để đánh dấu commit dùng để release và cũng có thể thêm những chú thích bên cạnh.

Mặt khác lightweigh tag thì chủ yếu được dùng trên không gian local làm việc tạm thời.



git stash được sử dụng khi muốn lưu lại các thay đổi chưa commit, thường rất hữu dụng khi bạn muốn đổi sang 1 branch khác mà lại đang làm dở ở branch hiện tại.



git cherry pick hiểu một cách chi tiết, cherry-pick là một cách để checkout một commit tại branch nhất định về branch hiện tại.



Tham khảo

<https://techblog.vn/git-flow>

<https://www.atlassian.com/git>
