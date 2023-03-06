import { usePage } from 'context/page'
import useSWR from 'hooks/useSWR'
import Head from 'next/head'
import Image from 'next/image'
import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import clquConfig from '../../clqu.config'
import Button from 'components/Global/Button'
import Carousel from "react-multi-carousel";

export default function Projects() {
    const { page } = usePage();

    const { data: $projects } = useSWR('/api/projects');
    const projects = $projects?.data;

    return <>
        <div className="max-w-7xl mx-auto">
            <div className="py-24">
			        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">HFW Releases</h1>

																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

						                        <div>
                                <a
                                    href="https://download2284.mediafire.com/oneerlxx6djgny2w58P8TUHeouLuVp03USWKhqD58ghRWs-1ZMA_qdZO2xJekMV7KDRHc8662EpQOO2y7UdDew_MEM6Yhg/f33efmg88el1jwh/HFW_4.89.1_littlebalup.zip" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://download2284.mediafire.com/oneerlxx6djgny2w58P8TUHeouLuVp03USWKhqD58ghRWs-1ZMA_qdZO2xJekMV7KDRHc8662EpQOO2y7UdDew_MEM6Yhg/f33efmg88el1jwh/HFW_4.89.1_littlebalup.zip" className="fas fa-project-diagram" />
                                <a href="https://download2284.mediafire.com/oneerlxx6djgny2w58P8TUHeouLuVp03USWKhqD58ghRWs-1ZMA_qdZO2xJekMV7KDRHc8662EpQOO2y7UdDew_MEM6Yhg/f33efmg88el1jwh/HFW_4.89.1_littlebalup.zip" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download HFW 4.89</a>
                                </a>
                            </div>
								  																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  						                        <div>
                                <a
                                    href="https://download2389.mediafire.com/p9vl8afuu6cgkG1M6_P3ZV-uKkYyuylGDAz1aWS7wNG-upt2qJbCeTf2rzTy21B9b7cyGa9TccF565OIjWJKar4bh4ERfQ/i4nprhnjj6usu4p/HFW+4.88.rar" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://download2389.mediafire.com/p9vl8afuu6cgkG1M6_P3ZV-uKkYyuylGDAz1aWS7wNG-upt2qJbCeTf2rzTy21B9b7cyGa9TccF565OIjWJKar4bh4ERfQ/i4nprhnjj6usu4p/HFW+4.88.rar" className="fas fa-project-diagram" />
                                <a href="https://download2389.mediafire.com/p9vl8afuu6cgkG1M6_P3ZV-uKkYyuylGDAz1aWS7wNG-upt2qJbCeTf2rzTy21B9b7cyGa9TccF565OIjWJKar4bh4ERfQ/i4nprhnjj6usu4p/HFW+4.88.rar" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download HFW 4.88</a>
                                </a>
                            </div>
								  																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  						                        <div>
                                <a
                                    href="https://download2391.mediafire.com/a6ca03edinvgWiM5KLfVOSKR0a9y3dd04isxR7uIAxcFb6Nb4sVmA2c4m34uBPrN7HIbK57-8cCvmPbFE-vEU_4NzyLA2w/9bjr1umhf9rzi2e/HFW+4.87.1.rar" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://download2391.mediafire.com/a6ca03edinvgWiM5KLfVOSKR0a9y3dd04isxR7uIAxcFb6Nb4sVmA2c4m34uBPrN7HIbK57-8cCvmPbFE-vEU_4NzyLA2w/9bjr1umhf9rzi2e/HFW+4.87.1.rar" className="fas fa-project-diagram" />
                                <a href="https://download2391.mediafire.com/a6ca03edinvgWiM5KLfVOSKR0a9y3dd04isxR7uIAxcFb6Nb4sVmA2c4m34uBPrN7HIbK57-8cCvmPbFE-vEU_4NzyLA2w/9bjr1umhf9rzi2e/HFW+4.87.1.rar" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download HFW 4.87</a>
                                </a>
                            </div>
								  																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  						                        <div>
                                <a
                                    href="https://download2280.mediafire.com/r4co573is4qgiL88_596KDBHYNMrhFfBA5HjE_Q55b5FSOo4yZ5jnc1caa5KhCte1U9t0d0h16KOxr9bJ7wWjU25hDrOGg/tbl470h6ldl8pn7/HFW_4.86.1_2020.rar" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://download2280.mediafire.com/r4co573is4qgiL88_596KDBHYNMrhFfBA5HjE_Q55b5FSOo4yZ5jnc1caa5KhCte1U9t0d0h16KOxr9bJ7wWjU25hDrOGg/tbl470h6ldl8pn7/HFW_4.86.1_2020.rar" className="fas fa-project-diagram" />
                                <a href="https://download2280.mediafire.com/r4co573is4qgiL88_596KDBHYNMrhFfBA5HjE_Q55b5FSOo4yZ5jnc1caa5KhCte1U9t0d0h16KOxr9bJ7wWjU25hDrOGg/tbl470h6ldl8pn7/HFW_4.86.1_2020.rar" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download HFW 4.86</a>
                                </a>
                            </div>
								  																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

																			  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
																  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  																  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  																  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/mainprojects" className=" gap- px-7 items-center h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i className="" />
                                <a href="/mainprojects" className="font-display text-1x1 hover:text-primary hover:dark:text-white">BACK</a>
                                </a>
                            </div>

	
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-16">
                    {projects?.map((project, index) => (
                        <a key={index} href={project.domain} target="_blank" rel="noreferrer" className="cursor-pointer w-full bg-gray-500/5 p-4 rounded-lg transition-all duration-200 hover:bg-gray-500/10">
                            <div className="h-36 w-full relative rounded-lg shadow-xl overflow-hidden">
                                <img src={project.banner} className="absolute w-full h-full object-cover " />
                            </div>
                            <div className="mt-4">
                                <p className="text-xl font-semibold">{project.name}</p>
                                <p className="text-sm max-h-24 h-24 overflow-auto font-normal text-gray-500">{project.overview}</p>
                            </div>

                            <p className="text-xs italic mt-6"><i className="fal fa-globe mr-1" />{project.domain}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>

    </>
}
