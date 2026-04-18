<script lang="ts">
	export let data: { user: App.Locals['user'] };

	const projects = [
		{
			label: 'OVAM BUDDY',
			tag: 'INTERNAL TOOL',
			description: 'MATIS waste management — quarterly OVAM CSV submissions.',
			url: 'https://ovam-buddy.olfke.be',
			color: '#3ab8b8',
			status: 'LIVE'
		},
		{
			label: 'HOTEL 505',
			tag: 'PRIVATE',
			description: 'A birthday gift. A letter. A hope.',
			url: 'https://bday-m.olfke.be',
			color: '#d4a843',
			status: 'LIVE'
		}
	];
</script>

<svelte:head>
	<title>olfke.be</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Special+Elite&family=Josefin+Sans:wght@300;400;600&display=swap" rel="stylesheet">
</svelte:head>

<div class="chrome-tl"></div>
<div class="chrome-tr"></div>
<div class="chrome-bl"></div>
<div class="chrome-br"></div>

<div class="atmo-fire"></div>
<div class="atmo-teal"></div>
<div class="atmo-vignette"></div>

<nav>
	<a href="/" class="nav-brand">OLFKE.BE</a>
	<div class="nav-links">
		<a href="/work">WORK</a>
		{#if data.user}
			<a href="/homelab" class="c-teal">HOMELAB</a>
			<form method="POST" action="/login?/logout" style="display:inline">
				<button type="submit" class="nav-btn">LOGOUT</button>
			</form>
		{:else}
			<a href="/login">ACCESS</a>
		{/if}
	</div>
</nav>

<main>

	<section class="hero">
		<div class="hero-hex" aria-hidden="true">
			<svg viewBox="0 0 120 120" fill="none">
				<polygon points="60,4 108,30 108,90 60,116 12,90 12,30" stroke="#d4a843" stroke-width="1" fill="none" opacity="0.4"/>
				<polygon points="60,14 98,36 98,84 60,106 22,84 22,36" stroke="#d4a843" stroke-width="0.5" fill="none" opacity="0.2"/>
				<circle cx="60" cy="60" r="16" stroke="#3ab8b8" stroke-width="1.5" fill="none" opacity="0.7"/>
				<circle cx="60" cy="60" r="4" fill="#3ab8b8" opacity="0.8"/>
				<line x1="60" y1="38" x2="60" y2="44" stroke="#3ab8b8" stroke-width="1" opacity="0.6"/>
				<line x1="60" y1="76" x2="60" y2="82" stroke="#3ab8b8" stroke-width="1" opacity="0.6"/>
				<line x1="38" y1="60" x2="44" y2="60" stroke="#3ab8b8" stroke-width="1" opacity="0.6"/>
				<line x1="76" y1="60" x2="82" y2="60" stroke="#3ab8b8" stroke-width="1" opacity="0.6"/>
				<circle cx="60" cy="60" r="28" stroke="#3ab8b8" stroke-width="0.5" stroke-dasharray="4 6" fill="none" opacity="0.3"/>
			</svg>
		</div>

		<div class="hero-signal">
			<span class="signal-dot"></span>
			TRANSMISSION INCOMING
		</div>

		<div class="hero-title-wrap">
			<span class="hero-title-main">OLFKE</span>
			<div class="hero-title-right">
				<span class="hero-dot-be">.BE</span>
				<span class="hero-tagline">Personal hub —<br>projects, tools &<br>infrastructure.</span>
			</div>
		</div>

		<div class="hero-bottom">
			<div class="hero-tags">
				<span class="htag c-green b-green">● GHENT, BE</span>
				<span class="htag c-teal b-teal">● ONLINE</span>
				<span class="htag c-amber b-amber">● SELF-HOSTED</span>
			</div>
			<div class="hero-status">
				<span class="hs-item">
					<span class="hs-key">STATUS</span>
					<span class="hs-val c-green">OPERATIONAL <span class="blink-dot"></span></span>
				</span>
				<span class="hs-sep">·</span>
				<span class="hs-item">
					<span class="hs-key">LOC</span>
					<span class="hs-val">51.05°N</span>
				</span>
				<span class="hs-sep">·</span>
				<span class="hs-item">
					<span class="hs-key">STACK</span>
					<span class="hs-val c-teal">SK · LUCIA · DRIZZLE</span>
				</span>
			</div>
		</div>
	</section>

	<div class="section-rule">
		<span class="sr-line"></span>
		<span class="sr-label">// NAVIGATE</span>
		<span class="sr-line"></span>
	</div>

	<section class="nav-cards">
		<a href="/work" class="ncard">
			<div class="ncard-glow" style="background:radial-gradient(ellipse at 20% 30%,rgba(58,184,184,0.13) 0%,transparent 60%)"></div>
			<div class="ncard-streak" style="background:linear-gradient(90deg,#3ab8b8,transparent 55%)"></div>
			<div class="ncard-num">01</div>
			<span class="ncard-badge" style="color:#3ab8b8;border-color:rgba(58,184,184,0.35);background:rgba(58,184,184,0.06)">PUBLIC</span>
			<h2 class="ncard-title">WORK</h2>
			<p class="ncard-desc">IT shortcuts, tool references & daily bookmarks for sysadmin work.</p>
			<div class="ncard-ghost">WORK</div>
			<div class="ncard-enter" style="color:#3ab8b8">ENTER →</div>
		</a>

		<a href="/homelab" class="ncard">
			<div class="ncard-glow" style="background:radial-gradient(ellipse at 20% 30%,rgba(224,136,32,0.11) 0%,transparent 60%)"></div>
			<div class="ncard-streak" style="background:linear-gradient(90deg,#e08820,transparent 55%)"></div>
			<div class="ncard-num">02</div>
			<span class="ncard-badge" style="color:#e08820;border-color:rgba(224,136,32,0.35);background:rgba(224,136,32,0.06)">RESTRICTED</span>
			<h2 class="ncard-title">HOMELAB</h2>
			<p class="ncard-desc">Network topology, services & infrastructure. Ghent home setup.</p>
			<div class="ncard-ghost">LAB</div>
			<div class="ncard-enter" style="color:#e08820">ENTER →</div>
		</a>
	</section>

	<div class="section-rule">
		<span class="sr-line"></span>
		<span class="sr-label">// DEPLOYED</span>
		<span class="sr-line"></span>
	</div>

	<section class="projects">
		{#each projects as p}
			<a href={p.url} target="_blank" rel="noopener" class="pcard" style="--c:{p.color}">
				<div class="pcard-glow"></div>
				<div class="pcard-bar"></div>
				<div class="pcard-inner">
					<div class="pcard-top">
						<span class="pcard-tag">{p.tag}</span>
						<span class="pcard-live" style="color:{p.color}">● {p.status}</span>
					</div>
					<h3 class="pcard-name">{p.label}</h3>
					<p class="pcard-desc">{p.description}</p>
					<span class="pcard-url">↗ {p.url.replace('https://','')}</span>
				</div>
			</a>
		{/each}
	</section>

</main>

<footer>
	<span>OLFKE.BE — GHENT, BELGIUM</span>
	<span>SVELTEKIT · LUCIA · DRIZZLE · DOCKER</span>
</footer>

<style>
	/* Chrome */
	.chrome-tl,.chrome-tr,.chrome-bl,.chrome-br{position:fixed;width:28px;height:28px;z-index:300;pointer-events:none;}
	.chrome-tl{top:14px;left:14px;border-top:1px solid var(--gold-dim);border-left:1px solid var(--gold-dim);}
	.chrome-tr{top:14px;right:14px;border-top:1px solid var(--gold-dim);border-right:1px solid var(--gold-dim);}
	.chrome-bl{bottom:14px;left:14px;border-bottom:1px solid var(--gold-dim);border-left:1px solid var(--gold-dim);}
	.chrome-br{bottom:14px;right:14px;border-bottom:1px solid var(--gold-dim);border-right:1px solid var(--gold-dim);}

	/* Atmosphere */
	.atmo-fire{position:fixed;top:-30vh;left:-20vw;width:80vw;height:80vh;background:radial-gradient(ellipse,rgba(150,70,8,0.2) 0%,rgba(80,30,4,0.08) 45%,transparent 70%);pointer-events:none;z-index:0;}
	.atmo-teal{position:fixed;bottom:-20vh;right:-15vw;width:60vw;height:60vh;background:radial-gradient(ellipse,rgba(25,110,110,0.12) 0%,transparent 65%);pointer-events:none;z-index:0;}
	.atmo-vignette{position:fixed;inset:0;background:radial-gradient(ellipse at 50% 50%,transparent 35%,rgba(4,2,1,0.75) 100%);pointer-events:none;z-index:0;}

	/* Nav */
	nav{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;justify-content:space-between;align-items:center;padding:1rem 2.5rem;border-bottom:1px solid var(--border);background:rgba(10,8,5,0.93);backdrop-filter:blur(20px);}
	.nav-brand{font-family:'Cinzel Decorative',serif;font-size:0.82rem;letter-spacing:0.14em;color:var(--gold);transition:text-shadow 0.3s;}
	.nav-brand:hover{text-shadow:0 0 20px rgba(212,168,67,0.5);}
	.nav-links{display:flex;gap:2rem;align-items:center;}
	.nav-links a,.nav-btn{font-family:'Special Elite',serif;font-size:0.72rem;letter-spacing:0.1em;color:var(--text-muted);background:none;border:none;cursor:pointer;transition:color 0.2s;padding:0;}
	.nav-links a:hover,.nav-btn:hover{color:var(--gold);}
	.c-teal{color:var(--teal) !important;}

	/* Main */
	main{position:relative;z-index:1;max-width:1160px;margin:0 auto;padding:5.5rem 2.5rem 3rem;display:flex;flex-direction:column;}

	/* Hero */
	.hero{position:relative;padding:2.5rem 0 3.5rem;overflow:hidden;}

	.hero-hex{position:absolute;top:0.5rem;right:0;width:120px;height:120px;filter:drop-shadow(0 0 14px rgba(58,184,184,0.2));opacity:0.7;}

	.hero-signal{display:inline-flex;align-items:center;gap:0.6rem;font-family:'Special Elite',serif;font-size:0.62rem;letter-spacing:0.22em;color:var(--text-dim);margin-bottom:1rem;}
	.signal-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;background:var(--green);box-shadow:0 0 10px var(--green),0 0 20px rgba(78,203,113,0.3);animation:gpulse 2s infinite;}
	@keyframes gpulse{0%,100%{opacity:1;box-shadow:0 0 10px var(--green),0 0 20px rgba(78,203,113,0.3);}50%{opacity:0.4;box-shadow:0 0 4px var(--green);}}

	.hero-title-wrap{display:flex;align-items:flex-end;gap:1rem;margin-bottom:2rem;flex-wrap:wrap;}
	.hero-title-main{font-family:'Cinzel Decorative',serif;font-size:clamp(3.8rem,10.5vw,9rem);font-weight:900;color:var(--text);letter-spacing:0.05em;line-height:0.9;text-shadow:2px 3px 0 rgba(0,0,0,0.6);}
	.hero-title-right{display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:0.4rem;gap:0.4rem;}
	.hero-dot-be{font-family:'Cinzel Decorative',serif;font-size:clamp(2.2rem,5.5vw,5rem);font-weight:700;color:var(--gold);letter-spacing:0.05em;line-height:1;text-shadow:0 0 40px rgba(212,168,67,0.45),0 0 80px rgba(212,168,67,0.15);}
	.hero-tagline{font-family:'Special Elite',serif;font-size:0.75rem;color:var(--text-muted);letter-spacing:0.04em;line-height:1.6;}

	.hero-bottom{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;}
	.hero-tags{display:flex;gap:0.5rem;flex-wrap:wrap;}
	.htag{font-family:'Special Elite',serif;font-size:0.6rem;letter-spacing:0.1em;padding:0.28rem 0.7rem;border:1px solid;}
	.c-green{color:var(--green);}.b-green{border-color:rgba(78,203,113,0.3);background:rgba(78,203,113,0.05);}
	.c-teal{color:var(--teal);}.b-teal{border-color:rgba(58,184,184,0.3);background:rgba(58,184,184,0.05);}
	.c-amber{color:var(--amber);}.b-amber{border-color:rgba(224,136,32,0.3);background:rgba(224,136,32,0.05);}

	.hero-status{display:flex;align-items:center;gap:0.7rem;flex-wrap:wrap;}
	.hs-item{display:flex;align-items:center;gap:0.35rem;}
	.hs-key{font-family:'Special Elite',serif;font-size:0.5rem;letter-spacing:0.15em;color:var(--text-dim);}
	.hs-val{font-family:'Special Elite',serif;font-size:0.58rem;letter-spacing:0.07em;color:var(--text-muted);}
	.hs-sep{color:var(--border-hi);}
	.blink-dot{display:inline-block;width:5px;height:5px;border-radius:50%;background:var(--green);box-shadow:0 0 6px var(--green);animation:gpulse 2s infinite;vertical-align:middle;margin-left:3px;}

	/* Section rule */
	.section-rule{display:flex;align-items:center;gap:1rem;margin:2.5rem 0 1.75rem;}
	.sr-line{flex:1;height:1px;background:var(--border);}
	.sr-label{font-family:'Special Elite',serif;font-size:0.6rem;letter-spacing:0.22em;color:var(--gold-dim);white-space:nowrap;}

	/* Nav cards */
	.nav-cards{display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:3rem;}
	.ncard{position:relative;overflow:hidden;background:var(--bg-card);padding:2.25rem 2rem 1.75rem;display:flex;flex-direction:column;gap:0.65rem;transition:background 0.3s;min-height:270px;}
	.ncard::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(255,255,255,0.012) 0%,transparent 50%);pointer-events:none;}
	.ncard:hover{background:var(--bg-card2);}
	.ncard-glow{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 0.4s;}
	.ncard:hover .ncard-glow{opacity:1;}
	.ncard-streak{position:absolute;top:0;left:0;right:0;height:2px;}
	.ncard-num{font-family:'Cinzel Decorative',serif;font-size:0.62rem;color:var(--text-dim);letter-spacing:0.12em;}
	.ncard-badge{display:inline-block;align-self:flex-start;font-family:'Special Elite',serif;font-size:0.55rem;letter-spacing:0.1em;padding:0.2rem 0.55rem;border:1px solid;}
	.ncard-title{font-family:'Cinzel Decorative',serif;font-size:clamp(1.8rem,4vw,3.5rem);font-weight:900;letter-spacing:0.04em;line-height:1;color:var(--text);transition:color 0.25s;margin-top:auto;}
	.ncard:hover .ncard-title{color:var(--gold);}
	.ncard-desc{font-family:'Special Elite',serif;font-size:0.7rem;color:var(--text-muted);line-height:1.65;max-width:340px;}
	.ncard-ghost{position:absolute;bottom:-2rem;right:-0.5rem;font-family:'Cinzel Decorative',serif;font-size:7.5rem;line-height:1;color:var(--text);opacity:0.03;pointer-events:none;transition:opacity 0.3s;letter-spacing:0.02em;}
	.ncard:hover .ncard-ghost{opacity:0.055;}
	.ncard-enter{font-family:'Special Elite',serif;font-size:0.62rem;letter-spacing:0.16em;transition:letter-spacing 0.25s;}
	.ncard:hover .ncard-enter{letter-spacing:0.26em;}

	/* Projects */
	.projects{display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:4px;margin-bottom:4rem;}
	.pcard{position:relative;overflow:hidden;background:var(--bg-card);display:flex;transition:background 0.25s;min-height:185px;}
	.pcard:hover{background:var(--bg-card2);}
	.pcard-glow{position:absolute;inset:0;pointer-events:none;background:radial-gradient(ellipse at 85% 85%,color-mix(in srgb,var(--c) 15%,transparent),transparent 55%);opacity:0;transition:opacity 0.35s;}
	.pcard:hover .pcard-glow{opacity:1;}
	.pcard-bar{width:3px;flex-shrink:0;background:linear-gradient(to bottom,var(--c),transparent);}
	.pcard-inner{flex:1;padding:1.4rem 1.4rem 1.3rem 1.2rem;display:flex;flex-direction:column;gap:0.5rem;position:relative;z-index:1;}
	.pcard-top{display:flex;justify-content:space-between;align-items:center;}
	.pcard-tag{font-family:'Special Elite',serif;font-size:0.5rem;letter-spacing:0.1em;color:var(--text-dim);border:1px solid var(--border-mid);padding:0.18rem 0.45rem;}
	.pcard-live{font-family:'Special Elite',serif;font-size:0.54rem;letter-spacing:0.08em;}
	.pcard-name{font-family:'Cinzel Decorative',serif;font-size:1.5rem;font-weight:700;letter-spacing:0.04em;color:var(--text);transition:color 0.2s;line-height:1.1;}
	.pcard:hover .pcard-name{color:var(--gold);}
	.pcard-desc{font-family:'Special Elite',serif;font-size:0.7rem;color:var(--text-muted);line-height:1.6;flex:1;}
	.pcard-url{font-family:'Special Elite',serif;font-size:0.57rem;letter-spacing:0.05em;color:var(--text-dim);transition:color 0.2s;}
	.pcard:hover .pcard-url{color:var(--gold);}

	/* Footer */
	footer{display:flex;justify-content:space-between;padding:1.25rem 0;border-top:1px solid var(--border);font-family:'Special Elite',serif;font-size:0.56rem;letter-spacing:0.12em;color:var(--text-dim);}

	/* Responsive */
	@media(max-width:740px){
		.nav-cards{grid-template-columns:1fr;}
		.hero-hex{display:none;}
		.hero-bottom{flex-direction:column;align-items:flex-start;}
		.hero-status{display:none;}
		nav{padding:1rem 1.5rem;}
		main{padding:5rem 1.25rem 3rem;}
		.hero-title-wrap{gap:0.5rem;}
	}
</style>