// prisma does not work in edge that's why we can't use lot of callbacks and events inside of auth.ts. 
// middleware works in edge, so we can't use prisma in middleware.ts
// but there is a solution: create auth.config to use it in middleware

import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github"; 
import Google from "next-auth/providers/google"; 

import { LoginSchema } from "../schemas"
import { getUserByEmail } from "../data/user"
import bcrypt from 'bcryptjs';

export default {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials)

				if(validatedFields.success) {
					const { email, password } = validatedFields.data;

					const user = await getUserByEmail(email);

					//check password as well because google accounts have no password
					if(!user || !user.password) return null;

					//check if password matches
					const passwordMatch = await bcrypt.compare(password, user.password);
				
					if (passwordMatch) return user;
				}

				return null;
			}
		})
	]
} satisfies NextAuthConfig