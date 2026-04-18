<script lang="ts">
	let username = '';
	let password = '';
	let secret = '';
	let status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
	let message = '';

	async function submit() {
		status = 'loading';
		message = '';
		try {
			const res = await fetch('/setup', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ username, password, secret })
			});
			const data = await res.json();
			if (res.ok) {
				status = 'success';
				message = `User "${data.username}" created successfully.`;
				username = '';
				password = '';
				secret = '';
			} else {
				status = 'error';
				message = data.error || 'Something went wrong.';
			}
		} catch {
			status = 'error';
			message = 'Request failed.';
		}
	}
</script>

<svelte:head><title>Setup — olfke.be</title></svelte:head>

<div class="top-bar"></div>

<div class="wrap">
	<div class="panel">
		<div class="panel-bar"></div>
		<div class="panel-body">
			<p class="eyebrow">One-time setup</p>
			<h1 class="title">Create User</h1>

			{#if status === 'success'}
				<div class="msg msg-ok">{message}</div>
				<a href="/login" class="back-link">Go to login →</a>
			{:else}
				{#if status === 'error'}
					<div class="msg msg-err">{message}</div>
				{/if}

				<form on:submit|preventDefault={submit}>
					<div class="field">
						<label for="secret">Setup secret</label>
						<input id="secret" type="password" bind:value={secret} required autocomplete="off" />
					</div>
					<div class="field">
						<label for="username">Username</label>
						<input id="username" type="text" bind:value={username} required autocomplete="off" spellcheck="false" />
					</div>
					<div class="field">
						<label for="password">Password</label>
						<input id="password" type="password" bind:value={password} required autocomplete="new-password" />
					</div>
					<button type="submit" class="btn" disabled={status === 'loading'}>
						{status === 'loading' ? 'Creating...' : 'Create user'}
					</button>
				</form>

				<a href="/login" class="back-link">← Back to login</a>
			{/if}
		</div>
	</div>
</div>

<style>
.top-bar { height: 5px; background: linear-gradient(90deg, var(--wood-dk), var(--wood-lt), var(--wood-dk)); }

.wrap {
	min-height: calc(100vh - 5px);
	display: flex; align-items: center; justify-content: center;
	padding: 2rem;
	background: var(--cream);
}

.panel { width: 100%; max-width: 380px; }

.panel-bar {
	height: 3px;
	background: linear-gradient(90deg, var(--mustard), var(--orange));
}

.panel-body {
	background: var(--warm);
	border: 1px solid var(--paper);
	border-top: none;
	padding: 2.5rem;
	display: flex; flex-direction: column; gap: 1.25rem;
}

.eyebrow {
	font-family: var(--font-mono); font-size: 0.58rem;
	letter-spacing: 0.18em; color: var(--char-lt);
}
.title {
	font-family: var(--font-display); font-size: 2rem;
	color: var(--char); line-height: 1;
}

.msg {
	font-family: var(--font-mono); font-size: 0.65rem;
	letter-spacing: 0.05em; padding: 0.6rem 0.8rem;
	border: 1px solid;
}
.msg-ok  { color: var(--sage);             border-color: rgba(90,122,90,0.3);  background: rgba(90,122,90,0.06); }
.msg-err { color: var(--red, #b83232);     border-color: rgba(184,50,50,0.3);  background: rgba(184,50,50,0.06); }

form { display: flex; flex-direction: column; gap: 1rem; }

.field { display: flex; flex-direction: column; gap: 0.4rem; }
label {
	font-family: var(--font-mono); font-size: 0.55rem;
	letter-spacing: 0.15em; color: var(--char-lt);
}
input {
	background: var(--cream); border: 1px solid var(--paper);
	border-bottom: 2px solid var(--paper);
	color: var(--char); padding: 0.65rem 0.8rem;
	font-family: var(--font-body); font-size: 0.9rem;
	outline: none; transition: border-color 0.2s; width: 100%;
}
input:focus { border-color: var(--wood); border-bottom-color: var(--mustard); }

.btn {
	background: var(--wood-dk); color: var(--cream);
	border: none; padding: 0.85rem;
	font-family: var(--font-display); font-size: 1.1rem;
	letter-spacing: 0.08em; cursor: pointer;
	transition: background 0.2s; width: 100%;
}
.btn:hover:not(:disabled) { background: var(--mustard); }
.btn:disabled { opacity: 0.5; cursor: not-allowed; }

.back-link {
	font-family: var(--font-mono); font-size: 0.58rem;
	letter-spacing: 0.1em; color: var(--char-lt);
	transition: color 0.2s; text-align: center;
}
.back-link:hover { color: var(--char); }
</style>