<script context="module">
	let pageUrl = '';
	let imageUrl = '';

	// Fix a Webpack dependency check error
	export async function preload(page) {
		const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
		pageUrl = `${protocol}://${page.host}${page.path}`
		imageUrl = `${protocol}://${page.host}/card.jpg`
	}
</script>

<script>
	import Nav from './_components/Nav.svelte';
	import InformationalFooter from './_components/InformationalFooter.svelte'
	import { isUserLoggedIn} from './_store/local'
	import { currentPage } from './_store/navigation'

	export let segment = 'home';

	$: infiniteScrollPage = $isUserLoggedIn && segment && !segment.startsWith('settings');

	$: {
		segment = segment || 'home';
		currentPage.set(segment)
	}
</script>

<style>
	/* this avoids a flash of the background color when switching timelines */
	.infinite-scroll-page {
		min-height: 100vh;
	}
</style>

<svelte:head>
	<meta property="og:title" content="{intl.appName}" />
	<meta property="og:type" content="website" />
	<meta property="og:description" content="{intl.ogDescription}"/>
	<meta property="og:url" content="{pageUrl}"/>
	<meta property="og:site_name" content="{intl.appName}"/>
	<meta property="og:image" content="{imageUrl}"/>
</svelte:head>

<Nav {segment}/>

<div class="main-content">
	<main class="{infiniteScrollPage ? 'infinite-scroll-page' : ''}">
		<slot></slot>
	</main>
	{#if !$isUserLoggedIn && segment === 'home'}
		<InformationalFooter />
	{/if}
</div>