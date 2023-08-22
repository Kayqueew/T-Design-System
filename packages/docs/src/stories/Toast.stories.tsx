import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps, Button } from '@kayque-ignite-ui/react'
import { useRef, useState } from 'react'

const ToastDemo = (props: ToastProps) => {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false) // serve pra quando clicar mais de uma vez ele tirar o anterior da tela
          timerRef.current = window.setTimeout(() => {
            setOpen(true)
          }, 100)
        }}
      >
        Click me
      </Button>

      <Toast open={open} onOpenChange={setOpen} {...props} />
      {/*  isso é que vai aparecer na tela quando o button for clicado */}
    </div>
  )
}

export default {
  title: 'Information Tool/Toast',
  component: ToastDemo,
  tags: ['autodocs'],
  args: {
    title: 'Toast title example',
    description: 'Toast description example',
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
