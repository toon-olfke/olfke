<script lang="ts">
	const tools = [
		{
			category: 'NETWORK',
			items: [
				{ label: 'Subnet Calculator', url: 'https://www.subnet-calculator.com', desc: 'CIDR/subnet math' },
				{ label: 'CIDR.xyz', url: 'https://cidr.xyz', desc: 'Visual IP range explorer' },
				{ label: 'MXToolbox', url: 'https://mxtoolbox.com', desc: 'DNS, MX, blacklist checks' },
				{ label: 'DNSChecker', url: 'https://dnschecker.org', desc: 'Global DNS propagation' },
				{ label: 'Shodan', url: 'https://www.shodan.io', desc: 'Internet-connected device search' },
				{ label: 'BGP.he.net', url: 'https://bgp.he.net', desc: 'ASN, BGP, IP info' },
			]
		},
		{
			category: 'DIAGNOSTICS',
			items: [
				{ label: 'Ping.pe', url: 'https://ping.pe', desc: 'Global ping & traceroute' },
				{ label: 'Fast.com', url: 'https://fast.com', desc: 'Quick speed test (Netflix)' },
				{ label: 'Cloudflare Speed', url: 'https://speed.cloudflare.com', desc: 'Latency + speed test' },
				{ label: 'DownDetector', url: 'https://downdetector.com', desc: 'Service outage reports' },
				{ label: 'SSL Labs', url: 'https://www.ssllabs.com/ssltest/', desc: 'TLS/SSL certificate audit' },
				{ label: 'CRT.sh', url: 'https://crt.sh', desc: 'Certificate transparency logs' },
			]
		},
		{
			category: 'INFRASTRUCTURE',
			items: [
				{ label: 'Cloudflare Dash', url: 'https://dash.cloudflare.com', desc: 'DNS, tunnels, firewall' },
				{ label: 'Docker Hub', url: 'https://hub.docker.com', desc: 'Container image registry' },
				{ label: 'Proxmox Docs', url: 'https://pve.proxmox.com/wiki/Main_Page', desc: 'PVE documentation' },
				{ label: 'pfSense Docs', url: 'https://docs.netgate.com/pfsense/en/latest/', desc: 'pfSense documentation' },
				{ label: 'Extreme Connect', url: 'https://connect.extremecloudiq.com', desc: 'AP management portal' },
			]
		},
		{
			category: 'REFERENCE',
			items: [
				{ label: 'Common Ports', url: 'https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers', desc: 'TCP/UDP port assignments' },
				{ label: 'HTTP Status Codes', url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status', desc: 'MDN status code reference' },
				{ label: 'Crontab Guru', url: 'https://crontab.guru', desc: 'Cron expression editor' },
				{ label: 'Regex101', url: 'https://regex101.com', desc: 'Regex tester & explainer' },
				{ label: 'ExplainShell', url: 'https://explainshell.com', desc: 'Explains any shell command' },
				{ label: 'tldr pages', url: 'https://tldr.inbrowser.app', desc: 'Simplified man pages' },
			]
		},
		{
			category: 'SECURITY',
			items: [
				{ label: 'HaveIBeenPwned', url: 'https://haveibeenpwned.com', desc: 'Breach check' },
				{ label: 'VirusTotal', url: 'https://www.virustotal.com', desc: 'File/URL/IP scanner' },
				{ label: 'AbuseIPDB', url: 'https://www.abuseipdb.com', desc: 'Malicious IP lookup' },
				{ label: 'Bitwarden', url: 'https://vault.bitwarden.com', desc: 'Password vault' },
			]
		},
		{
			category: 'DEV',
			items: [
				{ label: 'GitHub', url: 'https://github.com', desc: 'Repositories' },
				{ label: 'Coolify', url: 'https://coolify.io', desc: 'Self-hosted Heroku alt' },
				{ label: 'JSON Formatter', url: 'https://jsonformatter.curiousconcept.com', desc: 'Validate & prettify JSON' },
				{ label: 'Base64 Decode', url: 'https://www.base64decode.org', desc: 'Encode/decode base64' },
			]
		}
	];

	const ports = [
		{ port: '22', proto: 'TCP', service: 'SSH' },
		{ port: '25', proto: 'TCP', service: 'SMTP' },
		{ port: '53', proto: 'TCP/UDP', service: 'DNS' },
		{ port: '80', proto: 'TCP', service: 'HTTP' },
		{ port: '443', proto: 'TCP', service: 'HTTPS' },
		{ port: '3306', proto: 'TCP', service: 'MySQL' },
		{ port: '5432', proto: 'TCP', service: 'PostgreSQL' },
		{ port: '6379', proto: 'TCP', service: 'Redis' },
		{ port: '8080', proto: 'TCP', service: 'HTTP alt' },
		{ port: '8443', proto: 'TCP', service: 'HTTPS alt' },
		{ port: '3478', proto: 'UDP', service: 'STUN / UniFi' },
		{ port: '27017', proto: 'TCP', service: 'MongoDB' },
	];
</script>

<svelte:head>
	<title>WORK — olfke.be</title>
</svelte:head>

<div class="corner tl"></div>
<div class="corner tr"></div>
<div class="corner bl"></div>
<div class="corner br"></div>

<nav>
	<a href="/" class="nav-brand">← OLFKE.BE</a>
	<span class="nav-title">WORK REFERENCE</span>
</nav>

<main>
	<header class="page-header">
		<p class="eyebrow">// SECTION 01</p>
		<h1>WORK</h1>
		<p class="sub">Tools, shortcuts & references for daily IT/sysadmin work.</p>
	</header>

	<!-- Tool grid -->
	{#each tools as group}
		<section class="tool-section">
			<p class="section-label">{group.category}</p>
			<div class="tool-grid">
				{#each group.items as item}
					<a href={item.url} target="_blank" rel="noopener" class="tool-card">
						<span class="tool-label">{item.label}</span>
						<span class="tool-desc">{item.desc}</span>
						<span class="tool-arrow">↗</span>
					</a>
				{/each}
			</div>
		</section>
	{/each}

	<!-- Port quick reference -->
	<section class="tool-section">
		<p class="section-label">COMMON PORTS</p>
		<div class="port-table">
			<div class="port-header">
				<span>PORT</span>
				<span>PROTO</span>
				<span>SERVICE</span>
			</div>
			{#each ports as p}
				<div class="port-row">
					<span class="port-num">{p.port}</span>
					<span class="port-proto">{p.proto}</span>
					<span class="port-svc">{p.service}</span>
				</div>
			{/each}
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
		position: fixed;
		top: 0; left: 0; right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.25rem 3rem;
		border-bottom: 1px solid var(--border);
		background: rgba(8,8,7,0.9);
		backdrop-filter: blur(8px);
		z-index: 50;
	}
	.nav-brand {
		font-family: var(--font-sans);
		font-size: 0.6rem;
		letter-spacing: 0.2em;
		color: var(--text-muted);
		transition: color 0.2s;
	}
	.nav-brand:hover { color: var(--gold); }
	.nav-title {
		font-family: var(--font-sans);
		font-size: 0.6rem;
		letter-spacing: 0.25em;
		color: var(--gold-dim);
	}

	main {
		max-width: 1100px;
		margin: 0 auto;
		padding: 7rem 2rem 5rem;
		display: flex;
		flex-direction: column;
		gap: 3.5rem;
	}

	.page-header {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--border);
	}
	.eyebrow {
		font-family: var(--font-sans);
		font-size: 0.6rem;
		letter-spacing: 0.25em;
		color: var(--gold-dim);
	}
	h1 {
		font-family: var(--font-serif);
		font-size: clamp(2.5rem, 7vw, 4.5rem);
		font-weight: 700;
		color: var(--gold);
		letter-spacing: 0.1em;
		line-height: 1;
	}
	.sub {
		font-family: var(--font-sans);
		font-size: 0.75rem;
		color: var(--text-muted);
		letter-spacing: 0.05em;
	}

	.section-label {
		font-family: var(--font-sans);
		font-size: 0.58rem;
		letter-spacing: 0.25em;
		color: var(--gold-dim);
		margin-bottom: 0.75rem;
	}

	.tool-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1px;
		border: 1px solid var(--border);
	}
	.tool-card {
		background: var(--bg-card);
		padding: 1.1rem 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.35rem;
		transition: background 0.15s;
		position: relative;
	}
	.tool-card:hover { background: var(--bg-card2); }
	.tool-label {
		font-family: var(--font-sans);
		font-size: 0.72rem;
		letter-spacing: 0.08em;
		color: var(--text);
	}
	.tool-desc {
		font-family: var(--font-sans);
		font-size: 0.62rem;
		color: var(--text-dim);
		line-height: 1.4;
	}
	.tool-arrow {
		font-size: 0.7rem;
		color: var(--gold-dim);
		position: absolute;
		top: 1rem;
		right: 1rem;
		transition: color 0.15s;
	}
	.tool-card:hover .tool-arrow { color: var(--gold); }

	/* Port table */
	.port-table {
		border: 1px solid var(--border);
		font-family: var(--font-sans);
		font-size: 0.68rem;
	}
	.port-header {
		display: grid;
		grid-template-columns: 80px 100px 1fr;
		padding: 0.5rem 1rem;
		background: var(--bg-card2);
		letter-spacing: 0.15em;
		font-size: 0.55rem;
		color: var(--gold-dim);
		border-bottom: 1px solid var(--border);
	}
	.port-row {
		display: grid;
		grid-template-columns: 80px 100px 1fr;
		padding: 0.5rem 1rem;
		border-bottom: 1px solid var(--border);
		transition: background 0.15s;
	}
	.port-row:last-child { border-bottom: none; }
	.port-row:hover { background: var(--bg-card); }
	.port-num {
		color: var(--gold);
		font-weight: 600;
		letter-spacing: 0.05em;
	}
	.port-proto { color: var(--text-muted); }
	.port-svc   { color: var(--text); }
</style>
