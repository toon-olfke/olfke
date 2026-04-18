import { db } from '$lib/server/db';
import { userTable } from '$lib/server/schema';
import { json } from '@sveltejs/kit';
import * as argon2 from 'argon2';
import { generateId } from 'lucia';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const secret = process.env.SEED_SECRET;

	if (!secret) {
		return json({ error: 'Setup not enabled.' }, { status: 403 });
	}

	const body = await request.json();

	if (body.secret !== secret) {
		return json({ error: 'Invalid secret.' }, { status: 403 });
	}

	if (!body.username || !body.password) {
		return json({ error: 'Username and password required.' }, { status: 400 });
	}

	const passwordHash = await argon2.hash(body.password, {
		type: argon2.argon2id,
		memoryCost: 65536,
		timeCost: 3,
		parallelism: 4
	});

	try {
		await db.insert(userTable).values({
			id: generateId(15),
			username: body.username.toLowerCase().trim(),
			passwordHash
		});
	} catch {
		return json({ error: 'User already exists.' }, { status: 409 });
	}

	return json({ success: true, username: body.username });
};