import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";


export default function Home() {

  const { page } = usePage();
  const { data: $skills } = useSWR('/api/skills');
  const skills = $skills?.data;

  const { data: $repositories } = useSWR('/api/repos');
  const repositories = $repositories?.data;

  return <>
    <div className="h-[40rem] flex flex-col justify-center items-center mb-72">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-4xl text-black dark:text-white text-center">The New</h1>


        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">XierraCFW 4.90</h1>
						   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
		<h1 className="mx-auto max-w-4xl font-display text-1xl font-medium sm:text-1xl text-black dark:text-white text-center">a Firmware for PlayStation 3 which has more features than the default original Firmware, with XierraCFW you can manage your PlayStation 3 system with open access</h1>
								   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
		
<a href="/xierracfw" className="text-zinc-400 hover:text-primary hover:dark:text-white">4.90</a>
	    </div>
									   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
		
<a href="/psmodsold" className="text-zinc-400 hover:text-primary hover:dark:text-white">4.89</a>
	    </div>
											   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
		
<a href="/psmods488" className="text-zinc-400 hover:text-primary hover:dark:text-white">4.88</a>
	    </div>
													   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
		
<a href="/psmods487" className="text-zinc-400 hover:text-primary hover:dark:text-white">4.87</a>
	    </div>
	  						   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  											   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="psmods" className=" gap- px-7 items-center h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i className="" />
                                <a href="psmods" className="font-display text-1x1 hover:text-primary hover:dark:text-white">BACK</a>
                                </a>
                            </div>
    </div>

  </>
}

