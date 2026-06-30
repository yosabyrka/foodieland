import clsx from 'clsx'
import './Section.scss'

export default ({
  className,
  title,
  titleId,
  titleMode,
  description,
  children,
}) => {
  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header
        className={clsx('section__header', `section__header--${titleMode}`)}
      >
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
