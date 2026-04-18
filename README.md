# olfke.be

Personal hub — projects, tools & infrastructure.  
Live at [olfke.be](https://olfke.be) · Self-hosted · Ghent, Belgium

---

## What's in here

| Route      | Access  | Description                                                         |
| ---------- | ------- | ------------------------------------------------------------------- |
| `/`        | Public  | Landing page — hub with links to sections and deployed projects     |
| `/work`    | Public  | IT shortcuts, sysadmin references, Docker commands, troubleshooting |
| `/homelab` | 🔒 Auth | Network topology, services, device IPs, homelab todo                |
| `/login`   | Public  | Auth page for protected sections                                    |

---

## Stack

- **SvelteKit** + TypeScript, `adapter-node`
- **Lucia v3** for auth + session management
- **Drizzle ORM** + **PostgreSQL** for session storage
- **Docker** + **Docker Compose** for containerisation
- **Caddy** reverse proxy on host
- **Cloudflare** for DNS
- **GitHub Actions** CI/CD → Docker Hub → VPS via SSH

---

## Local development

### Prerequisites

- Node.js 20+
- Docker Desktop

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Copy env file and fill in values
cp .env.example .env

# 3. Start local Postgres
docker compose -f docker-compose.dev.yml up -d

# 4. Run migrations
docker exec -i olfke-be-db-dev psql -U olfke olfke < drizzle/0001_initial.sql

# 5. Create your admin user
npm run seed <username> <password>

# 6. Start dev server
npm run dev
```

App runs at `http://localhost:5173`.

### .env (dev)

```env
DATABASE_URL=postgresql://olfke:devpassword@localhost:5433/olfke
ORIGIN=http://localhost:5173
```

---

## Deployment

### VPS setup (one-time)

```bash
mkdir -p /opt/olfke-be

cat > /opt/olfke-be/.env << EOF
POSTGRES_PASSWORD=your_strong_password
ORIGIN=https://olfke.be
EOF
```

### Caddy config

```caddy
olfke.be {
    reverse_proxy localhost:3010
}
```

### GitHub Secrets required

| Secret               | Description             |
| -------------------- | ----------------------- |
| `DOCKERHUB_USERNAME` | Docker Hub username     |
| `DOCKERHUB_TOKEN`    | Docker Hub access token |
| `SERVER_HOST`        | VPS IP address          |
| `SERVER_USER`        | SSH user                |
| `SERVER_SSH_KEY`     | Private SSH key         |
| `SERVER_PORT`        | SSH port (e.g. 2222)    |

### Deploy

Push to `main` — GitHub Actions builds the Docker image, pushes to Docker Hub, and deploys to the VPS automatically.

```bash
git push origin main
```

---

## Project structure

```
src/
  routes/
    +page.svelte              # Landing page
    login/                    # Auth (login/logout)
    work/                     # Public IT reference
    homelab/                  # Protected homelab dashboard
  lib/server/
    auth.ts                   # Lucia setup (cookie: olfke_session)
    db.ts                     # Drizzle + Postgres singleton
    schema.ts                 # User + session tables
  hooks.server.ts             # Session validation + /homelab route guard
  app.css                     # Global design system (mid-century palette)
drizzle/
  0001_initial.sql            # DB schema
scripts/
  seed.mts                    # Creates admin user
```

---

## Auth notes

- Session cookie name: `olfke_session` (deliberately distinct from other apps on subdomains)
- Only `/homelab` is protected — `/work` is public
- Single user setup; add more via `npm run seed`
- Passwords hashed with argon2id

---

## Planned

- [ ] Jenkins self-hosted CI/CD (replacing GitHub Actions)
- [ ] More homelab docs as infrastructure grows
- [ ] Proxmox node when MS-01 arrives
