import { action } from '@storybook/addon-actions'
import { BootstrapVariants, ButtonSizeVariants } from '@unicodernsui/core'
import { UiButton, UiButtonModel } from '../'

export default {
  title: 'UI/Bootstrap/Button',
  component: UiButton,
  argTypes: {
    label: { control: { type: 'text' } },
    size: {
      control: { type: 'select' },
      options: Object.values(ButtonSizeVariants),
    },
    variant: {
      control: { type: 'select' },
      options: Object.values(BootstrapVariants),
    },
    toggle: { control: { type: 'boolean' } },
  },
}

type StoryModel =
  | UiButtonModel
  | {
      label: string
    }

const Template = (args: StoryModel) => ({
  components: { UiButton },
  setup() {
    return { args }
  },
  methods: {
    toggle: action('toggle'),
  },
  template: `
    <ui-button :="args" @toggle="toggle" >{{ args.label }}</ui-button>
  `,
})

const baseArgs: StoryModel = {
  label: 'Label',
  variant: BootstrapVariants.Primary,
  size: ButtonSizeVariants.Small,
  anchor: false,
  outline: false,
  active: false,
  toggle: false,
}

export const Primary = Template.bind({})
Primary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Primary,
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...baseArgs,
  variant: BootstrapVariants.Secondary,
}

export const Success = Template.bind({})
Success.args = {
  ...baseArgs,
  variant: BootstrapVariants.Success,
}

export const Danger = Template.bind({})
Danger.args = {
  ...baseArgs,
  variant: BootstrapVariants.Danger,
}

export const Warning = Template.bind({})
Warning.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
}

export const Info = Template.bind({})
Info.args = {
  ...baseArgs,
  variant: BootstrapVariants.Info,
}

export const Light = Template.bind({})
Light.args = {
  ...baseArgs,
  variant: BootstrapVariants.Light,
}

export const Dark = Template.bind({})
Dark.args = {
  ...baseArgs,
  variant: BootstrapVariants.Dark,
}

export const Medium = Template.bind({})
Medium.args = {
  ...baseArgs,
  size: ButtonSizeVariants.Medium,
}

export const Large = Template.bind({})
Large.args = {
  ...baseArgs,
  size: ButtonSizeVariants.Large,
}

export const Active = Template.bind({})
Active.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  active: true,
}

export const Toggle = Template.bind({})
Toggle.args = {
  ...baseArgs,
  variant: BootstrapVariants.Warning,
  toggle: true,
}

export const Anchor = Template.bind({})
Anchor.args = {
  ...baseArgs,
  anchor: true,
}
