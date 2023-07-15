import Link from 'next/link'

export default function FancyLink( {destination, a11yText, label, className} ) {
  return (
    <Link href={destination} aria-label={a11yText} className={`a11y-focus ${className ? className : ''}`}>
      {label}
    </Link>
  )
}