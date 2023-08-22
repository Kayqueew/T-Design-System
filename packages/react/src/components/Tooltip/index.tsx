import * as Tooltips from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'
import { ComponentProps, ReactNode } from 'react'

export interface TooltipProps extends ComponentProps<typeof Tooltips.Root> {
  content: string | ReactNode
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
  return (
    <Tooltips.Provider delayDuration={0}>
      <Tooltips.Root {...props}>
        <Tooltips.Trigger asChild>{children}</Tooltips.Trigger>
        <Tooltips.Portal>
          <TooltipContent>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </Tooltips.Portal>
      </Tooltips.Root>
    </Tooltips.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
