---
outline: deep
title: Contribute Locale - 4.x
description: Learn how to contribute to Short Number library by adding a new locale
---

# Contribute Locale

## Step 1. Language Set
Add the language set to [`/resources/sets.php`](https://github.com/short-number/short-number/blob/main/resources/sets.php) file:

```php
return [
    'en' => new AbbreviationSet(
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't',
    ),
    // add your language here
];
```

As a key to the array, you should use the language code in lower case. The value should be an instance of `AbbreviationSet` class. If your language has different different suffixes for thousands, millions, billions, and trillions, like some asian languages, you can define the like this:

```php
return [
    'zh' => new AbbreviationSet(
        thousand: ['千', '万', '万'],
        million: ['万', '万', '亿'],
        billion: ['亿', '亿', '亿'],
        trillion: ['兆', '兆', '兆'],
    ),
];
```

For Chinese language, we have three different suffixes defined here for each `AbbreviationSet` property. Here is the explanation of each property:

```md
- Thousand Array:
    0. 千 = Thousand
    1. 万 = Ten thousand
    2. 万 Hundred thousand
- Million Array:
    0. 万 = Million
    1. 万 = Ten million
    2. 亿 = Hundred million
- Billion Array:
    0. 亿 = Billion
    1. 亿 = Ten billion
    2. 亿 = Hundred billion
- Trillion Array:
    0. 兆 = Trillion
    1. 兆 = Ten trillion
    2. 兆 = Hundred trillion
```

You can also define `rewrites` which will be applied for the final output. For example, in Chinese, instead of `1千` (1 thousand), it's nicer to have just `千` without the number. Same applies to other suffixes when the number is 1. Here is how you can define it in the same `AbbreviationSet`:

```php
return [
    'zh' => new AbbreviationSet(
        thousand: ['千', '万', '万'],
        million: ['万', '万', '亿'],
        billion: ['亿', '亿', '亿'],
        trillion: ['兆', '兆', '兆'],
        rewrites: [
            '1千' => '千',
            '1万' => '万',
            '1亿' => '亿',
            '1兆' => '兆',
        ],
    ),
];
```

You can rewrites anything you want, just define what you want to rewrite as a key and what you want to replace it with as a value.

## Step 2. Tests
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

## Step 3. README File
Add new language to `README.md` file under the section **Supported Languages** to let everybody know that this library supports your language.

```md
## Supported Languages
| Flag | Language           | Code |
| ---- | ------------------ | ---- |
| 🇷🇺   | Russian            | ru   |
| 🇬🇧   | English            | en   |
| 🇨🇳   | Chinese            | zh   | // [!code ++]
```