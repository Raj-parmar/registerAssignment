import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrls } from './../../../core/api/apis';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  assetPath = environment.asset_path;
  
  constructor(
    private http: HttpClient,
    private store: Store<any>,
    ) {}

  registration(userDetailsData: any) {
    // return this.store.select(action => action.core && action.core.userData).pipe(
    //   filter(data => data != undefined),
    //   map(userData => {
    //     userData.push(userDetailsData);
    //     this.store.dispatch({
    //       type: 'USER_DATA',
    //       payload: (userData)
    //     });
    // }));
  }  

  getCountryList(){
    return this.http.get<any>(this.assetPath+'assets/common-files/country-states.json');
  }

  getOrderHistory() {
    return this.store.select(action => action.core && action.core.userData).pipe(
      filter(data => data != undefined),
      map(userData => {
        return userData;
    }));
  }

  
}
