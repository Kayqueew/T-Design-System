import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@kayque-ignite-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],

  // args esta usando o size e o currentStep do index do MultiStep atravez do MultiStepProps assim passando o valor pra ele
  args: {
    size: 4,
    currentStep: 1,
  },

  decorators: [
    // o story é basicamente uma função que vai renderizar o input
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 3,
  },
}
