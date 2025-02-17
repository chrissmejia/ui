import { cssClassPrefix } from '@unicodernsui/core'
import { UiMenuThemeConfigModel } from '../'

const baseClass = 'dropdown-menu'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`

export const bsUiMenuThemeConfigDefaults: UiMenuThemeConfigModel = {
  cssClass: {
    main: baseClass,
    invert: getPrefixedClass('dark'),
    static: getPrefixedClass('static'),
    item: 'dropdown-item',
    itemActive: 'active',
    itemDisabled: 'disabled',
    header: 'dropdown-header',
    text: 'dropdown-item-text',
    divider: 'dropdown-divider',
  },
}
