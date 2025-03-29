---
outline: deep
title: Language Configurations - 4.x
description: Learn how to configure Short Number library in your application for a particular language
---

# Language Configurations
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

There are two approaches to overriding translations suffixes:

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

All the language sets live in the [`/sets`](https://github.com/short-number/short-number/tree/master/sets) directory in the root of the project. There, you can find suffixes that you can override.

Here is another example of simple overwrite:

```php
use Serhii\ShortNumber\Lang;

Lang::set('zh', ['千' => ' 千']); // [!code focus:3]

echo Lang::short(2000); // output: "2 千"
```

## Reset to Defaults
Use `resetToDefaults()` method to reset the language and overwrites to their default values. For language it will be `en` (English) and for overwrites it will be an empty array.

```php
use Serhii\ShortNumber\Lang;

Lang::resetToDefaults();
```
