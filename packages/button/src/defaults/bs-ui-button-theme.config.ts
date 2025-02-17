import {
  BootstrapVariants,
  SizeVariants,
  cssClassPrefix,
  enumToObjectByValue,
} from '@unicodernsui/core'
import { UiButtonThemeConfigModel } from '../'

const baseClass = 'btn'
const classPrefix = cssClassPrefix(baseClass)
const getPrefixedClass = (value: string) => `${classPrefix}${value}`
const variantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(variantClasses).forEach(
  value => (variantClasses[value] = getPrefixedClass(value))
)
const getOtlinePrefixedClass = (value: string) =>
  `${classPrefix}outline-${value}`
const outlineVariantClasses = enumToObjectByValue(BootstrapVariants)
Object.keys(outlineVariantClasses).forEach(
  value => (outlineVariantClasses[value] = getOtlinePrefixedClass(value))
)

export const bsUiButtonThemeConfigDefaults: UiButtonThemeConfigModel = {
  cssClass: {
    main: baseClass,
    active: 'active',
    outline: '',
    variants: {
      ...variantClasses,
    },
    outlineVariants: {
      ...outlineVariantClasses,
    },
    sizes: {
      [SizeVariants.Large]: getPrefixedClass(SizeVariants.Large),
      [SizeVariants.Medium]: getPrefixedClass(SizeVariants.Medium),
      [SizeVariants.Small]: getPrefixedClass(SizeVariants.Small),
    },
  },
}
