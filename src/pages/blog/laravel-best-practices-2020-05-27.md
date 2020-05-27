---
templateKey: blog-post
title: Laravel best practices
date: 2020-05-27T04:52:44.217Z
author: Danst
description: Bài viết này mình dịch và tổng hợp một số Laravel best practices.
featuredpost: true
featuredimage: /img/laravel-best-practices.jpeg
tags:
  - laravel
---
**Single responsibility principle** (Nguyên tắc trách nhiệm duy nhất): Mỗi lớp chỉ nên chịu một trách nhiệm cụ thể

```
<?php

// Bad:
public function getFullNameAttribute()
{
    if (auth()->user() && auth()->user()->hasRole('client') && auth()->user()->isVerified()) {
        return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' ' . $this->last_name;
    } else {
        return $this->first_name[0] . '. ' . $this->last_name;
    }
}

// Good:

public function getFullNameAttribute()
{
    return $this->isVerifiedClient() ? $this->getFullNameLong() : $this->getFullNameShort();
}
public function isVerifiedClient()
{
    return auth()->user() && auth()->user()->hasRole('client') && auth()->user()->isVerified();
}

public function getFullNameLong()
{
    return 'Mr. ' . $this->first_name . ' ' . $this->middle_name . ' ' . $this->last_name;
}

public function getFullNameShort()
{
    return $this->first_name[0] . '. ' . $this->last_name;
}
```

**Fat models, skinny controllers** (Tạm dịch là người mẫu béo, người điều khiển gầy)

Đặt tất cả logic liên quan đến DB vào các mô hình Eloquent hoặc vào Repository nếu bạn đang sử dụng Query Builder hoặc raw SQL queries.

```
// Bad:

public function index()
{
    $clients = Client::verified()
        ->with(['orders' => function ($q) {
            $q->where('created_at', '>', Carbon::today()->subWeek());
        }])
        ->get();

    return view('index', ['clients' => $clients]);
}

// Good:

public function index()
{
    return view('index', ['clients' => $this->client->getWithNewOrders()]);
}

class Client extends Model
{
    public function getWithNewOrders()
    {
        return $this->verified()
            ->with(['orders' => function ($q) {
                $q->where('created_at', '>', Carbon::today()->subWeek());
            }])
            ->get();
    }
}
```

**Validation**: Nên chuyển validation từ controllers vào Request classes.

```
// Bad:

public function store(Request $request)
{
    $request->validate([
        'title' => 'required|unique:posts|max:255',
        'body' => 'required',
        'publish_at' => 'nullable|date',
    ]);

}
// Good:

public function store(PostRequest $request)
{    

}

class PostRequest extends Request
{
    public function rules()
    {
        return [
            'title' => 'required|unique:posts|max:255',
            'body' => 'required',
            'publish_at' => 'nullable|date',
        ];
    }
}
```

**Business logic should be in service class** (Nên chuyển các nghiệp vụ logic vào các lớp service)

Một controller chỉ nên đảm nhiệm một nhiệm vụ, do đó hãy xem xét chuyển các nghiệp vụ logic vào service để code trông gọn và dễ đọc hiểu hơn

```
// Bad:

public function store(Request $request)
{
    if ($request->hasFile('image')) {
        $request->file('image')->move(public_path('images') . 'temp');
    }
    
    ....
}
// Good:

public function store(Request $request)
{
    $this->articleService->handleUploadedImage($request->file('image'));

    ....
}

class ArticleService
{
    public function handleUploadedImage($image)
    {
        if (!is_null($image)) {
            $image->move(public_path('images') . 'temp');
        }
    }
}
```

**Don't repeat yourself (DRY)**: (Đừng lặp lại code)

Nên sử dụng Eloquent thay cho Query Builder and raw SQL queries. Dùng collections thay cho arrays

Không nên thực thi query trong Blade

```
// Bad (for 100 users, 101 DB queries will be executed):

@foreach (User::all() as $user)
    {{ $user->profile->name }}
@endforeach


// Good (for 100 users, 2 DB queries will be executed):
$users = User::with('profile')->get();
@foreach ($users as $user)
    {{ $user->profile->name }}
@endforeach
```

**Nên comment trong code, sẽ tốt hơn nếu đặt tên phương thức và tên biến sát nghĩa**

```
// Bad:

if (count((array) $builder->getQuery()->joins) > 0)

// Better:
// Determine if there are any joins.
if (count((array) $builder->getQuery()->joins) > 0)

// Good:

if ($this->hasJoins())
```

**Không đặt JS và CSS trong các Blade template và không đặt bất kỳ HTML nào trong các class PHP**

```
// Bad:

let article = `{{ json_encode($article) }}`;

// Better:

<input id="article" type="hidden" value='@json($article)'>
Or
<button class="js-fav-article" data-article='@json($article)'>{{ $article->name }}<button>
// In a Javascript file:

let article = $('#article').val();
```

**Nên sử dụng config, languages file, constants tránh viết text in code, magic number**

```
// Bad:

public function isNormal()
{
    return $article->type === 'normal';
}

return back()->with('message', 'Your article has been added!');
// Good:

public function isNormal()
{
    return $article->type === Article::TYPE_NORMAL;
}

return back()->with('message', __('app.article_added'));
```

**Laravel naming conventions**

| What                             | How                                                                       | Good                                    | Bad                                                 |
| -------------------------------- | ------------------------------------------------------------------------- | --------------------------------------- | --------------------------------------------------- |
| Controller                       | singular                                                                  | ArticleController                       | ~~ArticlesController~~                              |
| Route                            | plural                                                                    | articles/1                              | ~~article/1~~                                       |
| Named route                      | snake_case with dot notation                                              | users.show_active                       | ~~users.show-active, show-active-users~~            |
| Model                            | singular                                                                  | User                                    | ~~Users~~                                           |
| hasOne or belongsTo relationship | singular                                                                  | articleComment                          | ~~articleComments, article_comment~~                |
| All other relationships          | plural                                                                    | articleComments                         | ~~articleComment, article_comments~~                |
| Table                            | plural                                                                    | article_comments                        | ~~article_comment, articleComments~~                |
| Pivot table                      | singular model names in alphabetical order                                | article_user                            | ~~user_article, articles_users~~                    |
| Table column                     | snake_case without model name                                             | meta_title                              | ~~MetaTitle; article_meta_title~~                   |
| Model property                   | snake_case                                                                | $model->created_at                      | ~~$model->createdAt~~                               |
| Foreign key                      | singular model name with _id suffix                                       | article_id                              | ~~ArticleId, id_article, articles_id~~              |
| Primary key                      | \-                                                                        | id                                      | ~~custom_id~~                                       |
| Migration                        | \-                                                                        | 2017_01_01_000000_create_articles_table | ~~2017_01_01_000000_articles~~                      |
| Method                           | camelCase                                                                 | getAll                                  | ~~get_all~~                                         |
| Method in resource controller    | [table](https://laravel.com/docs/master/controllers#resource-controllers) | store                                   | ~~saveArticle~~                                     |
| Method in test class             | camelCase                                                                 | testGuestCannotSeeArticle               | ~~test_guest_cannot_see_article~~                   |
| Variable                         | camelCase                                                                 | $articlesWithAuthor                     | ~~$articles_with_author~~                           |
| Collection                       | descriptive, plural                                                       | $activeUsers = User::active()->get()    | ~~$active, $data~~                                  |
| Object                           | descriptive, singular                                                     | $activeUser = User::active()->first()   | ~~$users, $obj~~                                    |
| Config and language files index  | snake_case                                                                | articles_enabled                        | ~~ArticlesEnabled; articles-enabled~~               |
| View                             | kebab-case                                                                | show-filtered.blade.php                 | ~~showFiltered.blade.php, show_filtered.blade.php~~ |
| Config                           | snake_case                                                                | google_calendar.php                     | ~~googleCalendar.php, google-calendar.php~~         |
| Contract (interface)             | adjective or noun                                                         | Authenticatable                         | ~~AuthenticationInterface, IAuthentication~~        |
| Trait                            | adjective                                                                 | Notifiable                              | ~~NotificationTrait~~                               |

**Sử dụng cú pháp ngắn hơn và dễ đọc hơn nếu có thể**

```
// Bad:

$request->session()->get('cart');
$request->input('name');

// Good:

session('cart');
$request->name;
```

| Common syntax                                                          | Shorter and more readable syntax                   |
| ---------------------------------------------------------------------- | -------------------------------------------------- |
| `Session::get('cart')`                                                 | `session('cart')`                                  |
| `$request->session()->get('cart')`                                     | `session('cart')`                                  |
| `Session::put('cart', $data)`                                          | `session(['cart' => $data])`                       |
| `$request->input('name'), Request::get('name')`                        | `$request->name, request('name')`                  |
| `return Redirect::back()`                                              | `return back()`                                    |
| `is_null($object->relation) ? null : $object->relation->id`            | `optional($object->relation)->id`                  |
| `return view('index')->with('title', $title)->with('client', $client)` | `return view('index', compact('title', 'client'))` |
| `$request->has('value') ? $request->value : 'default';`                | `$request->get('value', 'default')`                |
| `Carbon::now(), Carbon::today()`                                       | `now(), today()`                                   |
| `App::make('Class')`                                                   | `app('Class')`                                     |
| `->where('column', '=', 1)`                                            | `->where('column', 1)`                             |
| `->orderBy('created_at', 'desc')`                                      | `->latest()`                                       |
| `->orderBy('age', 'desc')`                                             | `->latest('age')`                                  |
| `->orderBy('created_at', 'asc')`                                       | `->oldest()`                                       |
| `->select('id', 'name')->get()`                                        | `->get(['id', 'name'])`                            |
| `->first()->name`                                                      | `->value('name')`                                  |

**Không nên lấy data trực tiếp trong .env**: Truyền dữ liệu cho các tệp config thay vào đó và sau đó sử dụng hàm config() helper function để sử dụng dữ liệu trong ứng dụng.

```
// Bad:

$apiKey = env('API_KEY');

// Good:
// config/api.php
'key' => env('API_KEY'),

// Use the data
$apiKey = config('api.key');
```

**Testing email into laravel.log** : nếu muốn xem chi tiết nội dung email đã gửi chúng ta có thể set trong .env parameter MAIL_DRIVER=log toàn bộ email được gửi sẽ được ghi vào trong log

**Don’t create Controllers** : Nếu bạn muốn tạo một route chỉ show thông tin đừng tạo thêm controler thay vào đó chúng ta có thể dùng Route::view() 

```
// Instead of this
Route::get('about', 'TextsController@about');
// And this
class TextsController extends Controller
{
  public function about()
  {
    return view('texts.about');
  }
}

Do this with short way
// Do this
Route::view('about', 'texts.about');
```

**Sử dụng Blade Directives**: IncludeIf, IncludeWhen, IncludeFirst

## Tham khảo

<https://github.com/alexeymezenin/laravel-best-practices>

<https://medium.com/@marslan.ali/laravel-best-practices-every-developer-should-know-and-follow-it-cebccfb1cc3e>