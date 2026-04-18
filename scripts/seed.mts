import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as argon2 from 'argon2';
import { userTable } from '../src/lib/server/schema';
import { config } from 'dotenv';
import { generateId } from 'lucia';

config();

const username = process.argv[2];
const password = process.argv[3];

if (!username || !password) {
	console.error('Usage: npm run seed <username> <password>');
	process.exit(1);
}

const client = postgres(process.env.DATABASE_URL!);
const db = drizzle(client);

const passwordHash = await argon2.hash(password, {
	type: argon2.argon2id,
	memoryCost: 65536,
	timeCost: 3,
	parallelism: 4
});

await db.insert(userTable).values({
	id: generateId(15),
	username: username.toLowerCase(),
	passwordHash
});

console.log(`✓ User "${username}" created.`);
await client.end();
