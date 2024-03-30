'use client'

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TStoreSchema, storeSchema } from "@/lib/types";
import { Button } from "../ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import axios from "axios";

export function StoreModal() {
	const onOpen = useStoreModal((state) => state.onOpen);
	const isOpen = useStoreModal((state) => state.isOpen);

	useEffect(() => {
		if (!isOpen) {
			onOpen();
		}
	}, [isOpen, onOpen]);

	const storeModalHook = useStoreModal();

	const [loading, setLoading] = useState(false);

	const form = useForm<TStoreSchema>({
		resolver: zodResolver(storeSchema),
		defaultValues: {
			name: "",
		},
	});

	const onSubmit = async (values: TStoreSchema) => {
		try {
			setLoading(true);

			const response = await axios.post('/api/stores', values)

			console.log(response.data);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}

	return (
		<Modal
			title="Create store"
			description="Add a new store to manage products and categories"
			isOpen={storeModalHook.isOpen}
			onClose={storeModalHook.onClose}
		>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-4 py-2 pb-4">
					<div className="space-y-8">
						<Form {...form}>
							<FormField
								control={form.control}
								name="name"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												disabled={loading}
												type="name"
												className="rounded-lg"
												placeholder="E-Commerce"
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</Form>
					</div>
				</div>
				<div className="pt-6 space-x-2 flex items-center justify-end w-full">
					<Button 
						disabled={loading} 
						variant='outline' 
						onClick={storeModalHook.onClose}>
						Cancel
					</Button>
					<Button 
						disabled={loading} 
						variant='default' 
						onClick={storeModalHook.onClose}>
						Continue
					</Button>
				</div>
			</form>
		</Modal>
	)
}
