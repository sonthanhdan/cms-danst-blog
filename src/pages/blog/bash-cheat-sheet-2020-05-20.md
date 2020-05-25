---
templateKey: blog-post
title: BASH cheat sheet
date: 2020-05-25T08:32:56.832Z
author: Danst
description: BASH cheat sheet tổng hợp các cú pháp shell, command hay sử dụng trong linux
featuredpost: true
featuredimage: /img/bash.jpeg
tags:
  - bash
  - cheat sheet
  - linux
---
## **Tìm file trong thư mục và sắp**

```tcsh
find /dev/folder/ -name abc-*.bin | sort | tail -n1
```

## Example: git-merge-branches.sh

```ignore
#!/usr/bin/env bash -xe

# Configuration 

REPO_DIR=/path/to/your/repository

FEATURE_BRANCH=FEATURE-XX

TARGET_BRANCH=FEATURE-XX-DEV

BRANCHES=(

   origin/FEATURE-XX-UI-COMPONENT-1

   origin/FEATURE-XX-UI-COMPONENT-2

   origin/FEATURE-XX-API-SEARCH

   origin/FEATURE-XX-SERVICE

   origin/FEATURE-XX-DIALOG

   origin/FEATURE-XX-SETTING

)

cd $REPO_DIR;

# update the repo

git fetch --prune

git checkout $FEATURE_BRANCH

# checkout to the target branch

if [ -z "`git branch --list $TARGET_BRANCH`" ]; then

   git checkout -b $TARGET_BRANCH

fi

# merge all branches into the target branch

for branch in "${BRANCHES\[@]}"

do

   git merge $branch --no-edit

done

echo "DONE SUCCESSFULLY!"
```

## Creating branch

```tcsh
git fetch
git checkout {branch}
```

## Creating branch locally

```tcsh
git checkout {branch}
git pull
git checkout -b {branch}
git push -u origin {branch}
```

## **Merge locally for reviewing**

```tcsh
git checkout {branch}
git pull
git fetch
git merge origin/{branch} --no-commit --no-ff
```

## Cancel merge after reviewing

```tcsh
git merge --abort
```

## List existing branches

```tcsh
git branch --list
```

## Fetch from remote

```tcsh
git fetch origin
git checkout --track origin/$branchname
```

## Delete a branch

```tcsh
git remote prune origin // delete local remote tracking
git branch -d $branchname // delete local
git push origin --delete :$branchname // delete remote
```

## Rebase your changes on top of the remote master

```tcsh
git pull --rebase upstream master
```

## diff

```tcsh
git diff --stat
```

## Searching commit

```tcsh
git log --grep="fixes things"  # search in commit messages
git log -S"window.alert"       # search in code
git log -G"foo.*"              # search in code (regex)
```

## Basic command

**cat, echo, grep, head, tail, cat, find, sort, uniq, awk, sed, seq, wc, curl**

Tôi liệt kê những option thường dùng khi viết Shell script để mọi người có thể xem ý nghĩa của từng command.

Command	Ý nghĩa

echo -n hoge	Không xuống dòng ở cuối cùng

grep -v hoge	Output dòng không chứa hoge (ngược với lệnh grep thông thường)

grep -i hoge	Search hoge không phân biệt chữ hoa chữ thường (ignore case)

grep -o ...	Chỉ xuất những phần văn bản trùng khớp. Dùng kết hợp với các biểu thức chính quy (regular expression) sẽ đề cập sau

grep -A2 ...	Hiển thị cả 2 dòng sau dòng trùng khớp. A là A trong After. Tương tự, có thể chỉ định Before bằng chữ B.

tail -100 hoge.txt	Hiển thị 100 dòng cuối trong hoge.txt. head cũng tương tự. Thưc hiện giống với tail -n 100

sort -n	sắp xếp theo dữ liệu số

sort -k 2	sắp xếp theo key với key là cột thứ 2 từ trái qua, phân cách bởi ký tự khoảng trắng

uniq -c	Hiển thị số dòng duy nhất sau khi đã loại bỏ trùng lặp

**wc -l sample.txt**	Hiển thị số dòng trong sample.txt

**curl -o** file.dat http:...	Lưu trữ nội dung URL chỉ định vào file.dat

Có thể dùng pipe để chuyển kết quả của command này thành input của command kế tiếp.

Ví dụ ta có file sample.txt như sau.

sample.txt

JavaScript

Python

Java

Hiển thị nội dung của file sample.txt bằng command cat, rồi chuyển nó làm input của command grep kế tiếp bằng pipe

Ta sẽ thấy JavaScript và Java được hiển thị

$ cat sample.txt | grep Java

JavaScript

Java

Pipe có thể kết nối nhiều tiến trình. Hãy thử sort kết quả vừa rồi.

$ cat sample.txt | grep Java | sort

Java

JavaScript

Kết nối pipe thêm 1 lần nữa, lấy dòng đầu của kết quả cuối cùng.

$ cat sample.txt | grep Java | sort | head -1

Java

Pipe được sử dụng trong rất nhiều trường hợp, dưới đây là một ví dụ thực tế

Thực thi grep log để tìm các tên ngoại lệ, sau đó thực thi wc -l ta sẽ đếm được số ngoại lệ.

Thực thi cat log của worker rồi grep bằng domain name, sau đó grep bằng job name, xem bằng less

## Create serial number

Tạo serial number 1 2 3 4 5 6 7 8 9 10 bằng {1..10}

$ echo {1..10}

1 2 3 4 5 6 7 8 9 10

Bạn cũng có thể đảo chuỗi số lại, hoặc giá trị âm cũng ok

$ echo {5..-5}

5 4 3 2 1 0 -1 -2 -3 -4 -5

Khi muốn tạo một dãy (sequence) phức tạp hơn, chẳng hạn sequence tăng dần mỗi 3 đơn vị thì sử dụng command seq.

## Redirect

Trong shell script, khi muốn xuất kết quả nào đó ra file, dùng > để điều hướng xuất file.

$ echo Hello > hoge.dat

$ cat hoge.dat

Hello

Tuy nhiên, nếu chỉ dùng redirect thì sẽ không có gì được hiển thị trên màn hình.

Đối với các bạn gái cứ nằng nặc vừa muốn xuất ra file, vừa muốn thấy được trên màn hình, hãy sử dụng command tee.

$ echo Hello | tee hoge.dat

Hello

$ cat hoge.dat

Hello

tee tức là T trong từ "ngã ba hình chữ T", có nghĩa là phân nhánh 1 input thành 2 output là màn hình và file.

Nếu không dùng “>” mà dùng “>>”, thì kết quả sẽ được ghi bổ sung vào file đã chỉ định

Ví dụ:

$ echo Hello > hello.txt

$ cat hello.txt

Hello

$ echo World >> hello.txt

$ cat hello.txt

Hello

World

Để thực hiện xử lý tương tự bằng tee, ta sử dụng option -a . Hãy nhớ chữ a trong append.

Thỉnh thoảng bạn sẽ thấy kết quả có xuất hiện trên màn hình nhưng không được xuất ra file bằng điều hướng hay tee.

Lý do là vì chữ trên màn hình đã được không được xuất vào output vào standard output mà được xuất vào standard error output.

Tôi sẽ trình bày chi tiết ở phần tiếp theo đây.

## Basic of variables

Về tên biến thì dùng chữ thường cho biến số, dùng CHỮ HOA cho hằng số (giá trị không đổi),

nhưng cũng không cần quá khắt khe, cứ dùng theo cảm giác là được.

Cách thường dùng là gán kết quả của command vào biến bằng $().

$ TIME=$(date +'%Y-%m-%d %H:%M:%S')

$ echo $TIME

2016-01-08 00:35:06

Biến không chỉ dùng để chứa giá trị muốn hiển thị,

mà còn có thể chứa command muốn thực thi.

Hiển thị Hello World bằng

\#!/bin/bash

CMD=echo

$CMD Hello World

## Shell Script Format

\#!/bin/bash

command1

command2

command3

## Loop

Khi số vòng lặp đã được quy định

for i in {1..100} ; do

echo $i

done

Khi vòng lặp vô hạn

while true; do

...

done

Khi muốn lặp từng file trong directory /tmp

for i in /tmp/* ; do

echo $i

done

Khi muốn lặp từng dòng có chứa xxx trong 1 text data nào đó

for i in $(cat data.dat | grep xxx) ; do

echo $i

done

## Branch

Dùng câu if (bên trong là command test) hoặc dùng &&, ||

Nếu file /tmp/data.txt có tồn tại thì sẽ hiển thị là exists!

if \[ -e /tmp/data.txt ] ; then

echo exists!

fi

Tham khảo man test để biết về cách viết bên trong của biểu thức điều kiện if.

Khi muốn viết câu else (sẽ được thực thi khi điều kiện trước đó có kết quả là false)

if \[ -e /tmp/data.txt ] ; then

echo exists!

else

echo not exists!

fi

Có thể thực hiện phân nhánh điều kiện một cách đơn giản bằng &&, ||

Khi có div trong index.html thì sẽ hiển thị hello.

Kết quả của grep không cần xuất trong Standard output nên ở đây tôi đang suppress bằng -q

cat index.html | grep -q div && echo hello

Lần này ngược với ở trên, khi không có xxx trong index.html thì hiển thị hello

cat index.html | grep -q xxx || echo hello

&& thực thi command sau khi command trước đã được thực thi true, || thực thi command sau khi command trước là false.

Mặc dù vậy, cũng có trường hợp khó có thể biết được trong kết quả của các command, cái nào là true, cái nào là false nên

vì vậy, hãy dùng $? để xem mã kết thúc tiến trình, kiểm tra trạng thái của nó trong quá trình soạn shell script.

## Specify path

Nếu Path bắt đầu bằng ./ nghĩa là file đó đang ở trong thư mục hiện hành.

Trong Linux, so với thư mục hiện hành, hệ thống luôn ưu tiên xử lý trước cái tên từ thư mục được khai báo ở đường dẫn nên

dù có đặt command test trong thư mục hiện hành và thực thi command test thì /usr/bin/test cũng vẫn được thực thi

$ ls

test

$ test

$ which test

/usr/bin/test

## Regular expression

Regular expression nằm ở dưới cùng trong page này:

http://bi.biopapyrus.net/linux/sed.html

Dấu "," hoặc "/" sau chữ s ở đầu của được gọi là dấu phân cách (separator), các bạn có thể tùy chọn 1 trong 2 ký tự đó.

Nhìn chung thì dấu "/" được sử dụng nhiều hơn.

Cách sử dụng về cơ bản giống như bên dưới. Chữ g ở cuối của sed dùng khi muốn replace all. Nếu không có g thì sẽ chỉ replace đối tượng đầu tiên gần header row mà nó tìm thấy.

sed -e 's/pattern/replace_string/g'

Nếu không gắn option nào thì sed chỉ replace pattern đầu tiên match trong mỗi dòng. Nếu gắn i vào thì sẽ replace mà không quan tâm là chữ in hoa hay chữ thường. i là chữ i trong Ignore Case. Giống với i trong grep -i

sed thực hiện xử lý theo đơn vị từng dòng nên nên việc xử lý replace trên nhiều dòng sẽ có phần hạn chế. Hãy search bằng "sed line feed"

Trong cách sử dụng như bên dưới thì sẽ không thể replace tag thành \_TAG\_ được vì sed sẽ ưu tiên tìm chuỗi dài nhất tương ứng với mẫu.

$ cat pom.xml | sed -e 's,<.*>,\_\_TAG\_\_,g'

Nếu là biểu thức chính quy khác (regular expression) thì có option để ưu tiên tìm chuỗi ngắn nhất tương ứng với mẫu nhưng vì trong sed không có nên ta làm như sau:

$ cat pom.xml | sed -e 's,<[^>]*>,\_\_TAG\_\_,g'

Lưu ý là sau khi replace 1 file bằng sed vd như file input.txt, không được phép xuất thành file input.txt !

Nếu làm như vậy thì bên trong file input.txt sẽ bị trống.

$ cat input.txt | sed -e 's,,g' > input.txt

Trường hợp muốn edit nội dung bên trong input.txt và lưu cùng tên file thì dùng option -i của sed

$ sed -i 's,,g' input.txt

Vì + hoặc {3,4} không thể sử dụng trong sed thông thường nên hãy dùng -E. Khi thực hiện biểu thức chính quy grep cũng tương tự.

## Capture

$ cat input.txt

name=Aoking

age=28

weight=65

$ cat input.txt | sed -e 's,=(.*)$, XXX\1XXX,g'

name XXXAokingXXX

age XXX28XXX

weight XXX65XXX

## awk

Nếu nhớ được awk thì sẽ có thể làm được rất nhiều việc.

awk vừa là tên của một lệnh, mà thực ra cũng là một ngôn ngữ lập trình.

Về cơ bản awk cũng không làm gì phức tạp. Chỉ cần nhớ những kỹ thuật đơn giản là được.

Có thể lúc đầu sẽ không quen với việc awk thực hiện xử lý theo từng dòng . Hãy luyện tập thường xuyên nhé.

Cách sử dụng thường dùng:

Ví dụ	Ý nghĩa

```tcsh
awk '{print $2}'	# In column thứ 2, phân cách bởi khoảng trắng

awk '{print $NF}'	# In column cuối cùng, phân cách bởi khoảng trắng

awk '{print $(NF-2)}'	# In column thứ 2 từ cuối lên, phân cách bởi khoảng trắng

awk '{sum += $5} END {print sum}'	# Xuất tổng giá trị của trường thứ 5 của đầu vào đã nhận
```

## Related

### Script search file document works

```tcsh
#!/bin/bash -e

ROOT=$1

[ -z "$ROOT" ] && echo "Usage: $0 BLOB_ROOT_DIR" && exit 1

DOMAINS=$(ls $ROOT)

for domain in $(ls $ROOT); do

for app in $(ls $ROOT/$domain); do

FOUND=0

for year in $(ls $ROOT/$domain/$app); do

[ "$year" = "size" ] && continue

for month in $(ls $ROOT/$domain/$app/$year); do

for day in $(ls $ROOT/$domain/$app/$year/$month); do

for blobid in $(ls $ROOT/$domain/$app/$year/$month/$day); do

echo $blobid | grep -q "_" && continue

FILE=$ROOT/$domain/$app/$year/$month/$day/$blobid

if [ "$(hexdump -n4 -e '/1 "%02X"' $FILE)" = "600E8201" ]; then

echo "Found: $FILE";

FOUND=$(($FOUND + 1))

fi

done
done
done
done

FILES=$(find $ROOT/$domain/$app -type f | wc -l)
echo "$domain/$app total: $FILES found: $FOUND"
done
done
```

## Conditional execution

```chs
git commit && git push
git commit || echo "Commit failed"
```

## Reading lines

```tcsh
cat file.txt | while read line; do
echo $line
done
```

## Arguments

$#	Number of arguments

$*	All arguments

$@	All arguments, starting from first

$1	First argument

$_	Last argument of the previous command

## Special variables

$?	Exit status of last task

$!	PID of last background task

$$	PID of shell

$0	Filename of the shell script

## Tài liệu tham khảo

<https://wiki.bash-hackers.org/>

<https://devhints.io/bash>

<https://git-scm.com/docs/>