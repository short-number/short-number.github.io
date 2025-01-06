---
outline: deep
title: Contribute Locale - 4.x
description: Learn how to contribute to Short Number library by adding a new locale
---

# Contribute Locale
One of the main features of Short Number is the ability to support multiple languages. If you want to add a new language to the library, you can do it by following the steps below.

:::warning Only Hindu-Arabic Numerals (0-9) Supported
For now, languages with their own numerical system like Arabic, Roman, etc. are not supported. But, I will definitely consider adding support for the ability to overwrite the numerical system in the future versions if I see a demand for it.
:::

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

This method of defining suffixes is super flexible and can be used for any language. But, you can do even more with `AbbreviationSet`. Let's take a look at the more advanced example with Chinese language in the [next section](#abbreviation-overwrites).

### Abbreviation Overwrites
One of the coolest abilities of `AbbreviationSet` is the ability to define `overwrites`. Overwrites will be applied for the final output when the result is ready to be displayed.

```php
return new AbbreviationSet(
    formula: [
        4 => [1, '千'], 5 => [1, '万'], 6 => [2, '万'],
        7 => [3, '万'], 8 => [4, '万'], 9 => [1, '亿'],
        10 => [2, '亿'], 11 => [3, '亿'], 12 => [4, '亿'],
        13 => [1, '兆'], 14 => [2, '兆'], 15 => [3, '兆'],
        16 => [4, '兆'], 17 => [1, '京'], 18 => [2, '京'],
    ],
    overwrites: [ // [!code ++:12]
        '1千' => '千',
        '1万' => '万',
        '1亿' => '亿',
        '1兆' => '兆',
        '1京' => '京',
        '-1千' => '-千',
        '-1万' => '-万',
        '-1亿' => '-亿',
        '-1兆' => '-兆',
        '-1京' => '-京',
    ],
);
```

In Chinese, instead of showing `1千` (1 thousand), we want to just display `千`. Same applies to other suffixes when the number is`1`. This is where `overwrites` come in handy. The key of the rewrite is the original output, and the value is the new output. Keep in mind that overwrites will be applied to the full output, not just a part of it. The full string has to match the key to be replaced.

## Step 2. Tests
In the [`/tests/Sets/`](https://github.com/short-number/short-number/tree/main/tests/Sets) directory, create a test file for your language. The file should be named based on the language name. For example, for the Chinese language, the file is named `ChineseSetTest.php`.

You can just copy the content of one of the existing test files and rewrite it for your language. Make sure to test all the possible cases.

The typical data provider for a test look like one below. It's a truncated version of the Chinese test provider:

```php
public static function provideLanguageSet(): array
{
    return self::withNegativeNumbers([
        ['0', 0],
        ['999', 999],
        // ....
        ['99京', 99_9054_2399_4223_9191],
        ['99京', 99_9999_9999_9999_9999],
    ]);
}
```

One the left we tell how the output result should look like, and on the right, we provide the number that that we want to use as an input to our `Number::short()` method.

:::tip PHPUnit Data Providers
If you don't know about [PHPUnit Data Providers](https://docs.phpunit.de/en/10.5/writing-tests-for-phpunit.html#data-providers) you might want to read about it first before you provide the test data. It's a super easy way to provide test data for your tests.
:::

Keep in mind that you don't need to test negative numbers because they are going to be provided by the `self::withNegativeNumbers()` method that you use in your provider. Alternatively, you can change where to place `-` sign by providing a second argument to the `self::withNegativeNumbers()` method. For example, if you want to place `-` sign at the end of the number, you can do it like this:

```php
self::withNegativeNumbers([], '%s-');
```

But, you should obviously do it if your language requires it to be on the end of the number.

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

:::tip Reach Out to Us
If you have any questions or suggestions, feel free to reach out to us on [GitHub Discussions](https://github.com/short-number/short-number/discussions) or [open an issue](https://github.com/short-number/short-number/issues/new).
:::