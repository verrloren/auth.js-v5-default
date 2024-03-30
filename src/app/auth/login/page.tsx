import { LoginForm } from "@/components/auth/login-form";
import Logo from "@/components/navbar/Logo";
import ArrowButton from "@/components/ui/ArrowButton";
import Image from "next/image";

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
	return (
		<div className="w-full h-full flex items-center
		justify-center bg-[#161616]">

				<div className="lg:w-[90%] lg:h-[93%] w-[95%] h-[95%] 
					flex items-center justify-center
					rounded-xl bg-[#fff] shadow-xl">
						``
				
						<div className="relative h-full w-[50%] flex items-center
						 flex-col rounded-lg gap-8">

							<ArrowButton />

							<div className="mt-28 flex flex-row justify-betwee">
								<Logo />
							</div>
{/* 
							<h1 className="mt-5 mb-4 text-3xl font-semibold text-center">
								Welcome back!
							</h1> */}

							<LoginForm />
						</div>
				
						<Image
							width={500}
							height={1000}
							alt="abstractPic"
							src='/images/registerImg.jpg'
							className="h-[95%] w-[48%] hidden md:block object-cover rounded-xl"
						/>
				</div>
		</div>
 )
}
