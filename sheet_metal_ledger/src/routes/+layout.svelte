<script>
	import Header from './Header.svelte';
	import './styles.css';
	import 'virtual:windi.css';
</script>

<div class="app">
	<Header />

	<main>
		<table class="table">
			<tr>
				<th>test</th>
				<th>言語</th>
				<td>Python</td>
				<td>C++</td>
			</tr>
			<tr>
				<th>タイプ</th>
				<td>スクリプト型言語</td>
				<td>コンパイラ型言語</td>
			</tr>
		</table>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
