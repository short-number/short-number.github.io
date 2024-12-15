---
outline: deep
title: What is Short Number - 4.x
description: Learn what Short Number library is and how it can help you format numbers into short, human-readable format
---

# What is Short Number

:::tip Largest Supported Number
The largest number that can be formatted by the Short Number library is 999 quadrillions `999,999,999,999,999,999` or `9.999 × 10¹⁷`.
:::

## Supported Languages
| Flag | Language  | Code | Thousand | 10 Thousand | Million | Billion | Trillion | Quadrillion |
| ---- | --------- | ---- | -------- | ----------- | ------- | ------- | -------- | ----------- |
| 🇬🇧    | English   | en   | 1k       | 10k         | 1m      | 1b      | 1t       | 1q          |
| 🇷🇺    | Russian   | ru   | 1тыс     | 10тыс       | 1млн    | 1млд    | 1трн     | 1квадр      |
| 🇺🇦    | Ukrainian | uk   | 1тис     | 10тис       | 1млн    | 1млд    | 1трн     | 1квадр      |
| 🇨🇳    | Chinese   | zh   | 千       | 万          | 100万   | 10亿    | 兆       | 京          |
| 🇯🇵    | Japanese  | ja   | 千       | 万          | 100万   | 10億    | 兆       | 京          |

:::tip Different Counting Systems
Large numbers in languages like Chinese, Japanese, Korean are often abbreviated using their unique counting system, based on units of 1,0000 and 1,0000,0000 instead of 10,000 and 100,000,000. This library considers this when formatting numbers and displays them in the correct format.
:::