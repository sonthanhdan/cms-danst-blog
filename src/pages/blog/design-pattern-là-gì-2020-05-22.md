---
templateKey: blog-post
title: " Design Pattern là gì?"
date: 2020-05-22T09:59:35.422Z
author: Danst
description: |-
  
  Design Pattern là gì?
featuredpost: true
featuredimage: /img/design-patterns.png
tags:
  - design pattern
---
**Design Pattern** (hay còn gọi là mẫu thiết kế) là một giải pháp chung để giải quyết các vấn đề phổ biến khi thiết kế phần mềm trong lập trình hướng đối tượng OOP.

***Vì sao Developer nên học và sử dụng Design Pattern?***

* Tăng tốc độ phát triển phần mềm : Loại bỏ thời gian thừa của developer khi suy nghĩ giải pháp cho một vấn đề, Design Pattern đưa ra các mô hình test và mô hình phát triển đã qua kiểm nghiệm giúp developer có được hướng giải quyết nhanh chóng và hiệu quả.
* Hạn chế lỗi tiềm ẩn : Sử dụng giải pháp đã được chứng minh và công nhận thì hẳn là sẽ giảm bớt rủi ro hơn là tự mình thử nghiệm giải pháp mới đúng không nào? Vậy nên bạn sẽ không còn lo lắng về các lỗi tiềm ẩn nữa.
* Hỗ trợ tái sử dụng mã lệnh
* Giúp code dễ đọc hơn

**Phân loại Design Pattern**

**Creational Pattern** (nhóm khởi tạo): tập hợp các giải pháp liên quan đến khởi tạo đối tượng.

Nhóm này gồm 5 mẫu thông dụng: 

1. Factory Method
2. Abstract Factory
3. Builder
4. Prototype
5. Singleton



   **Factory Method** : được sử dụng khi có một class cha (super-class) với nhiều class con (sub-class), dựa trên đầu vào là class con và phải trả về đối tượng của class con đó. Ta có thể bắt gặp patern này trong Laravel helper function app() ex: app('session'), app('cache')

   ```
   <?php

   class Computer 
   {
        public $name;
        public $cpu;
        public $ram;

       function __construct($name, $cpu, $ram)
       {
         $this->name = $name;
         $this->cpu = $cpu;
         $this->ram = $ram;
       }
       
       public function getName()
       {
         return $this->name;
       }
   }


   class ComputerFactory
   {
     public createComputer()
     {
       return new \Computer();
     }
   }

   $computerFactory = new ComputerFactory('Macbook Pro', 'i9', 16);
   $laptop = $computerFactory->createComputer();
   $server = $computerFactory->createComputer();
   ```

**Structural Pattern** (nhóm cấu trúc): tập hợp các giải pháp liên quan đến thiết lập kết cấu, liên hệ giữa các đối tượng.

Nhóm này gồm 7 mẫu thông dụng: 

1. Adapter
2. Bridge 
3. Composite
4. Decorator
5. Facade
6. Flyweight
7. Proxy



Facade Pattern được dùng để các ứng dụng phía client dễ dàng giao tiếp với hệ thống. Thay vì phải làm việc với nhiều hệ thống/module con, Facade Pattern giúp ứng dụng client chỉ phải giao tiếp với 1 hệ thống duy nhất. Ta có thể bắt gặp patern này trong laravel [`Illuminate\Support\Facades\Facade`](https://github.com/laravel/framework/blob/5.6/src/Illuminate/Support/Facades/Facade.php)``

```
<?php
interface FastFoodFacade
{
    public function orderComboOne();
    public function orderComboTwo();
}

class McDonalds implements FastFoodFacade
{
    public function orderComboOne()
    {
        $food = (new McDouble())->withCheese();
        $drink = (new Drink())->size('large');
        $fries = (new Fries())->size('large');

        return [
            'food' => $food,
            'drink' => $drink,
            'extra' => [$fries]
        ];
    }

    public function orderComboTwo()
    {
        $food = (new McNuggets())->count(10);
        $drink = (new Drink())->size('medium');
        $sauce = (new Sauce('Bbq'));
        $sauce2 = (new Sauce('honeyMustard'));

        return [
            'food' => $food,
            'drink' => $drink,
            'extra' => [$sauce, $sauce2]
        ];
    }
}

```



**Behavioral Pattern** (nhóm hành vi): tập hợp các giải pháp liên quan đến các hành vi của đối tượng và giao tiếp giữa các đối tượng khác nhau.

Nhóm này gồm 11 mẫu thông dụng: 

1. Interpreter
2. Template Method
3. Chain of Responsibility
4. Command
5. Iterator
6. Mediator
7. Memento
8. Observer
9. State
10. Strategy
11. Visitor



## Tham khảo



<https://stackjava.com/design-pattern/factory-pattern.html>

<http://snags88.github.io/facade-pattern-in-laravel>

<http://snags88.github.io/facade-pattern-in-laravel>

<https://stackjava.com/design-pattern/facade-pattern.html>