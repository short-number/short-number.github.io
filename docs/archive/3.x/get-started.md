---
outline: deep
search: false
title: Get Started - 3.x
description: Learn how to install Short Number library and get started with it
---

# Documentation

Lightweight package shortens given number to a short representation of it. For example **1234** will be formatted to **1k** and **20244023** to **20m**. Package supports multiple languages, the default it's set to English.

## Supported PHP Versions
- ✅ 7.2
- ✅ 7.3
- ✅ 7.4
- ✅ 8.0
- ✅ 8.1
- ✅ 8.2
- ✅ 8.3

## Supported Languages
| Flag | Language | Code (ISO 639-1) | Thousand | Million | Billion | Trillion |
| --- | --- | --- | --- | --- | --- | --- |
| 🇬🇧 | English | en | 1k | 1m | 1b | 1t |
| 🇷🇺 | Russian | ru | 1тыс | 1млн | 1млд | 1трн |
| 🇺🇦 | Ukrainian | uk | 1тис | 1млн | 1млд | 1трн |

## Usage
```php
use Serhii\ShortNumber\Number;

echo Number::conv(20234); // output: "20k"
echo Number::conv(1893234); // output: "1m"
```

## Quick Start
To use Short Number, first, you need to install it via [Composer](https://getcomposer.org/) package manager and have minimum PHP version `7.2`.

```bash
composer require serhii/short-number:^3.0
```
