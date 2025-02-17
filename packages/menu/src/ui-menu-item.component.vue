<template>
  <li @click="select">
    <a ref="item" v-if="isLink" :class="classes" v-bind="elementAttrs">
      <slot />
    </a>
    <button
      ref="item"
      v-else-if="isButton"
      :class="classes"
      type="button"
      v-bind="elementAttrs"
    >
      <slot />
    </button>
    <h6
      v-else-if="isHeader"
      :class="theme.cssClass.header"
      v-bind="elementAttrs"
    >
      <slot />
    </h6>
    <span v-else-if="isText" :class="theme.cssClass.text" v-bind="elementAttrs">
      <slot />
    </span>
    <hr v-else-if="isDivider" :class="theme.cssClass.divider" />
    <slot ref="item" v-else-if="isRaw" :class="classes" />
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, toRefs } from 'vue'
import {
  MenuItemType,
  MenuItemTypes,
  useReactiveThemeConfig,
} from '@unicodernsui/core'
import { UiMenuThemeConfigModel } from './models/ui-menu-theme-config.model'
import { bsUiMenuThemeConfigDefaults } from './defaults/bs-ui-menu-theme.config'

const TAG_NAME = 'uiMenu'

export default defineComponent({
  props: {
    type: {
      type: String as PropType<MenuItemType>,
      default: 'link',
    },
    active: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    elementAttrs: {
      type: Object,
      default: null,
    },
  },
  emits: ['select'],
  setup(props, { emit, attrs }) {
    const { type, active, disabled } = toRefs(props)
    const item = ref<HTMLElement | null>(null)

    const theme = useReactiveThemeConfig<UiMenuThemeConfigModel>(
      TAG_NAME,
      attrs,
      props,
      bsUiMenuThemeConfigDefaults
    )

    const classes = computed((): string[] => {
      return [
        theme.value.cssClass.item,
        active.value ? theme.value.cssClass.itemActive : '',
        disabled.value ? theme.value.cssClass.itemDisabled : '',
      ]
    })

    const isLink = computed(() => type.value === MenuItemTypes.Link)
    const isButton = computed(() => type.value === MenuItemTypes.Button)
    const isHeader = computed(() => type.value === MenuItemTypes.Header)
    const isText = computed(() => type.value === MenuItemTypes.Text)
    const isDivider = computed(() => type.value === MenuItemTypes.Divider)
    const isRaw = computed(() => type.value === MenuItemTypes.Raw)

    const select = (): void => {
      if (['link', 'button', 'raw'].indexOf(type.value) >= 0) {
        emit('select')
      }
    }
    const focus = (): void => item.value?.focus()
    return {
      classes,
      isLink,
      isButton,
      isHeader,
      isText,
      isDivider,
      isRaw,
      item,
      theme,
      select,
      focus,
    }
  },
})
</script>
