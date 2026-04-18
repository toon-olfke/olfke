<script lang="ts">
	type DockerItem = { label: string; cmd: string; note?: string };
	let copied = '';
	function copy(text: string, key: string) {
		navigator.clipboard.writeText(text);
		copied = key;
		setTimeout(() => copied = '', 2000);
	}

	const sections = [
		{
			title: 'Windows Run Commands',
			color: 'var(--teal)',
			items: [
				{ label: 'Open RDP', cmd: 'mstsc', run: true },
				{ label: 'Control Panel', cmd: 'control', run: true },
				{ label: 'User Management', cmd: 'lusrmgr.msc', run: true },
				{ label: 'Device Manager', cmd: 'devmgmt.msc', run: true },
				{ label: 'Settings', cmd: 'ms-settings:', run: true },
				{ label: 'System Settings', cmd: 'ms-settings:system', run: true },
				{ label: 'Accounts Settings', cmd: 'ms-settings:accounts', run: true },
				{ label: 'Credential Manager', cmd: 'control keymgr.dll', run: true },
				{ label: 'Registry Editor', cmd: 'regedit', run: true },
				{ label: 'Network Connections', cmd: 'ncpa.cpl', run: true },
				{ label: 'Certificate Manager', cmd: 'certlm.msc', run: true },
				{ label: 'Event Viewer', cmd: 'eventvwr.msc', run: true },
				{ label: 'Group Policy Editor', cmd: 'gpedit.msc', run: true },
				{ label: 'Services', cmd: 'services.msc', run: true },
				{ label: 'Task Scheduler', cmd: 'taskschd.msc', run: true },
				{ label: 'Disk Management', cmd: 'diskmgmt.msc', run: true },
			]
		},
		{
			title: 'CMD / PowerShell',
			color: 'var(--orange)',
			items: [
				{ label: 'See computer SN', cmd: 'set comp', run: false },
				{ label: 'Bypass UAC — launch cmd as admin', cmd: 'runas /user:admin@domain.com cmd.exe', run: false },
				{ label: 'Add local admin (Azure AD)', cmd: 'Net localgroup Administrators /add "AzureAD\\<UPN>"', run: false },
				{ label: 'Get serial number (PS)', cmd: 'Get-WmiObject win32_bios | Select-Object SerialNumber', run: false },
				{ label: 'Flush DNS', cmd: 'ipconfig /flushdns', run: false },
				{ label: 'Release & renew IP', cmd: 'ipconfig /release && ipconfig /renew', run: false },
				{ label: 'Check open ports', cmd: 'netstat -ano | findstr LISTENING', run: false },
				{ label: 'Test connectivity', cmd: 'Test-NetConnection -ComputerName <host> -Port <port>', run: false },
				{ label: 'Get AD user info (PS)', cmd: 'Get-ADUser -Identity <user> -Properties *', run: false },
				{ label: 'Force GP update', cmd: 'gpupdate /force', run: false },
			]
		},
		{
			title: 'Outlook',
			color: 'var(--mustard)',
			items: [
				{ label: 'Reset folder names (language fix)', cmd: 'Outlook.exe /resetfolderstructure', run: false },
				{ label: 'Safe mode', cmd: 'Outlook.exe /safe', run: false },
				{ label: 'Rebuild profile', cmd: 'Outlook.exe /cleanprofile', run: false },
				{ label: 'Clear autocomplete cache', cmd: 'Outlook.exe /cleanautocompletecache', run: false },
			]
		},
		{
			title: 'Bypass OOBE',
			color: 'var(--sage)',
			items: [
				{ label: 'Skip network setup', cmd: 'OOBE\\bypassnro', note: 'Shift + F10 first', run: false },
				{ label: 'Local account only', cmd: 'start ms-cxh:localonly', run: false },
			]
		},
		{
			title: 'Teams — Call Queues & Auto Attendants',
			color: 'var(--purple, #6264a7)',
			items: [
				{ label: 'Resource accounts (CQ/AA) require a resource license', cmd: '', note: 'Assign license before configuring', run: false },
				{ label: 'Create Call Queue before Auto Attendant', cmd: '', note: 'AA redirects to CQ, not the other way around', run: false },
				{ label: 'Enable presence-based routing on CQ', cmd: '', note: 'Agents only ring when available', run: false },
				{ label: 'Set ring timeout lower for tighter exception handling', cmd: '', note: 'Shorter timeout = faster fallback to overflow action', run: false },
				{ label: 'AA timeout action → Voice App → target CQ', cmd: '', note: 'Redirect to a queue or voicemail on no answer', run: false },
			]
		},
	];

	const docker: DockerItem[] = [
		{ label: 'List running containers', cmd: 'docker ps' },
		{ label: 'List all containers', cmd: 'docker ps -a' },
		{ label: 'List images', cmd: 'docker images' },
		{ label: 'Pull image', cmd: 'docker pull <image>:<tag>' },
		{ label: 'Run container', cmd: 'docker run -d --name <name> -p <host>:<container> <image>' },
		{ label: 'Stop container', cmd: 'docker stop <name>' },
		{ label: 'Remove container', cmd: 'docker rm <name>' },
		{ label: 'Remove image', cmd: 'docker rmi <image>' },
		{ label: 'View logs', cmd: 'docker logs <name> --since 10m' },
		{ label: 'Follow logs live', cmd: 'docker logs -f <name>' },
		{ label: 'Exec into container', cmd: 'docker exec -it <name> /bin/bash' },
		{ label: 'Inspect container', cmd: 'docker inspect <name>' },
		{ label: 'View resource usage', cmd: 'docker stats' },
		{ label: 'Prune unused images', cmd: 'docker image prune -a' },
		{ label: 'Prune everything unused', cmd: 'docker system prune -a' },
		{ label: 'Copy file to container', cmd: 'docker cp <file> <name>:/path/in/container' },
		{ label: 'Copy file from container', cmd: 'docker cp <name>:/path/in/container <dest>' },
	];

	const compose: DockerItem[] = [
		{ label: 'Start stack (detached)', cmd: 'docker compose up -d' },
		{ label: 'Stop stack', cmd: 'docker compose down' },
		{ label: 'Stop + remove volumes', cmd: 'docker compose down -v', note: '⚠ Destroys data volumes' },
		{ label: 'Restart single service', cmd: 'docker compose restart <service>' },
		{ label: 'Rebuild + start', cmd: 'docker compose up -d --build' },
		{ label: 'Pull latest images', cmd: 'docker compose pull' },
		{ label: 'View logs', cmd: 'docker compose logs -f <service>' },
		{ label: 'View all service status', cmd: 'docker compose ps' },
		{ label: 'Run one-off command', cmd: 'docker compose run --rm <service> <cmd>' },
	];

	const tools = [
		{ label: 'Subnet Calculator', url: 'https://www.subnet-calculator.com', desc: 'CIDR / subnet math' },
		{ label: 'CIDR.xyz', url: 'https://cidr.xyz', desc: 'Visual IP range explorer' },
		{ label: 'MXToolbox', url: 'https://mxtoolbox.com', desc: 'DNS, MX, blacklist checks' },
		{ label: 'SSL Labs', url: 'https://www.ssllabs.com/ssltest/', desc: 'TLS certificate audit' },
		{ label: 'DNSChecker', url: 'https://dnschecker.org', desc: 'Global DNS propagation' },
		{ label: 'Crontab Guru', url: 'https://crontab.guru', desc: 'Cron expression editor' },
		{ label: 'ExplainShell', url: 'https://explainshell.com', desc: 'Explains any shell command' },
		{ label: 'VirusTotal', url: 'https://www.virustotal.com', desc: 'File / URL / IP scanner' },
		{ label: 'AbuseIPDB', url: 'https://www.abuseipdb.com', desc: 'Malicious IP lookup' },
		{ label: 'Cloudflare Dash', url: 'https://dash.cloudflare.com', desc: 'DNS, tunnels, firewall' },
		{ label: 'Docker Hub', url: 'https://hub.docker.com', desc: 'Container image registry' },
		{ label: 'Regex101', url: 'https://regex101.com', desc: 'Regex tester & explainer' },
	];

	const ports = [
		{ port: '21',    proto: 'TCP',     service: 'FTP' },
		{ port: '22',    proto: 'TCP',     service: 'SSH' },
		{ port: '25',    proto: 'TCP',     service: 'SMTP' },
		{ port: '53',    proto: 'TCP/UDP', service: 'DNS' },
		{ port: '80',    proto: 'TCP',     service: 'HTTP' },
		{ port: '443',   proto: 'TCP',     service: 'HTTPS' },
		{ port: '445',   proto: 'TCP',     service: 'SMB' },
		{ port: '3306',  proto: 'TCP',     service: 'MySQL' },
		{ port: '3389',  proto: 'TCP',     service: 'RDP' },
		{ port: '5432',  proto: 'TCP',     service: 'PostgreSQL' },
		{ port: '5985',  proto: 'TCP',     service: 'WinRM HTTP' },
		{ port: '5986',  proto: 'TCP',     service: 'WinRM HTTPS' },
		{ port: '8080',  proto: 'TCP',     service: 'HTTP alt' },
		{ port: '8443',  proto: 'TCP',     service: 'HTTPS alt' },
		{ port: '27017', proto: 'TCP',     service: 'MongoDB' },
	];
</script>

<svelte:head><title>Work — olfke.be</title></svelte:head>

<div class="top-bar"></div>

<div class="layout">
	<aside class="rail">
		<a href="/" class="rail-logo">O</a>
		<div class="rail-line"></div>
		<nav class="rail-links">
			<a href="/work" class="rail-link active">Work</a>
			<a href="/" class="rail-link">Home</a>
		</nav>
		<div class="rail-line"></div>
		<div class="rail-year">2025</div>
	</aside>

	<main>
		<header class="page-header">
			<div class="ph-left">
				<p class="ph-back"><a href="/">← Olfke.be</a></p>
				<h1 class="ph-title">Work</h1>
				<p class="ph-desc">Shortcuts, references & tools for daily IT work.</p>
			</div>
			<div class="ph-swatch" style="background:var(--teal)"></div>
		</header>

		<!-- SHORTCUTS -->
		<section class="content-section">
			{#each sections as section}
				<div class="shortcut-group">
					<div class="sg-header">
						<div class="sg-dot" style="background:{section.color}"></div>
						<h2 class="sg-title">{section.title}</h2>
					</div>
					<div class="sg-items">
						{#each section.items as item}
							<div class="sg-item">
								<div class="si-label">{item.label}</div>
								{#if item.cmd}
									<div class="si-cmd-wrap">
										{#if item.run}
											<span class="si-prefix mono">⊞ + R &nbsp;›</span>
										{/if}
										<code class="si-cmd">{item.cmd}</code>
										<button
											class="si-copy"
											class:copied={copied === item.cmd}
											on:click={() => copy(item.cmd, item.cmd)}
										>
											{copied === item.cmd ? '✓' : 'copy'}
										</button>
									</div>
								{/if}
								{#if item.note}
									<div class="si-note">{item.note}</div>
								{/if}
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</section>

		<!-- BOTTOM-UP TROUBLESHOOTING -->
		<section class="content-section cs-alt">
			<div class="shortcut-group">
				<div class="sg-header">
					<div class="sg-dot" style="background:#b83232"></div>
					<h2 class="sg-title">Network Troubleshooting — Bottom Up</h2>
				</div>
				<p class="sg-intro">Work from physical layer up. Confirm each layer before moving to the next.</p>
				<div class="osi-stack">

					<div class="osi-layer">
						<div class="osi-left">
							<div class="osi-num">L1</div>
							<div class="osi-name">Physical</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">Cable plugged in, link light on switch/NIC?</div>
							<div class="osi-check">Try different port or cable</div>
							<div class="osi-check">Check NIC in Device Manager — no yellow flag</div>
							<div class="osi-cmd"><code>ipconfig</code> — is there an adapter at all?</div>
						</div>
					</div>

					<div class="osi-layer">
						<div class="osi-left">
							<div class="osi-num">L2</div>
							<div class="osi-name">Data Link</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">APIPA address (169.254.x.x)? → DHCP not reaching</div>
							<div class="osi-check">Verify VLAN assignment on switch port</div>
							<div class="osi-cmd"><code>arp -a</code> — can you see the gateway MAC?</div>
							<div class="osi-cmd"><code>ipconfig /all</code> — check MAC, adapter state</div>
						</div>
					</div>

					<div class="osi-layer">
						<div class="osi-left">
							<div class="osi-num">L3</div>
							<div class="osi-name">Network</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">Correct IP, subnet mask and default gateway?</div>
							<div class="osi-check">Ping 127.0.0.1 → stack alive</div>
							<div class="osi-check">Ping own IP → NIC responding</div>
							<div class="osi-check">Ping gateway → local routing works</div>
							<div class="osi-check">Ping 8.8.8.8 → internet reachability (no DNS yet)</div>
							<div class="osi-cmd"><code>route print</code> — correct default route?</div>
							<div class="osi-cmd"><code>tracert 8.8.8.8</code> — where does it stop?</div>
						</div>
					</div>

					<div class="osi-layer">
						<div class="osi-left">
							<div class="osi-num">L4</div>
							<div class="osi-name">Transport</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">Can you reach the port? Firewall blocking it?</div>
							<div class="osi-check">TCP vs UDP — right protocol?</div>
							<div class="osi-cmd"><code>Test-NetConnection -ComputerName &lt;host&gt; -Port &lt;port&gt;</code></div>
							<div class="osi-cmd"><code>netstat -ano | findstr :&lt;port&gt;</code> — is it listening?</div>
						</div>
					</div>

					<div class="osi-layer">
						<div class="osi-left">
							<div class="osi-num">L7</div>
							<div class="osi-name">Application</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">Ping by name vs IP — name fails but IP works? → DNS</div>
							<div class="osi-check">Flush DNS: <code>ipconfig /flushdns</code></div>
							<div class="osi-check">Check application logs / Event Viewer</div>
							<div class="osi-check">Auth issue? Test with explicit credentials</div>
							<div class="osi-check">Certificate error? Check validity + chain</div>
							<div class="osi-cmd"><code>nslookup &lt;host&gt; &lt;dns-server&gt;</code> — test specific DNS</div>
						</div>
					</div>

					<div class="osi-layer osi-vpn">
						<div class="osi-left">
							<div class="osi-num">VPN</div>
							<div class="osi-name">Extra</div>
						</div>
						<div class="osi-checks">
							<div class="osi-check">Split tunnel or full tunnel? What routes are pushed?</div>
							<div class="osi-check">Correct subnet mask in VPN profile? (classic: /23 pushed instead of /22)</div>
							<div class="osi-check">Can ping some IPs in range but not all? → netmask issue</div>
							<div class="osi-check">DC agent issue on firewall → restart the DC agent service</div>
							<div class="osi-cmd"><code>route print</code> while connected — VPN routes present?</div>
						</div>
					</div>

				</div>
			</div>
		</section>

		<!-- DOCKER -->
		<section class="content-section">
			<div class="shortcut-group">
				<div class="sg-header">
					<div class="sg-dot" style="background:var(--teal)"></div>
					<h2 class="sg-title">Docker</h2>
				</div>
				<div class="sg-items">
					{#each docker as item}
						<div class="sg-item">
							<div class="si-label">{item.label}</div>
							<div class="si-cmd-wrap">
								<code class="si-cmd">{item.cmd}</code>
								<button
									class="si-copy"
									class:copied={copied === item.cmd}
									on:click={() => copy(item.cmd, item.cmd)}
								>
									{copied === item.cmd ? '✓' : 'copy'}
								</button>
							</div>
							{#if item.note}
								<div class="si-note">{item.note}</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>

			<div class="shortcut-group" style="margin-top:2.5rem">
				<div class="sg-header">
					<div class="sg-dot" style="background:var(--orange)"></div>
					<h2 class="sg-title">Docker Compose</h2>
				</div>
				<div class="sg-items">
					{#each compose as item}
						<div class="sg-item">
							<div class="si-label">{item.label}</div>
							<div class="si-cmd-wrap">
								<code class="si-cmd">{item.cmd}</code>
								<button
									class="si-copy"
									class:copied={copied === item.cmd}
									on:click={() => copy(item.cmd, item.cmd)}
								>
									{copied === item.cmd ? '✓' : 'copy'}
								</button>
							</div>
							{#if item.note}
								<div class="si-note warning-note">{item.note}</div>
							{/if}
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- TOOLS -->
		<section class="content-section cs-alt">
			<div class="shortcut-group">
				<div class="sg-header">
					<div class="sg-dot" style="background:var(--mustard)"></div>
					<h2 class="sg-title">Online Tools</h2>
				</div>
				<div class="tools-grid">
					{#each tools as tool}
						<a href={tool.url} target="_blank" rel="noopener" class="tool-item">
							<div class="ti-name">{tool.label}</div>
							<div class="ti-desc">{tool.desc}</div>
							<span class="ti-arrow">↗</span>
						</a>
					{/each}
				</div>
			</div>
		</section>

		<!-- PORTS -->
		<section class="content-section">
			<div class="shortcut-group">
				<div class="sg-header">
					<div class="sg-dot" style="background:var(--orange)"></div>
					<h2 class="sg-title">Common Ports</h2>
				</div>
				<div class="ports-table">
					<div class="pt-head">
						<span>Port</span>
						<span>Protocol</span>
						<span>Service</span>
					</div>
					{#each ports as p}
						<div class="pt-row">
							<span class="pt-port mono">{p.port}</span>
							<span class="pt-proto mono">{p.proto}</span>
							<span class="pt-svc">{p.service}</span>
						</div>
					{/each}
				</div>
			</div>
		</section>

	</main>
</div>

<footer>
	<span>Olfke.be — Ghent, Belgium</span>
	<span>Work reference</span>
</footer>

<style>
.mono { font-family: var(--font-mono); }

.top-bar {
	height: 5px;
	background: linear-gradient(90deg, var(--wood-dk), var(--wood-lt), var(--wood-dk));
}
.layout { display: grid; grid-template-columns: 64px 1fr; min-height: calc(100vh - 5px); }

.rail {
	display: flex; flex-direction: column; align-items: center;
	padding: 2rem 0; background: var(--wood-dk);
	position: sticky; top: 5px; height: calc(100vh - 5px); gap: 1.5rem;
}
.rail-logo { font-family: var(--font-display); font-size: 1.6rem; color: var(--cream); transition: color 0.2s; }
.rail-logo:hover { color: var(--wood-lt); }
.rail-line { width: 1px; flex: 1; background: rgba(255,255,255,0.1); }
.rail-links { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }
.rail-link {
	font-family: var(--font-body); font-size: 0.65rem; font-weight: 500;
	letter-spacing: 0.12em; color: rgba(255,255,255,0.4);
	writing-mode: vertical-rl; transition: color 0.2s;
}
.rail-link:hover, .rail-link.active { color: var(--wood-lt); }
.rail-year { font-family: var(--font-mono); font-size: 0.52rem; color: rgba(255,255,255,0.2); letter-spacing: 0.1em; writing-mode: vertical-rl; }

main { display: flex; flex-direction: column; }

.page-header { display: flex; align-items: stretch; border-bottom: 1px solid var(--paper); min-height: 200px; }
.ph-left { flex: 1; padding: 3rem 5rem; display: flex; flex-direction: column; gap: 0.75rem; justify-content: flex-end; }
.ph-back { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.1em; color: var(--char-lt); }
.ph-back a { color: inherit; transition: color 0.2s; }
.ph-back a:hover { color: var(--teal); }
.ph-title { font-family: var(--font-display); font-size: clamp(3rem, 7vw, 6rem); line-height: 1; color: var(--char); }
.ph-desc { font-family: var(--font-body); font-size: 0.9rem; font-weight: 300; color: var(--char-lt); }
.ph-swatch { width: 120px; flex-shrink: 0; }

.content-section { padding: 3rem 5rem; border-bottom: 1px solid var(--paper); }
.cs-alt { background: var(--warm); }

.shortcut-group { display: flex; flex-direction: column; gap: 1.25rem; }
.sg-header { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem; }
.sg-dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
.sg-title { font-family: var(--font-display); font-size: 1.4rem; color: var(--char); }
.sg-intro { font-family: var(--font-body); font-size: 0.85rem; font-weight: 300; color: var(--char-lt); font-style: italic; }

.sg-items { display: flex; flex-direction: column; }
.sg-item {
	display: grid; grid-template-columns: 240px 1fr;
	align-items: center; gap: 1.5rem;
	padding: 0.65rem 0;
	border-bottom: 1px solid var(--paper);
	transition: background 0.15s;
}
.sg-item:last-child { border-bottom: none; }
.sg-item:hover { background: rgba(0,0,0,0.02); margin: 0 -1rem; padding: 0.65rem 1rem; }
.si-label { font-family: var(--font-body); font-size: 0.85rem; color: var(--char-mid); }
.si-cmd-wrap { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
.si-prefix { font-size: 0.58rem; color: var(--char-lt); letter-spacing: 0.05em; white-space: nowrap; }
.si-cmd {
	font-family: var(--font-mono); font-size: 0.7rem;
	background: var(--paper); color: var(--char);
	padding: 0.2rem 0.55rem; border-radius: 2px; letter-spacing: 0.02em;
}
.si-copy {
	font-family: var(--font-mono); font-size: 0.5rem;
	letter-spacing: 0.1em; color: var(--char-lt);
	background: none; border: 1px solid var(--paper);
	padding: 0.15rem 0.4rem; cursor: pointer; transition: all 0.15s; border-radius: 2px;
}
.si-copy:hover { border-color: var(--teal); color: var(--teal); }
.si-copy.copied { border-color: var(--sage); color: var(--sage); }
.si-note { font-family: var(--font-mono); font-size: 0.6rem; color: var(--char-lt); font-style: italic; grid-column: 2; }
.warning-note { color: var(--red, #b83232) !important; }

/* OSI Stack */
.osi-stack { display: flex; flex-direction: column; border: 1px solid var(--paper); margin-top: 0.5rem; }
.osi-layer { display: grid; grid-template-columns: 90px 1fr; border-bottom: 1px solid var(--paper); transition: background 0.15s; }
.osi-layer:last-child { border-bottom: none; }
.osi-layer:hover { background: rgba(0,0,0,0.02); }
.osi-vpn { background: rgba(90,122,90,0.04); }
.osi-left { background: var(--paper); padding: 1.25rem 1rem; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.25rem; border-right: 1px solid var(--paper); text-align: center; }
.osi-num  { font-family: var(--font-mono); font-size: 0.72rem; font-weight: 500; color: var(--char); letter-spacing: 0.05em; }
.osi-name { font-family: var(--font-body); font-size: 0.6rem; color: var(--char-lt); letter-spacing: 0.08em; }
.osi-checks { padding: 1rem 1.5rem; display: flex; flex-direction: column; gap: 0.35rem; }
.osi-check { font-family: var(--font-body); font-size: 0.78rem; font-weight: 300; color: var(--char-mid); padding-left: 0.75rem; position: relative; line-height: 1.4; }
.osi-check::before { content: "—"; position: absolute; left: 0; color: var(--char-lt); font-size: 0.6rem; top: 0.1rem; }
.osi-check code { font-family: var(--font-mono); font-size: 0.68rem; background: var(--paper); padding: 0.1rem 0.3rem; }
.osi-cmd { font-family: var(--font-mono); font-size: 0.68rem; color: var(--char-lt); background: var(--paper); padding: 0.25rem 0.6rem; margin-top: 0.1rem; border-left: 2px solid var(--teal); }

/* Tools */
.tools-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 1px; background: var(--paper); border: 1px solid var(--paper); }
.tool-item { background: var(--warm); padding: 1rem 1.1rem; display: flex; flex-direction: column; gap: 0.25rem; position: relative; transition: background 0.15s; }
.tool-item:hover { background: var(--cream); }
.ti-name { font-family: var(--font-body); font-size: 0.82rem; font-weight: 500; color: var(--char); }
.ti-desc { font-family: var(--font-body); font-size: 0.7rem; font-weight: 300; color: var(--char-lt); line-height: 1.4; }
.ti-arrow { position: absolute; top: 0.75rem; right: 0.75rem; font-size: 0.7rem; color: var(--paper); transition: color 0.15s; }
.tool-item:hover .ti-arrow { color: var(--teal); }

/* Ports */
.ports-table { border: 1px solid var(--paper); }
.pt-head { display: grid; grid-template-columns: 80px 100px 1fr; padding: 0.5rem 1rem; background: var(--paper); font-family: var(--font-mono); font-size: 0.52rem; letter-spacing: 0.15em; color: var(--char-lt); border-bottom: 1px solid var(--paper); }
.pt-row { display: grid; grid-template-columns: 80px 100px 1fr; padding: 0.5rem 1rem; border-bottom: 1px solid var(--paper); transition: background 0.15s; }
.pt-row:last-child { border-bottom: none; }
.pt-row:hover { background: var(--warm); }
.pt-port  { font-size: 0.72rem; color: var(--teal); font-weight: 500; }
.pt-proto { font-size: 0.65rem; color: var(--char-lt); }
.pt-svc   { font-family: var(--font-body); font-size: 0.78rem; color: var(--char-mid); }

footer {
	display: flex; justify-content: space-between;
	padding: 1.25rem 1.25rem 1.25rem calc(64px + 5rem);
	border-top: 2px solid var(--paper);
	font-family: var(--font-mono); font-size: 0.55rem;
	letter-spacing: 0.1em; color: var(--char-lt);
	background: var(--warm);
}

@media (max-width: 900px) {
	.layout { grid-template-columns: 1fr; }
	.rail   { display: none; }
	.content-section { padding: 2.5rem 1.5rem; }
	.ph-left { padding: 3rem 1.5rem 1.5rem; }
	.ph-swatch { width: 60px; }
	.sg-item { grid-template-columns: 1fr; gap: 0.4rem; }
	.tools-grid { grid-template-columns: 1fr 1fr; }
	footer { padding: 1.25rem 1.5rem; }
}
</style>