import type { IProfileRepository } from "../../domain/contracts/profile-repository";
import type { Profile } from "../../domain/entities/profile";
import type { ICreateProfileDatabaseProvider } from "../contracts/profile-database-provider";

export class ProfileRepository implements IProfileRepository {
    constructor(private readonly db: ICreateProfileDatabaseProvider) { }

    public async createProfile(profile: Profile): Promise<Profile> {
        const data = await this.db.createProfile(profile);
        return {
            name: data.name,
            function: data.function,
            image: data.image,
            deleted: data.deleted,
        };
    }
}