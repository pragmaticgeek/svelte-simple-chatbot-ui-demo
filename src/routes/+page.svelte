<script lang="ts">
	import Chatbot from '$lib/chatui/chatui.svelte';
	import { MessageRole } from '$lib/enums/MessageRole';
	import { onMount } from 'svelte';
	import { ReplySolid } from 'svelte-awesome-icons';

	onMount(() => {
		document.title = '@pragmaticgeek Svelte chatbot implementation';
	});

	const mockedUser = { firstName: 'Test', lastName: 'User' };
	const botUser = { firstName: 'Pragmatic', lastName: 'Geek' };

	let isQuerying = false;
	let conversations = [
		{
			id: '0',
			userInfo: botUser,
			role: MessageRole.SYSTEM,
			message: 'I am a useful Chatbot UI that @pragmaticGeek made me.'
		},
		{
			id: '1',
			userInfo: mockedUser,
			role: MessageRole.USER,
			message: 'Cool where can I get the source.'
		},
		{
			id: '2',
			userInfo: botUser,
			role: MessageRole.ASSISTANT,
			message:
				'You can find the source to this demo at https://github.com/pragmaticgeek/svelte-simple-chatbot-ui-demo.  Please try submitting messages below to see the chat bot interaction.'
		}
	];

	const handleSubmit = (value: string) => {
		isQuerying = true;
		conversations = [
			...conversations,
			{
				id: conversations.length.toString(),
				userInfo: mockedUser,
				role: MessageRole.USER,
				message: value
			}
		];

		setTimeout(() => {
			conversations = [
				...conversations,
				{
					id: conversations.length.toString(),
					userInfo: botUser,
					role: MessageRole.ASSISTANT,
					message: 'This is a mocked response assistant message interaction'
				}
			];
			isQuerying = false;
		}, 3000);
	};
</script>

<!-- YOU CAN DELETE EVERYTHING IN THIS PAGE -->

<div class="h-full mx-auto flex justify-center items-center">
	<Chatbot
		{conversations}
		{isQuerying}
		onSubmit={handleSubmit}
		placeholder={'Type to chat to try demo...'}
	>
		<ReplySolid slot="customIcon" />
	</Chatbot>
</div>
