<script context="module" lang="ts">
	export type { IChatUIProps } from './types';

	const initProps: IChatUIProps = {
		conversations: [],
		isQuerying: false,
		onSubmit: () => {},
		placeholder: 'Type to chat...'
	};
</script>

<script lang="ts">
	import type { IChatUIProps } from './types';

	import ChatConversations from './chatconversations.svelte';
	import ChatInput from './chatinput.svelte';
	import type { SvelteComponentProps } from './types';
	import { afterUpdate } from 'svelte';

	export let {
		conversations,
		isQuerying,
		placeholder,
		onSubmit
	}: SvelteComponentProps<typeof initProps> = initProps;

	let chatConversationsElem: HTMLDivElement;

	afterUpdate(() => {
		chatConversationsElem.scrollTo(0, chatConversationsElem.scrollHeight);
	});
</script>

<div class="w-3/4 h-full">
	<div bind:this={chatConversationsElem} class="max-h-[calc(100vh-10em)] overflow-y-auto mt-4 pt-4">
		<ChatConversations {isQuerying} {conversations} />
	</div>
	<div class="fixed bottom-8" style="width: inherit">
		<ChatInput disabled={isQuerying} {onSubmit} {placeholder}
			><slot name="customIcon" slot="customIcon" /></ChatInput
		>
	</div>
</div>
