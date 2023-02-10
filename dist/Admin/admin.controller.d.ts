import { adminService } from "./admin.service";
import { usernameDto } from "./dtos/username.dto";
export declare class adminController {
    private readonly adminService;
    constructor(adminService: adminService);
    getAdm(): string;
    create(): string;
    getUser(params: any): string;
    insertUser(params: any): string;
    deleteUser(params: any): string;
    updateUser(params: any): string;
    Admin(params: any): string;
    userId(: any): any;
    body: usernameDto;
}
