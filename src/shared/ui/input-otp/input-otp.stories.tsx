import type { Meta, StoryObj } from '@storybook/tanstack-react'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '.'

const meta = {
  title: 'Shared/Input OTP',
  component: InputOTP,
} satisfies Meta<typeof InputOTP>

export default meta

type Story = StoryObj<typeof meta>

function OtpExample({
  className,
  disabled,
  invalid,
  value,
}: {
  className?: string
  disabled?: boolean
  invalid?: boolean
  value?: string
}) {
  return (
    <InputOTP maxLength={6} value={value} disabled={disabled}>
      <InputOTPGroup className={className}>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} aria-invalid={invalid} />
        <InputOTPSlot index={2} aria-invalid={invalid} />
        <InputOTPSlot index={3} aria-invalid={invalid} />
      </InputOTPGroup>
    </InputOTP>
  )
}

export const Playground: Story = {
  render: () => <OtpExample />,
}

export const States: Story = {
  render: () => (
    <div className="flex w-105 flex-col gap-5">
      <OtpExample />
      <OtpExample className="border-palette-input-border" />
      <OtpExample className="border-palette-purple-600" />
      <OtpExample value="1000" />
      <OtpExample value="1000" disabled />
      <div className="flex flex-col gap-2.5">
        <OtpExample value="1000" invalid />
        <p className="text-[13px] leading-none text-palette-red-error">
          Неверно написан
        </p>
      </div>
    </div>
  ),
}
