import IconFacebook from '@/icons/facebook.svg'
import IconInstagram from '@/icons/instagram.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'

export default function Socials({ className, items }) {
  
  return(
    <div className={`flex space-x-3 ${className ? className : '' }`}>
      { items?.map((e, i) => {
        return (
          <a aria-label="Navigate to our Facebook" href={e.url} rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms]" key={i}>
            {((e.name == 'Facebook' || e.name == 'facebook') &&
                <IconFacebook className="w-[25%] relative z-[1]" />)
            || ((e.name == 'Instagram' || e.name == 'instagram') &&
                <IconInstagram className="w-[50%] relative z-[1]" />)
            || ((e.name == 'LinkedIn' || e.name == 'Linkedin' || e.name == 'linkedin') &&
                <IconLinkedin className="w-[50%] relative z-[1]" />)
            || ((e.name == 'Twitter' || e.name == 'twitter') &&
                <IconTwitter className="w-[75%] relative z-[1]" />)
            ||
                <></>
            }
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
              <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
            </div>
          </a>    
        )
      })}
      {/* <a aria-label="Navigate to our Facebook" href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms]">
        <IconFacebook className="w-[25%] relative z-[1]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
          <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
        </div>
      </a>
      <a aria-label="Navigate to our Instagram" href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms]">
        <IconInstagram className="w-[50%] relative z-[1]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
          <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
        </div>
      </a>
      <a aria-label="Navigate to our LinkedIn" href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms]">
        <IconLinkedin className="w-[50%] relative z-[1]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
          <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
        </div>
      </a>
      <a aria-label="Navigate to our Twitter" href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white relative overflow-hidden group hover:scale-[1.15] transition-transform ease-out duration-[450ms]">
        <IconTwitter className="w-[50%] relative z-[1]" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[0] opacity-0 group-hover:opacity-100 group-hover:delay-[0ms] delay-[450ms] transition-opacity ease-out duration-[100ms]">
          <div className={`w-[5px] h-[5px] rounded-full transition-all ease-out duration-[450ms] group-hover:duration-[600ms] group-hover:scale-[15] origin-center bg-[#EBEA33]`}></div>
        </div>
      </a> */}
    </div>
  )
}