import {
  KeyPairString,
  SizeVariants,
  UiComponentThemeConfigModel,
} from '@unicodernsui/core'

export interface UiButtonThemeConfigModel extends UiComponentThemeConfigModel {
  cssClass: {
    main: string
    active: string
    outline: string
    variants: KeyPairString
    outlineVariants: KeyPairString
    sizes: {
      [SizeVariants.Large]: string
      [SizeVariants.Medium]: string
      [SizeVariants.Small]: string
    }
  }
}
