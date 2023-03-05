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
			        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Basic</h1>
									   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
									  	        
                    <p className="text-xl mt-1">
       /account : Modify user accounts<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
   /achievement : Grant, Revoke or Progress achievements.                        <i className="" />
                    </p>
					                    <p className="text-xl mt-1">
          /clear : Deletes unequipped unlocked items from your inventory      <i className="" />
                    </p>
					                    <p className="text-xl mt-1">
      /announce : Send announcement to all online players, or manage server's                        <i className="" />
                    </p>
/coop : Forces someone to join the world of others<i className="" />
					                    <p className="text-xl mt-1">
/enka : Copy your character data from official server<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
 /enter_dungeon : Enter a dungeon<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
 /equip : You can replace current character weapon with a weapon<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
 /give : Gives an item to you or the specified player<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/killall : Kill all entities<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/language : Display or change current language<i className="" />
                    </p>        
					                    <p className="text-xl mt-1">
/list : List online players<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/permission : Grants or removes a permission for a user<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/position : Gets position and rotation information<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/remote : Use this to access commands from web<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
 /resetConst : Resets the constellation level on your current active character<i className="" />
                    </p>
					                    <p className="text-xl mt-1">
/resetShopLimit : Reset target player's shop refresh time<i className="" />
                    </p>
														   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
<h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white">Full</h1>
					                    <p className="text-xl mt-1">
To View the full Command List with all item code, please download the file below!<i className="" />
                    </p>
														   				  	        <p className="mx-auto max-w-4xl font-display text-1x1 text-gray-500/50 text-center">
       ‎ 
      </p>
		
<a href="https://download937.mediafire.com/d0pw5v6tdnagm9G5ioIoUjTazpmDhWcDfIcZjiYwRTnSqXc2GjxdJxdvY2hGxow0z27Wanfcm1cqwMZAZrxYK361Kw/jcnersn4kenaath/3.5.txt" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white hover:dark:text-white">( Download )</a>
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
