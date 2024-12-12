---
outline: deep
title: Get Started - 4.x
---

# Documentation

Lightweight package shortens given number to a short representation of it. For example **1234** will be formatted to **1k** and **20244023** to **20m**. Package supports multiple languages, the default it's set to English.

## 🐘 Supported PHP versions

- ✅ 7.2
- ✅ 7.3
- ✅ 7.4
- ✅ 8.0
- ✅ 8.1
- ✅ 8.2
- ✅ 8.3

## ⚙️ Language configurations

### Change language

For changing the language you want to call `set()` method once before calling other methods from this package.

```php
Serhii\ShortNumber\Lang::set('ru');
```

### Overwrite translations

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

## 🚩 Supported languages

| Flag | Language | Code (ISO 639-1) | Thousand | Million | Billion | Trillion |
| --- | --- | --- | --- | --- | --- | --- |
| 🇬🇧 | English | en | 1k | 1m | 1b | 1t |
| 🇷🇺 | Russian | ru | 1тыс | 1млн | 1млд | 1трн |
| 🇺🇦 | Ukrainian | uk | 1тис | 1млн | 1млд | 1трн |

## 👏 Usage

```php
use Serhii\ShortNumber\Number;

Number::conv(1893234); // returns: 1m
Number::conv(20234); // returns: 20m
```

## 🎁 Contribute language support

Here is the [commit](https://github.com/short-number/short-number/commit/fdafe3e61c4b1e5bfe16594b76d5a95b4c4aee4c) that added support for Ukrainian language.
Contribute another language is very simple. You need to make 3 steps:

### Step 1. Translations
Add translations to `resources/translations.php` file. Here is the file:

```php
return [
    // English
    'en' => [
        'thousand' => 'k',
        'million' => 'm',
        'billion' => 'b',
        'trillion' => 't',
    ],
    // Russian
    'ru' => [
        'thousand' => 'тыс',
        'million' => 'млн',
        'billion' => 'млд',
        'trillion' => 'трн',
    ],
    // add same for your language
];
```

### Step 2. Tests

After adding another language, you need to add line to `tests/TranslationsTest.php`. The method `runTestsForSuffixes(string $lang, string[] $suffixes)` will generate tests for you. You just need to run `./vendor/bin/phpunit` to make sure your translation works.

```php
class TranslationsTest extends TestCase
{
    public function testing_correct_conversion(): void
    {
        $this->runTestsForSuffixes('en', ['k', 'm', 'b', 't']);
        $this->runTestsForSuffixes('ru', ['тыс', 'млн', 'млд', 'трн']);
        // add same line for your language here
    }
}
```

### Step 3. README.md

Last step you need to add new language to README.md file under the section **Supported languages**.

## Quick Start
```bash
composer require serhii/short-number:^4.0
```
