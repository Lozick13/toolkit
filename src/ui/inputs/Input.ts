export interface Input {
	id: string;
	name: string;
	value: string | number;
	type: string;
	change: (e: React.ChangeEvent<HTMLInputElement>) => void;
	min?: number;
	required: boolean;
	disabled?: boolean;
}
