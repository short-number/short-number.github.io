---
outline: deep
title: Configurations - 4.x
description: Learn how to configure Short Number library in your application
---

# Configurations
Learn how to configure Short Number by changing language and overwriting translations.

## Change Language
For changing the language you want to call `set()` method once before calling other methods from this package.

```php
Serhii\ShortNumber\Lang::set('ru');
```

## Overwrite Translations
If you want to replace existing translations for supported language or add your own language, you can pass custom translations as the second argument to `set()` method. Let's take a look at how to add a new language:

```php
use Serhii\ShortNumber\Lang;

Lang::set('en', [
    'thousand' => 'thou',
    'million' => 'mil',
    'billion' => 'bil',
    'trillion' => 'tril',
]);
```
You can overwrite any fields that you need, overwriting all fields is not necessary. Let's take a look at how to overwrite only the result of millions:

```php
use Serhii\ShortNumber\Lang;

Lang::set('en', ['million' => 'mil']);
```