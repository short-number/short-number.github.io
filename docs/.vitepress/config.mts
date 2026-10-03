import type { HeadConfig, TransformContext } from 'vitepress'
import { defineVersionedConfig } from '@viteplus/versions'
import { versions, latestVersion, outdatedVersions } from './theme/versions'
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
        title: 'Short number',
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
                '/3.x/': [
                    { text: 'Get Started', link: '/3.x/' },
                    { text: 'Configurations', link: '/3.x/configurations' },
                    { text: 'Contribute', link: '/3.x/contribute' },
                ],
                '/4.x/': [
                    {
                        text: 'Guide',
                        items: [
                            { text: 'Get Started', link: '/4.x/' },
                            { text: 'Usage Guide', link: '/4.x/usage-guide' },
                            {
                                text: 'Configurations',
                                items: [
                                    {
                                        text: 'Output',
                                        link: '/4.x/configurations/output',
                                    },
                                    {
                                        text: 'Language',
                                        link: '/4.x/configurations/language',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        text: 'Information',
                        items: [
                            { text: 'Upgrade Guide', link: '/4.x/upgrade' },
                            {
                                text: 'What is Short Number?',
                                link: '/4.x/what-is-short-number',
                            },
                            { text: 'Contribute', link: '/4.x/contribute' },
                        ],
                    },
                ],
            },

            logo: '/images/nav-logo.png',

            nav: {
                root: [
                    {
                        component: 'VersionSwitcher',
                        props: { versions, latestVersion },
                    },
                    {
                        text: 'Documentation',
                        link: '/4.x/',
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
                    icon: 'codeberg',
                    ariaLabel: 'Codeberg',
                    link: 'https://codeberg.org/short-number/short-number',
                },
            ],
        },
    },
    // @ts-ignore
    __dirname,
)
