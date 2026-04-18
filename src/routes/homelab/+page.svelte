<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const devices = [
		{ name: 'pfSense',         ip: '10.10.0.1',   role: 'Firewall / Router',    status: 'active', note: 'igb0=WAN, igb1=LAN, igb2=OPT2' },
		{ name: 'Debian Lab',      ip: '10.10.0.110',  role: 'Docker Host',          status: 'active', note: 'UniFi, Portainer, monitoring' },
		{ name: 'USW-24-PoE',      ip: '10.10.0.2',   role: 'Main Switch',          status: 'active', note: 'UniFi, adopted ✓' },
		{ name: 'AP 410C',         ip: '10.10.0.22',  role: 'WiFi AP',              status: 'active', note: 'Extreme Connect managed' },
		{ name: 'AP 305C',         ip: '10.10.0.21',  role: 'WiFi AP',              status: 'active', note: 'Extreme Connect managed' },
		{ name: 'DESK-Toon',       ip: '10.10.0.10',  role: 'Workstation',          status: 'active', note: '' },
		{ name: 'Proximus bbox',   ip: '—',           role: 'Modem (bridge mode)',  status: 'active', note: 'WAN: 81.243.183.217' },
	];

	const planned = [
		{ name: 'USW-16-PoE',       note: 'Upstairs lab switch — watching 2dehands.be' },
		{ name: 'Minisforum MS-01',  note: 'Proxmox node — waiting for DDR5 prices (~2027)' },
		{ name: 'PoE injector',      note: 'For upstairs AP (~€25)' },
		{ name: 'SFP modules (x4)',  note: 'Fiber LAG between switches (~€20-40 each)' },
		{ name: '12U wall rack',     note: 'Generic, not UniFi branded' },
	];

	const services = [
		{ name: 'Portainer',          url: 'http://10.10.0.110:9000',  desc: 'Docker management' },
		{ name: 'UniFi Controller',   url: 'https://10.10.0.110:8443', desc: 'Network controller' },
		{ name: 'Grafana',            url: 'http://10.10.0.110:6060',  desc: 'Metrics & logs dashboard' },
		{ name: 'pfSense',            url: 'https://10.10.0.1',        desc: 'Firewall / router UI' },
		{ name: 'OVAM Buddy',         url: 'https://ovam-buddy.olfke.be', desc: 'Production app' },
		{ name: 'Hotel 505',          url: 'https://bday-m.olfke.be',  desc: 'Production app' },
	];

	const subnets = [
		{ iface: 'LAN (igb1)',  subnet: '10.10.0.0/23', gateway: '10.10.0.1',  pool: '10.10.0.100 – 10.10.1.200', purpose: 'Main network' },
		{ iface: 'OPT2 (igb2)', subnet: '10.10.2.0/24', gateway: '10.10.2.1',  pool: '10.10.2.100 – 10.10.2.200', purpose: 'TV / entertainment' },
		{ iface: 'OPT3 (igb3)', subnet: '—',             gateway: '—',          pool: '—',                          purpose: 'Upstairs powerline' },
	];

	let copied = '';
	function copy(text: string, key: string) {
		navigator.clipboard.writeText(text);
		copied = key;
		setTimeout(() => copied = '', 1500);
	}
</script>

<svelte:head>
	<title>HOMELAB — olfke.be</title>
</svelte:head>

<div class="corner tl"></div>
<div class="corner tr"></div>
<div class="corner bl"></div>
<div class="corner br"></div>

<nav>
	<a href="/" class="nav-brand">← OLFKE.BE</a>
	<div class="nav-right">
		<span class="nav-title">HOMELAB</span>
		<span class="badge-restricted">RESTRICTED</span>
		<form method="POST" action="/login?/logout">
			<button type="submit" class="nav-logout">LOGOUT</button>
		</form>
	</div>
</nav>

<main>
	<header class="page-header">
		<p class="eyebrow">// SECTION 02 — AUTHENTICATED</p>
		<h1>HOMELAB</h1>
		<p class="sub">Network topology, services & infrastructure reference. Ghent, BE.</p>
	</header>

	<!-- Subnets -->
	<section>
		<p class="section-label">SUBNETS</p>
		<div class="table-wrap">
			<div class="table-header" style="grid-template-columns: 120px 140px 120px 1fr 1fr;">
				<span>INTERFACE</span><span>SUBNET</span><span>GATEWAY</span><span>DHCP POOL</span><span>PURPOSE</span>
			</div>
			{#each subnets as s}
				<div class="table-row" style="grid-template-columns: 120px 140px 120px 1fr 1fr;">
					<span class="cell-accent">{s.iface}</span>
					<span class="cell-mono">{s.subnet}</span>
					<span class="cell-mono">{s.gateway}</span>
					<span class="cell-dim">{s.pool}</span>
					<span>{s.purpose}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Devices -->
	<section>
		<p class="section-label">ACTIVE DEVICES</p>
		<div class="table-wrap">
			<div class="table-header" style="grid-template-columns: 160px 140px 180px 1fr;">
				<span>DEVICE</span><span>IP</span><span>ROLE</span><span>NOTES</span>
			</div>
			{#each devices as d}
				<div class="table-row" style="grid-template-columns: 160px 140px 180px 1fr;">
					<span class="cell-text">{d.name}</span>
					<button
						class="cell-ip"
						onclick={() => copy(d.ip, d.ip)}
						title="Copy IP"
					>
						{d.ip}
						{#if copied === d.ip}<span class="copied">✓</span>{/if}
					</button>
					<span class="cell-accent">{d.role}</span>
					<span class="cell-dim">{d.note}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Services -->
	<section>
		<p class="section-label">SERVICES</p>
		<div class="services-grid">
			{#each services as svc}
				<a href={svc.url} target="_blank" rel="noopener" class="svc-card">
					<span class="svc-name">{svc.name}</span>
					<span class="svc-desc">{svc.desc}</span>
					<span class="svc-url">{svc.url.replace('https://', '').replace('http://', '')}</span>
					<span class="tool-arrow">↗</span>
				</a>
			{/each}
		</div>
	</section>

	<!-- Planned -->
	<section>
		<p class="section-label">PLANNED / PENDING</p>
		<div class="table-wrap">
			{#each planned as p}
				<div class="table-row pending-row" style="grid-template-columns: 200px 1fr;">
					<span class="cell-dim">{p.name}</span>
					<span class="cell-dim">{p.note}</span>
				</div>
			{/each}
		</div>
	</section>

	<!-- Topology text diagram -->
	<section>
		<p class="section-label">TOPOLOGY</p>
		<div class="topology-box">
<pre>Internet (Proximus Fiber)
        │
   Proximus bbox (bridge mode)  ← WAN: 81.243.183.217
        │
   pfSense (4-port Intel NIC)
   WAN: igb0   LAN: igb1 — 10.10.0.1/23
   OPT2: igb2 — 10.10.2.1/24 (TV)
   OPT3: igb3 — powerline (upstairs)
        │
   USW-24-PoE (UniFi)
        │
   ├── Debian lab server  10.10.0.110
   ├── AP 410C            10.10.0.22
   ├── AP 305C            10.10.0.21
   └── DESK-Toon          10.10.0.10</pre>
		</div>
	</section>

	<!-- TODO -->
	<section>
		<p class="section-label">TODO</p>
		<div class="todo-list">
			<div class="todo pending">IPTV choppy on pfSense — TVs on bbox as workaround</div>
			<div class="todo pending">Set UniFi inform host to 10.10.0.110</div>
			<div class="todo pending">VLANs for IoT/lab isolation (when USW-16-PoE arrives)</div>
			<div class="todo pending">Alertmanager for Grafana (email / ntfy.sh)</div>
			<div class="todo pending">Cloudflare tunnel for Grafana remote access</div>
			<div class="todo done">pfSense installed — bridge mode active ✓</div>
			<div class="todo done">USW-24-PoE adopted ✓</div>
			<div class="todo done">Debian server static IP fixed — 10.10.0.110 ✓</div>
			<div class="todo done">Monitoring stack (Grafana / Prometheus / Loki) ✓</div>
		</div>
	</section>
</main>

<style>
	.corner { position: fixed; width: 28px; height: 28px; z-index: 100; pointer-events: none; }
	.corner.tl { top: 16px; left: 16px; border-top: 1px solid var(--gold-dim); border-left: 1px solid var(--gold-dim); }
	.corner.tr { top: 16px; right: 16px; border-top: 1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }
	.corner.bl { bottom: 16px; left: 16px; border-bottom: 1px solid var(--gold-dim); border-left: 1px solid var(--gold-dim); }
	.corner.br { bottom: 16px; right: 16px; border-bottom: 1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }

	nav {
		position: fixed; top: 0; left: 0; right: 0;
		display: flex; justify-content: space-between; align-items: center;
		padding: 1.25rem 3rem;
		border-bottom: 1px solid var(--border);
		background: rgba(8,8,7,0.9);
		backdrop-filter: blur(8px);
		z-index: 50;
	}
	.nav-brand { font-family: var(--font-sans); font-size: 0.6rem; letter-spacing: 0.2em; color: var(--text-muted); transition: color 0.2s; }
	.nav-brand:hover { color: var(--gold); }
	.nav-right { display: flex; align-items: center; gap: 1.5rem; }
	.nav-title { font-family: var(--font-sans); font-size: 0.6rem; letter-spacing: 0.25em; color: var(--gold-dim); }
	.badge-restricted {
		font-family: var(--font-sans); font-size: 0.5rem; letter-spacing: 0.15em;
		color: var(--gold-dim); border: 1px solid var(--gold-dim); padding: 0.2rem 0.5rem;
	}
	.nav-logout {
		font-family: var(--font-sans); font-size: 0.6rem; letter-spacing: 0.2em;
		color: var(--text-muted); background: none; border: none; cursor: pointer; transition: color 0.2s;
	}
	.nav-logout:hover { color: var(--gold); }

	main {
		max-width: 1100px; margin: 0 auto;
		padding: 7rem 2rem 5rem;
		display: flex; flex-direction: column; gap: 3.5rem;
	}

	.page-header { display: flex; flex-direction: column; gap: 0.6rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border); }
	.eyebrow { font-family: var(--font-sans); font-size: 0.6rem; letter-spacing: 0.25em; color: var(--gold-dim); }
	h1 { font-family: var(--font-serif); font-size: clamp(2.5rem, 7vw, 4.5rem); font-weight: 700; color: var(--gold); letter-spacing: 0.1em; line-height: 1; }
	.sub { font-family: var(--font-sans); font-size: 0.75rem; color: var(--text-muted); letter-spacing: 0.05em; }

	.section-label { font-family: var(--font-sans); font-size: 0.58rem; letter-spacing: 0.25em; color: var(--gold-dim); margin-bottom: 0.75rem; }

	.table-wrap { border: 1px solid var(--border); }
	.table-header {
		display: grid; padding: 0.5rem 1rem;
		background: var(--bg-card2); font-family: var(--font-sans);
		font-size: 0.52rem; letter-spacing: 0.18em; color: var(--gold-dim);
		border-bottom: 1px solid var(--border);
	}
	.table-row {
		display: grid; padding: 0.6rem 1rem;
		border-bottom: 1px solid var(--border);
		font-family: var(--font-sans); font-size: 0.7rem;
		transition: background 0.15s; align-items: center;
	}
	.table-row:last-child { border-bottom: none; }
	.table-row:hover { background: var(--bg-card); }
	.cell-accent { color: var(--gold); letter-spacing: 0.05em; }
	.cell-text   { color: var(--text); }
	.cell-mono   { color: var(--text); font-variant-numeric: tabular-nums; }
	.cell-dim    { color: var(--text-muted); }

	.cell-ip {
		background: none; border: none; cursor: pointer;
		font-family: var(--font-sans); font-size: 0.7rem;
		color: var(--text); text-align: left; padding: 0;
		display: flex; align-items: center; gap: 0.4rem;
		transition: color 0.15s;
	}
	.cell-ip:hover { color: var(--gold); }
	.copied { font-size: 0.6rem; color: var(--green); }

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1px; border: 1px solid var(--border);
	}
	.svc-card {
		background: var(--bg-card); padding: 1.25rem;
		display: flex; flex-direction: column; gap: 0.35rem;
		transition: background 0.15s; position: relative;
	}
	.svc-card:hover { background: var(--bg-card2); }
	.svc-name { font-family: var(--font-sans); font-size: 0.72rem; letter-spacing: 0.08em; color: var(--text); }
	.svc-desc { font-family: var(--font-sans); font-size: 0.62rem; color: var(--text-muted); line-height: 1.4; }
	.svc-url  { font-family: var(--font-sans); font-size: 0.58rem; color: var(--text-dim); margin-top: 0.25rem; }
	.tool-arrow { font-size: 0.7rem; color: var(--gold-dim); position: absolute; top: 1rem; right: 1rem; transition: color 0.15s; }
	.svc-card:hover .tool-arrow { color: var(--gold); }

	.topology-box {
		border: 1px solid var(--border);
		background: var(--bg-card);
		padding: 1.5rem;
	}
	pre {
		font-family: 'Courier New', monospace;
		font-size: 0.72rem;
		color: var(--text-muted);
		line-height: 1.8;
		white-space: pre;
		overflow-x: auto;
	}

	.todo-list { display: flex; flex-direction: column; gap: 1px; border: 1px solid var(--border); }
	.todo {
		font-family: var(--font-sans); font-size: 0.7rem;
		padding: 0.6rem 1rem;
		border-bottom: 1px solid var(--border);
		transition: background 0.15s;
	}
	.todo:last-child { border-bottom: none; }
	.todo:hover { background: var(--bg-card); }
	.todo.pending { color: var(--text-muted); }
	.todo.pending::before { content: '○  '; color: var(--gold-dim); }
	.todo.done { color: var(--text-dim); }
	.todo.done::before { content: '✓  '; color: var(--green); }

	.pending-row { opacity: 0.7; }
</style>
