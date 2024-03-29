'use client'

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { BackButton } from "./BackButton";
import { Social } from "./Social";
import { Header } from "./header";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export function CardWrapper({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial}: CardWrapperProps) {
	return (
		<Card>
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>
			{children}
			</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
				)
			}
			<CardFooter>
				<BackButton 
					label={backButtonLabel}
					href={backButtonHref}
				/>
			</CardFooter>
		</Card>
 )
}
