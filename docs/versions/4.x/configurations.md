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
use Serhii\ShortNumber\Lang;

Lang::set('ru'); // [!code focus]
```

To get the current active language you can use the `current()` method, which returns a string representing the current language code.

```php{5}
use Serhii\ShortNumber\Lang;

Lang::set('ru'); // [!code focus:5]

$lang = Lang::current();

echo $lang; // output: "ru"
```

## Overwrite Translations
To customize existing translations for a supported language or to add a new language, you can provide custom translations as the second argument to the `Lang::set()` method.

### Overwrite Translations
There are two approaches to overriding translations:

1. **Override the current language**: Applies changes to the active language in use.
2. **Override a specific language**: Targets a specific language, regardless of the currently active one.

::: code-group
```php [1. Overwrite Current]
use Serhii\ShortNumber\Lang;

Lang::set('en', overwrites: [ // [!code focus:7]
    'k' => 'kilo',
    'm' => 'mil',
    'b' => 'bil',
    't' => 'tril',
    'q' => 'quad',
]);
```

```php [2. Overwrite Specific]
use Serhii\ShortNumber\Lang;

Lang::setOverwrites([ // [!code focus:9]
    'en' => [
        'k' => 'kilo',
        'm' => 'mil',
        'b' => 'bil',
        't' => 'tril',
        'q' => 'quad',
    ],
]);
```
:::

You can overwrite one or more translations without without specifying all of them.

### Overwrite the Output
You can also overwrite the whole output of the `Number::short()` method by providing a custom text for the output. Let's say you want to display `1000` instead of `1k`, you can do it like this:

```php
use Serhii\ShortNumber\Lang;

Lang::set('en', ['1k' => '1000']); // [!code focus:3]

echo Lang::short(1000); // output: "1000"
```