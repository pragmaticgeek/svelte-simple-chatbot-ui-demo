<script context="module" lang="ts">
	export type { IChatMessageProps } from './types';

	const initProps: IChatMessageProps = {
		message: {
			id: '0',
			role: MessageRole.SYSTEM,
			message: ''
		}
	};
</script>

<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import type { IChatMessageProps, SvelteComponentProps } from './types';
	import { MessageRole } from '../enums/MessageRole';
	export let { message }: SvelteComponentProps<typeof initProps> = initProps;
</script>

<div class="flex items-center mt-4">
	<Avatar
		width="w-10"
		initials={message.userInfo
			? message.userInfo?.firstName.charAt(0) + message.userInfo?.lastName.charAt(0)
			: '?'}
	/>
	<h4 class="ml-4">
		{#if message?.role === MessageRole.USER}You{:else}Chatbot{/if}
	</h4>
</div>
<div class="ml-14 mt-2">{message.message}</div>
