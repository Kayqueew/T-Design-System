import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@kayque-ignite-ui/react'

export default {
  title: 'Typegraphy/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: 'Custom title',
    size: 'md',
  },
  argTypes: {
    children: {
      size: {
        options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
        control: {
          type: 'inline-radio',
        },
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1', // com esse as tem como trocar a tag do stitches ex: era <p /> e agora é <strong />
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
