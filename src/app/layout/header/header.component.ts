import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { environment } from './../../../environments/environment';
import { AuthService } from 'src/app/features/authentication/services/auth.service';
import { Store } from '@ngrx/store';
import { filter, delay } from 'rxjs/operators';
// import { CookieService } from 'ngx-cookie-service';
import { CommonService } from 'src/app/core/services/common.service';
import { upperCase } from 'lodash';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { getSubDomainName } from 'src/app/core/config/constants';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  assetPath = environment.asset_path;
  @Output() sideHideShow = new EventEmitter<string>();
  logoutObservable;
  isAuthenticated = null;
  userDetails: any = {};
  mainMenuList:any[] = [];
  customUrl : any = {};
  getSubDomainName = getSubDomainName;  

  constructor(
    private commonService: CommonService,
    private authService: AuthService,
    private store: Store<any>,
    // private cookieService: CookieService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  sideHideShowEvent() {
    this.sideHideShow.emit("hide/show");
  }

  //main menu
  getMainMenu(){
    this.commonService.getMainList().subscribe(
      (response: any) => {
        this.customUrl = {};
        this.customUrl = (<any>response?.custom_url);
        if (response.success == 1 && response.total_records > 0) {
          this.mainMenuList = response.records;
          this.mainMenuList.sort((a,b)=> a['menu_order'] - b['menu_order']);
          this.mainMenuList.forEach(element => {
            element.child.sort((a,b)=> a['menu_order'] - b['menu_order']);
          });          
        } 
      },
      (error) => {
      }
    );
  }

}
