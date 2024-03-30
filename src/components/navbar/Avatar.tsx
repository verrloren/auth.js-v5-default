'use client';

import { SafeUser } from "@/lib/types";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

interface IAvatar {
	src?: string | null | undefined;
 }

export function Avatar({ src}: IAvatar) {

	const route = useRouter();
	const [isOpen, setIsOpen] = useState(false);


	return (
		<div className="relative">
			<Image
				height={34}
				onClick={() => setIsOpen(prev => !prev)} 
				width={34}
				alt="avatar"
				className="rounded-full cursor-pointer 
				hover:brightness-105 transition-all duration-150 ease-in-out"
				// src="/images/default-avatar.png"
				src={src || "/images/default-avatar.png"}
			/>
			{isOpen && (
				<div className="absolute bg-white top-10 right-0 flex flex-col justify-center 
				border-[.1rem] rounded-lg">
					<Button size='sm' variant="ghost" onClick={() => route.push('/profile')}>
							Profile
					</Button>
					<Button size='sm' variant="ghost" onClick={() => {
						signOut();
						toast.success('Logged out successfully');
					}}>
							Log out
					</Button>
				</div>
			)}
		</div>
	)
}
