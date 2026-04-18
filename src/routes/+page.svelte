<script lang="ts">
	export let data: { user: App.Locals['user'] };
</script>

<svelte:head>
	<title>olfke.be</title>
	<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
</svelte:head>

<div class="top-bar"></div>

<div class="layout">

	<aside class="rail">
		<a href="/" class="rail-logo">O</a>
		<div class="rail-line"></div>
		<div class="rail-links">
			<a href="/work" class="rail-link">Work</a>
			{#if data.user}
				<a href="/homelab" class="rail-link">Lab</a>
				<form method="POST" action="/login?/logout">
					<button type="submit" class="rail-link rail-btn">Out</button>
				</form>
			{:else}
				<a href="/login" class="rail-link">In</a>
			{/if}
		</div>
		<div class="rail-line"></div>
		<div class="rail-year">2025</div>
	</aside>

	<main>

		<!-- HERO -->
		<section class="hero">
			<div class="wood-panel"></div>

			<div class="hero-body">
				<p class="hero-location">Ghent, Belgium</p>

				<h1 class="hero-name">
					Olfke<span style="color:var(--orange)">.</span>be
				</h1>

				<div class="hero-rule">
					<div class="hr-line"></div>
					<div class="hr-diamond"></div>
					<div class="hr-line"></div>
				</div>

				<p class="hero-desc">
					Personal hub for a sysadmin in Ghent.<br>
					<em>Projects, tools & infrastructure.</em>
				</p>

				<!-- Color swatches — mid-century palette moment -->
				<div class="hero-palette">
					<div class="swatch" style="background:var(--teal)">
						<span>Online</span>
					</div>
					<div class="swatch" style="background:var(--orange)">
						<span>Self-hosted</span>
					</div>
					<div class="swatch" style="background:var(--mustard)">
						<span>Ghent</span>
					</div>
					<div class="swatch" style="background:var(--sage)">
						<span>SK · PG</span>
					</div>
				</div>
			</div>
		</section>

		<!-- NAVIGATE -->
		<section class="features">

			<a href="/work" class="feature">
				<div class="feature-color" style="background:var(--teal)">
					<span class="fc-label">Work</span>
				</div>
				<div class="feature-body">
					<div class="fb-num">01</div>
					<h2 class="fb-title">Work</h2>
					<p class="fb-desc">IT shortcuts, sysadmin references & daily bookmarks for everyday use.</p>
					<span class="fb-go">Open →</span>
				</div>
			</a>

			<a href="/homelab" class="feature">
				<div class="feature-color" style="background:var(--orange)">
					<span class="fc-label">Lab</span>
				</div>
				<div class="feature-body">
					<div class="fb-num">02</div>
					<h2 class="fb-title">Homelab</h2>
					<p class="fb-desc">Network topology, services & infrastructure. Ghent home setup.</p>
					<span class="fb-go">Open →</span>
				</div>
			</a>

		</section>

		<!-- PROJECT -->
		<section class="project-section">
			<div class="ps-header">
				<span class="ps-label">Deployed project</span>
				<div class="ps-line"></div>
			</div>

			<a href="https://ovam-buddy.olfke.be" target="_blank" rel="noopener" class="project-feature">
				<div class="pf-color-bar"></div>
				<div class="pf-inner">
					<div class="pf-left">
						<div class="pf-tag">Internal tool</div>
						<h2 class="pf-name">Ovam Buddy</h2>
						<p class="pf-desc">MATIS waste management platform — quarterly OVAM CSV submissions for Belgian waste companies.</p>
						<div class="pf-meta">
							<span class="pf-live">● Live</span>
							<span class="pf-url">ovam-buddy.olfke.be ↗</span>
						</div>
					</div>
					<div class="pf-right">
						<div class="pf-stack">
							<div class="pf-stack-item">SvelteKit</div>
							<div class="pf-stack-item">PostgreSQL</div>
							<div class="pf-stack-item">Lucia Auth</div>
							<div class="pf-stack-item">Docker</div>
						</div>
					</div>
				</div>
			</a>
		</section>

	</main>
</div>

<footer>
	<span>Olfke.be — Ghent, Belgium — {new Date().getFullYear()}</span>
	<span>SvelteKit · Lucia · Drizzle · Docker</span>
</footer>

<style>
.top-bar {
	height: 5px;
	background: linear-gradient(90deg, var(--wood-dk), var(--wood-lt), var(--wood-dk));
}
.layout {
	display: grid;
	grid-template-columns: 64px 1fr;
	min-height: calc(100vh - 5px);
}

/* Rail */
.rail {
	display: flex; flex-direction: column; align-items: center;
	padding: 2rem 0; background: var(--wood-dk);
	position: sticky; top: 5px; height: calc(100vh - 5px);
	gap: 1.5rem;
}
.rail-logo { font-family: var(--font-display); font-size: 1.6rem; color: var(--cream); transition: color 0.2s; }
.rail-logo:hover { color: var(--wood-lt); }
.rail-line { width: 1px; flex: 1; background: rgba(255,255,255,0.1); }
.rail-links { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }
.rail-link {
	font-family: var(--font-body); font-size: 0.65rem; font-weight: 500;
	letter-spacing: 0.12em; color: rgba(255,255,255,0.5);
	writing-mode: vertical-rl; transition: color 0.2s;
	background: none; border: none; cursor: pointer; padding: 0;
}
.rail-link:hover { color: var(--wood-lt); }
.rail-year { font-family: var(--font-mono); font-size: 0.52rem; color: rgba(255,255,255,0.2); letter-spacing: 0.1em; writing-mode: vertical-rl; }

main { display: flex; flex-direction: column; }

/* HERO */
.hero {
	position: relative;
	min-height: 88vh;
	display: flex; align-items: center;
	padding: 4rem 6rem;
	overflow: hidden;
	border-bottom: 1px solid var(--paper);
}
.wood-panel {
	position: absolute; top: 0; right: 0;
	width: 28vw; height: 100%;
	background: linear-gradient(160deg, rgba(193,127,74,0.1) 0%, transparent 70%);
	border-left: 2px solid rgba(193,127,74,0.1);
	pointer-events: none;
}
.hero-body { max-width: 560px; display: flex; flex-direction: column; gap: 2rem; position: relative; z-index: 1; }
.hero-location { font-family: var(--font-mono); font-size: 0.62rem; letter-spacing: 0.2em; color: var(--char-lt); }
.hero-name {
	font-family: var(--font-display);
	font-size: clamp(4rem, 9vw, 8rem);
	line-height: 0.9; letter-spacing: -0.02em; color: var(--char);
}
.hero-rule { display: flex; align-items: center; gap: 0.75rem; width: 240px; }
.hr-line   { flex: 1; height: 1px; background: var(--paper); }
.hr-diamond { width: 7px; height: 7px; background: var(--wood); transform: rotate(45deg); flex-shrink: 0; }
.hero-desc { font-family: var(--font-body); font-size: 1.05rem; font-weight: 300; color: var(--char-mid); line-height: 1.75; }

/* Palette swatches — the color moment */
.hero-palette {
	display: flex; gap: 0;
}
.swatch {
	flex: 1;
	height: 48px;
	display: flex; align-items: flex-end; justify-content: flex-start;
	padding: 0 0.6rem 0.4rem;
	position: relative;
	transition: flex 0.3s cubic-bezier(0.4,0,0.2,1);
	cursor: default;
	overflow: hidden;
}
.swatch:first-child { border-radius: 2px 0 0 2px; }
.swatch:last-child  { border-radius: 0 2px 2px 0; }
.swatch:hover { flex: 2; }
.swatch span {
	font-family: var(--font-mono); font-size: 0.5rem;
	letter-spacing: 0.1em; color: rgba(255,255,255,0.9);
	white-space: nowrap; opacity: 0;
	transition: opacity 0.2s;
}
.swatch:hover span { opacity: 1; }

/* FEATURES */
.features {
	display: grid; grid-template-columns: 1fr 1fr;
	border-bottom: 1px solid var(--paper);
	min-height: 340px;
}
.feature {
	display: flex; flex-direction: row;
	border-right: 1px solid var(--paper);
	transition: background 0.25s;
	overflow: hidden;
}
.feature:last-child { border-right: none; }
.feature:hover { background: var(--warm); }

/* Color block — the bold left panel */
.feature-color {
	width: 80px; flex-shrink: 0;
	display: flex; align-items: flex-end; padding: 1.5rem 0.75rem;
	transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
	position: relative;
}
.feature:hover .feature-color { width: 100px; }
.fc-label {
	font-family: var(--font-display); font-size: 0.85rem;
	color: rgba(255,255,255,0.85); writing-mode: vertical-rl;
	transform: rotate(180deg); letter-spacing: 0.08em;
}

.feature-body {
	flex: 1; padding: 2.5rem 2.5rem 2rem;
	display: flex; flex-direction: column; gap: 0.75rem;
}
.fb-num { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.15em; color: var(--char-lt); }
.fb-title {
	font-family: var(--font-display);
	font-size: clamp(2rem, 3.5vw, 3rem);
	color: var(--char); line-height: 1; transition: color 0.25s;
}
.feature:hover .fb-title { color: var(--char); }
.fb-desc { font-family: var(--font-body); font-size: 0.85rem; font-weight: 300; color: var(--char-mid); line-height: 1.65; flex: 1; }
.fb-go {
	font-family: var(--font-mono); font-size: 0.58rem;
	letter-spacing: 0.12em; color: var(--char-lt);
	transition: letter-spacing 0.3s, color 0.3s;
}
.feature:hover .fb-go { letter-spacing: 0.22em; color: var(--char); }

/* PROJECT */
.project-section { padding: 3.5rem 6rem; }
.ps-header { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2.5rem; }
.ps-label { font-family: var(--font-display); font-style: italic; font-size: 1.1rem; color: var(--char-lt); white-space: nowrap; }
.ps-line  { flex: 1; height: 1px; background: var(--paper); }

.project-feature {
	display: block;
	border-top: 2px solid var(--char);
	position: relative; overflow: hidden;
	transition: background 0.25s;
}
.project-feature:hover { background: var(--warm); }

.pf-color-bar {
	height: 3px;
	background: linear-gradient(90deg, var(--teal), var(--mustard));
	width: 0; transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
	position: absolute; top: 0; left: 0; right: 0;
}
.project-feature:hover .pf-color-bar { width: 100%; }

.pf-inner {
	display: grid; grid-template-columns: 1fr 260px;
	gap: 4rem; padding: 2.5rem 0;
}
.pf-left { display: flex; flex-direction: column; gap: 0.75rem; }
.pf-tag  { font-family: var(--font-mono); font-size: 0.52rem; letter-spacing: 0.15em; color: var(--char-lt); }
.pf-name {
	font-family: var(--font-display);
	font-size: clamp(2rem, 4vw, 3.5rem);
	color: var(--char); line-height: 1; transition: color 0.25s;
}
.project-feature:hover .pf-name { color: var(--teal); }
.pf-desc { font-family: var(--font-body); font-size: 0.9rem; font-weight: 300; color: var(--char-mid); line-height: 1.65; max-width: 480px; }
.pf-meta { display: flex; gap: 1.5rem; align-items: center; margin-top: auto; padding-top: 1rem; }
.pf-live { font-family: var(--font-mono); font-size: 0.55rem; letter-spacing: 0.1em; color: var(--teal); }
.pf-url  { font-family: var(--font-mono); font-size: 0.55rem; letter-spacing: 0.06em; color: var(--char-lt); transition: color 0.2s; }
.project-feature:hover .pf-url { color: var(--teal); }

.pf-right { display: flex; align-items: center; }
.pf-stack { display: flex; flex-direction: column; gap: 0.5rem; border-left: 2px solid var(--paper); padding-left: 2rem; }
.pf-stack-item {
	font-family: var(--font-mono); font-size: 0.62rem;
	letter-spacing: 0.1em; color: var(--char-lt);
	padding: 0.3rem 0; border-bottom: 1px solid var(--paper);
	transition: color 0.2s;
}
.pf-stack-item:last-child { border-bottom: none; }
.project-feature:hover .pf-stack-item { color: var(--char-mid); }

footer {
	display: flex; justify-content: space-between;
	padding: 1.25rem 1.25rem 1.25rem calc(64px + 6rem);
	border-top: 2px solid var(--paper);
	font-family: var(--font-mono); font-size: 0.55rem;
	letter-spacing: 0.1em; color: var(--char-lt);
	background: var(--warm);
}

@media (max-width: 900px) {
	.layout { grid-template-columns: 1fr; }
	.rail   { display: none; }
	.hero   { padding: 5rem 2rem 3rem; min-height: auto; }
	.features { grid-template-columns: 1fr; }
	.feature { min-height: 200px; }
	.project-section { padding: 3rem 2rem; }
	.pf-inner { grid-template-columns: 1fr; }
	.pf-right { display: none; }
	footer  { padding: 1.25rem 2rem; }
}
</style>