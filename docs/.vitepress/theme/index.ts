import type { Theme } from 'vitepress'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import VersionSwitcher from '@/components/VersionSwitcher.vue'
import OutdatedVersion from '@/components/OutdatedVersion.vue'
import '@/main.css'

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(OutdatedVersion),
            'home-hero-before': () => h(OutdatedVersion),
        })
    },
    enhanceApp({ app }) {
        app.component('VersionSwitcher', VersionSwitcher)
    },
} satisfies Theme
