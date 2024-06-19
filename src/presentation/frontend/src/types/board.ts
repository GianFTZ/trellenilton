import type { DraggableId, DraggableLocation } from "@hello-pangea/dnd";

export type Id = string;

export type Board = {
	id: string;
	name: string;
	columns: { [key: string]: Column };
	deleted: boolean;
	createdAt: string;
};

// Ajustando o tipo Column
export type Column = {
	id: string;
	name: string;
	description: string;
	quotes: Quote[];
	deleted: boolean;
};
export interface UpdateBoardData {
	name: string;
}

export interface DeleteBoardData {
	deleted: boolean;
}
export interface AuthorColors {
	soft: string;
	hard: string;
}

export interface Author {
	id: Id;
	name: string;
	url: string;
	colors: AuthorColors;
}

export interface Quote {
	id: string;
	content: string;
}
export interface Dragging {
	id: DraggableId;
	location: DraggableLocation;
}

export interface QuoteMap {
	[key: string]: Quote[];
}
export interface Task {
	id: Id;
	content: string;
}
