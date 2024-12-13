---
outline: deep
title: Upgrade Guide - 4.x
description: Learn how to upgrade Short Number library from 3.x to 4.x
---

# Upgrade Guide from Version 3.x to 4.x

**Short Number 4** brought a complete rewrite of the source code with improved configurations. The upgrade is very simple and requires only a few changes in your code. Follow this guide to upgrade your application from version `3.x` to `4.x`.

:::tip Optional Steps
Some steps are marked with <Badge type="warning" text="optional" />, as they may not apply to you if you're not using the specific configurations or features mentioned.
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

## Step 3: Named Argument <Badge type="warning" text="optional" />
If you are using named argument in the `Lang::set()` method as the second argument, you need to rename it from `custom_translations` to `overwrites`:

```php
use Serhii\ShortNumber\Lang;

Lang::set('en', overwrites: [ // [!code ++]
Lang::set('en', custom_translations: [ // [!code --]
    'k' => 'kilo',
    'm' => 'mega',
    'b' => 'bill',
]);
```

## Step 4: