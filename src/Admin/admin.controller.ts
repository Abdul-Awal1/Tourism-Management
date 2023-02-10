import { Controller, Get,Post,Param,Put,Delete,Body,Query,Patch, ValidationPipe } from '@nestjs/common';
import { adminService } from "./admin.service";
import { usernameDto } from "./dtos/username.dto";

@Controller("/admin")
export class adminController {
    constructor(private readonly adminService: adminService) { }

    @Get("/getadmin")
    getAdm():string {
        return this.adminService.getAdmin();
    }

    @Post()
    create(): string {
        return this.adminService.create();
    }
    @Post("/getUser/:id&:name")
    getUser(@Param() params): string {
        return "The id is " + params.id + "and the name is " + params.name;
    }

    @Post("/insertUser/:uname&:pass")
    insertUser(@Param() params): string {

        return "User name is  " + params.uname + " and the password is  " + params.pass;
    }

    @Delete("/deleteUser/:uname")
    deleteUser(@Param() params): string {
        return "delete name  is  " + params.uname;
    }

    @Put("/updateUser/:uname&:pass")
    updateUser(@Param() params): string {

        return "The Updated User name is  " + params.uname + " and the Updated password is  " + params.pass;
    }

    @Get("/Admin/:uname&:pass")
    Admin(@Param() params): string {

        return "The User name is  " + params.uname + " and the password is  " + params.pass;
    }
    @Post("/id")
    userId(@Body(@new ValidationPipe) body: usernameDto) {
        console.log(body)
        return this.adminService.userId(body);
    }

   
}