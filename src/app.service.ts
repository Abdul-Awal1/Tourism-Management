import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Awal';
  }
     getABC():string{
     return 'this is for abc';
     }
    create (): string {
      return 'this is for post ';
    }
    userId(Id) {
        console.log(Id, "here")
        return Id;
    }
    userPass(Password ){
        console.log(Password, "here")
           return Password;
    }
    createUser(createUser) {
        console.log(createUser, "here")
        return createUser;
    }
    delete(deleteUser) {
        console.log(deleteUser, "here")
        return deleteUser;
    }

}
