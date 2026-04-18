<script lang="ts">
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head><title>ACCESS — olfke.be</title></svelte:head>

<div class="chrome-tl"></div>
<div class="chrome-tr"></div>
<div class="chrome-bl"></div>
<div class="chrome-br"></div>

<div class="wrap">
	<div class="panel">

		<!-- Top label -->
		<div class="panel-eyebrow">
			<span class="eyebrow-line"></span>
			<span class="eyebrow-text">RESTRICTED ACCESS</span>
			<span class="eyebrow-line"></span>
		</div>

		<!-- Icon -->
		<div class="hex-icon">
			<svg viewBox="0 0 80 80" fill="none">
				<polygon points="40,6 70,22 70,58 40,74 10,58 10,22"
					stroke="currentColor" stroke-width="1.5" fill="none"/>
				<polygon points="40,16 62,28 62,52 40,64 18,52 18,28"
					stroke="currentColor" stroke-width="0.75" fill="none" opacity="0.4"/>
				<circle cx="40" cy="40" r="8" stroke="currentColor" stroke-width="1.5" fill="none"/>
				<circle cx="40" cy="40" r="2" fill="currentColor"/>
				<line x1="40" y1="26" x2="40" y2="32" stroke="currentColor" stroke-width="1"/>
				<line x1="40" y1="48" x2="40" y2="54" stroke="currentColor" stroke-width="1"/>
			</svg>
		</div>

		<h1>AUTHENTICATE</h1>

		<div class="title-divider">
			<span></span><span class="diamond">◆</span><span></span>
		</div>

		{#if form?.error}
			<div class="error-bar">
				<span class="error-icon">✕</span>
				{form.error}
			</div>
		{/if}

		<form method="POST" action="?/login">
			<input type="hidden" name="from" value={data.from} />

			<div class="field">
				<label for="username">
					<span class="field-num">01</span> USERNAME
				</label>
				<input id="username" name="username" type="text"
					autocomplete="username" required spellcheck="false" />
			</div>

			<div class="field">
				<label for="password">
					<span class="field-num">02</span> PASSWORD
				</label>
				<input id="password" name="password" type="password"
					autocomplete="current-password" required />
			</div>

			<button type="submit" class="submit-btn">
				<span class="btn-bracket">▶</span>
				TRANSMIT CREDENTIALS
				<span class="btn-line"></span>
			</button>
		</form>

		<div class="status-bar">
			<span><span class="dot green-dot"></span> SIGNAL LOCKED</span>
			<span>STANDBY <span class="dot pulse-dot"></span></span>
		</div>

		<a href="/" class="back-link">← RETURN TO HUB</a>
	</div>
</div>

<style>
	.chrome-tl, .chrome-tr, .chrome-bl, .chrome-br {
		position: fixed; width: 32px; height: 32px; z-index: 200; pointer-events: none;
	}
	.chrome-tl { top: 14px; left: 14px; border-top: 1px solid var(--gold-dim); border-left: 1px solid var(--gold-dim); }
	.chrome-tr { top: 14px; right: 14px; border-top: 1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }
	.chrome-bl { bottom: 14px; left: 14px; border-bottom: 1px solid var(--gold-dim); border-left: 1px solid var(--gold-dim); }
	.chrome-br { bottom: 14px; right: 14px; border-bottom: 1px solid var(--gold-dim); border-right: 1px solid var(--gold-dim); }

	.wrap {
		min-height: 100vh;
		display: flex; align-items: center; justify-content: center;
		padding: 2rem;
	}

	.panel {
		width: 100%; max-width: 420px;
		display: flex; flex-direction: column; align-items: center; gap: 1.25rem;
		position: relative;
	}

	.panel-eyebrow {
		display: flex; align-items: center; gap: 0.75rem; width: 100%;
	}
	.eyebrow-line { flex: 1; height: 1px; background: var(--border-mid); }
	.eyebrow-text {
		font-family: var(--font-sans); font-size: 0.52rem;
		letter-spacing: 0.25em; color: var(--text-dim); white-space: nowrap;
	}

	.hex-icon { width: 64px; height: 64px; color: var(--gold); }

	h1 {
		font-family: var(--font-display);
		font-size: 3rem; letter-spacing: 0.15em;
		color: var(--text); margin: 0;
	}

	.title-divider {
		display: flex; align-items: center; gap: 0.6rem; width: 200px;
	}
	.title-divider span:not(.diamond) { flex: 1; height: 1px; background: var(--border-mid); }
	.diamond { color: var(--gold); font-size: 0.5rem; flex: 0; }

	.error-bar {
		width: 100%;
		background: rgba(200,72,56,0.12);
		border: 1px solid var(--red-dim);
		padding: 0.6rem 0.9rem;
		font-family: var(--font-sans); font-size: 0.68rem;
		letter-spacing: 0.08em; color: var(--red);
		display: flex; gap: 0.6rem; align-items: center;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
	}
	.error-icon { opacity: 0.7; }

	form { width: 100%; display: flex; flex-direction: column; gap: 0.9rem; }

	.field { display: flex; flex-direction: column; gap: 0.4rem; }
	label {
		font-family: var(--font-sans); font-size: 0.55rem;
		letter-spacing: 0.2em; color: var(--text-dim);
		display: flex; align-items: center; gap: 0.5rem;
	}
	.field-num { color: var(--gold-dim); font-size: 0.5rem; }

	input {
		background: var(--bg-card);
		border: 1px solid var(--border-mid);
		border-bottom-color: var(--border-hi);
		color: var(--text);
		padding: 0.7rem 0.9rem;
		font-family: var(--font-sans); font-size: 0.85rem;
		letter-spacing: 0.05em; outline: none;
		transition: border-color 0.2s, background 0.2s;
		width: 100%;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
	}
	input:focus {
		border-color: var(--gold-dim);
		background: var(--bg-card2);
	}

	.submit-btn {
		margin-top: 0.4rem;
		background: var(--bg-card);
		border: 1px solid var(--gold-dim);
		color: var(--gold);
		padding: 0.85rem 2rem;
		font-family: var(--font-sans); font-size: 0.65rem;
		letter-spacing: 0.25em; cursor: pointer;
		transition: background 0.2s, border-color 0.2s;
		width: 100%; position: relative; overflow: hidden;
		display: flex; align-items: center; justify-content: center; gap: 0.75rem;
		clip-path: polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%);
	}
	.submit-btn:hover {
		background: rgba(212,168,67,0.1);
		border-color: var(--gold);
	}
	.btn-bracket { opacity: 0.5; font-size: 0.5rem; }
	.btn-line {
		position: absolute; bottom: 0; left: 0;
		width: 0; height: 1px; background: var(--gold);
		transition: width 0.3s;
	}
	.submit-btn:hover .btn-line { width: 100%; }

	.status-bar {
		display: flex; justify-content: space-between; width: 100%;
		border: 1px solid var(--border);
		padding: 0.4rem 0.75rem;
		font-family: var(--font-sans); font-size: 0.55rem;
		letter-spacing: 0.15em; color: var(--text-dim);
		background: var(--bg-card);
		clip-path: polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px));
	}
	.dot { width: 5px; height: 5px; border-radius: 50%; display: inline-block; }
	.green-dot { background: var(--green); box-shadow: 0 0 6px var(--green); }
	.pulse-dot { background: var(--gold); animation: pulse 2s infinite; }
	@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.2} }

	.back-link {
		font-family: var(--font-sans); font-size: 0.55rem;
		letter-spacing: 0.15em; color: var(--text-dim);
		transition: color 0.2s;
	}
	.back-link:hover { color: var(--gold); }
</style>