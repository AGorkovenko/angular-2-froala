import {NgModule} from "@angular/core";
import {ToastrModule, ToastrService} from "ngx-toastr";
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {AfeEditorComponent} from "./afe-editor.component";
import {AfeEditorService} from "./afe-editor.service";
import {AfeEditorOptionsInit} from "./afe-editor-options-init";

@NgModule({
	imports: [
		FroalaEditorModule.forRoot(),
		FroalaViewModule.forRoot(),
		ToastrModule.forRoot()
	],
	exports: [
		FroalaEditorModule,
		FroalaViewModule,
		AfeEditorComponent
	],
	declarations: [
		AfeEditorComponent
	],
	providers: [
		ToastrService,
		AfeEditorService,
		AfeEditorOptionsInit
	]
})
export class AfeEditorModule {
}
