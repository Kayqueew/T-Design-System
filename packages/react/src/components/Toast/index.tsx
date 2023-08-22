import * as Toasts from '@radix-ui/react-toast'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'

export interface ToastProps extends ComponentProps<typeof Toasts.Root> {
  title: string
  description?: string
}

export function Toast({ title, description, ...proos }: ToastProps) {
  return (
    <Toasts.Provider swipeDirection="right">
      <ToastRoot {...proos}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}
        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>

      <ToastViewport />
    </Toasts.Provider>
  )
}

Toast.displayName = 'Toast'
