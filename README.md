# Afe - Angular (current v.6.1.0) Froala Editor
### What I developed?
Own module (afe-editor) with editor (Froala Editor) included and visual notification (Toastr) for error.

This module is the HTML editor for Angular 6 makes it easy to use and allows you to make preliminary settings that will be common to all the modules and components in which you will use Froala Editor.
### How to use
**Step 1**

Download from gihub

`https://github.com/AGorkovenko/angular-2-froala`

and put in your project (exp. in folder `./app` )

**Step 2**

Import module

```typescript
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";

// Import to your main or other module
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

**Step 3**

Set some options in file `/afe-editor/afe-editor-options-init.ts`

```typescript
...

AFE_EDITOR_OPTIONS = {
	...
		
	// Example: custom toolbar
	// more you can find hear
	// https://www.froala.com/wysiwyg-editor/docs/options
	
	toolbarButtons: [
		"paragraphFormat",
		"bold",
		"italic",
		"|",
		"formatOL",
		"formatUL",
		"quote",
		"-",
		"insertLink",
		"insertImage"
	],
	imageUploadURL: this.editorService.UPLOAD_IMAGE_API,
	...
}

...
```

**Step 4**

Customize some variables and method in service `/afe-editor/afe-editor.service.ts`

```typescript
...

// URL of api end-point for uploading image

UPLOAD_IMAGE_API: string = environment.serverAddress + "/image";

...
```