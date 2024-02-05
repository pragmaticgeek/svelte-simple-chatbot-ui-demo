<script context="module" lang="ts">
	export type { IChatInputProps } from './types';

	const initProps: IChatInputProps = {
		disabled: false,
		placeholder: 'Type to chat...'
	};
</script>

<script lang="ts">
	import type { IChatInputProps, SvelteComponentProps } from './types';
	import { WandMagicSparklesSolid } from 'svelte-awesome-icons';
	export let { disabled, placeholder, onSubmit }: SvelteComponentProps<typeof initProps> =
		initProps;

	let textareaInputElem: HTMLTextAreaElement;

	const handleClick = () => {
		if (textareaInputElem.value.trim().length > 0) {
			onSubmit && onSubmit(textareaInputElem.value);
			textareaInputElem.value = '';
		}
	};
	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter' && !event.shiftKey && textareaInputElem.value.trim().length > 0) {
			event.preventDefault();
			onSubmit && onSubmit(textareaInputElem.value);
			textareaInputElem.value = '';
		}
	};
</script>

<textarea
	bind:this={textareaInputElem}
	{placeholder}
	class="textarea resize-none"
	on:keydown={handleKeyPress}
	{disabled}
></textarea>
<button
	type="button"
	class="fixed ml-[-3.5em] mt-[0.5em] btn variant-filled btn-icon btn-md"
	{disabled}
	on:click={handleClick}
>
	<slot name="customIcon">
		<WandMagicSparklesSolid />
	</slot>
</button>
