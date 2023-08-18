import { Label, MuiltStepContainer, Step, Steps } from './styles'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MultiStepProps {
  size: number // quantos step tem no total
  currentStep?: number // passo atual do step
}

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MuiltStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>
      {/* ta passando o valor de size como variavem para o css dentro do styles */}
      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} /> // esse active é uma variantes do styles vai verificar se for true // nesse active vai verificar se o passo atual é maior que o Step na posisão ele ta, se for treu vai trocar a cor do background
        })}
      </Steps>
    </MuiltStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'

/* 
  explicando o array:   ex: size = 4
  {Array.from({ length: size }, (_, i) => i + 1) isso aqui ta criando um novo array e passando o map pra geral a quantidade do size, 
  entao dependendo de quando tem o size vai ser o tamnho do array

  { length: size } size = 4

  (_, i) = "_" significa o conteudo do array, mas como eu criei o array zerado ele nao vai ter nada dentro
         = i significa o index do array, ele sempre existe 0, 1, 2...

  ele ta criando basicamente isso aqui do zero: 
  [1, 2, 3, 4]
*/
