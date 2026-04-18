<script lang="ts">
	export let data: { user: App.Locals['user'] };

	const colors = ['#ff3d8a','#9b4dff','#00e5cc','#ffe600','#ff6b35','#39ff7a','#3d8bff'];
	let tick = 0;
	if (typeof setInterval !== 'undefined') {
		setInterval(() => tick = (tick + 1) % colors.length, 1200);
	}
</script>

<svelte:head>
	<title>olfke.be</title>
	<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Syne+Mono&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</svelte:head>

<!-- floating noise blobs -->
<div class="blob b1"></div>
<div class="blob b2"></div>
<div class="blob b3"></div>
<div class="blob b4"></div>
<div class="blob b5"></div>

<!-- NAV -->
<nav>
	<a href="/" class="brand">olfke.be</a>
	<div class="nav-pill">
		<span class="ndot"></span>
		online
	</div>
	<div class="nav-r">
		<a href="/work">work</a>
		{#if data.user}
			<a href="/homelab" class="hl-link">homelab</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">out</button>
			</form>
		{:else}
			<a href="/login">in</a>
		{/if}
	</div>
</nav>

<!-- HERO — absolute chaos, lovingly arranged -->
<section class="hero">

	<!-- Big rotating ring -->
	<div class="ring r1"></div>
	<div class="ring r2"></div>
	<div class="ring r3"></div>

	<!-- Scattered labels -->
	<div class="label-float lf1 mono">SYS_OLFKE_BE</div>
	<div class="label-float lf2 mono">v1.0.0</div>
	<div class="label-float lf3 mono">GHENT — BE</div>
	<div class="label-float lf4 mono">51.05°N</div>

	<!-- Main title — absolutely enormous -->
	<div class="hero-title-wrap">
		<div class="ht-row1">
			<span class="ht-o">O</span>
			<span class="ht-l">L</span>
			<span class="ht-f">F</span>
			<span class="ht-k">K</span>
			<span class="ht-e">E</span>
		</div>
		<div class="ht-row2">
			<span class="ht-dot">.</span>
			<span class="ht-b">B</span>
			<span class="ht-e2">E</span>
		</div>
	</div>

	<!-- Subtitle drifting under -->
	<div class="hero-sub">
		<span class="hs-dash">—</span>
		<span>personal hub</span>
		<span class="hs-sep">×</span>
		<span>projects</span>
		<span class="hs-sep">×</span>
		<span>tools</span>
		<span class="hs-sep">×</span>
		<span>infrastructure</span>
		<span class="hs-dash">—</span>
	</div>

	<!-- Status strip -->
	<div class="status-strip">
		<div class="ss-item pink">
			<span class="ss-dot"></span>
			ghent, be
		</div>
		<div class="ss-item teal">
			<span class="ss-dot"></span>
			self-hosted
		</div>
		<div class="ss-item yellow">
			<span class="ss-dot"></span>
			operational
		</div>
		<div class="ss-item purple">
			<span class="ss-dot"></span>
			sk · lucia · pg
		</div>
	</div>

</section>

<!-- NAVIGATE — two huge portals -->
<section class="portals">

	<a href="/work" class="portal portal-work">
		<div class="portal-noise"></div>
		<div class="portal-num mono">01</div>
		<div class="portal-badge badge-teal">public</div>
		<h2 class="portal-title">Work</h2>
		<p class="portal-desc">IT shortcuts, tool references & daily bookmarks.</p>
		<div class="portal-enter">enter <span class="arr">↗</span></div>
		<div class="portal-corner-tl"></div>
		<div class="portal-corner-br"></div>
		<!-- Big background letter -->
		<div class="portal-letter">W</div>
	</a>

	<a href="/homelab" class="portal portal-lab">
		<div class="portal-noise"></div>
		<div class="portal-num mono">02</div>
		<div class="portal-badge badge-orange">restricted</div>
		<h2 class="portal-title">Homelab</h2>
		<p class="portal-desc">Network, services & infrastructure. Ghent.</p>
		<div class="portal-enter">enter <span class="arr">↗</span></div>
		<div class="portal-corner-tl"></div>
		<div class="portal-corner-br"></div>
		<div class="portal-letter">H</div>
	</a>

</section>

<!-- DEPLOYED — wild horizontal cards -->
<section class="deployed">
	<div class="dep-header">
		<span class="dep-line"></span>
		<span class="dep-label mono">deployed</span>
		<span class="dep-line"></span>
	</div>

	<div class="dep-grid">

		<a href="https://ovam-buddy.olfke.be" target="_blank" rel="noopener" class="dcard dc1">
			<div class="dc-stripe"></div>
			<div class="dc-body">
				<div class="dc-top">
					<span class="dc-tag mono">internal tool</span>
					<span class="dc-live teal-text mono">● live</span>
				</div>
				<h3 class="dc-name">Ovam Buddy</h3>
				<p class="dc-desc">MATIS waste management — quarterly OVAM CSV submissions.</p>
				<span class="dc-url mono">↗ ovam-buddy.olfke.be</span>
			</div>
		</a>

		<a href="https://bday-m.olfke.be" target="_blank" rel="noopener" class="dcard dc2">
			<div class="dc-stripe"></div>
			<div class="dc-body">
				<div class="dc-top">
					<span class="dc-tag mono">private</span>
					<span class="dc-live yellow-text mono">● live</span>
				</div>
				<h3 class="dc-name">Hotel 505</h3>
				<p class="dc-desc">A birthday gift. A letter. A hope.</p>
				<span class="dc-url mono">↗ bday-m.olfke.be</span>
			</div>
		</a>

		<div class="dcard dc3 dc-empty">
			<div class="dc-stripe"></div>
			<div class="dc-body">
				<div class="dc-top">
					<span class="dc-tag mono">pending</span>
				</div>
				<h3 class="dc-name" style="opacity:0.2">???</h3>
				<p class="dc-desc" style="opacity:0.2">next transmission loading...</p>
			</div>
		</div>

	</div>
</section>

<!-- FOOTER -->
<footer>
	<span class="mono" style="font-size:0.6rem;color:var(--text-dim)">olfke.be // {new Date().getFullYear()}</span>
	<div class="footer-dots">
		{#each colors as c}
			<span class="fdot" style="background:{c}"></span>
		{/each}
	</div>
	<span class="mono" style="font-size:0.6rem;color:var(--text-dim)">sk · lucia · drizzle</span>
</footer>

<style>
.mono { font-family: var(--font-mono); }

/* ── Blobs ── */
.blob {
	position: fixed; border-radius: 50%;
	filter: blur(80px); pointer-events: none; z-index: 0;
	animation: drift 20s ease-in-out infinite alternate;
}
.b1 { width: 600px; height: 600px; top: -200px; left: -200px;  background: rgba(155,77,255,0.12); animation-duration: 25s; }
.b2 { width: 500px; height: 500px; top: 20vh;   right: -150px; background: rgba(255,61,138,0.09); animation-duration: 18s; animation-delay: -5s; }
.b3 { width: 400px; height: 400px; bottom: 10vh; left: 10vw;   background: rgba(0,229,204,0.08); animation-duration: 22s; animation-delay: -10s; }
.b4 { width: 300px; height: 300px; top: 50vh;   left: 30vw;   background: rgba(255,230,0,0.06);  animation-duration: 30s; animation-delay: -8s; }
.b5 { width: 350px; height: 350px; bottom: 20vh; right: 20vw;  background: rgba(57,255,122,0.07); animation-duration: 20s; animation-delay: -15s; }
@keyframes drift {
	0%   { transform: translate(0,0) scale(1); }
	33%  { transform: translate(40px,-30px) scale(1.05); }
	66%  { transform: translate(-20px,50px) scale(0.95); }
	100% { transform: translate(30px,20px) scale(1.02); }
}

/* ── Nav ── */
nav {
	position: fixed; top: 0; left: 0; right: 0; z-index: 200;
	display: flex; justify-content: space-between; align-items: center;
	padding: 1rem 2rem;
	background: rgba(6,6,10,0.85);
	backdrop-filter: blur(20px);
	border-bottom: 1px solid rgba(255,255,255,0.04);
}
.brand {
	font-family: var(--font-display); font-weight: 800;
	font-size: 1rem; letter-spacing: 0.08em;
	background: linear-gradient(90deg, var(--purple), var(--pink));
	-webkit-background-clip: text; -webkit-text-fill-color: transparent;
}
.nav-pill {
	display: flex; align-items: center; gap: 0.4rem;
	font-family: var(--font-mono); font-size: 0.58rem;
	letter-spacing: 0.12em; color: var(--text-dim);
	border: 1px solid rgba(57,255,122,0.2);
	padding: 0.2rem 0.6rem;
	border-radius: 20px;
}
.ndot { width: 5px; height: 5px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px var(--green); animation: blink 2s infinite; }
@keyframes blink { 0%,100%{opacity:1;} 50%{opacity:0.2;} }
.nav-r { display: flex; gap: 1.5rem; align-items: center; }
.nav-r a, .nav-btn {
	font-family: var(--font-display); font-weight: 600; font-size: 0.75rem;
	letter-spacing: 0.1em; color: var(--text-muted);
	background: none; border: none; cursor: pointer; padding: 0;
	transition: color 0.2s;
}
.nav-r a:hover, .nav-btn:hover { color: var(--text); }
.hl-link { color: var(--teal) !important; }

/* ── HERO ── */
.hero {
	position: relative; z-index: 1;
	min-height: 100vh;
	display: flex; flex-direction: column;
	align-items: center; justify-content: center;
	overflow: hidden;
	padding: 5rem 2rem 3rem;
}

/* Rotating rings */
.ring {
	position: absolute; border-radius: 50%;
	border: 1px solid; pointer-events: none;
	animation: spin linear infinite;
}
.r1 { width: 700px; height: 700px; border-color: rgba(155,77,255,0.08); animation-duration: 60s; top:50%; left:50%; transform:translate(-50%,-50%); }
.r2 { width: 500px; height: 500px; border-color: rgba(0,229,204,0.07);  animation-duration: 40s; animation-direction: reverse; top:50%; left:50%; transform:translate(-50%,-50%); }
.r3 { width: 300px; height: 300px; border-color: rgba(255,230,0,0.06);  animation-duration: 25s; top:50%; left:50%; transform:translate(-50%,-50%); }
@keyframes spin { from{transform:translate(-50%,-50%) rotate(0deg);} to{transform:translate(-50%,-50%) rotate(360deg);} }

/* Floating labels */
.label-float {
	position: absolute; font-size: 0.52rem; letter-spacing: 0.2em;
	color: var(--text-dim); pointer-events: none;
	animation: floaty 8s ease-in-out infinite alternate;
}
.lf1 { top: 15%; left: 8%;  animation-delay: 0s; }
.lf2 { top: 12%; right: 10%; animation-delay: -2s; color: rgba(155,77,255,0.3); }
.lf3 { bottom: 22%; left: 5%; animation-delay: -4s; }
.lf4 { bottom: 18%; right: 8%; animation-delay: -6s; color: rgba(0,229,204,0.3); }
@keyframes floaty {
	0%   { transform: translateY(0px); opacity: 0.4; }
	100% { transform: translateY(-12px); opacity: 0.8; }
}

/* TITLE — the main event */
.hero-title-wrap {
	position: relative; z-index: 2;
	display: flex; flex-direction: column;
	align-items: center; line-height: 0.82;
	margin-bottom: 2rem;
}
.ht-row1, .ht-row2 { display: flex; align-items: baseline; }
.ht-row1 span, .ht-row2 span {
	font-family: var(--font-display); font-weight: 800;
	font-size: clamp(5rem, 15vw, 13rem);
	letter-spacing: -0.02em;
	transition: color 0.3s, text-shadow 0.3s;
	cursor: default;
}
/* Each letter gets its own color */
.ht-o  { color: var(--pink);   }
.ht-l  { color: var(--purple); }
.ht-f  { color: var(--teal);   }
.ht-k  { color: var(--yellow); }
.ht-e  { color: var(--orange); }
.ht-dot{ color: rgba(255,255,255,0.15); font-weight: 300; }
.ht-b  { color: var(--green);  }
.ht-e2 { color: var(--blue);   }

/* Hover: letters glow */
.ht-o:hover  { text-shadow: 0 0 40px var(--pink),   0 0 80px rgba(255,61,138,0.3); }
.ht-l:hover  { text-shadow: 0 0 40px var(--purple), 0 0 80px rgba(155,77,255,0.3); }
.ht-f:hover  { text-shadow: 0 0 40px var(--teal),   0 0 80px rgba(0,229,204,0.3); }
.ht-k:hover  { text-shadow: 0 0 40px var(--yellow), 0 0 80px rgba(255,230,0,0.3); }
.ht-e:hover  { text-shadow: 0 0 40px var(--orange), 0 0 80px rgba(255,107,53,0.3); }
.ht-b:hover  { text-shadow: 0 0 40px var(--green),  0 0 80px rgba(57,255,122,0.3); }
.ht-e2:hover { text-shadow: 0 0 40px var(--blue),   0 0 80px rgba(61,139,255,0.3); }

.hero-sub {
	position: relative; z-index: 2;
	display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap; justify-content: center;
	font-family: var(--font-body); font-size: 0.85rem; font-weight: 300;
	color: var(--text-muted); letter-spacing: 0.05em;
	margin-bottom: 2.5rem;
}
.hs-sep  { color: var(--purple); opacity: 0.5; }
.hs-dash { color: var(--text-dim); }

/* Status strip */
.status-strip {
	position: relative; z-index: 2;
	display: flex; gap: 0.75rem; flex-wrap: wrap; justify-content: center;
}
.ss-item {
	display: flex; align-items: center; gap: 0.4rem;
	font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.1em;
	padding: 0.3rem 0.8rem; border: 1px solid;
	border-radius: 2px;
}
.ss-item .ss-dot { width: 5px; height: 5px; border-radius: 50%; }
.pink   { color: var(--pink);   border-color: rgba(255,61,138,0.25);  background: rgba(255,61,138,0.05); }
.pink   .ss-dot { background: var(--pink); }
.teal   { color: var(--teal);   border-color: rgba(0,229,204,0.25);   background: rgba(0,229,204,0.05); }
.teal   .ss-dot { background: var(--teal); }
.yellow { color: var(--yellow); border-color: rgba(255,230,0,0.25);   background: rgba(255,230,0,0.05); }
.yellow .ss-dot { background: var(--yellow); box-shadow: 0 0 6px var(--yellow); animation: blink 2s infinite; }
.purple { color: var(--purple); border-color: rgba(155,77,255,0.25);  background: rgba(155,77,255,0.05); }
.purple .ss-dot { background: var(--purple); }

/* ── PORTALS ── */
.portals {
	position: relative; z-index: 1;
	display: grid; grid-template-columns: 1fr 1fr;
	min-height: 420px;
	border-top: 1px solid rgba(255,255,255,0.04);
}
.portal {
	position: relative; overflow: hidden;
	padding: 3rem;
	display: flex; flex-direction: column; gap: 1rem;
	transition: background 0.4s;
	border-right: 1px solid rgba(255,255,255,0.04);
}
.portal:last-child { border-right: none; }

.portal-noise {
	position: absolute; inset: 0; pointer-events: none;
	opacity: 0; transition: opacity 0.4s;
}
.portal-work .portal-noise { background: radial-gradient(ellipse at 30% 70%, rgba(0,229,204,0.12) 0%, transparent 60%); }
.portal-lab  .portal-noise { background: radial-gradient(ellipse at 30% 70%, rgba(255,107,53,0.1)  0%, transparent 60%); }
.portal:hover .portal-noise { opacity: 1; }
.portal:hover { background: rgba(255,255,255,0.015); }

.portal-num {
	font-size: 0.62rem; color: var(--text-dim); letter-spacing: 0.15em;
}
.portal-badge {
	display: inline-block; align-self: flex-start;
	font-family: var(--font-mono); font-size: 0.5rem; letter-spacing: 0.12em;
	padding: 0.22rem 0.6rem; border: 1px solid;
}
.badge-teal   { color: var(--teal);   border-color: rgba(0,229,204,0.3);  background: rgba(0,229,204,0.06); }
.badge-orange { color: var(--orange); border-color: rgba(255,107,53,0.3); background: rgba(255,107,53,0.06); }

.portal-title {
	font-family: var(--font-display); font-weight: 800;
	font-size: clamp(3rem, 6vw, 6rem);
	letter-spacing: -0.01em; line-height: 1;
	color: var(--text); transition: 0.3s;
	margin-top: auto;
}
.portal-work:hover .portal-title { color: var(--teal); text-shadow: 0 0 40px rgba(0,229,204,0.3); }
.portal-lab:hover  .portal-title { color: var(--orange); text-shadow: 0 0 40px rgba(255,107,53,0.3); }

.portal-desc {
	font-family: var(--font-body); font-size: 0.85rem; font-weight: 300;
	color: var(--text-muted); line-height: 1.65;
}
.portal-enter {
	font-family: var(--font-mono); font-size: 0.6rem; letter-spacing: 0.15em;
	color: var(--text-dim); transition: 0.3s;
	display: flex; align-items: center; gap: 0.4rem;
}
.portal-work:hover .portal-enter { color: var(--teal); }
.portal-lab:hover  .portal-enter { color: var(--orange); }
.arr { transition: transform 0.3s; }
.portal:hover .arr { transform: translate(3px,-3px); }

/* Corner brackets */
.portal-corner-tl, .portal-corner-br {
	position: absolute; width: 16px; height: 16px; pointer-events: none;
	transition: opacity 0.3s; opacity: 0;
}
.portal-corner-tl { top: 1rem; left: 1rem; border-top: 1px solid; border-left: 1px solid; }
.portal-corner-br { bottom: 1rem; right: 1rem; border-bottom: 1px solid; border-right: 1px solid; }
.portal-work .portal-corner-tl, .portal-work .portal-corner-br { border-color: var(--teal); }
.portal-lab  .portal-corner-tl, .portal-lab  .portal-corner-br { border-color: var(--orange); }
.portal:hover .portal-corner-tl, .portal:hover .portal-corner-br { opacity: 1; }

.portal-letter {
	position: absolute; bottom: -3rem; right: -1rem;
	font-family: var(--font-display); font-weight: 800;
	font-size: 18rem; line-height: 1; letter-spacing: -0.04em;
	color: var(--text); opacity: 0.02; pointer-events: none;
	transition: opacity 0.4s;
}
.portal:hover .portal-letter { opacity: 0.045; }

/* ── DEPLOYED ── */
.deployed {
	position: relative; z-index: 1;
	padding: 3rem 2rem;
	border-top: 1px solid rgba(255,255,255,0.04);
}
.dep-header {
	display: flex; align-items: center; gap: 1rem;
	margin-bottom: 2rem;
}
.dep-line { flex: 1; height: 1px; background: rgba(255,255,255,0.04); }
.dep-label { font-size: 0.58rem; letter-spacing: 0.3em; color: var(--text-dim); }

.dep-grid {
	display: grid; grid-template-columns: repeat(3,1fr);
	gap: 3px;
}
.dcard {
	position: relative; overflow: hidden;
	background: rgba(255,255,255,0.02);
	display: flex; flex-direction: column;
	transition: background 0.25s;
	min-height: 200px;
}
.dcard:not(.dc-empty):hover { background: rgba(255,255,255,0.04); }

.dc-stripe {
	height: 2px; flex-shrink: 0;
}
.dc1 .dc-stripe { background: linear-gradient(90deg, var(--teal), transparent); }
.dc2 .dc-stripe { background: linear-gradient(90deg, var(--yellow), transparent); }
.dc3 .dc-stripe { background: linear-gradient(90deg, rgba(255,255,255,0.1), transparent); }

.dc-body { flex:1; padding: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem; }
.dc-top  { display: flex; justify-content: space-between; }
.dc-tag  { font-size: 0.5rem; letter-spacing: 0.12em; color: var(--text-dim); }
.teal-text   { color: var(--teal); }
.yellow-text { color: var(--yellow); }
.dc-name {
	font-family: var(--font-display); font-weight: 700;
	font-size: 1.5rem; letter-spacing: 0.02em;
	color: var(--text); transition: color 0.2s;
}
.dc1:hover .dc-name { color: var(--teal); }
.dc2:hover .dc-name { color: var(--yellow); }
.dc-desc { font-family: var(--font-body); font-size: 0.78rem; color: var(--text-muted); line-height: 1.6; flex: 1; }
.dc-url  { font-size: 0.55rem; letter-spacing: 0.06em; color: var(--text-dim); transition: color 0.2s; }
.dc1:hover .dc-url { color: var(--teal); }
.dc2:hover .dc-url { color: var(--yellow); }
.dc-empty { opacity: 0.4; }

/* ── FOOTER ── */
footer {
	position: relative; z-index: 1;
	display: flex; justify-content: space-between; align-items: center;
	padding: 1.25rem 2rem;
	border-top: 1px solid rgba(255,255,255,0.04);
}
.footer-dots { display: flex; gap: 6px; align-items: center; }
.fdot { width: 6px; height: 6px; border-radius: 50%; opacity: 0.5; }

/* ── Responsive ── */
@media (max-width: 768px) {
	.portals  { grid-template-columns: 1fr; }
	.dep-grid { grid-template-columns: 1fr; }
	.hero-title-wrap { gap: 0; }
	.lf3,.lf4 { display: none; }
}
</style>