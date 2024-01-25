import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { constants ,getSubDomainName} from 'src/app/core/config/constants';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { EditRegisterComponent } from '../edit-register/edit-register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: UntypedFormGroup;
  submitted = false;
  constants = constants;
  countryList: any;
  tempStateList: any;
  stateList: any[] = [];
  getSubDomainName = getSubDomainName;
  totalRecords = 0;
  limit = 20;
  offset = 0;
  search: string ='';
  tsmid: any;
  all_records:string = 'N';
  sortColumnName: any;
  sortorder: any;
  pageSize = 20;
  pageSizeOptions = [20, 50, 100];
  displayedColumns: string[] = ['name', 'Mobile', 'country','state','action'];
  loader = true;
  dataSource: any[] = [];
  registeredUsersSubject = new BehaviorSubject<any[]>([]);
  registeredUsers: Observable<any[]> = this.registeredUsersSubject.asObservable();

  private citiesAndStates = {
    "Karnataka": ["Mangaluru", "Bengaluru", "Kolar"],
    "Maharashtra": ["Pune", "Mumbai", "Thane"]
  };

  constructor(
    private service: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private store: Store<any>,
    private dialog: MatDialog,
  ) {
    this.fetchRegisteredUsers();
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({
      fname: new UntypedFormControl(null, [
        Validators.pattern(constants.pattern.name),
        Validators.required,
      ]),
      country: new UntypedFormControl(null ,Validators.required),
      state: new UntypedFormControl(null ,Validators.required),
      phone: new UntypedFormControl('', [
        Validators.pattern(constants.pattern.phone),
        Validators.minLength(10),
        Validators.required
      ]),
    });
    this.countryListFun();
  }
  get f() {
    return this.form.controls;
  }
  registerFun() {
    this.submitted = true;    
    if (this.form.valid) {
        let userDetailsData = {
          name: this.form.value.fname,
          Mobile: this.form.value.phone,
          country: this.form.value.country,
          state: this.form.value.state
        };   
        this.registerUser(userDetailsData);
    }
  }
  countryListFun() {
    this.service.getCountryList().subscribe(
      (response) => {
        let data = (<any>response).country,
          tempData = [];
        for (let country_code in data) {
          tempData.push({ name: data[country_code], value: country_code });
        }
        this.countryList = tempData;
        this.tempStateList = (<any>response).states;
        this.form.patchValue({
          country: 'US'
        })
        this.changeCoutry();
      },
      (err) => {
        console.log('error ', err);
      }
    );
  }

  changeCoutry() {
    this.form.patchValue({
      state: null,
      phone: '',
    });
    this.stateList = [];
    for (let country_code in this.tempStateList) {
      if (this.form.get('country').value == country_code) {
        this.stateList = this.tempStateList[country_code];
      }
    }
  }

  private fetchRegisteredUsers(): void {
    this.loader = false;
    // Simulate GET request to retrieve registered users
    const mockApiResponse = [
      { id: '1', name: 'John Doe', Mobile: '9955455655', country: 'Karnataka', state: 'Mangaluru' },
      { id: '2', name: 'Jane Doe', Mobile: '9955455655', country: 'Maharashtra', state: 'Pune' },
    ];
    this.registeredUsersSubject.next(mockApiResponse);
    this.dataSource = this.registeredUsersSubject.value;
    if(this.registeredUsersSubject.value.length > 0){
      this.totalRecords = this.registeredUsersSubject.value.length;
    }
  }

  registerUser(user: any): void {
    // Simulate POST request to register a user
    // Update local store and refresh the user list
    const updatedUsers = [...this.registeredUsersSubject.value, { id: (Math.random() * 100).toString(), ...user }];
    this.updateRegisteredUsers(updatedUsers);
  }

  editUser(updatedUser: any): void {
    // Simulate PUT request to update a user
    // Update local store and refresh the user list
    const updatedUsers = this.registeredUsersSubject.value.map(user =>
      user.id === updatedUser.id ? { ...user, ...updatedUser } : user
    );
    this.updateRegisteredUsers(updatedUsers);
  }

  deleteUser(userId: string): void {
    // Simulate DELETE request to delete a user
    // Update local store and refresh the user list
    const updatedUsers = this.registeredUsersSubject.value.filter(user => user.id !== userId);
    this.updateRegisteredUsers(updatedUsers);
  }

  getCitiesForState(state: string): string[] {
    return this.citiesAndStates[state] || [];
  }

  private updateRegisteredUsers(updatedUsers: any[]): void {
    // Update the BehaviorSubject and notify observers
    this.registeredUsersSubject.next(updatedUsers);
    this.registeredUsers = this.registeredUsersSubject;
    console.log("main data",this.registeredUsersSubject)
  }

  editDataDialog(data) {
    const dialogRef = this.dialog.open(EditRegisterComponent, {
      width: '1000px',
      panelClass: 'deletecollection',
      data: { },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.type === "") {

      } else {
        // this.createNewAccountFun(stepper);
      }
    });
  }

}
