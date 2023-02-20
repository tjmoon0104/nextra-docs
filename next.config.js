const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    latex: true
})

module.exports = withNextra(
    {
        i18n: {
            locales: ["en-US", "ko"],
            defaultLocale: "en-US",
        },
    },
)
