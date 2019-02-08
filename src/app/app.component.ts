import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="testForm">
        <afe-editor formControlName="editorField"></afe-editor>
    </form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  testForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
  }
  
  ngOnInit(): void {
    this.testForm = this.fb.group({
      editorField: new FormControl("", Validators.required)
    });
  }
}
