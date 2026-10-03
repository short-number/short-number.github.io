import type { HeadConfig, TransformContext } from 'vitepress'
import { defineVersionedConfig } from '@viteplus/versions'
import { versions, latestVersion, outdatedVersions } from './theme/versions.ts'
import { resolve } from 'node:path'

const hostname = 'https://short-number.serhiicho.com'
const excludeSitemapPrefixes = outdatedVersions.map(v => `${v}/`)

function setCanonicalTag(page: string): string {
    page = page.replace('.md', '.html')
    return page == 'index.html' ? hostname : `${hostname}/${page}`
}

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Short Number',
        description:
            'Lightweight, multilingual library for formatting large numbers into compact, human-readable abbreviations using language-specific units, making it easy to display big numbers in a concise and user-friendly format',

        transformHead: (ctx: TransformContext) => {
            const head: HeadConfig[] = []
            head.push([
                'link',
                { rel: 'canonical', href: setCanonicalTag(ctx.page) },
            ])
            return head
        },

        versionsConfig: {
            current: latestVersion,
            versionSwitcher: false,
        },

        lastUpdated: true,

        vite: {
            resolve: {
                alias: {
                    '@': resolve(import.meta.dirname, './theme'),
                },
            },
        },

        sitemap: {
            hostname,
            // exclude old version pages from sitemap
            transformItems: items =>
                items.filter(
                    item =>
                        !excludeSitemapPrefixes.some(p => item.url.startsWith(p)),
                ),
        },

        themeConfig: {
            footer: {
                message:
                    'Released under the <a href="https://codeberg.org/short-number/short-number/src/branch/master/LICENSE.md" target="_blank">MIT License</a>',
                copyright: `Copyright © 2019 - ${new Date().getFullYear()} <a href="https://serhiicho.com/about-me" target="_blank">Serhii Cho</a>`,
            },

            sidebar: {
                root: [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/get-started' },
                            { text: 'Usage Guide', link: '/usage-guide' },
                            {
                                text: 'Configurations',
                                items: [
                                    {
                                        text: 'Output',
                                        link: '/configurations/output',
                                    },
                                    {
                                        text: 'Language',
                                        link: '/configurations/language',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            { text: 'Upgrade Guide', link: '/upgrade' },
                            {
                                text: 'What is Short Number?',
                                link: '/what-is-short-number',
                            },
                            { text: 'Contribute', link: '/contribute' },
                        ],
                    },
                ],
                '3.x': [
                    { text: 'Get Started', link: '/get-started' },
                    { text: 'Configurations', link: '/configurations' },
                    { text: 'Contribute', link: '/contribute' },
                ],
            },

            logo: '/images/nav-logo.png',

            nav: {
                root: [
                    {
                        component: 'VersionSwitcher',
                    },
                    {
                        text: 'Docs',
                        link: '/get-started',
                    },
                    {
                        text: 'Release Notes',
                        link: 'https://codeberg.org/short-number/short-number/src/branch/master/CHANGELOG.md',
                    },
                ],
            },

            search: {
                provider: 'local',
            },

            socialLinks: [
                {
                    icon: 'packagist',
                    ariaLabel: 'Packagist',
                    link: 'https://packagist.org/packages/serhii/short-number',
                },
                {
                    icon: 'codeberg',
                    ariaLabel: 'Codeberg',
                    link: 'https://codeberg.org/short-number/short-number',
                },
            ],
        },
    },
)
