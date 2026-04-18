<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	let copied = '';
	function copy(text: string, key: string) {
		navigator.clipboard.writeText(text);
		copied = key;
		setTimeout(() => copied = '', 2000);
	}

	const devices = [
		{ name: 'pfSense',       ip: '10.10.0.1',   role: 'Firewall / Router',   note: 'igb0=WAN, igb1=LAN, igb2=OPT2' },
		{ name: 'Debian Lab',    ip: '10.10.0.110',  role: 'Docker Host',         note: 'UniFi, Portainer, monitoring' },
		{ name: 'USW-24-PoE',    ip: '10.10.0.2',   role: 'Main Switch',         note: 'UniFi, adopted ✓' },
		{ name: 'AP 410C',       ip: '10.10.0.22',  role: 'WiFi AP',             note: 'Extreme Connect' },
		{ name: 'AP 305C',       ip: '10.10.0.21',  role: 'WiFi AP',             note: 'Extreme Connect' },
		{ name: 'DESK-Toon',     ip: '10.10.0.10',  role: 'Workstation',         note: '' },
		{ name: 'Proximus bbox', ip: '—',           role: 'Modem (bridge mode)', note: 'WAN: 81.243.183.217' },
	];

	const services = [
		{ name: 'Portainer',        url: 'http://10.10.0.110:9000',  desc: 'Docker management' },
		{ name: 'UniFi Controller', url: 'https://10.10.0.110:8443', desc: 'Network controller' },
		{ name: 'Grafana',          url: 'http://10.10.0.110:6060',  desc: 'Metrics & logs' },
		{ name: 'pfSense',          url: 'https://10.10.0.1',        desc: 'Firewall / router UI' },
	];

	const subnets = [
		{ iface: 'LAN (igb1)',  subnet: '10.10.0.0/23', gw: '10.10.0.1', pool: '10.10.0.100 – 10.10.1.200', purpose: 'Main network' },
		{ iface: 'OPT2 (igb2)', subnet: '10.10.2.0/24', gw: '10.10.2.1', pool: '10.10.2.100 – 10.10.2.200', purpose: 'TV / entertainment' },
		{ iface: 'OPT3 (igb3)', subnet: '—',             gw: '—',         pool: '—',                          purpose: 'Upstairs powerline' },
	];

	const todo = [
		{ done: false, text: 'IPTV choppy on pfSense — TVs on bbox as workaround' },
		{ done: false, text: 'Set UniFi inform host to 10.10.0.110' },
		{ done: false, text: 'VLANs for IoT/lab isolation (when USW-16-PoE arrives)' },
		{ done: false, text: 'Alertmanager for Grafana (email / ntfy.sh)' },
		{ done: false, text: 'Cloudflare tunnel for Grafana remote access' },
		{ done: true,  text: 'pfSense installed — bridge mode active' },
		{ done: true,  text: 'USW-24-PoE adopted' },
		{ done: true,  text: 'Debian server static IP fixed — 10.10.0.110' },
		{ done: true,  text: 'Monitoring stack (Grafana / Prometheus / Loki)' },
	];
</script>

<svelte:head><title>Homelab — olfke.be</title></svelte:head>

<div class="top-bar"></div>

<div class="layout">
	<aside class="rail">
		<a href="/" class="rail-logo">O</a>
		<div class="rail-line"></div>
		<nav class="rail-links">
			<a href="/homelab" class="rail-link active">Lab</a>
			<a href="/" class="rail-link">Home</a>
			<form method="POST" action="/login?/logout">
				<button type="submit" class="rail-link rail-btn">Out</button>
			</form>
		</nav>
		<div class="rail-line"></div>
		<div class="rail-year">2025</div>
	</aside>

	<main>
		<header class="page-header">
			<div class="ph-left">
				<p class="ph-back"><a href="/">← Olfke.be</a></p>
				<h1 class="ph-title">Homelab</h1>
				<p class="ph-desc">Network topology, services & infrastructure. Ghent, Belgium.</p>
			</div>
			<div class="ph-swatch" style="background:var(--orange)"></div>
		</header>

		<!-- SUBNETS -->
		<section class="content-section">
			<h2 class="sec-title">Subnets</h2>
			<div class="data-table">
				<div class="dt-head" style="grid-template-columns: 130px 140px 120px 1fr 1fr">
					<span>Interface</span><span>Subnet</span><span>Gateway</span><span>DHCP Pool</span><span>Purpose</span>
				</div>
				{#each subnets as s}
					<div class="dt-row" style="grid-template-columns: 130px 140px 120px 1fr 1fr">
						<span class="cell-accent">{s.iface}</span>
						<span class="cell-mono">{s.subnet}</span>
						<span class="cell-mono">{s.gw}</span>
						<span class="cell-dim">{s.pool}</span>
						<span>{s.purpose}</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- DEVICES -->
		<section class="content-section cs-alt">
			<h2 class="sec-title">Active Devices</h2>
			<div class="data-table">
				<div class="dt-head" style="grid-template-columns: 160px 130px 180px 1fr">
					<span>Device</span><span>IP</span><span>Role</span><span>Notes</span>
				</div>
				{#each devices as d}
					<div class="dt-row" style="grid-template-columns: 160px 130px 180px 1fr">
						<span class="cell-bold">{d.name}</span>
						<button
							class="cell-ip cell-mono"
							class:ip-copied={copied === d.ip}
							on:click={() => copy(d.ip, d.ip)}
							title="Copy IP"
						>
							{d.ip}{copied === d.ip ? ' ✓' : ''}
						</button>
						<span class="cell-accent">{d.role}</span>
						<span class="cell-dim">{d.note}</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- SERVICES -->
		<section class="content-section">
			<h2 class="sec-title">Services</h2>
			<div class="services-grid">
				{#each services as svc}
					<a href={svc.url} target="_blank" rel="noopener" class="svc-card">
						<div class="svc-name">{svc.name}</div>
						<div class="svc-desc">{svc.desc}</div>
						<div class="svc-url">{svc.url.replace('https://','').replace('http://','')}</div>
						<span class="svc-arrow">↗</span>
					</a>
				{/each}
			</div>
		</section>

		<!-- TOPOLOGY -->
		<section class="content-section cs-alt">
			<h2 class="sec-title">Topology</h2>
			<div class="topology-box">
<pre>Internet (Proximus Fiber)
        │
   Proximus bbox (bridge mode)    WAN: 81.243.183.217
        │
   pfSense (4-port Intel NIC)
   igb0=WAN  igb1=LAN 10.10.0.1/23
   igb2=OPT2 10.10.2.1/24 (TV)
   igb3=OPT3 powerline (upstairs)
        │
   USW-24-PoE (UniFi)
        │
   ├── Debian lab    10.10.0.110
   ├── AP 410C       10.10.0.22
   ├── AP 305C       10.10.0.21
   └── DESK-Toon     10.10.0.10</pre>
			</div>
		</section>

		<!-- TODO -->
		<section class="content-section">
			<h2 class="sec-title">Todo</h2>
			<div class="todo-list">
				{#each todo as item}
					<div class="todo-item" class:todo-done={item.done}>
						<span class="todo-mark">{item.done ? '✓' : '○'}</span>
						<span class="todo-text">{item.text}</span>
					</div>
				{/each}
			</div>
		</section>

	</main>
</div>

<footer>
	<span>Olfke.be — Homelab — Ghent</span>
	<span>Restricted</span>
</footer>

<style>
.top-bar { height: 5px; background: linear-gradient(90deg, var(--wood-dk), var(--wood-lt), var(--wood-dk)); }
.layout  { display: grid; grid-template-columns: 64px 1fr; min-height: calc(100vh - 5px); }

.rail { display: flex; flex-direction: column; align-items: center; padding: 2rem 0; background: var(--wood-dk); position: sticky; top: 5px; height: calc(100vh - 5px); gap: 1.5rem; }
.rail-logo { font-family: var(--font-display); font-size: 1.6rem; color: var(--cream); transition: color 0.2s; }
.rail-logo:hover { color: var(--wood-lt); }
.rail-line { width: 1px; flex: 1; background: rgba(255,255,255,0.1); }
.rail-links { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }
.rail-link { font-family: var(--font-body); font-size: 0.65rem; font-weight: 500; letter-spacing: 0.12em; color: rgba(255,255,255,0.4); writing-mode: vertical-rl; transition: color 0.2s; }
.rail-link:hover, .rail-link.active { color: var(--wood-lt); }
.rail-btn { background: none; border: none; cursor: pointer; padding: 0; }
.rail-year { font-family: var(--font-mono); font-size: 0.52rem; color: rgba(255,255,255,0.2); letter-spacing: 0.1em; writing-mode: vertical-rl; }

main { display: flex; flex-direction: column; }

.page-header { display: flex; align-items: stretch; border-bottom: 1px solid var(--paper); min-height: 200px; }
.ph-left { flex: 1; padding: 3rem 5rem; display: flex; flex-direction: column; gap: 0.75rem; justify-content: flex-end; }
.ph-back { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.1em; color: var(--char-lt); }
.ph-back a { color: inherit; transition: color 0.2s; }
.ph-back a:hover { color: var(--orange); }
.ph-title { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 6rem); line-height: 1; color: var(--char); }
.ph-desc  { font-family: var(--font-body); font-size: 0.9rem; font-weight: 300; color: var(--char-lt); }
.ph-swatch { width: 120px; flex-shrink: 0; }

.content-section { padding: 2.5rem 5rem; border-bottom: 1px solid var(--paper); }
.cs-alt { background: var(--warm); }
.sec-title { font-family: var(--font-display); font-size: 1.4rem; color: var(--char); margin-bottom: 1.25rem; }

/* Data table */
.data-table { border: 1px solid var(--paper); font-family: var(--font-body); font-size: 0.78rem; }
.dt-head { display: grid; padding: 0.5rem 1rem; background: var(--paper); font-family: var(--font-mono); font-size: 0.5rem; letter-spacing: 0.15em; color: var(--char-lt); border-bottom: 1px solid var(--paper); gap: 1rem; }
.dt-row  { display: grid; padding: 0.6rem 1rem; border-bottom: 1px solid var(--paper); gap: 1rem; transition: background 0.15s; align-items: center; }
.dt-row:last-child { border-bottom: none; }
.dt-row:hover { background: rgba(0,0,0,0.02); }
.cell-accent { color: var(--orange); font-weight: 500; }
.cell-bold   { color: var(--char); font-weight: 500; }
.cell-mono   { font-family: var(--font-mono); font-size: 0.7rem; color: var(--char); }
.cell-dim    { color: var(--char-lt); }
.cell-ip {
	font-family: var(--font-mono); font-size: 0.7rem; color: var(--char);
	background: none; border: none; cursor: pointer; text-align: left;
	padding: 0; transition: color 0.15s;
}
.cell-ip:hover { color: var(--teal); }
.ip-copied { color: var(--sage) !important; }

/* Services */
.services-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1px; background: var(--paper); border: 1px solid var(--paper); }
.svc-card { background: var(--cream); padding: 1.25rem; display: flex; flex-direction: column; gap: 0.3rem; position: relative; transition: background 0.15s; }
.svc-card:hover { background: var(--warm); }
.svc-name { font-family: var(--font-body); font-size: 0.85rem; font-weight: 500; color: var(--char); }
.svc-desc { font-family: var(--font-body); font-size: 0.72rem; font-weight: 300; color: var(--char-lt); }
.svc-url  { font-family: var(--font-mono); font-size: 0.58rem; color: var(--char-lt); margin-top: 0.25rem; }
.svc-arrow { position: absolute; top: 1rem; right: 1rem; font-size: 0.7rem; color: var(--paper); transition: color 0.15s; }
.svc-card:hover .svc-arrow { color: var(--orange); }

/* Topology */
.topology-box { background: var(--paper); border: 1px solid var(--paper); padding: 1.5rem 2rem; }
pre { font-family: var(--font-mono); font-size: 0.72rem; color: var(--char-mid); line-height: 1.8; white-space: pre; overflow-x: auto; }

/* Todo */
.todo-list { display: flex; flex-direction: column; border: 1px solid var(--paper); }
.todo-item { display: flex; align-items: baseline; gap: 0.75rem; padding: 0.65rem 1rem; border-bottom: 1px solid var(--paper); transition: background 0.15s; }
.todo-item:last-child { border-bottom: none; }
.todo-item:hover { background: rgba(0,0,0,0.02); }
.todo-mark { font-family: var(--font-mono); font-size: 0.6rem; flex-shrink: 0; color: var(--char-lt); }
.todo-done .todo-mark { color: var(--sage); }
.todo-text { font-family: var(--font-body); font-size: 0.82rem; color: var(--char-mid); }
.todo-done .todo-text { color: var(--char-lt); text-decoration: line-through; text-decoration-color: var(--paper); }

footer { display: flex; justify-content: space-between; padding: 1.25rem 1.25rem 1.25rem calc(64px + 5rem); border-top: 2px solid var(--paper); font-family: var(--font-mono); font-size: 0.55rem; letter-spacing: 0.1em; color: var(--char-lt); background: var(--warm); }

@media (max-width: 900px) {
	.layout { grid-template-columns: 1fr; }
	.rail   { display: none; }
	.content-section { padding: 2rem 1.5rem; }
	.ph-left { padding: 3rem 1.5rem 1.5rem; }
	.ph-swatch { width: 60px; }
	.dt-head, .dt-row { grid-template-columns: 1fr 1fr !important; }
	footer { padding: 1.25rem 1.5rem; }
}
</style>