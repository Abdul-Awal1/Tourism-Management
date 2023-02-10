
import { Injectable } from "@nestjs/common";

@Injectable()

export class adminService {



    getAdmin(): string {

        return "admin";
    }
    
    userId(Id) {
        console.log(Id, "here")
        return Id;
    }
   
}