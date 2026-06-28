import clsx from 'clsx'
import './Button.scss'

export default ({ className, size, mode, type = 'button', href, children }) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx(
        `button`,
        size && `button--${size}`,
        mode && `button--${mode}`,
        className
      )}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
