import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from 'phosphor-react'

// isse props vai ser passada a imagem pelo storybook
export type AvatarProps = ComponentProps<typeof AvatarImage> // isso é pra a image receber todas as propriedade de um img pq ele precisa

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        {/* ele vai esperar a 600 PELO MENOS 600 milesegundos pra aparecer  */}
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
