# Afe - Angular (current v.6) Froala Editor
## What I developed?
Own module (afe-editor) with editor (Froala) included and visual notification (Toastr) for error
## How to use
```angular2
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";

// Imported in your module
import {AfeEditorModule} from "./afe-editor/afe-editor.module";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		
		// Add module
		AfeEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
``` 