'use client';

import { Avatar } from "./Avatar";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Container from "@/components/Container";
import { SafeUser } from "@/lib/types";
import { LoginButton } from "../auth/login-button";

interface NavbarProps {
	currentUser?: SafeUser | null;
}

export default function Navbar({ currentUser }: NavbarProps) {

	const router = useRouter();


	return (

		
		<Container>

			<div className="w-full min-h-20 flex flex-row items-center justify-between">

				<Logo />

				<div className="flex flex-row items-center gap-4">

					{currentUser ? (
						<>
							<Avatar src={currentUser?.image} />
						</>
					) : (
						<>
							<LoginButton>
								<Button size="sm" variant="default">
									Sign in
								</Button>
							</LoginButton>

						</>
					)}
				</div>



			</div>
		</Container>
	)
}
