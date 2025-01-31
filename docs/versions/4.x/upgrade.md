---
outline: deep
title: Upgrade Guide - 4.x
description: Learn how to upgrade Short Number library from 3.x to 4.x
---

# Upgrade Guide from Version 3.x to 4.x

**Short Number 4** brought a complete rewrite of the source code with improved configurations. The upgrade is very simple and requires only a few changes in your code. Follow this guide to upgrade your application from version `3.x` to `4.x`. Most of the steps here you're likely going to skip, as they are only applicable if you're using specific configurations or features.

:::tip Possible Steps
Some steps are marked with <Badge type="warning" text="possible" />, as they may not apply to you if you're not using the specific configurations or features mentioned.
:::

## Step 1: Composer File
In your `composer.json` file, update the version of the `serhii/short-number` package to the version 4:

```json
{
    "require": {
        "serhii/short-number": "^4.0"
    }
}
```

## Step 2: Composer Update
Then run the following command to update the package:

```bash
composer update serhii/short-number:^4.0
```

## Step 3: Rename Method
The method `conv` on the `Serhii\ShortNumber\Number` class was renamed to `short`:


```php
use Serhii\ShortNumber\Number;

echo Number::conv(1000); // [!code --]
echo Number::short(1000); // [!code ++]
```

It's behavior remains the same, but the name was changed to better reflect its purpose.

## Step 4: Named Argument <Badge type="warning" text="possible" />
If you are using named argument in the `Lang::set()` method as the second argument, you need to rename it from `custom_translations` to `overwrites`:

```php
use Serhii\ShortNumber\Lang;

Lang::set('en', overwrites: [ // [!code ++]
Lang::set('en', custom_translations: [ // [!code --]
    'thousand' => 'kilo',
    'million' => 'mega',
    'billion' => 'bill',
]);
```

## Step 5: Change Overwrites <Badge type="warning" text="possible" />
If you are using the [overwrites feature](/4.x/configurations/language.html#overwrite-translations) of Short Number where you can overwrite the default translations, you need to change the way you define the overwrites. Here is the old and new ways of doing it:

::: code-group
```php [Old Way]
use Serhii\ShortNumber\Lang;

Lang::set('en', overwrites: [
    'thousand' => 'kilo',
    'million' => 'mil',
    'billion' => 'bil',
    'trillion' => 'tril',
]);
```
```php [New Way]
use Serhii\ShortNumber\Lang;

Lang::set('en', overwrites: [
    'k' => 'kilo',
    'm' => 'mil',
    'b' => 'bil',
    't' => 'tril',
]);
```
:::

You can also overwrite quadrillions with `q` key, but quadrillions weren't supported in the previous version.

## Step 6: Delete Class <Badge type="warning" text="possible" />
If you have been using the `Serhii\ShortNumber\Rule` class directly in your code — which was neither documented nor recommended — you will need to get rid of it completely. It wasn't a part of the public API.

```php
$rule = new Rule('thousand', [Rule::THOUSAND, Rule::MILLION - 1]); // [!code --:2]
$output = $rule->formatNumber($number);
```