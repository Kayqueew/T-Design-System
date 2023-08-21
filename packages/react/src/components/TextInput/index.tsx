import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// são propriedade do input, esta sendo passado pra ele, ...props pega tudo e passa
export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string // vai falar que ele pode receber um prefixo
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        {/* se houver um prefixo vai mostrar prefix "!!" = server pra tranformar em booleano e pra nao mostrar em tela */}

        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'

/* 
  forwarRef é pra poder acessar a ref  //pesquisar mais sobre

  ref no react é a formar de acessar o elemento na dom, a referencia nativa do javascript, a ref é nos dar acesso de executar metudos 
  diretamente no imput, podendo fazer um ref.focus(), ref.addEventlist()


  vai precisar da ref pq é ela que utilizada na maioria das bibliotecas de formulario pra conseguir obter acesso ao valor do input
*/
