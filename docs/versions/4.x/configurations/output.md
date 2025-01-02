---
outline: deep
title: Output Configurations - 4.x
description: Learn how to configure the output of Short Number library in your application
---

# Output Configurations
You can apply additional configurations to control how numbers are formatted across your application. For example, if you want to display numbers with a specific number of decimal places, you can set this configuration in your provider or bootstrap file.

## Configuration Example
Below is an example of how to configure decimal formatting:

```php
use Serhii\ShortNumber\Number;
use Serhii\ShortNumber\Config;

Number::configure(new Config(decimals: 1, upperCase: true)); // [!code focus]
```

Once configured, all numbers will be formatted with the specified number of decimal places. For instance:

```php
use Serhii\ShortNumber\Number;

echo Number::short(12_345); // output: "12.3K" // [!code focus]
```

## Available Configurations
Here is the full list of all available configurations for the latest version:

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `decimals` | `int` | `0` | Number of decimals to show on the formatted number |
| `decimalsSeparator` | `string` | `.` | Separator for the decimals |
| `suffixSeparator` | `string` | | Separator between the suffix and the number. Empty string by default |
| `upperCase` | `bool` | `false` | Whether to show the suffix in uppercase or not |