---
outline: deep
title: Contribute Locale - 4.x
description: Learn how to contribute to Short Number library by adding a new locale
---

# Contribute Locale

## Step 1. Abbreviation Set
Add the language set to [`/sets/`](https://github.com/short-number/short-number/blob/main/sets) directory based on the language code. Here is the `/sets/en.php` set for English as an example:

```php
return new AbbreviationSet(formula: [
    4 => [1, 'k'], 5 => [2, 'k'], 6 => [3, 'k'],
    7 => [1, 'm'], 8 => [2, 'm'], 9 => [3, 'm'],
    10 => [1, 'b'], 11 => [2, 'b'], 12 => [3, 'b'],
    13 => [1, 't'], 14 => [2, 't'], 15 => [3, 't'],
    16 => [1, 'q'], 17 => [2, 'q'], 18 => [3, 'q'],
]);
```

The instance of the `AbbreviationSet` class should be the main thing returned from this file.

You should define the `formula` for your language. The formula is an array with type `array<int,array{int,string}>`. Keys of the formula array are the amount of digits in the number, and the value is an array with 2 elements. The first element is the number of digits to take from the beginning of the number, and the second element is the suffix for the number.

Here is an English example of formulas:
- `4 => [1, 'k']`: The number `1,000` has `4` digits, we take `1` digit from the beginning of the number and add the suffix `k` to it. Result is `1k`.
- `8 => [2, 'm']`: The number `44,000,000` has `8` digits, we take `2` digit from the beginning of the number and add the suffix `m` to it. Result is `44m`.
- `12 => [3, 'b']`: The number `999,000,000,000` has `12` digits, we take `3` digit from the beginning of the number and add the suffix `b` to it. Result is `999b`.

This method of defining suffixes is super flexible and can be used for any language. But, you can do even more with `AbbreviationSet`. Let's take a look at the more advanced example with Chinese language in the [next section](#abbreviation-rewrites).

## Abbreviation Rewrites
One of the coolest abilities of `AbbreviationSet` is the ability to define `rewrites`. Rewrites will be applied for the final output when the result is ready to be displayed.

```php
return new AbbreviationSet(
    formula: [
        4 => '1:千', 5 => '1:万', 6 => '2:万',
        7 => '3:万', 8 => '4:万', 9 => '1:亿',
        10 => '2:亿', 11 => '3:亿', 12 => '4:亿',
        13 => '1:兆', 14 => '2:兆', 15 => '3:兆',
        16 => '4:兆', 17 => '1:京', 18 => '2:京',
    ],
    rewrites: [ // [!code ++:7]
        '1千' => '千',
        '1万' => '万',
        '1亿' => '亿',
        '1兆' => '兆',
        '1京' => '京',
    ],
);
```

In Chinese, instead of showing `1千` (1 thousand), we want to just display `千`. Same applies to other suffixes when the number is 1. This is where `rewrites` come in handy. The key of the rewrite is the original output, and the value is the new output.

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