---
outline: deep
title: What is Short Number - 4.x
description: Learn what Short Number library is and how it can help you format numbers into short, human-readable format
---

# What is Short Number
Short Number is a lightweight, multilingual PHP library for formatting numbers into short, human-readable, compact abbreviations. It can format large numbers into short strings like `1k`, `1m`, `1b`, `1t`, `1q` depending on the language and the number.

## Advantages of Short Number
**Short Number** is focused on providing the best performance and the most accurate number formatting. Here are some of the advantages of using Short Number:

🚀 **Fast execution**\
Is written in a way to make the number parsing as fast as possible

🌍 **Multilingual support**\
Supports multiple languages and can format numbers in different languages

📦 **Lightweight**\
Has no external dependencies and is very lightweight

🪶 **Low memory usage**\
Loads only needed data into memory when parsing the input

📃 **Well documented**\
Has a simple and easy-to-use API with decent docs

:::tip Largest Supported Number
The largest number that can be formatted by the Short Number library is 999 quadrillions `999,999,999,999,999,999` or `9.999 × 10¹⁷`.
:::

## Supported Languages
|     | Language  | Code | Thousand | Million | Billion | Trillion | Quadrillion |
| --- | --------- | ---- | -------- | ------- | ------- | -------- | ----------- |
| 🇬🇧   | English   | en   | 1k       | 1m      | 1b      | 1t       | 1q          |
| 🇷🇺   | Russian   | ru   | 1тыс     | 1млн    | 1млрд   | 1трлн    | 1квадр      |
| 🇺🇦   | Ukrainian | uk   | 1тис     | 1млн    | 1млрд   | 1трлн    | 1квадр      |
| 🇨🇳   | Chinese   | zh   | 千       | 100万   | 10亿    | 兆       | 京          |
| 🇯🇵   | Japanese  | ja   | 千       | 100万   | 10億    | 兆       | 京          |

:::tip Different Counting Systems
Large numbers in languages like Chinese, Japanese, Korean are often abbreviated using their unique counting system, based on units of 1,0000 and 1,0000,0000 instead of 10,000 and 100,000,000. This library considers this when formatting numbers and displays them in the correct format.
:::
