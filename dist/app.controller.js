"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
    getABC() {
        return this.appService.getABC();
    }
    create() {
        return this.appService.create();
    }
    getUser(params) {
        return "The id is " + params.id + "and the name is " + params.name;
    }
    insertUser(params) {
        return "User name is  " + params.uname + " and the password is  " + params.pass;
    }
    deleteUser(params) {
        return "delete name  is  " + params.uname;
    }
    updateUser(params) {
        return "The Updated User name is  " + params.uname + " and the Updated password is  " + params.pass;
    }
    Admin(params) {
        return "The User name is  " + params.uname + " and the password is  " + params.pass;
    }
    userId(body) {
        console.log(body);
        return this.appService.userId(body);
    }
    userPass(body) {
        console.log(body);
        return this.appService.userPass(body);
    }
    createUser(userData) {
        console.log(userData);
        return this.appService.userPass(userData);
    }
    delete(Data) {
        console.log(Data);
        return this.appService.userPass(Data);
    }
    getUsers(sortBy) {
        console.log(sortBy);
        return [{ username: 'Awal', email: 'awalabdul@aiub.edu', age: "22" }];
    }
    addUser(add) {
        console.log(add);
        return [{ username: 'muhib', email: 'muhib@gmail.com', age: "12" }];
    }
    putUser(put) {
        console.log(put);
        return [{ username: 'munia', email: 'munia@gmail.com', age: "06" }];
    }
    deleteUser2(deleteq) {
        console.log(deleteq);
        return [{ username: 'munia', email: 'munia@gmail.com', age: "06" }];
    }
    patchUser(main) {
        console.log(main);
        return [{ username: 'a', email: '@gmail.com', age: "6" }];
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('/abc'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getABC", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/getUser/:id&:name"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)("/insertUser/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "insertUser", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:uname"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)("/updateUser/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)("/Admin/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AppController.prototype, "Admin", null);
__decorate([
    (0, common_1.Post)("/id"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "userId", null);
__decorate([
    (0, common_1.Get)("pass"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "userPass", null);
__decorate([
    (0, common_1.Put)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.Delete)('deleteUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "delete", null);
__decorate([
    (0, common_1.Get)('getUser'),
    __param(0, (0, common_1.Query)('sortBy')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Post)('add'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "addUser", null);
__decorate([
    (0, common_1.Put)('/put'),
    __param(0, (0, common_1.Query)('put')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "putUser", null);
__decorate([
    (0, common_1.Delete)('delete'),
    __param(0, (0, common_1.Query)('deleteq')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteUser2", null);
__decorate([
    (0, common_1.Patch)("awal"),
    __param(0, (0, common_1.Query)("main")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "patchUser", null);
AppController = __decorate([
    (0, common_1.Controller)("/app"),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map