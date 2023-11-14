import { browser } from '$app/environment'
import { init, register } from "svelte-i18n"

const _cDefaultLocale = 'ru'

register('en', () => import("./loc/en-US.json"))
register('en-US', () => import("./loc/en-US.json"))
register('en_US', () => import("./loc/en-US.json"))

register('ru', () => import("./loc/ru-RU.json"))
register('ru-RU', () => import("./loc/ru-RU.json"))
register('ru_RU', () => import("./loc/ru-RU.json"))

init({
    fallbackLocale: _cDefaultLocale,
    initialLocale: browser ? window.navigator.language : _cDefaultLocale,
})
