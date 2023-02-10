import { Controller, Delete, Get,Param,Post, Put,Body, Query, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
     @Get ('/abc')
     getABC():string{
     return this.appService.getABC();
    }
  
    @Post()
      create(): string{
      return this.appService.create ();
    }
    @Post("/getUser/:id&:name")
    getUser(@Param() params): string {
        return "The id is "  + params.id + "and the name is " + params.name;
    }

    @Post("/insertUser/:uname&:pass")
    insertUser(@Param() params): string {

        return "User name is  " + params.uname + " and the password is  " +  params.pass;
    }

    @Delete("/deleteUser/:uname")
    deleteUser(@Param() params):string{
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
    userId(@Body() body: string) {
        console.log(body)
        return this.appService.userId(body);
    }

    @Get("pass")
    userPass(@Body() body: string) {
        console.log(body)
        return this.appService.userPass(body);
    }

    @Put('create')
    createUser(@Body() userData:string) {

        console.log(userData);
        return this.appService.userPass(userData)
    }
      @Delete('deleteUser')
      delete(@Body() Data: string) {

        console.log(Data);
        return this.appService.userPass(Data)
    }
    @Get('getUser')
    getUsers(@Query('sortBy') sortBy: string) {
        console.log(sortBy);
        return [{ username: 'Awal', email: 'awalabdul@aiub.edu',age:"22" }];

    }
 @Post('add')
    addUser(@Query('query') add: string) {
        console.log(add);
        return [{ username: 'muhib', email: 'muhib@gmail.com',age:"12" }];

    }
    @Put('/put')
    putUser(@Query('put') put: string) {
        console.log(put);
        return [{ username: 'munia', email: 'munia@gmail.com', age: "06" }];

    }
    @Delete('delete')
   deleteUser2(@Query('deleteq')deleteq: string) {
        console.log(deleteq);
        return [{ username: 'munia', email: 'munia@gmail.com', age: "06" }];

    }
    @Patch("awal")
    patchUser(@Query("main") main: string) {

        console.log(main);
        return [{ username: 'a', email: '@gmail.com', age: "6" }];
    }

}
