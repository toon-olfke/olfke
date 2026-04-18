#!/bin/sh
set -e

echo "→ Running database migrations..."
for f in /app/drizzle/*.sql; do
  echo "  Applying $f"
  psql "$DATABASE_URL" -f "$f"
done

echo "→ Starting server..."
exec node build
