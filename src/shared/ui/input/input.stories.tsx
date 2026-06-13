import type { Meta, StoryObj } from '@storybook/tanstack-react'
import { Input } from '.'

const meta = {
  title: 'Shared/Input',
  component: Input,
  args: {
    placeholder: 'Название проекта*',
  },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="flex w-105 flex-col gap-5">
      <Input placeholder="Название проекта*" />
      <Input placeholder="Название проекта*" value="Название проекта" />
      <Input
        placeholder="Название проекта*"
        className="border-palette-input-border"
      />
      <Input
        placeholder="Название проекта*"
        className="border-palette-purple-600"
      />
      <Input placeholder="Название проекта*" defaultValue="Название" />
      <Input placeholder="Название проекта*" defaultValue="Название" disabled />
      <div className="flex flex-col gap-2.5">
        <Input
          placeholder="Название проекта*"
          defaultValue="Название"
          aria-invalid
        />
        <p className="text-[13px] leading-none text-palette-red-error">
          Неверно написан
        </p>
      </div>
    </div>
  ),
}
