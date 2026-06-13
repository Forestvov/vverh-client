import * as React from 'react'
import { cva } from 'class-variance-authority'
import type { VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '#/shared/lib/utils'

const buttonVariants = cva(
  'group/button inline-flex cursor-pointer shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed border-none aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'bg-palette-surface-150 text-palette-ink hover:bg-palette-slate-950 hover:text-white active:bg-palette-slate-860 active:text-white disabled:bg-palette-surface-150 disabled:text-palette-ink disabled:opacity-40',
        primary:
          'bg-palette-slate-950 text-white hover:bg-palette-slate-760 active:bg-palette-slate-700 active:backdrop-blur-[2px] disabled:bg-palette-surface-disabled disabled:text-white/40 disabled:backdrop-blur-[2px]',
        gradientPrimary:
          'button-gradient-primary text-white active:backdrop-blur-[2px] disabled:backdrop-blur-[2px]',
        gradientDanger: 'button-gradient-danger text-white backdrop-blur-[2px]',
      },
      size: {
        lg: 'h-button-lg-height px-12 button-text-lg rounded-md **:data-[slot=button-icon]:size-button-icon-lg',
        md: 'h-button-md-height px-12 button-text-md rounded-md **:data-[slot=button-icon]:size-button-icon-md',
        sm: 'h-button-sm-height px-13 button-text-sm rounded-[18px] backdrop-blur-[2px] **:data-[slot=button-icon]:size-button-icon-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'lg',
    },
  },
)

function Button({
  children,
  className,
  icon,
  iconPosition = 'start',
  variant = 'default',
  size = 'lg',
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    icon?: React.ReactNode
    iconPosition?: 'start' | 'end'
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <span className="relative z-10 inline-flex items-center justify-center gap-2.5">
          {icon && iconPosition === 'start' ? (
            <span
              data-slot="button-icon"
              className="inline-flex shrink-0 items-center justify-center [&_svg]:size-full"
            >
              {icon}
            </span>
          ) : null}
          {children}
          {icon && iconPosition === 'end' ? (
            <span
              data-slot="button-icon"
              className="inline-flex shrink-0 items-center justify-center [&_svg]:size-full"
            >
              {icon}
            </span>
          ) : null}
        </span>
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
