"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var adminModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
let adminModule = adminModule_1 = class adminModule {
};
adminModule = adminModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [adminModule_1],
        controllers: [admin_controller_1.adminController],
        providers: [admin_service_1.adminService],
    })
], adminModule);
exports.adminModule = adminModule;
//# sourceMappingURL=admin.module.js.map