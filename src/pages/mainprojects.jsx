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
<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">PS3 Projects</h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
			        
	                     <h1 className="text-4xl font-bold">PlayStation 3 <span className="relative whitespace-nowrap text-primary">Xierra Firmware</span></h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                    <p className="text-xl mt-1">
					                <div className="relative flex-shrink-0">
                    <img src="https://universe.xierraps.xyz/ps3.png" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                </div>
								   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                        Some Software for Jailbreaking, Modificating, Debugging, Hijacking and Cheating a PlayStation Console, this Projects was only for PS3 (PS4 and PS5 will be posted soon...)<i className="" />
                    </p>
														  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  <p className="text-xl mt-1">
                       + XierraCFW Releases<i className="" />
                    </p>
																			  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/psmods" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/psmods" className="fas fa-project-diagram" />
                                <a href="/psmods" className="text-zinc-400 hover:text-primary hover:dark:text-white">PS3 XierraCFW 4.90 (Coming Soon)</a>
                                </a>
                            </div>
																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/psmodsold" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/psmodsold" className="fas fa-project-diagram" />
                                <a href="/psmodsold" className="text-zinc-400 hover:text-primary hover:dark:text-white">PS3 XierraCFW 4.89</a>
                                </a>
                            </div>
																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/psmods488" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/psmods488" className="fas fa-project-diagram" />
                                <a href="/psmods488" className="text-zinc-400 hover:text-primary hover:dark:text-white">PS3 XierraCFW 4.88</a>
                                </a>
                            </div>
																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="/psmods487" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/psmods487" className="fas fa-project-diagram" />
                                <a href="/psmods487" className="text-zinc-400 hover:text-primary hover:dark:text-white">PS3 XierraCFW 4.87</a>
                                </a>
                            </div>
																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  <p className="text-xl mt-1">
                       + XierraHEN Releases<i className="" />
                    </p>
																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="https://hen.xierraps.xyz" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://hen.xierraps.xyz" className="fas fa-project-diagram" />
                                <a href="https://hen.xierraps.xyz" className="text-zinc-400 hover:text-primary hover:dark:text-white">PS3 XierraHEN Installer (4.83 - 4.90)</a>
                                </a>
                            </div>
																												  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  <p className="text-xl mt-1">
                       + HFW Releases<i className="" />
                    </p>
																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

						                        <div>
                                <a
                                    href="https://universe.xierraps.xyz/hfw" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="https://universe.xierraps.xyz/hfw" className="fas fa-project-diagram" />
                                <a href="https://universe.xierraps.xyz/hfw" className="text-zinc-400 hover:text-primary hover:dark:text-white">View HFW Releases</a>
                                </a>
                            </div>
																											  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">       ‎ 

      </p>

	  <p className="text-xl mt-1">

                       + Online Patch for 4.89<i className="" />

                    </p>

																										  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">

       ‎ 

      </p>

						                        <div>

                                <a

                                    href="https://universe.xierraps.xyz/490patch" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"

                                >

								<i href="https://universe.xierraps.xyz/490patch" className="fas fa-project-diagram" />

                                <a href="https://universe.xierraps.xyz/490patch" className="text-zinc-400 hover:text-primary hover:dark:text-white">Install Online Patch 4.89</a>

                                </a>

                            </div>
																							  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	                     <h1 className="text-4xl font-bold">PlayStation 3 <span className="relative whitespace-nowrap text-primary">Exploit HEN Firmware</span></h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                    <p className="text-xl mt-1">
					                <div className="relative flex-shrink-0">
                    <img src="https://universe.xierraps.xyz/henps3.png" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                </div>
								   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                        Download the Source code of the Official HEN Packages, use this for jailbreaking or manually install HEN on your PS3<i className="" />
                    </p>
																															  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.89.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.89.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.89.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.89 Packages</a>
                                </a>
                            </div>
																																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.88.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.88.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.88.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.88 Packages</a>
                                </a>
                            </div>
																																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.87.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.87.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.87.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.87 Packages</a>
                                </a>
                            </div>
																																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.86.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.86.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.86.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.86 Packages</a>
                                </a>
                            </div>
																																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.85.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.85.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.85.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.85 Packages</a>
                                </a>
                            </div>
																																						  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
						                        <div>
                                <a
                                    href="/HEN_4.84.pkg" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/HEN_4.84.pkg" className="fas fa-project-diagram" />
                                <a href="/HEN_4.84.pkg" className="text-zinc-400 hover:text-primary hover:dark:text-white">Download 4.84 Packages</a>
                                </a>
                            </div>
																																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Game Projects</h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

                   <h1 className="text-4xl font-bold">Anime Game <span className="relative whitespace-nowrap text-primary">Private Server</span></h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  					                <div className="relative flex-shrink-0">
                    <img src="https://universe.xierraps.xyz/ps.png" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />
                </div>
								   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                    <p className="text-xl mt-1">
                        Play Anime Game outside the Official Server by using PS. You can get and unlock all items, characters and weapons with PS.<i className="" />
                    </p>

					<h1 className="text-4xl font-bold"><span className="relative whitespace-nowrap text-primary"></span> </h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	  <p className="text-xl mt-1">
                       + Genshin Impact (Server Closed)<i className="" />
                    </p>
																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	                        <div>
                                <a
                                    href="/genshinps" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/genshinps" className="fas fa-project-diagram" />
                                <a href="/genshinps" className="text-zinc-400 hover:text-primary hover:dark:text-white">Genshin Impact (Server Closed)</a>
                                </a>
                            </div>
																  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  	  <p className="text-xl mt-1">
                       + Honkai: Star Rail (Unavailable)<i className="" />
                    </p>
																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	                        <div>
                                <a
                                    href="/starrailps" className="flex gap-2 px-4 items-center w-full h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i href="/starrailps" className="fas fa-project-diagram" />
                                <a href="/starrailps" className="text-zinc-400 hover:text-primary hover:dark:text-white">Star Rail (Server Unavailable)</a>
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
	  																					  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
	                        <div>
                                <a
                                    href="https://universe.xierraps.xyz" className=" gap- px-7 items-center h-12 bg-gray-50/10 rounded-lg hover:bg-gray-500/50 transition-all duration-200 text-zinc-400 hover:text-black hover:dark:text-white"
                                >
								<i className="" />
                                <a href="https://universe.xierraps.xyz" className="font-display text-1x1 hover:text-primary hover:dark:text-white">BACK</a>
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
