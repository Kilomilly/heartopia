import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://theheartopia.com'
    const locales = ['en', 'th', 'pt', 'es', 'id']

    const staticPages = [
        '',
        '/fishing',
        '/guides/fishing',
        '/guides/fish-locations',
        '/guides/fish',
        '/guides/fish/swordfish',
        '/guides/housing',
        '/guides/recipes/frosted-pancake',
        '/guides/recipes/iced-drink',
        '/guides/heartopia-recipes-cooking-guide',
        '/guides/recipes',
        '/recipes/mushroom-pie',
        '/piano',
        '/where-is-doris',
        '/npcs',
        '/platforms',
        '/platforms/pc',
        '/platforms/play-store',
        '/platforms/switch',
        '/release-date',
        '/events',
        '/meteor-shower',
        '/onsen-egg',
        '/events/meteor-shower',
        '/events/onsen-egg',
        '/events/onsen-egg-all-locations',
        '/events/heartopia-aurora-weather-banquet-guide',
        '/events/heartopia-snow-concert-guide',
        '/events/fairy-banner',
        '/events/pleasant-goat-and-big-big-wolf',
        '/guides/aurora-weather-banquet',
        '/guides/heartopia-frostspore-butterflies',
        '/guides/watering-can',
        '/about',
        '/privacy-policy',
        '/terms-of-service',
        '/guides/winter-birds-location-map',
        '/guides/heartopia-redeem-codes',
        '/guides/painting-tools',
        '/guides/bug-catching',
        '/guides/dog-breeds',
        '/guides/home-evaluation',
        '/guides/roaming-oak',
        '/guides/animal-trough',
        '/guides/exhibition-pass',
        '/guides/heartopia-bread-with-no-flour',
        '/guides/heartopia-penguin-favorite-food',
        '/guides/heartopia-penguin-trough',
        '/guides/heartopia-kapil-guide',
        '/guides/heartopia-mbti-personality-guide',
        '/guides/winter-snow-memories',
        '/guides/rainbow-fish'
    ]

    const entries: MetadataRoute.Sitemap = []
    const highPriorityPages = [
        '/events/meteor-shower',
        '/meteor-shower',
        '/onsen-egg',
        '/fishing',
        '/piano',
        '/events/onsen-egg',
        '/events/onsen-egg-all-locations',
        '/events/heartopia-aurora-weather-banquet-guide',
        '/guides/aurora-weather-banquet',
        '/guides/recipes/frosted-pancake',
        '/guides/recipes/iced-drink',
        '/guides/heartopia-recipes-cooking-guide',
        '/events/heartopia-snow-concert-guide',
        '/events/fairy-banner',
        '/events/pleasant-goat-and-big-big-wolf',
        '/guides/recipes',
        '/guides/heartopia-frostspore-butterflies',
        '/guides/watering-can',
        '/guides/winter-birds-location-map',
        '/guides/heartopia-redeem-codes',
        '/guides/painting-tools',
        '/guides/bug-catching',
        '/guides/dog-breeds',
        '/guides/home-evaluation',
        '/guides/roaming-oak',
        '/guides/animal-trough',
        '/guides/exhibition-pass',
        '/guides/heartopia-bread-with-no-flour',
        '/guides/heartopia-penguin-favorite-food',
        '/guides/heartopia-penguin-trough',
        '/guides/heartopia-kapil-guide',
        '/guides/heartopia-mbti-personality-guide',
        '/guides/winter-snow-memories',
        '/guides/rainbow-fish',
        '/guides/fish/swordfish'
    ]

    // Add localized pages
    for (const locale of locales) {
        for (const page of staticPages) {
            const isEnglish = locale === 'en'
            const isHomePage = page === ''
            const path = isHomePage ? '' : page

            // Dynamic priority logic
            let priority = 0.8
            if (isHomePage) {
                priority = isEnglish ? 1.0 : 0.9
            } else if (isEnglish && highPriorityPages.includes(page)) {
                priority = 0.9
            }

            entries.push({
                url: `${baseUrl}/${locale}${path}`,
                lastModified: new Date(),
                changeFrequency: (isHomePage || page === '/events/onsen-egg-all-locations' || page === '/guides/heartopia-redeem-codes') ? 'daily' : 'weekly',
                priority: priority,
            })
        }
    }

    return entries
}



