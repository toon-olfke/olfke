import { lucia } from '$lib/server/auth';
import { db } from '$lib/server/db';
import { userTable } from '$lib/server/schema';
import { fail, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import * as argon2 from 'argon2';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, url }) => {
	if (locals.user) {
		const from = url.searchParams.get('from') || '/homelab';
		redirect(302, from);
	}
	return { from: url.searchParams.get('from') || '/homelab' };
};

export const actions: Actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');

		if (typeof username !== 'string' || typeof password !== 'string') {
			return fail(400, { error: 'Invalid input.' });
		}

		const [user] = await db
			.select()
			.from(userTable)
			.where(eq(userTable.username, username.toLowerCase().trim()));

		if (!user) {
			// Timing-safe: still verify even if no user found
			await argon2.verify('$argon2id$v=19$m=65536,t=3,p=4$fake$fake', 'fake');
			return fail(400, { error: 'Invalid credentials.' });
		}

		const valid = await argon2.verify(user.passwordHash, password);
		if (!valid) {
			return fail(400, { error: 'Invalid credentials.' });
		}

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});

		const from = url.searchParams.get('from') || '/homelab';
		redirect(302, from);
	},

	logout: async ({ cookies }) => {
		const sessionId = cookies.get(lucia.sessionCookieName);
		if (sessionId) {
			await lucia.invalidateSession(sessionId);
		}
		const sessionCookie = lucia.createBlankSessionCookie();
		cookies.set(sessionCookie.name, sessionCookie.value, {
			path: '/',
			...sessionCookie.attributes
		});
		redirect(302, '/');
	}
};
