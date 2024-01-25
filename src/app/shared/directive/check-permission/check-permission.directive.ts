import { Directive, Input, TemplateRef, ViewContainerRef, ElementRef, HostListener } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';

@Directive({
  selector: '[appCheckPermission]'
})
export class CheckPermissionDirective {

  permissionList: any[] = [];

  @Input() set appCheckPermission(data: any) {
    this.verifyPermission(data);
  }

  constructor(
    private el: ElementRef,
    private store: Store<any>,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }

  verifyPermission(data:any){
    // console.log("call",data)
    this.store.pipe(select(state=>state.core && state.core.userData))
    .pipe(
      filter(data=> data!=undefined)
    ).subscribe(
      (userData) => {
          this.permissionList = userData.permissions;          
          let permission:any = data.permission;

          if(typeof(permission) == "string") {
            if(!this.permissionList.includes(permission.toLowerCase())) {
              this.viewContainer.clear();
              return;
            }
          } 
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
    );
  }

}
