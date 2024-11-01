import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
    base: '/',
    lang: 'en-US',
    title: 'Short number',
    bundler: viteBundler(),
    description:
        'Lightweight package that shortens given number by taking digits and adding K, M, B or T after them',
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        }),
    ],
    theme: defaultTheme({
        navbar: [
            {
                text: 'Documentation',
                link: '/',
            },
            {
                text: 'Usage example',
                link: 'https://replit.com/@SerhiiCho/Usage-of-short-number-package',
            },
            {
                text: 'GitHub',
                link: 'https://github.com/short-number/short-number',
            },
            {
                text: '📃 Changelog',
                link: 'https://github.com/short-number/short-number/blob/main/CHANGELOG.md',
            },
            {
                text: '👨🏻‍💻 About author',
                link: 'https://serhii.io/about-me',
                rel: 'author',
            },
            {
                text: '☕️ Buy me a coffee',
                link: 'https://www.buymeacoffee.com/serhiicho',
            },
        ],
    }),
})
