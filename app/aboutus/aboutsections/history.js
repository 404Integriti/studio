
import Historycom from "../../components/about/historycom";
export default function History() {
  return (
    <section className='history w-[100%] max-w-[100%] '>
      <Historycom 
        graphimg="/graph.svg"
        imgwidth={1440}
        imageheight={699}
        graphmobileimg="/mobilevision.svg"
        graphmobileimgwidth={300}
        graphmobileimgheight={800}
        heading={
            <>
              <span className="hero-orange">Our</span> History
            </>
        }
        headingclass="raleway text-[36px] font-[600] leading-[44px] mb-[10px] text-left block"
        text={
            <>
              In a world saturated with noise, true connection is rare. That{"'"}s where Integriti Studio steps in. <br />
              Since our humble beginnings, we have developed by building genuine connections and producing major outcomes.
            </>
        }
        textclass="text-[16px] sans leading-[20px] text-[#333] "
      />
    </section>
  )
}
