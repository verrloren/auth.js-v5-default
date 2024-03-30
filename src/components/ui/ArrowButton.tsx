'use client'

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"


export default function ArrowButton() {

	const router = useRouter();
	
	return (
		<button 
			className="bg-transparent"
			onClick={() => router.push('/')}>
				
			<FaArrowLeft
				size={24}
				className="cursor-pointer absolute top-10 sm:left-10 -left-20
				bg-transparent text-neutral-800 
				hover:-translate-x-1 hover:text-neutral-900
				transition-all duration-100 "
			/>
	</button>
 )
}
