import defineVersionedConfig from 'vitepress-versioning-plugin'

export default defineVersionedConfig(
    {
        lang: 'en-US',
        title: 'Short number',
        description:
            'Lightweight, multilingual library for formatting large numbers into compact, human-readable abbreviations using language-specific units, making it easy to display big numbers in a concise and user-friendly format',

        versioning: {
            latestVersion: '4.x',
        },

        lastUpdated: true,

        sitemap: {
            hostname: 'https://short-number.github.io',

            // exclude old version pages from sitemap
            transformItems: items => {
                return items.filter(item => !item.url.startsWith('3.x/'))
            },
        },

        themeConfig: {
            versionSwitcher: false,

            footer: {
                message:
                    'Released under the <a href="https://github.com/short-number/short-number/blob/master/LICENSE" target="_blank">MIT License</a>',
                copyright: `Copyright © 2019 - ${new Date().getFullYear()} <a href="https://serhii.io/about-me" target="_blank">Serhii Cho</a>`,
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

            nav: [
                {
                    component: 'VersionSwitcher',
                    props: {
                        versions: ['4.x', '3.x'],
                        latestVersion: '4.x',
                    },
                },
                {
                    text: 'Documentation',
                    link: '/4.x/',
                },
                {
                    text: 'Release Notes',
                    link: 'https://github.com/short-number/short-number/blob/master/CHANGELOG.md',
                },
            ],

            search: {
                provider: 'local',
            },

            socialLinks: [
                {
                    icon: 'github',
                    ariaLabel: 'GitHub',
                    link: 'https://github.com/short-number/short-number',
                },
            ],
        },
    },
    // @ts-ignore
    __dirname,
)
