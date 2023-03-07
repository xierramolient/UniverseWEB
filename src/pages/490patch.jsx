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
			        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Patch 4.90</h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>								  
      <p className="text-xl mt-1">
                        Play Online with Old Version of HFW, This Method is 100% Safe<i className="" />
                    </p>

					<h1 className="text-4xl font-bold"><span className="relative whitespace-nowrap text-primary"></span> </h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	  <p className="text-xl mt-1">
                       + Download Patch<i className="" />
                    </p>
																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	                        <div>
                                <a
                                    href="https://www.mediafire.com/file/ucn84i2zdbxtyxn/ps3-updatelist.txt/file?dkey=5g0naotkblb&r=1981" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://www.mediafire.com/file/ucn84i2zdbxtyxn/ps3-updatelist.txt/file?dkey=5g0naotkblb&r=1981" className="fas fa-project-diagram" />
                                <a href="https://www.mediafire.com/file/ucn84i2zdbxtyxn/ps3-updatelist.txt/file?dkey=5g0naotkblb&r=1981" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download</a>
                                </a>
                            </div>
																												  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
								  	  <p className="text-xl mt-1">
                       + How to Install :<i className="" />
                    </p>
													  	  <p className="text-xl mt-1">
                       1.Download the Patch files<i className="" />
                    </p>
													  	  <p className="text-xl mt-1">
                       2.Copy the Patch file into FAT32 Storage Devices (Flashdisk or HDD)<i className="" />
                    </p>
																		  	  <p className="text-xl mt-1">
                       3.Open your MMCM or File Manager on PS3<i className="" />
                    </p>
																							  	  <p className="text-xl mt-1">
                       4.Open the FAT32 Storage Devices <i className="" />
                    </p>
																												  	  <p className="text-xl mt-1">
                       5.Copy the ps3-updatelist.txt<i className="" />
                    </p>
																																	  	  <p className="text-xl mt-1">
                       6.Paste the ps3-updatelist into /dev_hdd0 <i className="" />
                    </p>
																																	  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
								  	  <p className="text-xl mt-1">
                       + How to Install (Video Tutorial) :<i className="" />
                    </p>
																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	                        <div>
                                <a
                                    href="/henpatch" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/henpatch" className="fas fa-project-diagram" />
                                <a href="/henpatch" className="text-zinc-400 hover:text-primary hover:dark:text-white">Watch Video</a>
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
                                    href="https://www.xierraps.xyz" className=" gap- px-7 items-center h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i className="" />
                                <a href="https://www.xierraps.xyz" className="font-display text-1x1 hover:text-primary hover:dark:text-white">BACK</a>
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
