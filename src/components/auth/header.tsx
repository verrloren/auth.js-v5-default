'use client'

import { cn } from "@/lib/utils";

interface HeaderProps {
	label: string;
}

export function Header({ label }: HeaderProps) {
	return (
		<div className="w-full flex flex-col gap-y-4 items-center justify-center">
			<h1 className={cn("text-3xl font-semibold")}>Auth</h1>
			<p>{label}</p>
		</div>
 )
}
