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
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium sm:text-7xl text-black dark:text-white text-center">Welcome to <span className="relative whitespace-nowrap text-primary"><svg aria-hidden="true" viewBox="0 0 418 42" className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20" preserveAspectRatio="none"><path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" /></svg><span className="relative">{clquConfig.name}</span></span>.</h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
<h1 className="mx-auto max-w-4xl font-bold text-1xl text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white text-center">a Project to make Modifications to a Software so that the Software is easier to use. This Project is an "illegal" project because it hijacks a Software to be Modified.</h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">XierraPlay</h1>
						   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
		<h1 className="mx-auto max-w-4xl font-display text-1xl font-medium sm:text-1xl text-black dark:text-white text-center">Access to all features with XierraPlay and get paid features for free.</h1>
								   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
		
<a href="/login" className="text-zinc-400 hover:text-primary hover:dark:text-white">LOGIN</a>
	    </div>
	  						   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
    </div>

  </>
}
