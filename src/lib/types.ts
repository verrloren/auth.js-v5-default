import { User } from "next-auth";
import * as z from "zod";

export 	const formSchema = z.object({
	email: z.string().email(),
	name: z.string().min(1),
	password: z.string().min(6)
})

export const storeSchema = z.object({
	name: z.string().min(1),
})

export type TStoreSchema = z.infer<typeof storeSchema>;

export type SafeUser = Omit<User, 'createdAt' | 'updatedAt' | 'emailVerified'> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
}