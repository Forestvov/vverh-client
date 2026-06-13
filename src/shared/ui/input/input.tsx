import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'h-14 w-full min-w-0 rounded-md border-2 border-palette-surface-150 bg-transparent px-[30px] py-0 text-[15px] leading-none font-normal text-palette-black transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-palette-text-muted hover:border-palette-input-border focus-visible:border-palette-purple-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-palette-surface-150 disabled:text-palette-black disabled:placeholder:text-palette-black disabled:opacity-40 aria-invalid:border-palette-red-error! aria-invalid:text-palette-black not-placeholder-shown:border-palette-surface-150',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
