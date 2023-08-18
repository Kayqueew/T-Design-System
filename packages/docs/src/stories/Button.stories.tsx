import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@kayque-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary', // por padrão eles já vão ficar marcado
    size: 'md',
    disabled: false,
  },
  argTypes: {
    // o button tem uma propriedade chamada variant criado no stitches e essas são as opções que o usuario pode escolher dentro do storybook
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio', // forma de controle que o usuario tem pra trocar
      },
    },

    // mesma coisa de cima, com agora é com tamanho
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio', // forma de controle que o usuario tem pra trocar
      },
    },

    // dentro do button tem uma propriedade de disabled, entao tem como fazer a mesma coisa de cima
    disabled: {
      control: {
        type: 'boolean',
      },
    },

    // onclick vem da teg button atraves do ButtonProps ou do component: Button  // tem como fazer isso com todas as ações di usuario
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
