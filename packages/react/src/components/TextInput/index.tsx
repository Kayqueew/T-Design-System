import { ComponentProps } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// são propriedade do input, esta sendo passado pra ele, ...props pega tudo e passa
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string // vai falar que ele pode receber um prefixo
}

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      {/* se houver um prefixo vai pontrar prefix "!!" = server pra tranformar em booleano e pra nao mostrar em tela */}

      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
