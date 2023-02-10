"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const admin_module_1 = require("./admin.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(admin_module_1.adminModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map