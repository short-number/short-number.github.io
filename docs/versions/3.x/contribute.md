---
outline: deep
search: false
title: Contribute - 3.x
description: Learn how to contribute to Short Number library by adding a new locale
---

# Contribute
:::danger Outdated version
You are currently viewing an outdated version of the Short Number library. [Switch to the latest version](/) to access the newest features, improvements, and updates.
:::

Here is the [commit](https://github.com/short-number/short-number/commit/fdafe3e61c4b1e5bfe16594b76d5a95b4c4aee4c) that added support for Ukrainian language. Contribute another language is very simple. You need to make 3 steps:

## Step 1. Translations
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

## Step 3. README.md
Last step you need to add new language to `README.md` file under the section **Supported languages**.