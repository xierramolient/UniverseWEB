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
			        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Play Now!</h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                   <h1 className="text-4xl font-bold">How to <span className="relative whitespace-nowrap text-primary">Connect</span>? (PC)</h1>
				   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                    <p className="text-xl mt-1">
                        You can connect XierraUniverse Private Server by using Fiddler Classic then add the XierraPS Server Adress. (This will need some patch for connecting into unofficial Genshin Impact Server.) You can search tutorial video on YouTube about Private Servers.<i className="" />
                    </p>
					<a href="https://www.telerik.com/download/fiddler" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white hover:dark:text-white">( Download Fiddler Classic )</a>
					<h1 className="text-4xl font-bold"><span className="relative whitespace-nowrap text-primary"></span> </h1>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  
					<h1 className="text-4xl font-bold">How to <span className="relative whitespace-nowrap text-primary">Connect</span>? (Android)</h1>
                    <p className="text-xl mt-1">
					Download the modded custom server .apk then connect to the XierraPS Server Adress. You can download it from Yuanshen or Search tutorial on YouTube. (rename game data and obb from com.mihoyo.genshin.impact to com.giskai.emojips)*
					</p>
					<a href="https://download857.mediafire.com/v7dfynhdzccg0czVhqAQIQ8rNvj0y8kHmHkI0lOxtdxQJoYjQv2i3ydWEHbfSEZMGZnLUltjd385SjbRtgA_VWeh8g/bw01tzpt4051w4j/EmojiPS_Launcher_base.apk" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white hover:dark:text-white">( Download Modded Launcher )</a>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
	  					<h1 className="text-4xl font-bold">Guide <span className="relative whitespace-nowrap text-primary">(YuukiPS)</span></h1>
                    <p className="text-xl mt-1">
					Open the YuukiPS "https://ps.yuuki.me/genshin" Guide page, then you just follow the step and change the server name into xierraps.ddns.net:6411, if you not changing the server adress, you will playing the YuukiPS server (Not the XierraPS Server).
					</p>
					<a href="https://ps.yuuki.me/genshin" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white hover:dark:text-white">( Open Guide Page )</a>
									  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>

					<h1 className="text-4xl font-bold">Server <span className="relative whitespace-nowrap text-primary">Adress</span> : </h1>
                    <p className="text-xl mt-1">
					xierraps.ddns.net:6411 | Available 2 Servers.
					</p>
					<a href="https://xierraps.ddns.net:6411" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white hover:dark:text-white">( Visit Server )</a>
														  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
                      <div className="relative flex-shrink-0">
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH3s7fq-kJSRlONLP-shYKquaft1wde03FbtaB1NUMwiAE6Uhk3jY6nP8lVuOYdP2XJIF5e5PKcT7P3TZeAWQr0sbqUHAosp9-voI2kOjMmlLW43dxdNyrIv4zN3BgRQ6XBbuJc4FpgX3bDkaiO96RzVUxyzu9nWVXW5n_nNXWnqCQI2dr4AwvsgHX/s1600/1161662.jpg" style={{ zIndex: 1 }} className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg" />

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
