---
outline: deep
title: Usage Guide - 4.x
description: Learn how to use Short Number library in your application
---

# Usage Guide
To convert a number to a short number, you can use the `Serhii\ShortNumber\Number` class with its `conv` (convert) method.

```php
use Serhii\ShortNumber\Number;

Number::short(1893234); // returns: 1m
Number::short(20234); // returns: 20m
```

If you need to change the language of the short number, you can use the `Serhii\ShortNumber\Lang` with its `set` method.

```php
use Serhii\ShortNumber\Lang;

Lang::set('ru');
Number::short(1893234); // returns: 1млн
```

Learn how to configure the library on the [Configuration](/4.x/configurations.html) page