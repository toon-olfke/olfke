<script lang="ts">
	export let data: { user: App.Locals['user'] };
</script>

<svelte:head>
	<title>olfke.be</title>
	<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<!-- Atmosphere -->
<div class="atmo-green"></div>
<div class="atmo-purple"></div>
<div class="atmo-amber"></div>
<div class="scan-lines"></div>

<!-- Corner chrome -->
<div class="corner tl"></div>
<div class="corner tr"></div>
<div class="corner bl"></div>
<div class="corner br"></div>

<!-- Nav — full bleed, minimal -->
<nav>
	<a href="/" class="brand">
		<span class="brand-dot"></span>
		OLFKE.BE
	</a>
	<div class="nav-mid mono xs dim">// SYSTEM ONLINE</div>
	<div class="nav-right">
		<a href="/work">WORK</a>
		{#if data.user}
			<a href="/homelab" class="green">HOMELAB</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">LOGOUT</button>
			</form>
		{:else}
			<a href="/login">ACCESS</a>
		{/if}
	</div>
</nav>

<!-- ═══════════════════════════════════════════
     HERO — full viewport, title bleeds to edges
════════════════════════════════════════════ -->
<section class="hero">

	<!-- Giant title, full bleed -->
	<div class="hero-title">
		<span class="ht-olfke">OLFKE</span><span class="ht-be">.BE</span>
	</div>

	<!-- Overlay content — sits on top of the title -->
	<div class="hero-overlay">
		<div class="hero-left">
			<div class="mono xs dim signal">
				<span class="signal-dot"></span>
				TRANSMISSION INCOMING
			</div>
			<p class="hero-desc">Personal hub —<br>projects, tools<br>& infrastructure.</p>
			<div class="hero-chips">
				<span class="chip green-chip">● GHENT</span>
				<span class="chip teal-chip">● ONLINE</span>
				<span class="chip amber-chip">● SELF-HOSTED</span>
			</div>
		</div>

		<div class="hero-right">
			<div class="readout">
				<div class="readout-bar"></div>
				<div class="r-row"><span class="r-k">STATUS</span><span class="r-v green">OPERATIONAL <span class="blink"></span></span></div>
				<div class="r-row"><span class="r-k">HOST</span><span class="r-v">GHENT, BE</span></div>
				<div class="r-row"><span class="r-k">STACK</span><span class="r-v teal">SK · LUCIA · PG</span></div>
				<div class="r-row"><span class="r-k">UPTIME</span><span class="r-v green">99.9%</span></div>
			</div>
		</div>
	</div>

	<!-- Scrolling ticker at bottom of hero -->
	<div class="ticker">
		<div class="ticker-track">
			<span>OLFKE.BE</span>
			<span class="tick-sep">◆</span>
			<span>GHENT BELGIUM</span>
			<span class="tick-sep">◆</span>
			<span>SYSTEM OPERATIONAL</span>
			<span class="tick-sep">◆</span>
			<span>SVELTEKIT + LUCIA + DRIZZLE</span>
			<span class="tick-sep">◆</span>
			<span>SELF HOSTED</span>
			<span class="tick-sep">◆</span>
			<span>OLFKE.BE</span>
			<span class="tick-sep">◆</span>
			<span>GHENT BELGIUM</span>
			<span class="tick-sep">◆</span>
			<span>SYSTEM OPERATIONAL</span>
			<span class="tick-sep">◆</span>
			<span>SVELTEKIT + LUCIA + DRIZZLE</span>
			<span class="tick-sep">◆</span>
			<span>SELF HOSTED</span>
			<span class="tick-sep">◆</span>
		</div>
	</div>
</section>

<!-- ═══════════════════════════════════════════
     NAVIGATE — full bleed two zones
════════════════════════════════════════════ -->
<section class="zones">

	<a href="/work" class="zone zone-work">
		<div class="zone-glow" style="background:radial-gradient(ellipse at 50% 100%, rgba(56,200,200,0.18) 0%, transparent 65%)"></div>
		<div class="zone-num mono">01</div>
		<div class="zone-tag" style="color:var(--teal);border-color:var(--teal-dim)">PUBLIC</div>
		<h2 class="zone-title">WORK</h2>
		<p class="zone-desc">IT shortcuts, tool references & daily bookmarks.</p>
		<div class="zone-cta" style="color:var(--teal)">ENTER →</div>
		<div class="zone-bar" style="background:var(--teal)"></div>
		<div class="zone-bg-letter">W</div>
	</a>

	<a href="/homelab" class="zone zone-lab">
		<div class="zone-glow" style="background:radial-gradient(ellipse at 50% 100%, rgba(216,128,32,0.15) 0%, transparent 65%)"></div>
		<div class="zone-num mono">02</div>
		<div class="zone-tag" style="color:var(--amber);border-color:var(--amber-dim)">RESTRICTED</div>
		<h2 class="zone-title">HOMELAB</h2>
		<p class="zone-desc">Network topology, services & infrastructure.</p>
		<div class="zone-cta" style="color:var(--amber)">ENTER →</div>
		<div class="zone-bar" style="background:var(--amber)"></div>
		<div class="zone-bg-letter">H</div>
	</a>

</section>

<!-- ═══════════════════════════════════════════
     DEPLOYED — horizontal strip
════════════════════════════════════════════ -->
<section class="deployed">
	<div class="deployed-label mono xs">// DEPLOYED PROJECTS</div>

	<div class="project-strip">

		<a href="https://ovam-buddy.olfke.be" target="_blank" rel="noopener" class="proj" style="--c:#38c8c8">
			<div class="proj-glow"></div>
			<div class="proj-inner">
				<div class="proj-top">
					<span class="mono xs dim">INTERNAL TOOL</span>
					<span class="mono xs" style="color:#38c8c8">● LIVE</span>
				</div>
				<h3 class="proj-name">OVAM BUDDY</h3>
				<p class="proj-desc">MATIS waste management — quarterly OVAM CSV submissions.</p>
				<span class="proj-url mono xs">↗ ovam-buddy.olfke.be</span>
			</div>
			<div class="proj-accent"></div>
		</a>

		<a href="https://bday-m.olfke.be" target="_blank" rel="noopener" class="proj" style="--c:#c8a84a">
			<div class="proj-glow"></div>
			<div class="proj-inner">
				<div class="proj-top">
					<span class="mono xs dim">PRIVATE</span>
					<span class="mono xs" style="color:#c8a84a">● LIVE</span>
				</div>
				<h3 class="proj-name">HOTEL 505</h3>
				<p class="proj-desc">A birthday gift. A letter. A hope.</p>
				<span class="proj-url mono xs">↗ bday-m.olfke.be</span>
			</div>
			<div class="proj-accent"></div>
		</a>

		<!-- Placeholder slot -->
		<div class="proj proj-empty">
			<div class="proj-inner">
				<div class="proj-top">
					<span class="mono xs dim">PENDING</span>
				</div>
				<h3 class="proj-name dim">???</h3>
				<p class="proj-desc dim">Next project loading...</p>
			</div>
		</div>

	</div>
</section>

<!-- Footer -->
<footer>
	<span class="mono xs dim">OLFKE.BE // GHENT // {new Date().getFullYear()}</span>
	<span class="mono xs dim">SK · LUCIA · DRIZZLE · DOCKER</span>
</footer>

<style>
/* ── Reset & base ── */
* { box-sizing: border-box; margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }

/* ── Atmosphere ── */
.atmo-green {
	position: fixed; bottom: -20vh; left: -10vw;
	width: 70vw; height: 60vh;
	background: radial-gradient(ellipse, rgba(20,160,80,0.1) 0%, transparent 65%);
	pointer-events: none; z-index: 0;
}
.atmo-purple {
	position: fixed; top: -10vh; right: -10vw;
	width: 50vw; height: 50vh;
	background: radial-gradient(ellipse, rgba(80,30,160,0.09) 0%, transparent 60%);
	pointer-events: none; z-index: 0;
}
.atmo-amber {
	position: fixed; top: 30vh; left: -5vw;
	width: 30vw; height: 40vh;
	background: radial-gradient(ellipse, rgba(180,90,10,0.07) 0%, transparent 60%);
	pointer-events: none; z-index: 0;
}
.scan-lines {
	position: fixed; inset: 0; pointer-events: none; z-index: 1;
	background: repeating-linear-gradient(
		0deg,
		transparent,
		transparent 2px,
		rgba(0,0,0,0.03) 2px,
		rgba(0,0,0,0.03) 4px
	);
}

/* ── Corner chrome ── */
.corner { position: fixed; width: 20px; height: 20px; z-index: 300; pointer-events: none; }
.corner.tl { top: 10px; left: 10px; border-top: 1px solid var(--green-mid); border-left: 1px solid var(--green-mid); }
.corner.tr { top: 10px; right: 10px; border-top: 1px solid var(--green-mid); border-right: 1px solid var(--green-mid); }
.corner.bl { bottom: 10px; left: 10px; border-bottom: 1px solid var(--green-mid); border-left: 1px solid var(--green-mid); }
.corner.br { bottom: 10px; right: 10px; border-bottom: 1px solid var(--green-mid); border-right: 1px solid var(--green-mid); }

/* ── Utilities ── */
.mono { font-family: var(--font-mono); }
.xs   { font-size: 0.6rem; letter-spacing: 0.1em; }
.dim  { color: var(--text-dim); }
.green { color: var(--green); }
.teal  { color: var(--teal); }

/* ── Nav ── */
nav {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	display: grid; grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	padding: 0.75rem 1.5rem;
	border-bottom: 1px solid var(--border);
	background: rgba(8,9,12,0.95);
	backdrop-filter: blur(24px);
}
.brand {
	display: flex; align-items: center; gap: 0.5rem;
	font-family: var(--font-ui); font-weight: 700;
	font-size: 0.85rem; letter-spacing: 0.18em;
	color: var(--green);
	transition: text-shadow 0.3s;
}
.brand:hover { text-shadow: 0 0 20px rgba(61,255,160,0.6); }
.brand-dot {
	width: 6px; height: 6px; border-radius: 50%;
	background: var(--green); box-shadow: 0 0 8px var(--green);
	animation: blink 2.5s infinite; flex-shrink: 0;
}
.nav-mid { display: flex; justify-content: center; }
.nav-right { display: flex; gap: 1.75rem; align-items: center; justify-content: flex-end; }
.nav-right a, .nav-btn {
	font-family: var(--font-ui); font-weight: 600; font-size: 0.7rem;
	letter-spacing: 0.14em; color: var(--text-muted);
	background: none; border: none; cursor: pointer;
	transition: color 0.2s; padding: 0;
}
.nav-right a:hover, .nav-btn:hover { color: var(--green); }
.nav-right .green { color: var(--green) !important; }

/* ── HERO ── */
.hero {
	position: relative; z-index: 1;
	min-height: 100vh;
	display: flex; flex-direction: column;
	overflow: hidden;
	border-bottom: 1px solid var(--border);
}

/* Giant title — full bleed, bleeds off edges on purpose */
.hero-title {
	position: absolute;
	bottom: 4rem; left: -0.02em;
	white-space: nowrap;
	line-height: 0.85;
	pointer-events: none;
	user-select: none;
}
.ht-olfke {
	font-family: var(--font-ui); font-weight: 700;
	font-size: clamp(8rem, 22vw, 22rem);
	color: transparent;
	-webkit-text-stroke: 1px rgba(255,255,255,0.07);
	letter-spacing: -0.02em;
}
.ht-be {
	font-family: var(--font-ui); font-weight: 300;
	font-size: clamp(8rem, 22vw, 22rem);
	color: transparent;
	-webkit-text-stroke: 1px rgba(61,255,160,0.15);
	letter-spacing: -0.02em;
	text-shadow: 0 0 120px rgba(61,255,160,0.08);
}

/* Overlay content */
.hero-overlay {
	flex: 1;
	display: flex; justify-content: space-between; align-items: flex-start;
	padding: 7rem 2.5rem 2rem;
	position: relative; z-index: 2;
}
.hero-left { display: flex; flex-direction: column; gap: 1.5rem; }

.signal {
	display: flex; align-items: center; gap: 0.6rem;
}
.signal-dot {
	width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0;
	background: var(--green); box-shadow: 0 0 12px var(--green), 0 0 24px rgba(61,255,160,0.3);
	animation: glow-pulse 2s infinite;
}
@keyframes glow-pulse {
	0%,100% { box-shadow: 0 0 12px var(--green), 0 0 24px rgba(61,255,160,0.3); }
	50% { box-shadow: 0 0 4px var(--green); }
}

.hero-desc {
	font-family: var(--font-ui); font-weight: 300;
	font-size: clamp(1.1rem, 2.5vw, 1.6rem);
	color: var(--text-muted); line-height: 1.5;
	letter-spacing: 0.03em;
}

.hero-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }
.chip {
	font-family: var(--font-mono); font-size: 0.58rem;
	letter-spacing: 0.1em; padding: 0.28rem 0.7rem; border: 1px solid;
}
.green-chip { color: var(--green); border-color: var(--green-dim); background: rgba(61,255,160,0.04); }
.teal-chip  { color: var(--teal);  border-color: var(--teal-dim);  background: rgba(56,200,200,0.04); }
.amber-chip { color: var(--amber); border-color: var(--amber-dim); background: rgba(216,128,32,0.04); }

/* Readout panel */
.hero-right { padding-top: 0.5rem; }
.readout {
	background: var(--bg-card);
	border: 1px solid var(--border-mid);
	min-width: 260px;
	position: relative; overflow: hidden;
}
.readout-bar {
	height: 2px;
	background: linear-gradient(90deg, var(--green), var(--teal), transparent);
}
.r-row {
	display: flex; justify-content: space-between; align-items: center;
	padding: 0.5rem 1rem; border-bottom: 1px solid var(--border);
	gap: 1rem;
}
.r-row:last-child { border-bottom: none; }
.r-k { font-family: var(--font-mono); font-size: 0.52rem; letter-spacing: 0.15em; color: var(--text-dim); flex-shrink: 0; }
.r-v { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.06em; color: var(--text-muted); text-align: right; }
.r-v.green { color: var(--green); }
.r-v.teal  { color: var(--teal); }
.blink { display: inline-block; width: 5px; height: 5px; border-radius: 50%; background: var(--green); box-shadow: 0 0 6px var(--green); animation: blink 2.5s infinite; vertical-align: middle; margin-left: 3px; }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }

/* Ticker */
.ticker {
	position: relative; z-index: 2;
	border-top: 1px solid var(--border);
	padding: 0.5rem 0;
	overflow: hidden;
	background: rgba(8,9,12,0.6);
}
.ticker-track {
	display: flex; gap: 2rem; white-space: nowrap;
	animation: ticker 30s linear infinite;
	font-family: var(--font-mono); font-size: 0.55rem;
	letter-spacing: 0.15em; color: var(--text-dim);
}
.tick-sep { color: var(--green-mid); }
@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }

/* ── ZONES ── */
.zones {
	display: grid; grid-template-columns: 1fr 1fr;
	position: relative; z-index: 1;
	border-bottom: 1px solid var(--border);
}
.zone {
	position: relative; overflow: hidden;
	padding: 3rem 3rem 2.5rem;
	display: flex; flex-direction: column; gap: 1rem;
	min-height: 380px;
	background: var(--bg-card);
	transition: background 0.3s;
	border-right: 1px solid var(--border);
}
.zone:last-child { border-right: none; }
.zone:hover { background: var(--bg-card2); }

.zone-glow { position: absolute; inset: 0; pointer-events: none; opacity: 0; transition: opacity 0.4s; }
.zone:hover .zone-glow { opacity: 1; }

.zone-num { font-size: 0.62rem; color: var(--text-dim); letter-spacing: 0.12em; }
.zone-tag {
	display: inline-block; align-self: flex-start;
	font-family: var(--font-mono); font-size: 0.52rem;
	letter-spacing: 0.12em; padding: 0.22rem 0.6rem; border: 1px solid;
}
.zone-title {
	font-family: var(--font-ui); font-weight: 700;
	font-size: clamp(3rem, 6vw, 6rem);
	letter-spacing: 0.02em; line-height: 1;
	color: var(--text); transition: color 0.3s;
	margin-top: auto;
}
.zone-work:hover .zone-title  { color: var(--teal); }
.zone-lab:hover  .zone-title  { color: var(--amber); }

.zone-bar {
	height: 2px; width: 0; opacity: 0.7;
	transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
}
.zone:hover .zone-bar { width: 100%; }

.zone-desc {
	font-family: var(--font-ui); font-weight: 400; font-size: 0.82rem;
	color: var(--text-muted); line-height: 1.6; max-width: 380px;
}
.zone-cta {
	font-family: var(--font-mono); font-size: 0.65rem;
	letter-spacing: 0.18em; margin-top: auto;
	transition: letter-spacing 0.3s;
}
.zone:hover .zone-cta { letter-spacing: 0.3em; }

.zone-bg-letter {
	position: absolute; bottom: -3rem; right: -1rem;
	font-family: var(--font-ui); font-weight: 700;
	font-size: 18rem; line-height: 1;
	color: var(--text); opacity: 0.02;
	pointer-events: none;
	transition: opacity 0.3s;
	letter-spacing: -0.05em;
}
.zone:hover .zone-bg-letter { opacity: 0.04; }

/* ── DEPLOYED ── */
.deployed {
	position: relative; z-index: 1;
	padding: 2rem 0 0;
	border-bottom: 1px solid var(--border);
}
.deployed-label {
	padding: 0 2.5rem 1.25rem;
	color: var(--green-mid);
}
.project-strip {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	border-top: 1px solid var(--border);
}
.proj {
	position: relative; overflow: hidden;
	background: var(--bg-card);
	border-right: 1px solid var(--border);
	display: flex; flex-direction: column;
	transition: background 0.25s;
	min-height: 220px;
}
.proj:last-child { border-right: none; }
.proj:hover { background: var(--bg-card2); }

.proj-glow {
	position: absolute; inset: 0; pointer-events: none;
	background: radial-gradient(ellipse at 80% 20%, color-mix(in srgb, var(--c) 14%, transparent), transparent 55%);
	opacity: 0; transition: opacity 0.35s;
}
.proj:hover .proj-glow { opacity: 1; }

.proj-accent {
	height: 2px; flex-shrink: 0;
	background: linear-gradient(90deg, var(--c), transparent 70%);
}
.proj-inner {
	flex: 1; padding: 1.5rem;
	display: flex; flex-direction: column; gap: 0.55rem;
	position: relative; z-index: 1;
}
.proj-top { display: flex; justify-content: space-between; }
.proj-name {
	font-family: var(--font-ui); font-weight: 700;
	font-size: 1.4rem; letter-spacing: 0.03em;
	color: var(--text); transition: color 0.2s;
}
.proj:hover .proj-name { color: var(--c); }
.proj-desc {
	font-family: var(--font-ui); font-size: 0.78rem;
	color: var(--text-muted); line-height: 1.6; flex: 1;
}
.proj-url { font-family: var(--font-mono); font-size: 0.55rem; color: var(--text-dim); transition: color 0.2s; }
.proj:hover .proj-url { color: var(--c); }
.proj-empty { opacity: 0.35; cursor: default; }
.proj-empty:hover { background: var(--bg-card); }

/* ── Footer ── */
footer {
	position: relative; z-index: 1;
	display: flex; justify-content: space-between;
	padding: 1.25rem 2.5rem;
	border-top: 1px solid var(--border);
}

/* ── Responsive ── */
@media (max-width: 800px) {
	.zones { grid-template-columns: 1fr; }
	.project-strip { grid-template-columns: 1fr; }
	.hero-overlay { flex-direction: column; padding: 6rem 1.5rem 2rem; }
	.hero-right { display: none; }
	nav { grid-template-columns: 1fr 1fr; padding: 0.75rem 1rem; }
	.nav-mid { display: none; }
	footer { padding: 1rem 1.5rem; }
}
</style>