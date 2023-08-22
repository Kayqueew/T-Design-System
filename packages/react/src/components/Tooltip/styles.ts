import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  background: '$gray900',
  padding: '$3 $4',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  color: '$gray100',
  borderRadius: '$sm',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
  paddingBottom: '$1',
})
