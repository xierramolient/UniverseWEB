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
      <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mt-24">
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">SERVER 1</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">ONLINE</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">SERVER 2</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">ONLINE</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">SERVER ADRESS V1</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">xierraps.ddns.net:6411</p>
        </div>
        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">SERVER VERSION</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">VERSION 2.1</p>
        </div>
		        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">GAME VERSION</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">3.4</p>
        </div>
		        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">GRASSCUTTER VERSION</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">RES 3.4</p>
        </div>
		        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">DOCKERGS VERSION</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">ALPINE 3.4</p>
        </div>
		        <div className="rounded-lg border-2 border-gray-500/10 border-dotted px-4 py-2 text-center">
          <span className="text-gray-500 dark:text-gray-300 text-primary-uppercase">UPDATE</span>
          <p className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-white font-semibold text-xl">UPDATING TO 3.5</p>
        </div>
      </div>
    </div>
   
  </>
}
