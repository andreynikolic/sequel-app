<script>
  import Title from '../../_components/Title.svelte'
  import LazyPage from '../../_components/LazyPage.svelte'
  import pageComponent from '../../_pages/bubbles/[bubbleId]/index.svelte'
  import { stores } from '@sapper/app';

  const { page } = stores();
  const params = $page.params
  params.newBubble = $page.query.new === '';
</script>

<Title name="{intl.bubbleProfile}" />

<LazyPage {pageComponent} {params} />