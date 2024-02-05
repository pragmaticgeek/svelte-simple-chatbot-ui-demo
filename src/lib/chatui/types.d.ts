import type { SvelteComponent } from 'svelte';
import type { MessageRole } from '../enums/MessageRole';

export type SvelteComponentProps<T> = {
	[P in keyof T]: T[P];
};

export type User = {
	firstName: string;
	lastName: string;
	avatarUrl?: string;
};

export type ChatMessage = {
	id: string;
	userInfo?: User;
	role: MessageRole;
	message: string;
};

export type Conversations = Array<Message>;


export interface IChatConversationsProps {
	conversations: Conversations;
	isQuerying: boolean;
}

export interface IChatMessageProps {
	message: ChatMessage;
}

export interface IChatInputProps {
	placeholder?: string;
	onSubmit?: (value: string) => void;
	customSubmitIcon?: SvelteComponent;
	disabled?: boolean;
}

export interface IChatUIProps {
	isQuerying: boolean;
	onSubmit?: (value: string) => void;
	placeholder?: string;
	conversations: Conversations;
	customSubmitIcon?: ReactNode | SvelteComponent;
	conversations: Array<ChatMessage>;
}
