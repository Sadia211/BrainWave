import React from 'react'
import Section from './Section'
import { socials } from '../constants'
import { data } from 'autoprefixer'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
         <div className='container flex sm:justify-between justify-cenetr items-center gap-10 max-sm:flex-col'>
    <p className='caption text-n-4 lg:block'>
    © {new Date().getFullYear()}.All rights rexerved.
        </p>  
        <ul className='flex gap-5 flex-wrap-reverse'>
            {
                socials.map((item)=>(
                    <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className='flex items-center justify-center w-10 h-10 bg-n-7 rounded-full trasition-colrs hover:bg-n-6'>
<img src={item.iconUrl} width={16} height={16} alt={item.title}/>
                    </a>
                ))
            }

        </ul>
      </div>
    </Section>
   
  )
}

export default Footer
