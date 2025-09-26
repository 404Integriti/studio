
import Link from "next/link"
export default function secheading({heading, classheading, paragraph, classparagraph, buttontext, buttonclass,buttonlink}) {
  return (
    <>
      <h2 className={classheading} style={{
        fontFamily: 'var(--font-raleway)'
      }}>{heading}</h2>
      <p className={classparagraph} style={{
        fontFamily: 'var(--font-raleway)'
      }}>{paragraph}</p>
      <Link href={`${buttonlink}`} className={buttonclass}>{buttontext}</Link>
    </>
  )
}
