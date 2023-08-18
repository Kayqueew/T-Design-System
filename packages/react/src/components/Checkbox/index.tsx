import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    // ele que recebe as proprieade
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        {/* esse asChild é pra ele nao criar uma div e poder usar só a funcionalidade dele, assim ele nao vai ser criado em tela só vai repassar essa funcionalidade para o filho dele */}
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
