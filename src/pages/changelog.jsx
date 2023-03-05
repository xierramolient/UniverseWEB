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
			        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Changes :</h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
                                                                                                        ? 
      </p>
	                     <h1 className="text-4xl font-bold">Update<span className="relative whitespace-nowrap text-primary"> 3.5</span></h1>
                    <p className="text-xl mt-1">
				    [i] Updating Game Version 3.4 to 3.5 (Installed)
				
                    </p>
					                    <p className="text-xl mt-1">
				    [i] Updating Server Version 2.0 to 2.1 (Installed)
				
                    </p>
					                    <p className="text-xl mt-1">
				    [i] Updating DockerGS 3.4 to 3.5 (Waiting Releases)
				
                    </p>
					                    <p className="text-xl mt-1">
				    [i] Updating GC RES Version 3.4 to 3.5 (Waiting DockerGS to Release)
				
                    </p>

									   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
                                                                                                        ? 
      </p>
                   <h1 className="text-4xl font-bold">Update<span className="relative whitespace-nowrap text-primary"> 3.4</span> (Ended)</h1>
                    <p className="text-xl mt-1">
					[i] Removed the DockerGS Watermark
                    </p>
					                    <p className="text-xl mt-1">
					[i] Added 1 New Servers (Server 2)
                    </p>
										                    <p className="text-xl mt-1">
					[i] Changed UID Watermark to "XierraPS | UID : XXXXXX"
										                    <p className="text-xl mt-1">
					[i] Game Version Updated to Version 3.4
                    </p>
										                    <p className="text-xl mt-1">
					[i] Server Version Updated to Version 2.0
                    </p>
										                    <p className="text-xl mt-1">
					[i] GC Resources Updated to RES 3.4
                    </p>
										                    <p className="text-xl mt-1">
					[i] DockerGS Updated to 3.4
                    </p>
										                    <p className="text-xl mt-1">
					[i] Added new Server Domain : xierraps.ddns.net:6411
                    </p>
                    </p>
<p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/genshinps" className=" gap- px-7 items-center h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i className="" />
                                <a href="/genshinps" className="font-display text-1x1 hover:text-primary hover:dark:text-white">BACK</a>
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
