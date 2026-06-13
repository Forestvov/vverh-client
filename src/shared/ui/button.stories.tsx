import type { Meta, StoryObj } from '@storybook/tanstack-react'
import { Button } from './button'
import { PlayIcon, YandexIcon } from './button-icons'

const meta = {
  title: 'Shared/Button',
  component: Button,
  args: {
    children: 'Зарегеститроваться',
    variant: 'primary',
    size: 'lg',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'gradientPrimary', 'gradientDanger'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>

export default meta

export const Playground = {}

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const Variants = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="gradientPrimary">Gradient Primary</Button>
      <Button variant="gradientDanger">Gradient Danger</Button>
    </div>
  ),
}

export const WithIcon = {
  render: () => (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        <Button variant="secondary" size="lg" icon={<YandexIcon />}>
          Войти через яндекс
        </Button>
        <Button variant="primary" size="lg" icon={<YandexIcon />}>
          Войти через яндекс
        </Button>
        <Button variant="secondary" size="lg" icon={<YandexIcon />} disabled>
          Войти через яндекс
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="secondary" size="lg" icon={<YandexIcon />}>
          Large
        </Button>
        <Button variant="secondary" size="md" icon={<YandexIcon />}>
          Medium
        </Button>
        <Button variant="secondary" size="sm" icon={<YandexIcon />}>
          Small
        </Button>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="gradientDanger" size="lg" icon={<PlayIcon />}>
          Оформить выплату
        </Button>
        <Button variant="gradientPrimary" size="lg" icon={<PlayIcon />}>
          Оформить выплату
        </Button>
      </div>
    </div>
  ),
}

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

export const Disabled = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary" disabled>
        Primary
      </Button>
      <Button variant="gradientPrimary" disabled>
        Gradient Primary
      </Button>
      <Button variant="gradientDanger" disabled>
        Gradient Danger
      </Button>
    </div>
  ),
}
