declare module 'react-scroll' {
  import * as React from 'react'

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string
    smooth?: boolean | string
    duration?: number
    offset?: number
    delay?: number
    spy?: boolean
    hashSpy?: boolean
    isDynamic?: boolean
    ignoreCancelEvents?: boolean
    containerId?: string
    activeClass?: string
    onSetActive?: (to: string) => void
    onSetInactive?: (to: string) => void
  }

  export const Link: React.ComponentType<LinkProps>
}
