import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full flex items-center justify-center ">
			<div className="space-y-6">
				<h1 className="text-6xl font-semibold drop-smadow-md">Auth</h1>
				<div>
					<LoginButton>
						<Button variant="secondary">
							Sign in
						</Button>
					</LoginButton>
				</div>
			</div>
      
    </main>
  );
}
