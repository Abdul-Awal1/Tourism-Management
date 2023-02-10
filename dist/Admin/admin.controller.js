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
exports.adminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
let adminController = class adminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    getAdm() {
        return this.adminService.getAdmin();
    }
    create() {
        return this.adminService.create();
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
};
__decorate([
    (0, common_1.Get)("/getadmin"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], adminController.prototype, "getAdm", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], adminController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/getUser/:id&:name"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], adminController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)("/insertUser/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], adminController.prototype, "insertUser", null);
__decorate([
    (0, common_1.Delete)("/deleteUser/:uname"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], adminController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Put)("/updateUser/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], adminController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Get)("/Admin/:uname&:pass"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], adminController.prototype, "Admin", null);
adminController = __decorate([
    (0, common_1.Controller)("/admin"),
    __metadata("design:paramtypes", [admin_service_1.adminService])
], adminController);
exports.adminController = adminController;
{
    console.log(body);
    return this.adminService.userId(body);
}
//# sourceMappingURL=admin.controller.js.map