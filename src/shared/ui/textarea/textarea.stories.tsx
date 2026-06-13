import type { Meta, StoryObj } from '@storybook/tanstack-react'
import { Textarea } from '.'

const textareaValue =
  'Создание нового проекта позволяет добавить сайт в систему, указать регион продвижения и ключевые запросы. После сохранения проект начинает собирать данные и показывать позиции сайта.'

const meta = {
  title: 'Shared/Textarea',
  component: Textarea,
  args: {
    placeholder: 'Ваш комментарий',
  },
} satisfies Meta<typeof Textarea>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {}

export const States: Story = {
  render: () => (
    <div className="flex w-105 flex-col gap-5">
      <Textarea placeholder="Ваш комментарий" />
      <Textarea
        placeholder="Ваш комментарий"
        className="border-palette-input-border"
      />
      <Textarea
        placeholder="Ваш комментарий"
        className="border-palette-purple-600"
      />
      <Textarea placeholder="Ваш комментарий" defaultValue={textareaValue} />
      <Textarea
        placeholder="Ваш комментарий"
        defaultValue={textareaValue}
        disabled
      />
      <div className="flex flex-col gap-2.5">
        <Textarea
          placeholder="Ваш комментарий"
          defaultValue={textareaValue}
          aria-invalid
        />
        <p className="text-[13px] leading-none text-palette-red-error">
          Неверно написан
        </p>
      </div>
    </div>
  ),
}
