import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { MyHttpClientService } from './helper/my-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private httpCLientService: MyHttpClientService
  ) { }

  async getAllUsers(successCallBack: () => void, errorCallBack: (errorMessage: string) => void):
                Promise<List_User[]> {
    const observable: Observable<List_User[]> = this.httpCLientService.get({
      fullEndPoint: "https://jsonplaceholder.typicode.com/users",
    });
    const promiseData = firstValueFrom(observable);
    promiseData.then(value => successCallBack())
      .catch(error => errorCallBack(error));

    console.log(promiseData);
    return await promiseData;
  }
}

export class List_User {
  name: string | undefined;
  username: string | undefined;
  id: number | undefined;
  email: string | undefined;
  address: UserAddress | undefined;
}
export class UserAddress {
  street: string | undefined;
  suite: string | undefined;
  city: string | undefined;
  zipcode: string | undefined;
}
export class UserGeo {
  lat: string | undefined;
  lng: string | undefined;
}
