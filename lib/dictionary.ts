import "server-only"

const dictionaries = {
    en: () => import("../messages/en.json").then((module) => module.default),
    th: () => import("../messages/th.json").then((module) => module.default),
    pt: () => import("../messages/pt.json").then((module) => module.default),
    es: () => import("../messages/es.json").then((module) => module.default),
    id: () => import("../messages/id.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
    const l = (locale === 'th' || locale === 'pt' || locale === 'es' || locale === 'id') ? locale : 'en'
    return dictionaries[l as keyof typeof dictionaries]()
}
