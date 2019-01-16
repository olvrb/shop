import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { compareSync, compare, hashSync } from "bcrypt";
import { Logger } from "@utilities/Logger";
@Entity()
export class User extends BaseEntity {
    public static HashPassword(password: string) {
        return hashSync(password, 12);
    }
    public static async Authenticate(email: string, password: string, done) {
        const user = await User.findOne({
            where: { email }
        });
        if (user === undefined) {
            return Logger.info("Login rejected.");
        }
        if (email === user.Email && compareSync(password, user.Password)) {
            Logger.debug("User authenticated.");
            return done(null, user);
        }
    }
    @PrimaryGeneratedColumn("uuid")
    public Id: string;

    @Column()
    public Email: string;

    @Column()
    public Password: string;
}
