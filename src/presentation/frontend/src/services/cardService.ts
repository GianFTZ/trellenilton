import { Card, Priority, Status } from "@/types/board";
import { fetcher, poster } from "@/utils/api";

interface CreateCardPayload {
	idPriority: string;
	idCategory: string;
	idStatus: string;
	title: string;
	description?: string;
	createdAt: string;
	updatedAt?: string;
	endedAt?: string;
	deleted: boolean;
	comments?: string[];
	checklists?: string[];
	isRecurring?: boolean;
}
export const createCard = async (
	cardData: CreateCardPayload,
	columnId: string
): Promise<Card> => {
	try {
		const response = await poster("/create-cards", cardData);
		await poster("/create-columnCard", {
			idColumn: columnId,
			idCard: response.id,
		});
		return response;
	} catch (error) {
		console.error("Failed to create card:", error);
		throw new Error("Failed to create card");
	}
};

export const fetchCards = async () => {
	try {
		const response = await fetcher("/cards");
		return response;
	} catch (error) {
		console.error("Failed to fetch cards", error);
		return [];
	}
};

export const createPriority = async (data: {
	name: string;
	level: string;
	deleted: boolean;
}): Promise<Priority | undefined> => {
	try {
		const response = await poster("/create-priority", data);
		return response;
	} catch (error) {
		console.log(error);
	}
	return undefined;
};

export const createStatus = async (data: {
	name: string;
	description: string;
	deleted: boolean;
}): Promise<Status | undefined> => {
	try {
		const response = await poster("/create-status", data);
		return response;
	} catch (error) {
		console.log(error);
	}
	return undefined;
};

export const createCategory = async (data: {
	name: string;
	description: string;
	deleted: boolean;
}): Promise<Status | undefined> => {
	try {
		const response = await poster("/create-category", data);
		return response;
	} catch (error) {
		console.log(error);
	}
	return undefined;
};

export const fetchPriority = async () => {
	try {
		const response = await fetcher("/priorities", {});
		console.log("response ==>", response);
		if (response) {
			return response;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchCategory = async () => {
	try {
		const response = await fetcher("/categories", {});
		console.log("response ==>", response);
		if (response) {
			return response;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};

export const fetchStatus = async () => {
	try {
		const response = await fetcher("/status", {});
		console.log("response ==>", response);
		if (response) {
			return response;
		} else {
			return [];
		}
	} catch (error) {
		console.log(error);
	}
};
