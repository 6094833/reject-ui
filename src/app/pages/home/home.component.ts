import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
  locationControl:FormControl;
  queryRejectScanForm:FormGroup;
  isLocationSearched:boolean;

  public constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.isLocationSearched = true; // TODO : to remove this constraint to show Query Rejection Scan
    this.locationControl = new FormControl("", Validators.required);
    this.queryRejectScanForm = this.fb.group({
      locationId : [""],
      fromDate : ["", Validators.required],
      toDate : ["", Validators.required],
      fedexId : [""],
      orgCd : [""]
    });
  }

  queryRejectScanFormOnSubmit() {
    if(!this.queryRejectScanForm.valid) {
      console.log("Enter all required fields!");
      this.snackBar.open("Enter all required fields!","Okay",{
        duration: 3000
      });
      return;
    } 
    console.log("Form values : ", this.queryRejectScanForm.value);
    this.router.navigate(['/home/summary']);
  }

  onLocationCodeSearch() {
    if(!this.locationControl.valid){
      console.log("Please enter location code!");
      return;
    }
    this.isLocationSearched = true;
    console.log("Location Code : ",this.locationControl.value);
  }

}
