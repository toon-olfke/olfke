<script lang="ts">
	export let data: { user: App.Locals['user'] };

	const projects = [
		{
			label: 'OVAM BUDDY',
			tag: 'INTERNAL TOOL',
			description: 'MATIS waste management — quarterly OVAM CSV submissions.',
			url: 'https://ovam-buddy.olfke.be',
			accent: 'teal',
			color: '#3ab8b8',
			status: 'LIVE'
		},
		{
			label: 'HOTEL 505',
			tag: 'PRIVATE',
			description: 'A birthday gift. A letter. A hope.',
			url: 'https://bday-m.olfke.be',
			accent: 'gold',
			color: '#d4a843',
			status: 'LIVE'
		}
	];
</script>

<svelte:head><title>olfke.be</title></svelte:head>

<div class="chrome-tl"></div>
<div class="chrome-tr"></div>
<div class="chrome-bl"></div>
<div class="chrome-br"></div>

<nav>
	<span class="nav-brand">OLFKE.BE</span>
	<div class="nav-links">
		<a href="/work">WORK</a>
		{#if data.user}
			<a href="/homelab" class="nav-teal">HOMELAB</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">LOGOUT</button>
			</form>
		{:else}
			<a href="/login">ACCESS</a>
		{/if}
	</div>
</nav>

<div class="page-glow-amber"></div>
<div class="page-glow-teal"></div>

<main>
	<!-- HERO -->
	<section class="hero">
		<div class="hero-bg-text" aria-hidden="true">OLFKE</div>

		<div class="hero-left">
			<div class="eyebrow">
				<span class="eyebrow-dot"></span>
				TRANSMISSION INCOMING
				<span class="eyebrow-line"></span>
			</div>

			<h1>
				<span class="h1-white">OLFKE</span>
				<span class="h1-gold">.BE</span>
			</h1>

			<p class="tagline">Personal hub — projects, tools & infrastructure.</p>

			<div class="hero-tags">
				<span class="htag green">● GHENT, BE</span>
				<span class="htag teal">● ONLINE</span>
				<span class="htag amber">● SELF-HOSTED</span>
			</div>
		</div>

		<div class="hero-right">
			<div class="hex-svg">
				<svg viewBox="0 0 100 100" fill="none">
					<polygon points="50,5 88,27 88,73 50,95 12,73 12,27"
						stroke="#d4a843" stroke-width="1" fill="none" opacity="0.5"/>
					<polygon points="50,15 80,32 80,68 50,85 20,68 20,32"
						stroke="#d4a843" stroke-width="0.5" fill="none" opacity="0.25"/>
					<circle cx="50" cy="50" r="12" stroke="#3ab8b8" stroke-width="1.5" fill="none"/>
					<circle cx="50" cy="50" r="3" fill="#3ab8b8"/>
					<line x1="50" y1="30" x2="50" y2="38" stroke="#3ab8b8" stroke-width="1"/>
					<line x1="50" y1="62" x2="50" y2="70" stroke="#3ab8b8" stroke-width="1"/>
					<line x1="30" y1="50" x2="38" y2="50" stroke="#3ab8b8" stroke-width="1"/>
					<line x1="62" y1="50" x2="70" y2="50" stroke="#3ab8b8" stroke-width="1"/>
				</svg>
			</div>

			<div class="status-block">
				<div class="sb-row">
					<span class="sb-key">STATUS</span>
					<span class="sb-val green">OPERATIONAL <span class="blink"></span></span>
				</div>
				<div class="sb-divider"></div>
				<div class="sb-row">
					<span class="sb-key">LOCATION</span>
					<span class="sb-val">51.05°N / 3.72°E</span>
				</div>
				<div class="sb-divider"></div>
				<div class="sb-row">
					<span class="sb-key">STACK</span>
					<span class="sb-val teal">SVELTE · PGSQL · DOCKER</span>
				</div>
			</div>
		</div>
	</section>

	<!-- NAVIGATE -->
	<div class="ruled-label">
		<span class="rl-text">// NAVIGATE</span>
	</div>

	<section class="nav-cards">
		<a href="/work" class="ncard work">
			<div class="ncard-glow teal-glow"></div>
			<div class="ncard-top-bar teal-bar"></div>
			<div class="ncard-ghost">WORK</div>
			<div class="ncard-body">
				<div class="ncard-meta">
					<span class="ncard-num">01</span>
					<span class="ncard-badge teal-badge">PUBLIC</span>
				</div>
				<h2>WORK</h2>
				<p>IT shortcuts, tool references & daily bookmarks for sysadmin work.</p>
				<div class="ncard-enter teal-text">ENTER →</div>
			</div>
		</a>

		<a href="/homelab" class="ncard lab">
			<div class="ncard-glow amber-glow"></div>
			<div class="ncard-top-bar amber-bar"></div>
			<div class="ncard-ghost">LAB</div>
			<div class="ncard-body">
				<div class="ncard-meta">
					<span class="ncard-num">02</span>
					<span class="ncard-badge amber-badge">RESTRICTED</span>
				</div>
				<h2>HOMELAB</h2>
				<p>Network topology, services & infrastructure. Ghent home setup.</p>
				<div class="ncard-enter amber-text">ENTER →</div>
			</div>
		</a>
	</section>

	<!-- DEPLOYED -->
	<div class="ruled-label">
		<span class="rl-text">// DEPLOYED PROJECTS</span>
	</div>

	<section class="projects">
		{#each projects as p}
			<a href={p.url} target="_blank" rel="noopener" class="pcard" style="--accent: {p.color}">
				<div class="pcard-left-bar"></div>
				<div class="pcard-inner">
					<div class="pcard-top">
						<span class="pcard-tag">{p.tag}</span>
						<span class="pcard-status" style="color:{p.color}">● {p.status}</span>
					</div>
					<h3>{p.label}</h3>
					<p>{p.description}</p>
					<span class="pcard-url">↗ {p.url.replace('https://','')}</span>
				</div>
				<div class="pcard-corner-glow" style="background: radial-gradient(circle at 100% 100%, {p.color}18, transparent 60%)"></div>
			</a>
		{/each}
	</section>
</main>

<footer>
	<span>OLFKE.BE — GHENT, BE</span>
	<span>SVELTEKIT · LUCIA · DRIZZLE</span>
</footer>

<style>
	/* Chrome */
	.chrome-tl,.chrome-tr,.chrome-bl,.chrome-br {
		position:fixed;width:32px;height:32px;z-index:200;pointer-events:none;
	}
	.chrome-tl{top:14px;left:14px;border-top:1px solid var(--gold-dim);border-left:1px solid var(--gold-dim);}
	.chrome-tr{top:14px;right:14px;border-top:1px solid var(--gold-dim);border-right:1px solid var(--gold-dim);}
	.chrome-bl{bottom:14px;left:14px;border-bottom:1px solid var(--gold-dim);border-left:1px solid var(--gold-dim);}
	.chrome-br{bottom:14px;right:14px;border-bottom:1px solid var(--gold-dim);border-right:1px solid var(--gold-dim);}

	/* Page glows — warm background depth */
	.page-glow-amber {
		position:fixed;top:-20vh;left:-10vw;
		width:60vw;height:60vh;
		background:radial-gradient(ellipse, rgba(180,100,20,0.12) 0%, transparent 70%);
		pointer-events:none;z-index:0;
	}
	.page-glow-teal {
		position:fixed;bottom:-10vh;right:-10vw;
		width:50vw;height:50vh;
		background:radial-gradient(ellipse, rgba(58,184,184,0.07) 0%, transparent 70%);
		pointer-events:none;z-index:0;
	}

	/* Nav */
	nav {
		position:fixed;top:0;left:0;right:0;z-index:100;
		display:flex;justify-content:space-between;align-items:center;
		padding:1rem 2.5rem;
		border-bottom:1px solid var(--border);
		background:rgba(14,11,8,0.9);
		backdrop-filter:blur(16px);
	}
	.nav-brand {
		font-family:var(--font-display);font-size:1.2rem;
		letter-spacing:0.18em;color:var(--gold);
	}
	.nav-links{display:flex;gap:2rem;align-items:center;}
	.nav-links a,.nav-btn {
		font-family:var(--font-sans);font-size:0.58rem;
		letter-spacing:0.2em;color:var(--text-muted);
		background:none;border:none;cursor:pointer;
		transition:color 0.2s;padding:0;
	}
	.nav-links a:hover,.nav-btn:hover{color:var(--gold);}
	.nav-teal{color:var(--teal) !important;}

	main {
		position:relative;z-index:1;
		max-width:1140px;margin:0 auto;
		padding:6rem 2rem 3rem;
		display:flex;flex-direction:column;gap:0;
	}

	/* HERO */
	.hero {
		display:grid;grid-template-columns:1fr 280px;
		gap:2rem;align-items:center;
		padding:3.5rem 0 4rem;
		position:relative;overflow:hidden;
	}
	.hero-bg-text {
		position:absolute;
		font-family:var(--font-display);
		font-size:clamp(10rem,22vw,20rem);
		color:transparent;
		-webkit-text-stroke:1px rgba(212,168,67,0.07);
		left:-1rem;top:50%;transform:translateY(-52%);
		pointer-events:none;white-space:nowrap;line-height:1;
		user-select:none;letter-spacing:0.02em;
	}
	.hero-left{position:relative;z-index:1;}

	.eyebrow {
		display:flex;align-items:center;gap:0.6rem;
		font-family:var(--font-sans);font-size:0.58rem;
		letter-spacing:0.28em;color:var(--text-dim);
		margin-bottom:0.75rem;
	}
	.eyebrow-dot {
		width:6px;height:6px;border-radius:50%;
		background:var(--green);box-shadow:0 0 8px var(--green);
		flex-shrink:0;animation:blink 2s infinite;
	}
	.eyebrow-line{flex:1;max-width:60px;height:1px;background:var(--border-mid);}

	h1{line-height:0.88;margin-bottom:1rem;}
	.h1-white {
		display:block;font-family:var(--font-display);
		font-size:clamp(4.5rem,13vw,10rem);
		color:var(--text);letter-spacing:0.04em;
	}
	.h1-gold {
		display:block;font-family:var(--font-display);
		font-size:clamp(4.5rem,13vw,10rem);
		color:var(--gold);letter-spacing:0.04em;
		text-shadow:0 0 60px rgba(212,168,67,0.3),0 0 120px rgba(212,168,67,0.1);
	}

	.tagline {
		font-family:var(--font-sans);font-size:0.78rem;
		color:var(--text-muted);letter-spacing:0.07em;
		margin-bottom:1.25rem;
	}

	.hero-tags{display:flex;gap:0.6rem;flex-wrap:wrap;}
	.htag {
		font-family:var(--font-sans);font-size:0.55rem;
		letter-spacing:0.12em;padding:0.3rem 0.75rem;
		border:1px solid;
	}
	.htag.green  {color:var(--green); border-color:rgba(78,203,113,0.3);  background:rgba(78,203,113,0.06);}
	.htag.teal   {color:var(--teal);  border-color:rgba(58,184,184,0.3);  background:rgba(58,184,184,0.06);}
	.htag.amber  {color:var(--amber); border-color:rgba(224,136,32,0.3);  background:rgba(224,136,32,0.06);}

	/* Hero right */
	.hero-right {
		position:relative;z-index:1;
		display:flex;flex-direction:column;align-items:center;gap:1.25rem;
	}
	.hex-svg{width:90px;height:90px;filter:drop-shadow(0 0 12px rgba(58,184,184,0.3));}

	.status-block {
		width:100%;
		background:var(--bg-card);
		border:1px solid var(--border-mid);
		border-top:2px solid var(--teal);
		padding:0.9rem 1rem;
		display:flex;flex-direction:column;gap:0;
	}
	.sb-row {
		display:flex;justify-content:space-between;align-items:center;
		padding:0.4rem 0;
	}
	.sb-key {
		font-family:var(--font-sans);font-size:0.5rem;
		letter-spacing:0.2em;color:var(--text-dim);
	}
	.sb-val {
		font-family:var(--font-sans);font-size:0.55rem;
		letter-spacing:0.08em;color:var(--text-muted);
	}
	.sb-val.green{color:var(--green);text-shadow:0 0 8px rgba(78,203,113,0.4);}
	.sb-val.teal {color:var(--teal);}
	.sb-divider{height:1px;background:var(--border);margin:0 0;}
	.blink {
		display:inline-block;width:5px;height:5px;
		border-radius:50%;background:var(--green);
		box-shadow:0 0 6px var(--green);
		animation:blink 2s infinite;vertical-align:middle;
	}
	@keyframes blink{0%,100%{opacity:1;}50%{opacity:0.15;}}

	/* Section labels */
	.ruled-label {
		display:flex;align-items:center;
		margin:2rem 0 1.5rem;
		border-top:1px solid var(--border);
		padding-top:1.25rem;
	}
	.rl-text {
		font-family:var(--font-sans);font-size:0.55rem;
		letter-spacing:0.28em;color:var(--gold-dim);
	}

	/* Nav cards */
	.nav-cards {
		display:grid;grid-template-columns:1fr 1fr;
		gap:3px;margin-bottom:3rem;
	}
	.ncard {
		position:relative;overflow:hidden;
		background:var(--bg-card);
		padding:2.75rem 2.5rem;
		display:block;
		transition:background 0.25s;
		min-height:260px;
	}
	.ncard:hover{background:var(--bg-card2);}

	.ncard-top-bar {
		position:absolute;top:0;left:0;right:0;height:3px;
	}
	.teal-bar  {background:linear-gradient(to right, var(--teal), transparent 70%);}
	.amber-bar {background:linear-gradient(to right, var(--amber), transparent 70%);}

	.ncard-glow {
		position:absolute;top:0;left:0;right:0;bottom:0;
		pointer-events:none;opacity:0;transition:opacity 0.3s;
	}
	.teal-glow  {background:radial-gradient(ellipse at 0% 0%, rgba(58,184,184,0.08) 0%, transparent 60%);}
	.amber-glow {background:radial-gradient(ellipse at 0% 0%, rgba(224,136,32,0.08) 0%, transparent 60%);}
	.ncard:hover .ncard-glow{opacity:1;}

	.ncard-ghost {
		position:absolute;bottom:-1.5rem;right:-1rem;
		font-family:var(--font-display);font-size:9rem;
		line-height:1;opacity:0.035;color:var(--text);
		pointer-events:none;letter-spacing:0.02em;
		transition:opacity 0.3s;
	}
	.ncard:hover .ncard-ghost{opacity:0.055;}

	.ncard-body{position:relative;z-index:1;display:flex;flex-direction:column;gap:0.8rem;}
	.ncard-meta{display:flex;justify-content:space-between;align-items:center;}
	.ncard-num {
		font-family:var(--font-display);font-size:1rem;
		color:var(--text-dim);letter-spacing:0.1em;
	}
	.ncard-badge {
		font-family:var(--font-sans);font-size:0.48rem;
		letter-spacing:0.15em;padding:0.22rem 0.6rem;border:1px solid;
	}
	.teal-badge  {color:var(--teal); border-color:rgba(58,184,184,0.35); background:rgba(58,184,184,0.06);}
	.amber-badge {color:var(--amber);border-color:rgba(224,136,32,0.35); background:rgba(224,136,32,0.06);}

	.ncard-body h2 {
		font-family:var(--font-display);
		font-size:clamp(2.8rem,5vw,4.5rem);
		letter-spacing:0.04em;line-height:1;
		color:var(--text);transition:color 0.2s;
	}
	.ncard:hover .ncard-body h2{color:var(--gold);}

	.ncard-body p {
		font-family:var(--font-sans);font-size:0.7rem;
		color:var(--text-muted);line-height:1.65;max-width:300px;
	}
	.ncard-enter {
		font-family:var(--font-sans);font-size:0.58rem;
		letter-spacing:0.2em;margin-top:0.25rem;
		transition:letter-spacing 0.2s;
	}
	.ncard:hover .ncard-enter{letter-spacing:0.3em;}
	.teal-text  {color:var(--teal);}
	.amber-text {color:var(--amber);}

	/* Project cards */
	.projects {
		display:grid;
		grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
		gap:3px;margin-bottom:4rem;
	}
	.pcard {
		background:var(--bg-card);
		display:flex;position:relative;overflow:hidden;
		transition:background 0.2s;
		min-height:180px;
	}
	.pcard:hover{background:var(--bg-card2);}

	.pcard-left-bar {
		width:3px;flex-shrink:0;
		background:linear-gradient(to bottom, var(--accent), transparent);
	}
	.pcard-inner {
		flex:1;padding:1.5rem 1.5rem 1.5rem 1.25rem;
		display:flex;flex-direction:column;gap:0.6rem;
		position:relative;z-index:1;
	}
	.pcard-corner-glow {
		position:absolute;inset:0;pointer-events:none;
		opacity:0;transition:opacity 0.3s;
	}
	.pcard:hover .pcard-corner-glow{opacity:1;}

	.pcard-top{display:flex;justify-content:space-between;align-items:center;}
	.pcard-tag {
		font-family:var(--font-sans);font-size:0.48rem;
		letter-spacing:0.15em;color:var(--text-dim);
		border:1px solid var(--border-mid);padding:0.18rem 0.45rem;
	}
	.pcard-status{
		font-family:var(--font-sans);font-size:0.52rem;letter-spacing:0.1em;
	}
	.pcard-inner h3 {
		font-family:var(--font-display);font-size:2rem;
		letter-spacing:0.05em;color:var(--text);
		transition:color 0.2s;
	}
	.pcard:hover .pcard-inner h3{color:var(--gold);}
	.pcard-inner p {
		font-family:var(--font-sans);font-size:0.7rem;
		color:var(--text-muted);line-height:1.6;flex:1;
	}
	.pcard-url {
		font-family:var(--font-sans);font-size:0.56rem;
		letter-spacing:0.07em;color:var(--text-dim);
		transition:color 0.2s;
	}
	.pcard:hover .pcard-url{color:var(--gold);}

	/* Footer */
	footer {
		display:flex;justify-content:space-between;
		padding:1.25rem 0;
		border-top:1px solid var(--border);
		font-family:var(--font-sans);font-size:0.52rem;
		letter-spacing:0.18em;color:var(--text-dim);
	}

	@media(max-width:720px){
		.hero{grid-template-columns:1fr;}
		.hero-right{display:none;}
		.nav-cards{grid-template-columns:1fr;}
		nav{padding:1rem 1.5rem;}
		main{padding:5.5rem 1.25rem 3rem;}
	}
</style>