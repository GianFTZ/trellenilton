import type { Card } from "../entities/card";
import type { ICardRepository } from "../contracts/card-repository";

type Input = {
	idCard: string;
	idColumn: string;
};
type Output = {};
type CreateCardColumn = (input: Input) => Promise<Output>;
type SetupCreateCardColumn = {
	repository: ICardRepository;
};
type Setup = (props: SetupCreateCardColumn) => CreateCardColumn;

export const SetupCreateCardColumn: Setup =
	({ repository }) =>
	async ({ idCard, idColumn }: Input) => {
		try {
			console.log("bateu aqui card column")
			return await repository.createCardColumn(idCard, idColumn);
		} catch (error) {
			console.log(error);
			throw new Error("Could not create card", {
				cause: "create-card",
			});
		}
	};
