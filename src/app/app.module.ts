import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AfeEditorModule} from "./afe-editor/afe-editor.module";
import {AppComponent} from "./app.component";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		AfeEditorModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
