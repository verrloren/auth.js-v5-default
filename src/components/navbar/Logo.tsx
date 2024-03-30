'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {

	const router = useRouter();

	return (
		<Image
			width={100}
			height={50}
			alt="logo"
			className="cursor-pointer hover:bg-gray-100 rounded-lg p-1"
			src='/images/logoRemove.png'
			onClick={() => router.push('/')}
		/>
 )
}
