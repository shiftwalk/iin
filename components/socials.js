import IconFacebook from '@/icons/facebook.svg'
import IconInstagram from '@/icons/instagram.svg'
import IconLinkedin from '@/icons/linkedin.svg'
import IconTwitter from '@/icons/twitter.svg'

export default function Socials({ className }) {
  return(
    <div className={`flex space-x-3 ${className ? className : '' }`}>
      <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white hover:bg-[#EFF366] transition-colors ease-in-out duration-300">
        <IconFacebook className="w-[25%]" />
      </a>
      <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white hover:bg-[#EFF366] transition-colors ease-in-out duration-300">
        <IconInstagram className="w-[50%]" />
      </a>
      <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white hover:bg-[#EFF366] transition-colors ease-in-out duration-300">
        <IconLinkedin className="w-[50%]" />
      </a>
      <a href="https://example.com" rel="noopener noreferrer" target="_blank" className="a11y-focus w-12 h-12 flex flex-wrap items-center justify-center rounded-full bg-white hover:bg-[#EFF366] transition-colors ease-in-out duration-300">
        <IconTwitter className="w-[50%]" />
      </a>
    </div>
  )
}