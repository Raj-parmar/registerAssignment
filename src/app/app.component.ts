import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, delay } from 'rxjs/operators';
import { CommonService } from './core/services/common.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { CookieService } from 'ngx-cookie-service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  @ViewChild('drawer') drawer: any;
  @ViewChild('sidenav') public sidenav: any;
  showHead: boolean = false;
  loginCheckFlag: boolean = false;
  private breakpointSubscription: Subscription;
  isDesktop: boolean = false;
  isMobile = false;
  isSideNavOpen = true;

  constructor(
    private router: Router,
    private store: Store<any>,
    public commonService: CommonService,
    private breakpointObserver: BreakpointObserver,
    // private cookieService: CookieService,
    ) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
            // if(this.cookieService.get('tsmptoken') !== ''){
            //   this.showHead = true;
            // }else{
            //   this.showHead = false;
            // }
        }
        if (event instanceof NavigationEnd) {
          if(event.url.split('/')[1] === 'checkout' || event.url.split('/')[1] === 'teameq-diagnostic' || event.url.split('/')[1] === 'payment' || event.url.split('/')[1] === 'eq-form' ){
            this.showHead = false;
          }
        }
      });

    }

    ngOnInit(): void {
      // if(this.cookieService.get('tsmptoken') !== ''){
      //   this.showHead = true;
      // }else{
      //   this.showHead = false;
      // }

    }

    toggleSideNav() {
      this.sidenav.toggle();
    }
    getDrawerMode() {
      return (this.isMobile || this.isDesktop )? 'over' : 'side';
    }

    ngAfterViewInit() {
      setTimeout(()=>{
        if(this.sidenav){
          this.breakpointObserver.observe(['(max-width: 800px)']).subscribe((res) => {
            if (res.matches) {
              this.sidenav.mode = 'over';
              this.sidenav.close();
            } else {
              this.sidenav.mode = 'side';
              this.sidenav.open();
            }
          });
        }
      },0)
    } 
  
}
