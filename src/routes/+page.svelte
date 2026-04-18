<script lang="ts">
	export let data: { user: App.Locals['user'] };
</script>

<svelte:head>
	<title>olfke.be</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&family=Cormorant+SC:wght@300;400;500;600;700&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
</svelte:head>

<!-- Atmosphere — layered warm glows -->
<div class="atmo-fire-left"></div>
<div class="atmo-fire-right"></div>
<div class="atmo-green-bottom"></div>
<div class="atmo-vignette"></div>

<!-- Corner chrome -->
<div class="corner tl"></div>
<div class="corner tr"></div>
<div class="corner bl"></div>
<div class="corner br"></div>

<!-- NAV -->
<nav>
	<a href="/" class="brand">Olfke.be</a>
	<div class="nav-center mono xs dim">
		<span class="nav-dot"></span>
		SYSTEM ONLINE
	</div>
	<div class="nav-links">
		<a href="/work">Work</a>
		{#if data.user}
			<a href="/homelab" class="nav-green">Homelab</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">Logout</button>
			</form>
		{:else}
			<a href="/login">Access</a>
		{/if}
	</div>
</nav>

<!-- ═══════════════════════════════════
     HERO — full viewport poster
════════════════════════════════════ -->
<section class="hero">

	<!-- Background illustrated texture -->
	<div class="hero-bg">
		<!-- Large decorative circle/mandala -->
		<svg class="hero-mandala" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="500" cy="500" r="480" stroke="#c8943a" stroke-width="0.5" opacity="0.08"/>
			<circle cx="500" cy="500" r="420" stroke="#c8943a" stroke-width="0.5" opacity="0.06"/>
			<circle cx="500" cy="500" r="340" stroke="#c8943a" stroke-width="1" opacity="0.05"/>
			<circle cx="500" cy="500" r="240" stroke="#c8943a" stroke-width="0.5" opacity="0.07"/>
			<circle cx="500" cy="500" r="140" stroke="#3ae8a0" stroke-width="0.5" opacity="0.06"/>
			<circle cx="500" cy="500" r="60"  stroke="#3ae8a0" stroke-width="1"   opacity="0.08"/>
			<!-- Radial spokes -->
			{#each {length: 24} as _, i}
				<line
					x1={500 + 60  * Math.cos(i * 15 * Math.PI/180)}
					y1={500 + 60  * Math.sin(i * 15 * Math.PI/180)}
					x2={500 + 480 * Math.cos(i * 15 * Math.PI/180)}
					y2={500 + 480 * Math.sin(i * 15 * Math.PI/180)}
					stroke="#c8943a" stroke-width="0.3" opacity="0.04"
				/>
			{/each}
			<!-- Outer tick marks -->
			{#each {length: 72} as _, i}
				<line
					x1={500 + 472 * Math.cos(i * 5 * Math.PI/180)}
					y1={500 + 472 * Math.sin(i * 5 * Math.PI/180)}
					x2={500 + 483 * Math.cos(i * 5 * Math.PI/180)}
					y2={500 + 483 * Math.sin(i * 5 * Math.PI/180)}
					stroke="#c8943a" stroke-width={i % 3 === 0 ? "1" : "0.4"} opacity="0.1"
				/>
			{/each}
			<!-- Inner ornament hex -->
			<polygon points="500,220 718,340 718,660 500,780 282,660 282,340"
				stroke="#c8943a" stroke-width="0.6" fill="none" opacity="0.06"/>
			<polygon points="500,310 655,395 655,605 500,690 345,605 345,395"
				stroke="#3ae8a0" stroke-width="0.4" fill="none" opacity="0.05"/>
		</svg>
	</div>

	<!-- Hero content -->
	<div class="hero-content">

		<div class="hero-eyebrow">
			<div class="eyebrow-ornament">
				<svg viewBox="0 0 200 12" fill="none">
					<line x1="0" y1="6" x2="70" y2="6" stroke="#6a4818" stroke-width="0.5"/>
					<circle cx="78" cy="6" r="2" fill="#c8943a" opacity="0.6"/>
					<line x1="86" y1="6" x2="114" y2="6" stroke="#6a4818" stroke-width="0.5"/>
					<circle cx="122" cy="6" r="2" fill="#c8943a" opacity="0.6"/>
					<line x1="130" y1="6" x2="200" y2="6" stroke="#6a4818" stroke-width="0.5"/>
				</svg>
			</div>
			<span class="eyebrow-text">Transmission Incoming</span>
			<div class="eyebrow-ornament">
				<svg viewBox="0 0 200 12" fill="none">
					<line x1="0" y1="6" x2="70" y2="6" stroke="#6a4818" stroke-width="0.5"/>
					<circle cx="78" cy="6" r="2" fill="#c8943a" opacity="0.6"/>
					<line x1="86" y1="6" x2="114" y2="6" stroke="#6a4818" stroke-width="0.5"/>
					<circle cx="122" cy="6" r="2" fill="#c8943a" opacity="0.6"/>
					<line x1="130" y1="6" x2="200" y2="6" stroke="#6a4818" stroke-width="0.5"/>
				</svg>
			</div>
		</div>

		<h1 class="hero-title">
			<span class="ht-main">Olfke</span><span class="ht-tld">.be</span>
		</h1>

		<p class="hero-subtitle">
			<em>Personal hub — projects, tools & infrastructure</em>
		</p>

		<div class="hero-divider">
			<svg viewBox="0 0 600 20" fill="none" class="divider-svg">
				<line x1="0" y1="10" x2="220" y2="10" stroke="#4a3010" stroke-width="0.75"/>
				<path d="M228 10 L240 4 L252 10 L240 16 Z" fill="#c8943a" opacity="0.5"/>
				<line x1="260" y1="10" x2="280" y2="10" stroke="#4a3010" stroke-width="0.75"/>
				<circle cx="300" cy="10" r="4" stroke="#c8943a" stroke-width="1" fill="none" opacity="0.6"/>
				<circle cx="300" cy="10" r="1.5" fill="#c8943a" opacity="0.6"/>
				<line x1="320" y1="10" x2="340" y2="10" stroke="#4a3010" stroke-width="0.75"/>
				<path d="M348 10 L360 4 L372 10 L360 16 Z" fill="#c8943a" opacity="0.5"/>
				<line x1="380" y1="10" x2="600" y2="10" stroke="#4a3010" stroke-width="0.75"/>
			</svg>
		</div>

		<div class="hero-meta">
			<div class="meta-item">
				<span class="meta-dot green-dot"></span>
				<span class="meta-label">Ghent, Belgium</span>
			</div>
			<div class="meta-sep">·</div>
			<div class="meta-item">
				<span class="meta-dot teal-dot"></span>
				<span class="meta-label">Online</span>
			</div>
			<div class="meta-sep">·</div>
			<div class="meta-item">
				<span class="meta-dot gold-dot"></span>
				<span class="meta-label">Self-hosted</span>
			</div>
		</div>

	</div>

	<!-- Side readout — floated right -->
	<div class="hero-readout">
		<div class="readout-title mono xs">System Status</div>
		<div class="readout-rows">
			<div class="rr"><span class="rr-k">Status</span><span class="rr-v" style="color:var(--green)">Operational ●</span></div>
			<div class="rr"><span class="rr-k">Location</span><span class="rr-v">Ghent, BE</span></div>
			<div class="rr"><span class="rr-k">Stack</span><span class="rr-v" style="color:var(--teal)">SK · Lucia · PG</span></div>
			<div class="rr"><span class="rr-k">Uptime</span><span class="rr-v" style="color:var(--green)">99.9%</span></div>
		</div>
	</div>

</section>

<!-- ═══════════════════════════════════
     NAVIGATE
════════════════════════════════════ -->
<section class="navigate">

	<div class="section-ornament">
		<svg viewBox="0 0 800 30" fill="none" class="w-full">
			<line x1="0" y1="15" x2="300" y2="15" stroke="#251808" stroke-width="1"/>
			<path d="M308 15 L318 9 L328 15 L318 21 Z" fill="#6a4818" opacity="0.5"/>
			<text x="340" y="20" font-family="'DM Mono'" font-size="10" fill="#6a4818" letter-spacing="6">NAVIGATE</text>
			<path d="M472 15 L482 9 L492 15 L482 21 Z" fill="#6a4818" opacity="0.5"/>
			<line x1="500" y1="15" x2="800" y2="15" stroke="#251808" stroke-width="1"/>
		</svg>
	</div>

	<div class="nav-zones">

		<a href="/work" class="nzone nzone-work">
			<div class="nz-inner">
				<div class="nz-top">
					<span class="nz-num">I.</span>
					<span class="nz-tag" style="color:var(--teal);border-color:var(--teal-dim)">Public</span>
				</div>
				<h2 class="nz-title">Work</h2>
				<div class="nz-rule" style="background:var(--teal)"></div>
				<p class="nz-desc">IT shortcuts, tool references & daily bookmarks for sysadmin work.</p>
				<div class="nz-enter" style="color:var(--teal)">Enter →</div>
			</div>
			<div class="nz-glow" style="background:radial-gradient(ellipse at 50% 100%,rgba(56,184,184,0.15) 0%,transparent 65%)"></div>
			<div class="nz-ghost">I</div>
		</a>

		<div class="nzone-divider">
			<svg viewBox="0 0 20 400" fill="none">
				<line x1="10" y1="0" x2="10" y2="160" stroke="#251808" stroke-width="1"/>
				<circle cx="10" cy="170" r="4" stroke="#c8943a" stroke-width="0.75" fill="none" opacity="0.4"/>
				<circle cx="10" cy="170" r="1.5" fill="#c8943a" opacity="0.4"/>
				<line x1="10" y1="180" x2="10" y2="400" stroke="#251808" stroke-width="1"/>
			</svg>
		</div>

		<a href="/homelab" class="nzone nzone-lab">
			<div class="nz-inner">
				<div class="nz-top">
					<span class="nz-num">II.</span>
					<span class="nz-tag" style="color:var(--amber);border-color:var(--amber-dim)">Restricted</span>
				</div>
				<h2 class="nz-title">Homelab</h2>
				<div class="nz-rule" style="background:var(--amber)"></div>
				<p class="nz-desc">Network topology, services & infrastructure. Ghent home setup.</p>
				<div class="nz-enter" style="color:var(--amber)">Enter →</div>
			</div>
			<div class="nz-glow" style="background:radial-gradient(ellipse at 50% 100%,rgba(216,112,32,0.12) 0%,transparent 65%)"></div>
			<div class="nz-ghost">II</div>
		</a>

	</div>

</section>

<!-- ═══════════════════════════════════
     DEPLOYED
════════════════════════════════════ -->
<section class="deployed">

	<div class="section-ornament">
		<svg viewBox="0 0 800 30" fill="none" class="w-full">
			<line x1="0" y1="15" x2="285" y2="15" stroke="#251808" stroke-width="1"/>
			<path d="M293 15 L303 9 L313 15 L303 21 Z" fill="#6a4818" opacity="0.5"/>
			<text x="325" y="20" font-family="'DM Mono'" font-size="10" fill="#6a4818" letter-spacing="6">DEPLOYED</text>
			<path d="M467 15 L477 9 L487 15 L477 21 Z" fill="#6a4818" opacity="0.5"/>
			<line x1="495" y1="15" x2="800" y2="15" stroke="#251808" stroke-width="1"/>
		</svg>
	</div>

	<div class="project-list">

		<a href="https://ovam-buddy.olfke.be" target="_blank" rel="noopener" class="project">
			<div class="proj-num">01</div>
			<div class="proj-body">
				<div class="proj-meta">
					<span class="proj-tag mono xs">Internal Tool</span>
					<span class="proj-live mono xs" style="color:var(--teal)">● Live</span>
				</div>
				<h3 class="proj-name">Ovam Buddy</h3>
				<p class="proj-desc">MATIS waste management — quarterly OVAM CSV submissions.</p>
			</div>
			<div class="proj-link mono xs">↗ ovam-buddy.olfke.be</div>
			<div class="proj-rule" style="background:var(--teal)"></div>
		</a>

		<div class="proj-divider"></div>

		<a href="https://bday-m.olfke.be" target="_blank" rel="noopener" class="project">
			<div class="proj-num">02</div>
			<div class="proj-body">
				<div class="proj-meta">
					<span class="proj-tag mono xs">Private</span>
					<span class="proj-live mono xs" style="color:var(--gold)">● Live</span>
				</div>
				<h3 class="proj-name">Hotel 505</h3>
				<p class="proj-desc">A birthday gift. A letter. A hope.</p>
			</div>
			<div class="proj-link mono xs">↗ bday-m.olfke.be</div>
			<div class="proj-rule" style="background:var(--gold)"></div>
		</a>

	</div>

</section>

<!-- Footer -->
<footer>
	<div class="footer-ornament">
		<svg viewBox="0 0 600 16" fill="none">
			<line x1="0" y1="8" x2="250" y2="8" stroke="#251808" stroke-width="0.75"/>
			<circle cx="258" cy="8" r="2" fill="#6a4818" opacity="0.5"/>
			<line x1="266" y1="8" x2="334" y2="8" stroke="#251808" stroke-width="0.75"/>
			<circle cx="342" cy="8" r="2" fill="#6a4818" opacity="0.5"/>
			<line x1="350" y1="8" x2="600" y2="8" stroke="#251808" stroke-width="0.75"/>
		</svg>
	</div>
	<div class="footer-text">
		<span>Olfke.be — Ghent, Belgium</span>
		<span class="mono xs dim">SK · Lucia · Drizzle · Docker</span>
	</div>
</footer>

<style>
/* ── Utilities ── */
.mono { font-family: var(--font-mono); }
.xs   { font-size: 0.6rem; letter-spacing: 0.1em; }
.dim  { color: var(--text-dim); }
.w-full { width: 100%; }

/* ── Atmosphere ── */
.atmo-fire-left {
	position: fixed; top: -10vh; left: -15vw;
	width: 60vw; height: 70vh;
	background: radial-gradient(ellipse, rgba(160,80,10,0.16) 0%, rgba(100,40,5,0.06) 40%, transparent 70%);
	pointer-events: none; z-index: 0;
}
.atmo-fire-right {
	position: fixed; top: 20vh; right: -20vw;
	width: 50vw; height: 60vh;
	background: radial-gradient(ellipse, rgba(120,60,8,0.1) 0%, transparent 65%);
	pointer-events: none; z-index: 0;
}
.atmo-green-bottom {
	position: fixed; bottom: -15vh; left: 20vw;
	width: 60vw; height: 50vh;
	background: radial-gradient(ellipse, rgba(20,120,60,0.08) 0%, transparent 65%);
	pointer-events: none; z-index: 0;
}
.atmo-vignette {
	position: fixed; inset: 0;
	background: radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(5,3,1,0.85) 100%);
	pointer-events: none; z-index: 0;
}

/* ── Corner chrome ── */
.corner { position: fixed; width: 24px; height: 24px; z-index: 300; pointer-events: none; }
.corner.tl { top: 12px; left: 12px;   border-top:    1px solid var(--gold-dim); border-left:  1px solid var(--gold-dim); }
.corner.tr { top: 12px; right: 12px;  border-top:    1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }
.corner.bl { bottom: 12px; left: 12px;  border-bottom: 1px solid var(--gold-dim); border-left:  1px solid var(--gold-dim); }
.corner.br { bottom: 12px; right: 12px; border-bottom: 1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }

/* ── Nav ── */
nav {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	display: grid; grid-template-columns: 1fr auto 1fr;
	align-items: center;
	padding: 0.9rem 2.5rem;
	border-bottom: 1px solid var(--border);
	background: rgba(9,6,3,0.92);
	backdrop-filter: blur(24px);
}
.brand {
	font-family: var(--font-display); font-size: 1rem; font-weight: 600;
	letter-spacing: 0.12em; color: var(--gold);
	transition: color 0.2s, text-shadow 0.3s;
}
.brand:hover { color: var(--gold-bright); text-shadow: 0 0 20px rgba(200,148,58,0.4); }
.nav-center {
	display: flex; align-items: center; gap: 0.5rem;
	font-family: var(--font-mono); font-size: 0.55rem;
	letter-spacing: 0.15em; color: var(--text-dim);
}
.nav-dot {
	width: 5px; height: 5px; border-radius: 50; flex-shrink: 0;
	background: var(--green); box-shadow: 0 0 8px var(--green);
	animation: blink 2.5s infinite;
}
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
.nav-links { display: flex; gap: 2rem; align-items: center; justify-content: flex-end; }
.nav-links a, .nav-btn {
	font-family: var(--font-serif); font-size: 0.9rem;
	letter-spacing: 0.08em; color: var(--text-muted);
	background: none; border: none; cursor: pointer;
	transition: color 0.2s; padding: 0; font-style: italic;
}
.nav-links a:hover, .nav-btn:hover { color: var(--gold); }
.nav-green { color: var(--green) !important; }

/* ── HERO ── */
.hero {
	position: relative; z-index: 1;
	min-height: 100vh;
	display: flex; align-items: center; justify-content: center;
	flex-direction: column;
	border-bottom: 1px solid var(--border);
	overflow: hidden;
}

.hero-bg {
	position: absolute; inset: 0;
	display: flex; align-items: center; justify-content: center;
	pointer-events: none;
}
.hero-mandala {
	width: min(100vw, 900px);
	height: min(100vw, 900px);
	opacity: 1;
	animation: slow-spin 180s linear infinite;
}
@keyframes slow-spin {
	from { transform: rotate(0deg); }
	to   { transform: rotate(360deg); }
}

.hero-content {
	position: relative; z-index: 2;
	display: flex; flex-direction: column;
	align-items: center; text-align: center;
	padding: 8rem 2rem 6rem;
	gap: 1.5rem;
}

.hero-eyebrow {
	display: flex; align-items: center; gap: 1rem;
	width: 100%; max-width: 500px;
}
.eyebrow-ornament { flex: 1; }
.eyebrow-text {
	font-family: var(--font-serif); font-style: italic;
	font-size: 0.78rem; letter-spacing: 0.18em;
	color: var(--text-dim); white-space: nowrap;
}

.hero-title {
	line-height: 0.88;
	display: flex; align-items: flex-end;
	gap: 0.05em;
}
.ht-main {
	font-family: var(--font-display); font-weight: 700;
	font-size: clamp(5rem, 14vw, 12rem);
	color: var(--text);
	letter-spacing: 0.04em;
	text-shadow: 0 4px 40px rgba(0,0,0,0.8), 0 0 80px rgba(200,148,58,0.06);
}
.ht-tld {
	font-family: var(--font-display); font-weight: 300;
	font-size: clamp(3.5rem, 10vw, 9rem);
	color: var(--gold);
	letter-spacing: 0.04em;
	text-shadow: 0 0 40px rgba(200,148,58,0.5), 0 0 80px rgba(200,148,58,0.2);
	padding-bottom: 0.08em;
}

.hero-subtitle {
	font-family: var(--font-serif); font-size: 1.1rem;
	color: var(--text-muted); letter-spacing: 0.06em;
	font-style: italic;
}

.hero-divider { width: 100%; max-width: 600px; }
.divider-svg { width: 100%; }

.hero-meta {
	display: flex; align-items: center; gap: 1rem;
	font-family: var(--font-serif); font-size: 0.85rem;
	color: var(--text-muted); letter-spacing: 0.08em;
}
.meta-item { display: flex; align-items: center; gap: 0.4rem; }
.meta-sep  { color: var(--gold-dim); }
.meta-dot  { width: 6px; height: 6px; border-radius: 50%; }
.green-dot { background: var(--green); box-shadow: 0 0 8px var(--green); animation: blink 2.5s infinite; }
.teal-dot  { background: var(--teal); }
.gold-dot  { background: var(--gold); }
.meta-label { font-style: italic; }

/* Side readout */
.hero-readout {
	position: absolute; right: 3rem; top: 50%;
	transform: translateY(-50%);
	z-index: 3;
	border: 1px solid var(--border-mid);
	border-top: 2px solid var(--gold-dim);
	background: rgba(12,8,4,0.85);
	backdrop-filter: blur(8px);
	min-width: 220px;
}
.readout-title {
	padding: 0.5rem 1rem; border-bottom: 1px solid var(--border);
	color: var(--gold-dim); letter-spacing: 0.15em;
}
.readout-rows { display: flex; flex-direction: column; }
.rr {
	display: flex; justify-content: space-between; align-items: center;
	padding: 0.45rem 1rem; border-bottom: 1px solid var(--border); gap: 1rem;
}
.rr:last-child { border-bottom: none; }
.rr-k { font-family: var(--font-mono); font-size: 0.5rem; letter-spacing: 0.15em; color: var(--text-dim); flex-shrink: 0; }
.rr-v { font-family: var(--font-mono); font-size: 0.56rem; letter-spacing: 0.06em; color: var(--text-muted); text-align: right; }

/* ── NAVIGATE ── */
.navigate {
	position: relative; z-index: 1;
	padding: 3rem 0 0;
	border-bottom: 1px solid var(--border);
}
.section-ornament {
	padding: 0 3rem; margin-bottom: 2rem;
}
.nav-zones {
	display: grid; grid-template-columns: 1fr 20px 1fr;
	min-height: 380px;
}
.nzone {
	position: relative; overflow: hidden;
	padding: 2.5rem 3rem;
	display: flex; flex-direction: column;
	transition: background 0.4s;
}
.nzone:hover { background: rgba(20,14,8,0.6); }
.nz-inner { display: flex; flex-direction: column; gap: 0.8rem; position: relative; z-index: 2; }
.nz-top { display: flex; justify-content: space-between; align-items: center; }
.nz-num {
	font-family: var(--font-display); font-size: 1.2rem;
	color: var(--text-dim); letter-spacing: 0.1em;
}
.nz-tag {
	font-family: var(--font-mono); font-size: 0.5rem;
	letter-spacing: 0.12em; padding: 0.2rem 0.55rem; border: 1px solid;
}
.nz-title {
	font-family: var(--font-display); font-weight: 700;
	font-size: clamp(3rem, 6vw, 6rem);
	letter-spacing: 0.04em; line-height: 1;
	color: var(--text); transition: color 0.3s;
}
.nzone-work:hover .nz-title { color: var(--teal); }
.nzone-lab:hover  .nz-title { color: var(--amber); }
.nz-rule { height: 1px; width: 0; transition: width 0.5s cubic-bezier(0.4,0,0.2,1); opacity: 0.6; }
.nzone:hover .nz-rule { width: 100%; }
.nz-desc {
	font-family: var(--font-serif); font-size: 0.95rem; font-style: italic;
	color: var(--text-muted); line-height: 1.7; max-width: 400px;
}
.nz-enter {
	font-family: var(--font-serif); font-style: italic; font-size: 1rem;
	letter-spacing: 0.08em; margin-top: auto;
	transition: letter-spacing 0.3s, color 0.3s;
}
.nzone:hover .nz-enter { letter-spacing: 0.18em; }
.nz-glow {
	position: absolute; inset: 0; pointer-events: none;
	opacity: 0; transition: opacity 0.4s;
}
.nzone:hover .nz-glow { opacity: 1; }
.nz-ghost {
	position: absolute; bottom: -3rem; right: -1rem;
	font-family: var(--font-display); font-weight: 700;
	font-size: 16rem; line-height: 1; letter-spacing: -0.04em;
	color: var(--text); opacity: 0.018;
	pointer-events: none; transition: opacity 0.4s;
}
.nzone:hover .nz-ghost { opacity: 0.04; }
.nzone-divider {
	display: flex; justify-content: center;
	padding: 1rem 0;
}

/* ── DEPLOYED ── */
.deployed {
	position: relative; z-index: 1;
	padding: 3rem 0 0;
	border-bottom: 1px solid var(--border);
}
.project-list {
	display: flex; flex-direction: column;
}
.project {
	display: grid; grid-template-columns: 80px 1fr auto;
	align-items: center; gap: 2rem;
	padding: 1.75rem 3rem;
	position: relative; overflow: hidden;
	transition: background 0.3s;
	border-top: 1px solid var(--border);
}
.project:hover { background: rgba(20,14,8,0.5); }
.proj-rule {
	position: absolute; bottom: 0; left: 0; right: 0;
	height: 1px; width: 0;
	transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
	opacity: 0.5;
}
.project:hover .proj-rule { width: 100%; }
.proj-num {
	font-family: var(--font-display); font-size: 2rem; font-weight: 300;
	color: var(--text-dim); letter-spacing: 0.08em;
}
.proj-body { display: flex; flex-direction: column; gap: 0.4rem; }
.proj-meta { display: flex; gap: 1rem; align-items: center; }
.proj-tag { color: var(--text-dim); }
.proj-name {
	font-family: var(--font-display); font-weight: 600;
	font-size: 1.8rem; letter-spacing: 0.04em;
	color: var(--text); transition: color 0.2s;
}
.project:hover .proj-name { color: var(--gold); }
.proj-desc {
	font-family: var(--font-serif); font-style: italic;
	font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;
}
.proj-link {
	color: var(--text-dim); transition: color 0.2s; white-space: nowrap;
}
.project:hover .proj-link { color: var(--gold); }
.proj-divider { border-top: 1px solid var(--border); }

/* ── Footer ── */
footer {
	position: relative; z-index: 1;
	display: flex; flex-direction: column; align-items: center;
	gap: 0.75rem; padding: 2rem 2.5rem;
}
.footer-ornament { width: 100%; max-width: 600px; }
.footer-text {
	display: flex; justify-content: space-between;
	width: 100%; max-width: 600px;
	font-family: var(--font-serif); font-size: 0.8rem;
	letter-spacing: 0.1em; color: var(--text-dim); font-style: italic;
}

/* ── Responsive ── */
@media (max-width: 800px) {
	.nav-zones { grid-template-columns: 1fr; }
	.nzone-divider { display: none; }
	.hero-readout { display: none; }
	.hero-content { padding: 7rem 1.5rem 4rem; }
	.project { grid-template-columns: 60px 1fr; }
	.proj-link { display: none; }
	nav { grid-template-columns: 1fr 1fr; padding: 0.9rem 1.5rem; }
	.nav-center { display: none; }
	.section-ornament { padding: 0 1.5rem; }
	.nzone { padding: 2rem 1.5rem; }
}
</style>