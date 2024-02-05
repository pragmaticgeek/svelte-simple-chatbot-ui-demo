<script context="module" lang="ts">
    export type { IChatConversationsProps } from "./types";

    const initProps: IChatConversationsProps = {
      conversations: [],
      isQuerying: false
    }
</script>

<script lang='ts'>
	import ChatMessage from "./chatmessage.svelte";
  import ChatWaiting from "./chatwaiting.svelte";
	import type { IChatConversationsProps, SvelteComponentProps } from "./types";

  export let { isQuerying, conversations }: SvelteComponentProps<typeof initProps> = initProps;
</script>

{#each conversations as chatMessage}
  <ChatMessage message={chatMessage} />
{/each}

{#if isQuerying}
  <ChatWaiting />
{/if}
