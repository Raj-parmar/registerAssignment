import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment';
import { CommonService } from 'src/app/core/services/common.service';
// import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  assetPath = environment.asset_path;
  mainMenuList:any[] = [];
  custom_url:any


  constructor(private commonService: CommonService,
    // private cookieService:CookieService
    ) { }

  ngOnInit(): void {
    // this.getMainMenu();
    // if(this.cookieService.get('custom_url') !== '' && this.cookieService.get('custom_url') !== ''){
    //   this.custom_url = JSON.parse(this.cookieService.get('custom_url'));
    // }
  }
  getMainMenu(){
    this.commonService.getMainList().subscribe(
      (response: any) => {
        if (response.success == 1 && response.total_records > 0) {
          this.mainMenuList = response.records;
          // console.log("mainmenu",this.mainMenuList)
          this.mainMenuList.sort((a,b) => a.menu_order - b.menu_order);
        }
      },
      (error) => {
      }
    );
  }
}
