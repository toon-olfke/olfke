<script lang="ts">
	export let data: { user: App.Locals['user'] };

	const projects = [
		{
			label: 'OVAM BUDDY',
			tag: 'INTERNAL TOOL',
			description: 'MATIS waste management — quarterly OVAM CSV submissions.',
			url: 'https://ovam-buddy.olfke.be',
			color: '#38c8c8',
			glow: 'rgba(56,200,200,0.15)',
			status: 'LIVE'
		},
		{
			label: 'HOTEL 505',
			tag: 'PRIVATE',
			description: 'A birthday gift. A letter. A hope.',
			url: 'https://bday-m.olfke.be',
			color: '#c8a84a',
			glow: 'rgba(200,168,74,0.12)',
			status: 'LIVE'
		}
	];
</script>

<svelte:head>
	<title>olfke.be</title>
	<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
</svelte:head>

<!-- Corner chrome -->
<div class="chrome-tl"></div>
<div class="chrome-tr"></div>
<div class="chrome-bl"></div>
<div class="chrome-br"></div>

<!-- Atmosphere layers -->
<div class="atmo-green"></div>
<div class="atmo-purple"></div>
<div class="atmo-vignette"></div>

<!-- Mandala background geometry -->
<div class="mandala" aria-hidden="true">
	<svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
		<circle cx="400" cy="400" r="350" stroke="#3dffa0" stroke-width="0.4" opacity="0.06"/>
		<circle cx="400" cy="400" r="280" stroke="#3dffa0" stroke-width="0.4" opacity="0.05"/>
		<circle cx="400" cy="400" r="210" stroke="#3dffa0" stroke-width="0.4" opacity="0.04"/>
		<circle cx="400" cy="400" r="140" stroke="#3dffa0" stroke-width="0.4" opacity="0.04"/>
		<circle cx="400" cy="400" r="70"  stroke="#3dffa0" stroke-width="0.4" opacity="0.05"/>
		<!-- Radial lines every 30deg -->
		{#each Array(12) as _, i}
			<line
				x1="400" y1="400"
				x2={400 + 350 * Math.cos((i * 30 - 90) * Math.PI / 180)}
				y2={400 + 350 * Math.sin((i * 30 - 90) * Math.PI / 180)}
				stroke="#3dffa0" stroke-width="0.3" opacity="0.04"
			/>
		{/each}
		<!-- Outer tick marks -->
		{#each Array(36) as _, i}
			<line
				x1={400 + 342 * Math.cos((i * 10 - 90) * Math.PI / 180)}
				y1={400 + 342 * Math.sin((i * 10 - 90) * Math.PI / 180)}
				x2={400 + 355 * Math.cos((i * 10 - 90) * Math.PI / 180)}
				y2={400 + 355 * Math.sin((i * 10 - 90) * Math.PI / 180)}
				stroke="#3dffa0" stroke-width="0.5" opacity="0.07"
			/>
		{/each}
		<!-- Inner hex -->
		<polygon points="400,190 572,295 572,505 400,610 228,505 228,295"
			stroke="#3dffa0" stroke-width="0.5" fill="none" opacity="0.06"/>
		<polygon points="400,260 535,335 535,465 400,540 265,465 265,335"
			stroke="#c8a84a" stroke-width="0.4" fill="none" opacity="0.05"/>
	</svg>
</div>

<!-- Nav -->
<nav>
	<a href="/" class="nav-brand">
		<span class="brand-bracket">[</span>
		OLFKE.BE
		<span class="brand-bracket">]</span>
	</a>
	<div class="nav-center">
		<span class="nav-status"><span class="nav-dot"></span>SYSTEM ONLINE</span>
	</div>
	<div class="nav-links">
		<a href="/work">WORK</a>
		{#if data.user}
			<a href="/homelab" class="nav-green">HOMELAB</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">LOGOUT</button>
			</form>
		{:else}
			<a href="/login">ACCESS</a>
		{/if}
	</div>
</nav>

<main>

	<!-- ═══ HERO ═══ -->
	<section class="hero">

		<div class="hero-content">
			<div class="hero-eyebrow">
				<span class="mono">// SYS_OLFKE_BE</span>
				<span class="eyebrow-line"></span>
				<span class="mono dim">v1.0</span>
			</div>

			<h1 class="hero-h1">
				<span class="h1-name">OLFKE</span><span class="h1-tld">.BE</span>
			</h1>

			<p class="hero-sub">Personal hub — projects, tools & infrastructure.</p>

			<div class="hero-chips">
				<span class="chip green-chip">GHENT, BE</span>
				<span class="chip teal-chip">ONLINE</span>
				<span class="chip amber-chip">SELF-HOSTED</span>
			</div>
		</div>

		<div class="hero-panel">
			<div class="panel-header">
				<span class="mono sm">SYSTEM STATUS</span>
				<span class="panel-dot"></span>
			</div>
			<div class="panel-rows">
				<div class="panel-row">
					<span class="pr-key">STATUS</span>
					<span class="pr-val green">OPERATIONAL</span>
				</div>
				<div class="panel-row">
					<span class="pr-key">LOCATION</span>
					<span class="pr-val">51.05°N / 3.72°E</span>
				</div>
				<div class="panel-row">
					<span class="pr-key">HOST</span>
					<span class="pr-val teal">SELF / GHENT</span>
				</div>
				<div class="panel-row">
					<span class="pr-key">STACK</span>
					<span class="pr-val">SK · LUCIA · PG</span>
				</div>
				<div class="panel-row">
					<span class="pr-key">UPTIME</span>
					<span class="pr-val green">99.9%</span>
				</div>
			</div>
			<div class="panel-footer mono sm dim">OLFKE_HUB_v1 // GHENT</div>
		</div>

	</section>

	<!-- ═══ NAV CARDS ═══ -->
	<div class="section-head">
		<div class="sh-line"></div>
		<span class="sh-label mono">NAVIGATE</span>
		<div class="sh-line"></div>
	</div>

	<section class="nav-cards">

		<a href="/work" class="ncard ncard-teal">
			<div class="nc-corner nc-tl"></div>
			<div class="nc-corner nc-br"></div>
			<div class="nc-glow" style="background:radial-gradient(ellipse at 0% 100%, rgba(56,200,200,0.12) 0%, transparent 60%)"></div>
			<div class="nc-top">
				<span class="nc-index mono">01 /</span>
				<span class="nc-tag" style="color:var(--teal);border-color:var(--teal-dim)">PUBLIC</span>
			</div>
			<div class="nc-mid">
				<h2 class="nc-title">WORK</h2>
				<div class="nc-bar" style="background:var(--teal)"></div>
			</div>
			<p class="nc-desc">IT shortcuts, tool references & daily bookmarks for sysadmin work.</p>
			<div class="nc-ghost">W</div>
			<div class="nc-enter" style="color:var(--teal)">
				<span>ENTER</span>
				<span class="nc-arrow">→</span>
			</div>
		</a>

		<a href="/homelab" class="ncard ncard-amber">
			<div class="nc-corner nc-tl"></div>
			<div class="nc-corner nc-br"></div>
			<div class="nc-glow" style="background:radial-gradient(ellipse at 0% 100%, rgba(216,128,32,0.1) 0%, transparent 60%)"></div>
			<div class="nc-top">
				<span class="nc-index mono">02 /</span>
				<span class="nc-tag" style="color:var(--amber);border-color:var(--amber-dim)">RESTRICTED</span>
			</div>
			<div class="nc-mid">
				<h2 class="nc-title">HOMELAB</h2>
				<div class="nc-bar" style="background:var(--amber)"></div>
			</div>
			<p class="nc-desc">Network topology, services & infrastructure. Ghent home setup.</p>
			<div class="nc-ghost">H</div>
			<div class="nc-enter" style="color:var(--amber)">
				<span>ENTER</span>
				<span class="nc-arrow">→</span>
			</div>
		</a>

	</section>

	<!-- ═══ PROJECTS ═══ -->
	<div class="section-head">
		<div class="sh-line"></div>
		<span class="sh-label mono">DEPLOYED</span>
		<div class="sh-line"></div>
	</div>

	<section class="projects">
		{#each projects as p}
			<a href={p.url} target="_blank" rel="noopener"
				class="pcard" style="--c:{p.color};--g:{p.glow}">
				<div class="pc-glow"></div>
				<div class="pc-top-bar"></div>
				<div class="pc-body">
					<div class="pc-head">
						<span class="pc-tag mono">{p.tag}</span>
						<span class="pc-live mono" style="color:{p.color}">● {p.status}</span>
					</div>
					<h3 class="pc-name">{p.label}</h3>
					<p class="pc-desc">{p.description}</p>
					<div class="pc-foot">
						<span class="pc-url mono">↗ {p.url.replace('https://','')}</span>
					</div>
				</div>
				<!-- Corner ornament -->
				<div class="pc-ornament">
					<svg viewBox="0 0 24 24" fill="none">
						<path d="M0 24 L0 0 L24 0" stroke="currentColor" stroke-width="1" fill="none"/>
					</svg>
				</div>
			</a>
		{/each}
	</section>

</main>

<footer>
	<span class="mono sm dim">OLFKE.BE // GHENT, BE // {new Date().getFullYear()}</span>
	<span class="mono sm dim">SVELTEKIT · LUCIA · DRIZZLE · DOCKER</span>
</footer>

<style>
	/* ─── Chrome ─── */
	.chrome-tl,.chrome-tr,.chrome-bl,.chrome-br {
		position:fixed;width:24px;height:24px;z-index:300;pointer-events:none;
	}
	.chrome-tl{top:12px;left:12px;border-top:1px solid var(--green-mid);border-left:1px solid var(--green-mid);}
	.chrome-tr{top:12px;right:12px;border-top:1px solid var(--green-mid);border-right:1px solid var(--green-mid);}
	.chrome-bl{bottom:12px;left:12px;border-bottom:1px solid var(--green-mid);border-left:1px solid var(--green-mid);}
	.chrome-br{bottom:12px;right:12px;border-bottom:1px solid var(--green-mid);border-right:1px solid var(--green-mid);}

	/* ─── Atmosphere ─── */
	.atmo-green {
		position:fixed;bottom:-20vh;left:-10vw;
		width:70vw;height:70vh;
		background:radial-gradient(ellipse, rgba(30,140,80,0.09) 0%, transparent 65%);
		pointer-events:none;z-index:0;
	}
	.atmo-purple {
		position:fixed;top:-15vh;right:-15vw;
		width:55vw;height:55vh;
		background:radial-gradient(ellipse, rgba(80,40,140,0.08) 0%, transparent 60%);
		pointer-events:none;z-index:0;
	}
	.atmo-vignette {
		position:fixed;inset:0;
		background:radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(3,4,8,0.8) 100%);
		pointer-events:none;z-index:0;
	}

	/* ─── Mandala ─── */
	.mandala {
		position:fixed;
		top:50%;left:50%;
		transform:translate(-50%,-50%);
		width:min(90vw,800px);height:min(90vw,800px);
		pointer-events:none;z-index:0;
		opacity:1;
		animation:spin 120s linear infinite;
	}
	@keyframes spin{from{transform:translate(-50%,-50%) rotate(0deg);}to{transform:translate(-50%,-50%) rotate(360deg);}}

	/* ─── Nav ─── */
	nav {
		position:fixed;top:0;left:0;right:0;z-index:200;
		display:grid;grid-template-columns:1fr 1fr 1fr;
		align-items:center;
		padding:0.85rem 2rem;
		border-bottom:1px solid var(--border);
		background:rgba(8,9,12,0.94);
		backdrop-filter:blur(24px);
	}
	.nav-brand {
		font-family:var(--font-ui);font-weight:700;
		font-size:0.9rem;letter-spacing:0.18em;color:var(--green);
		display:flex;align-items:center;gap:0.3rem;
		transition:color 0.2s;
	}
	.nav-brand:hover{color:#fff;}
	.brand-bracket{color:var(--green-mid);font-weight:300;}
	.nav-center{display:flex;justify-content:center;}
	.nav-status{
		display:flex;align-items:center;gap:0.5rem;
		font-family:var(--font-mono);font-size:0.58rem;
		letter-spacing:0.1em;color:var(--text-dim);
	}
	.nav-dot {
		width:6px;height:6px;border-radius:50%;
		background:var(--green);box-shadow:0 0 8px var(--green);
		animation:blink 2.5s infinite;
	}
	@keyframes blink{0%,100%{opacity:1;}50%{opacity:0.3;}}
	.nav-links{display:flex;gap:1.75rem;align-items:center;justify-content:flex-end;}
	.nav-links a,.nav-btn {
		font-family:var(--font-ui);font-weight:600;font-size:0.72rem;
		letter-spacing:0.14em;color:var(--text-muted);
		background:none;border:none;cursor:pointer;
		transition:color 0.2s;padding:0;
	}
	.nav-links a:hover,.nav-btn:hover{color:var(--green);}
	.nav-green{color:var(--green) !important;}

	/* ─── Main ─── */
	main {
		position:relative;z-index:1;
		max-width:1200px;margin:0 auto;
		padding:5rem 2.5rem 3rem;
		display:flex;flex-direction:column;
	}

	/* ─── HERO ─── */
	.hero {
		display:grid;grid-template-columns:1fr 280px;
		gap:3rem;align-items:start;
		padding:3rem 0 3.5rem;
	}

	.hero-eyebrow {
		display:flex;align-items:center;gap:0.75rem;
		margin-bottom:1.25rem;
	}
	.mono { font-family:var(--font-mono);letter-spacing:0.05em; }
	.sm   { font-size:0.6rem; }
	.dim  { color:var(--text-dim); }
	.eyebrow-line{flex:1;max-width:80px;height:1px;background:var(--border-mid);}

	.hero-h1 {
		line-height:0.88;margin-bottom:1.25rem;
		display:flex;align-items:flex-end;gap:0.15em;flex-wrap:wrap;
	}
	.h1-name {
		font-family:var(--font-ui);font-weight:700;
		font-size:clamp(4rem,11vw,9rem);
		color:var(--text);letter-spacing:-0.01em;
		text-shadow:0 0 80px rgba(61,255,160,0.08);
	}
	.h1-tld {
		font-family:var(--font-ui);font-weight:300;
		font-size:clamp(3rem,8vw,7rem);
		color:var(--green);letter-spacing:-0.01em;
		text-shadow:0 0 40px rgba(61,255,160,0.35),0 0 80px rgba(61,255,160,0.12);
	}

	.hero-sub {
		font-family:var(--font-ui);font-weight:400;font-size:1rem;
		color:var(--text-muted);letter-spacing:0.04em;
		margin-bottom:1.5rem;
	}

	.hero-chips{display:flex;gap:0.5rem;flex-wrap:wrap;}
	.chip {
		font-family:var(--font-mono);font-size:0.58rem;
		letter-spacing:0.1em;padding:0.3rem 0.75rem;
		border:1px solid;
	}
	.green-chip {color:var(--green);border-color:var(--green-dim);background:rgba(61,255,160,0.05);}
	.teal-chip  {color:var(--teal); border-color:var(--teal-dim); background:rgba(56,200,200,0.05);}
	.amber-chip {color:var(--amber);border-color:var(--amber-dim);background:rgba(216,128,32,0.05);}

	/* ─── Hero panel ─── */
	.hero-panel {
		border:1px solid var(--border-mid);
		background:var(--bg-card);
		display:flex;flex-direction:column;
		margin-top:0.5rem;
		position:relative;
		overflow:hidden;
	}
	.hero-panel::before {
		content:'';position:absolute;top:0;left:0;right:0;height:2px;
		background:linear-gradient(90deg,var(--green),var(--teal),transparent);
	}
	.panel-header {
		display:flex;justify-content:space-between;align-items:center;
		padding:0.6rem 1rem;
		border-bottom:1px solid var(--border);
		font-family:var(--font-mono);font-size:0.58rem;
		letter-spacing:0.12em;color:var(--text-dim);
	}
	.panel-dot {
		width:6px;height:6px;border-radius:50%;
		background:var(--green);box-shadow:0 0 8px var(--green);
		animation:blink 2.5s infinite;
	}
	.panel-rows{display:flex;flex-direction:column;}
	.panel-row {
		display:flex;justify-content:space-between;align-items:center;
		padding:0.5rem 1rem;
		border-bottom:1px solid var(--border);
		gap:1rem;
	}
	.panel-row:last-child{border-bottom:none;}
	.pr-key {
		font-family:var(--font-mono);font-size:0.52rem;
		letter-spacing:0.15em;color:var(--text-dim);
		flex-shrink:0;
	}
	.pr-val {
		font-family:var(--font-mono);font-size:0.6rem;
		letter-spacing:0.06em;color:var(--text-muted);
		text-align:right;
	}
	.pr-val.green{color:var(--green);}
	.pr-val.teal {color:var(--teal);}
	.panel-footer {
		padding:0.5rem 1rem;
		border-top:1px solid var(--border);
		font-family:var(--font-mono);font-size:0.5rem;
		letter-spacing:0.1em;color:var(--text-dim);
	}

	/* ─── Section heads ─── */
	.section-head {
		display:flex;align-items:center;gap:1rem;
		margin:2rem 0 1.5rem;
	}
	.sh-line{flex:1;height:1px;background:var(--border);}
	.sh-label {
		font-family:var(--font-mono);font-size:0.6rem;
		letter-spacing:0.22em;color:var(--green-mid);
	}

	/* ─── Nav cards ─── */
	.nav-cards {
		display:grid;grid-template-columns:1fr 1fr;
		gap:4px;margin-bottom:3rem;
	}
	.ncard {
		position:relative;overflow:hidden;
		background:var(--bg-card);
		padding:2rem 2rem 1.75rem;
		display:flex;flex-direction:column;gap:0.75rem;
		transition:background 0.3s;
		min-height:300px;
	}
	.ncard:hover{background:var(--bg-card2);}
	.ncard::after{
		content:'';position:absolute;inset:0;
		background:linear-gradient(135deg,rgba(255,255,255,0.012) 0%,transparent 50%);
		pointer-events:none;
	}

	/* Corner ornaments */
	.nc-corner {
		position:absolute;width:16px;height:16px;
		pointer-events:none;
	}
	.nc-tl{top:0;left:0;border-top:1px solid var(--border-hi);border-left:1px solid var(--border-hi);}
	.nc-br{bottom:0;right:0;border-bottom:1px solid var(--border-hi);border-right:1px solid var(--border-hi);}
	.ncard:hover .nc-tl,.ncard:hover .nc-br{border-color:var(--border-mid);}
	.ncard-teal:hover .nc-tl,.ncard-teal:hover .nc-br{border-color:var(--teal-dim);}
	.ncard-amber:hover .nc-tl,.ncard-amber:hover .nc-br{border-color:var(--amber-dim);}

	.nc-glow{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.4s;}
	.ncard:hover .nc-glow{opacity:1;}

	.nc-top{display:flex;justify-content:space-between;align-items:center;}
	.nc-index{font-family:var(--font-mono);font-size:0.6rem;color:var(--text-dim);}
	.nc-tag {
		font-family:var(--font-mono);font-size:0.5rem;
		letter-spacing:0.12em;padding:0.2rem 0.55rem;border:1px solid;
	}

	.nc-mid{display:flex;flex-direction:column;gap:0.5rem;margin-top:auto;}
	.nc-title {
		font-family:var(--font-ui);font-weight:700;
		font-size:clamp(2.2rem,4.5vw,4rem);
		letter-spacing:0.02em;line-height:1;
		color:var(--text);transition:color 0.25s;
	}
	.ncard:hover .nc-title{color:var(--text);}
	.ncard-teal:hover .nc-title {color:var(--teal);}
	.ncard-amber:hover .nc-title{color:var(--amber);}

	.nc-bar{height:2px;width:0;transition:width 0.4s ease;opacity:0.7;}
	.ncard:hover .nc-bar{width:100%;}

	.nc-desc {
		font-family:var(--font-ui);font-weight:400;font-size:0.8rem;
		color:var(--text-muted);line-height:1.65;
	}
	.nc-ghost {
		position:absolute;bottom:-1.5rem;right:0.5rem;
		font-family:var(--font-ui);font-weight:700;
		font-size:10rem;line-height:1;
		color:var(--text);opacity:0.02;
		pointer-events:none;transition:opacity 0.3s;
		letter-spacing:-0.02em;
	}
	.ncard:hover .nc-ghost{opacity:0.04;}

	.nc-enter {
		display:flex;align-items:center;gap:0.5rem;
		font-family:var(--font-mono);font-size:0.62rem;
		letter-spacing:0.14em;
		margin-top:auto;
	}
	.nc-arrow{transition:transform 0.25s;}
	.ncard:hover .nc-arrow{transform:translateX(6px);}

	/* ─── Projects ─── */
	.projects {
		display:grid;
		grid-template-columns:repeat(auto-fill,minmax(360px,1fr));
		gap:4px;margin-bottom:4rem;
	}
	.pcard {
		position:relative;overflow:hidden;
		background:var(--bg-card);
		display:flex;flex-direction:column;
		transition:background 0.25s;
		min-height:200px;
	}
	.pcard:hover{background:var(--bg-card2);}

	.pc-glow {
		position:absolute;inset:0;pointer-events:none;
		background:radial-gradient(ellipse at 100% 0%, var(--g), transparent 55%);
		opacity:0;transition:opacity 0.35s;
	}
	.pcard:hover .pc-glow{opacity:1;}

	.pc-top-bar {
		height:2px;flex-shrink:0;
		background:linear-gradient(90deg,var(--c),transparent 70%);
	}
	.pc-body {
		flex:1;padding:1.4rem 1.5rem;
		display:flex;flex-direction:column;gap:0.55rem;
		position:relative;z-index:1;
	}
	.pc-head{display:flex;justify-content:space-between;align-items:center;}
	.pc-tag {
		font-family:var(--font-mono);font-size:0.5rem;
		letter-spacing:0.1em;color:var(--text-dim);
	}
	.pc-live{font-family:var(--font-mono);font-size:0.52rem;letter-spacing:0.08em;}

	.pc-name {
		font-family:var(--font-ui);font-weight:700;
		font-size:1.6rem;letter-spacing:0.02em;
		color:var(--text);transition:color 0.2s;line-height:1.1;
	}
	.pcard:hover .pc-name{color:var(--c);}

	.pc-desc {
		font-family:var(--font-ui);font-weight:400;font-size:0.82rem;
		color:var(--text-muted);line-height:1.6;flex:1;
	}
	.pc-foot{margin-top:auto;}
	.pc-url {
		font-family:var(--font-mono);font-size:0.56rem;
		letter-spacing:0.05em;color:var(--text-dim);
		transition:color 0.2s;
	}
	.pcard:hover .pc-url{color:var(--c);}

	/* Corner ornament */
	.pc-ornament {
		position:absolute;top:0;left:0;
		width:20px;height:20px;
		color:var(--border-hi);
		pointer-events:none;
	}
	.pcard:hover .pc-ornament{color:var(--c);opacity:0.5;}

	/* ─── Footer ─── */
	footer {
		display:flex;justify-content:space-between;
		padding:1.25rem 0;
		border-top:1px solid var(--border);
	}

	/* ─── Responsive ─── */
	@media(max-width:800px){
		.hero{grid-template-columns:1fr;}
		.hero-panel{display:none;}
		.nav-cards{grid-template-columns:1fr;}
		.mandala{display:none;}
		nav{grid-template-columns:1fr 1fr;padding:0.85rem 1.5rem;}
		.nav-center{display:none;}
		main{padding:4.5rem 1.25rem 2.5rem;}
	}
</style>