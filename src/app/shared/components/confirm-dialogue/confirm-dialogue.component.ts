import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.scss']
})
export class ConfirmDialogueComponent implements OnInit {

  fileDeleteLoader: boolean = false;
  modalType: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef:MatDialogRef<ConfirmDialogueComponent>,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    if(this.data.dialogType){
      this.modalType = this.data.dialogType;
    }
  }

  onClose(){
    this.dialogRef.close({type:''});
  }

  onDelete() {
    if(this.data.api){
      this.fileDeleteLoader=true;
      this.data.apiMethod.subscribe(
        (        res: any)=>{
          this.fileDeleteLoader = false;
          this.dialogRef.close({type:'success',response:res,dialogType:this.data.dialogType == 'news' ? 'news' : this.data.dialogType == 'announcement' ? 'announcement' : ''}); 
        },
        (        err: any)=>{
          this.fileDeleteLoader = false;
          this.dialogRef.close({type:'error',response:err}); 
          // this.dialogRef.close({type:'error',response:err,dialogType:this.data.dialogType == 'news' ? 'news' : this.data.dialogType == 'announcement' ? 'announcement' : ''}); 
        }
      )
    }else{
      this.dialogRef.close({type:'normal_confirmed'});
    }
  }

  goToDownload() {
    this.dialogRef.close();
    window.open('/ng/download',"_blank");
  }
}
