import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@kayque-ignite-ui/react'

export default {
  title: 'Typegraphy/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque alias voluptatum veniam architecto quis quidem assumenda perspiciatis labore ad repudiandae, similique modi, ex, illo tempora reprehenderit quod debitis nam?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong', // com esse as tem como trocar a tag do stitches ex: era <p /> e agora é <strong />
  },
}
