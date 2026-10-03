---
outline: deep
title: Configurations - 4.x
search: false
description: Learn how to configure Short Number library in your application
---

# Configurations
:::danger Outdated version
You are currently viewing an outdated version of the Short Number library. [Switch to the latest version](/) to access the newest features, improvements, and updates.
:::

## Change Language
For changing the language you want to call `set()` method once before calling other methods from this package.

```php
Serhii\ShortNumber\Lang::set('ru');
```

## Overwrite Translations
If you want to replace existing translations for supported language or add your own language, you can pass custom translations as the second argument to `set()` method.

```php
// Overwriting all fields
Serhii\ShortNumber\Lang::set('en', [
    'thousand' => 'thou',
    'million' => 'mil',
    'billion' => 'bil',
    'trillion' => 'tril',
]);
```
You can overwrite any fields that you need, overwriting all fields is not necessary.

```php
// Overwriting 1 field
Serhii\ShortNumber\Lang::set('en', ['million' => 'mil']);
```