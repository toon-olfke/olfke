<script lang="ts">
	import type { PageData, ActionData } from './$types';
	export let data: PageData;
	export let form: ActionData;
</script>

<svelte:head><title>Access — olfke.be</title></svelte:head>

<div class="top-bar"></div>

<div class="login-wrap">
	<div class="login-left">
		<a href="/" class="back">← Olfke.be</a>
		<div class="left-content">
			<h1 class="left-title">Olfke<span style="color:var(--orange)">.</span>be</h1>
			<p class="left-sub">Restricted access.<br>Homelab & private sections.</p>
		</div>
		<div class="left-palette">
			<div style="background:var(--teal); flex:2"></div>
			<div style="background:var(--orange); flex:1"></div>
			<div style="background:var(--mustard); flex:1"></div>
			<div style="background:var(--sage); flex:1"></div>
		</div>
	</div>

	<div class="login-right">
		<div class="login-panel">
			<div class="panel-top-bar"></div>
			<div class="panel-body">
				<p class="panel-eyebrow">Authenticate</p>
				<h2 class="panel-title">Sign in</h2>

				{#if form?.error}
					<div class="error-bar">{form.error}</div>
				{/if}

				<form method="POST" action="?/login">
					<input type="hidden" name="from" value={data.from} />

					<div class="field">
						<label for="username">Username</label>
						<input id="username" name="username" type="text"
							autocomplete="username" required spellcheck="false" />
					</div>

					<div class="field">
						<label for="password">Password</label>
						<input id="password" name="password" type="password"
							autocomplete="current-password" required />
					</div>

					<button type="submit" class="submit-btn">Enter</button>
				</form>
			</div>
		</div>
	</div>
</div>

<style>
.top-bar { height: 5px; background: linear-gradient(90deg, var(--wood-dk), var(--wood-lt), var(--wood-dk)); }

.login-wrap {
	min-height: calc(100vh - 5px);
	display: grid; grid-template-columns: 1fr 1fr;
}

/* Left — decorative panel */
.login-left {
	background: var(--wood-dk);
	display: flex; flex-direction: column;
	padding: 2.5rem 3rem;
	position: relative; overflow: hidden;
}
.back { font-family: var(--font-body); font-size: 0.7rem; letter-spacing: 0.1em; color: rgba(255,255,255,0.35); transition: color 0.2s; }
.back:hover { color: var(--wood-lt); }
.left-content { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 1rem; }
.left-title { font-family: var(--font-display); font-size: clamp(3rem, 6vw, 5rem); color: var(--cream); line-height: 0.9; letter-spacing: -0.01em; }
.left-sub { font-family: var(--font-body); font-size: 0.9rem; font-weight: 300; color: rgba(255,255,255,0.4); line-height: 1.6; }
.left-palette { display: flex; height: 6px; gap: 2px; }
.left-palette div { border-radius: 1px; }

/* Right — form panel */
.login-right {
	background: var(--cream);
	display: flex; align-items: center; justify-content: center;
	padding: 3rem 2rem;
}
.login-panel { width: 100%; max-width: 360px; }
.panel-top-bar { height: 3px; background: linear-gradient(90deg, var(--orange), var(--mustard)); margin-bottom: 0; }
.panel-body { background: var(--warm); border: 1px solid var(--paper); border-top: none; padding: 2.5rem; }
.panel-eyebrow { font-family: var(--font-mono); font-size: 0.58rem; letter-spacing: 0.18em; color: var(--char-lt); margin-bottom: 0.4rem; }
.panel-title { font-family: var(--font-display); font-size: 2rem; color: var(--char); margin-bottom: 1.75rem; line-height: 1; }

.error-bar {
	background: rgba(184,50,50,0.08); border: 1px solid rgba(184,50,50,0.2);
	color: var(--red, #b83232); font-family: var(--font-mono); font-size: 0.65rem;
	letter-spacing: 0.06em; padding: 0.6rem 0.8rem; margin-bottom: 1.25rem;
}

form { display: flex; flex-direction: column; gap: 1rem; }

.field { display: flex; flex-direction: column; gap: 0.4rem; }
label { font-family: var(--font-mono); font-size: 0.55rem; letter-spacing: 0.15em; color: var(--char-lt); }
input {
	background: var(--cream); border: 1px solid var(--paper);
	border-bottom: 2px solid var(--paper);
	color: var(--char); padding: 0.65rem 0.8rem;
	font-family: var(--font-body); font-size: 0.9rem;
	outline: none; transition: border-color 0.2s; width: 100%;
}
input:focus { border-color: var(--wood); border-bottom-color: var(--orange); }

.submit-btn {
	margin-top: 0.5rem;
	background: var(--wood-dk); color: var(--cream);
	border: none; padding: 0.85rem;
	font-family: var(--font-display); font-size: 1.1rem;
	letter-spacing: 0.08em; cursor: pointer;
	transition: background 0.2s; width: 100%;
}
.submit-btn:hover { background: var(--orange); }

@media (max-width: 700px) {
	.login-wrap { grid-template-columns: 1fr; }
	.login-left { min-height: 200px; padding: 2rem; }
	.left-content { justify-content: flex-end; padding-bottom: 1rem; }
}
</style>