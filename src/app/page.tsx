/* eslint-disable @next/next/no-img-element */
import { LoginButton } from "@/components/auth/login-button";
import Navbar from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function Home() {
	return (
		<main className="h-full w-full">
			<Navbar />
			
			<div className="flex justify-center items-center mt-20">
				<h1 className="text-6xl font-semibold drop-smadow-md">Auth</h1>
			</div>

		</main>
	);
}
