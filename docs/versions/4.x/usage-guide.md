---
outline: deep
title: Usage Guide - 4.x
description: Learn how to use Short Number library in your application
---

# Usage Guide
To convert a number to a short number, you can use the `Serhii\ShortNumber\Number` class with its `conv` (convert) method.

```php
use Serhii\ShortNumber\Number;

echo Number::short(1_893_234); // output: "1m" // [!code focus:2]
echo Number::short(20_234); // output: "20m"
```

If you need to change the language of the short number, you can use the `Serhii\ShortNumber\Lang` with its `set` method.

```php
use Serhii\ShortNumber\Lang;

Lang::set('ru'); // [!code focus:3]

echo Number::short(1_893_234); // output: "1млн"
```

Learn how to configure the library on the [Configuration](/4.x/configurations.html) page