import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    getABC(): string;
    create(): string;
    getUser(params: any): string;
    insertUser(params: any): string;
    deleteUser(params: any): string;
    updateUser(params: any): string;
    Admin(params: any): string;
    userId(body: string): any;
    userPass(body: string): any;
    createUser(userData: string): any;
    delete(Data: string): any;
    getUsers(sortBy: string): {
        username: string;
        email: string;
        age: string;
    }[];
    addUser(add: string): {
        username: string;
        email: string;
        age: string;
    }[];
    putUser(put: string): {
        username: string;
        email: string;
        age: string;
    }[];
    deleteUser2(deleteq: string): {
        username: string;
        email: string;
        age: string;
    }[];
    patchUser(main: string): {
        username: string;
        email: string;
        age: string;
    }[];
}
