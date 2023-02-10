import { IsString } from "class-validator";


export class usernameDto {
    @IsString()

    id: string;
}