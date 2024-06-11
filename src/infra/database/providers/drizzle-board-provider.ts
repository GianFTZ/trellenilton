import { eq } from "drizzle-orm";
import { db } from "../../../main/drizzle";
import type { IBoardDatabaseProvider } from "../../contracts/board-database-provider";

export class DrizzleBoardProvider implements IBoardDatabaseProvider {
  public async loadAllBoards(): Promise<any[]> {
    const result = await db.query.board.findMany({
      with: {
        cards: true,
      },
    });
    return result;
  }
  public async createBoard(board: any): Promise<any> {
    const result = await db.insert(board).values({
      name: board.name,
      cards: [],
    });
    return result;
  }
  public async deleteBoard(board: any, id: string): Promise<any> {
    const result = await db
      .update(board)
      .set({ deleted: "1" })
      .where(eq(board.id, id))
      .execute();
    return result;
  }
  public async updateBoard(board: any, id: string): Promise<any> {
    const result = await db
      .update(board)
      .set({ 
        name: board.name,
        cards: board.cards,
        deleted: board.deleted,
      })
      .where(eq(board.id, id))
      .execute();
    return result;
  }
}
