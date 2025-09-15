import Link from "next/link"

export default function Powerfulshopify({
  heading, headingClass, text, textClass,
  linktextf, linktexts, linktextt, linktextfo, // 👈 match parent now
  listclass, buttontext, buttoncclass, buttonlink
}) {
  return (
    <div className='flex flex-col'>
      <h2 className={headingClass} style={{ fontFamily: 'raleway', }}>{heading}</h2>
      <p className={textClass} style={{ fontFamily: 'open sans', }}>{text}</p>
      <hr className="mt-[20px] mb-[10px]" />
      <ul className="powerset flex flex-wrap md:flex-row flex-col" style={{ fontFamily: 'open sans', }}>
        <li className={listclass}>{linktextf}</li>
        <li className={listclass}>{linktexts}</li>
        <li className={listclass}>{linktextt}</li>
        <li className={listclass}>{linktextfo}</li>
      </ul>
      <Link href={buttonlink} className={buttoncclass} style={{ fontFamily: 'raleway', }}>{buttontext}</Link>
    </div>
  )
}
