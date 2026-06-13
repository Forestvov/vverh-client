import * as React from 'react'

import { cn } from '@/shared/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'h-45 w-full resize-none rounded-md border-2 border-palette-surface-150 bg-transparent px-[30px] py-button-icon-md text-base leading-normal font-normal text-palette-body placeholder:text-palette-text-muted transition-colors outline-none hover:border-palette-input-border focus-visible:border-palette-purple-600 disabled:cursor-not-allowed disabled:border-palette-surface-150 disabled:text-palette-body disabled:placeholder:text-palette-body disabled:opacity-40 aria-invalid:border-palette-red-error! aria-invalid:text-palette-body not-placeholder-shown:border-palette-surface-150',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
