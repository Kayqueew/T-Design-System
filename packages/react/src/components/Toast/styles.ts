import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

export const ToastRoot = styled(Toast.Root, {
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  fontFamily: '$default',
  position: 'relative',

  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontWeight: '$bold',
  fontSize: '$xl',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: 'sm',
  color: '$gray200',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  position: 'absolute',
  top: '$4',
  right: '$4',
  fontSize: 'xl',
  background: 'none',
  border: 'none',
  color: '$gray200',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 9999999,
  outline: 'none',
})
