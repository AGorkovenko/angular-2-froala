# Afe - Angular (current v.6.1.0) Froala Editor
### What I developed?
Own module (afe-editor) with editor (Froala Editor) included and visual notification (Toastr) for error.

This module is the HTML editor for Angular 6 makes it easy to use and allows you to make preliminary settings that will be common to all the modules and components in which you will use Froala Editor.
### How to use
**Step 1**

Download from gihub

`https://github.com/AGorkovenko/angular-2-froala`

and put in your project (exp. in folder `./app` )

install editor

`npm install froala-editor`

install notification lib

`npm install --save toastr`

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

**Step 5**

Use in component

HTML template
```angular2html
<afe-editor formControlName="editorField"></afe-editor>
```

Angular 6 component
```typescript
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
```

**Step 6**

Add all style and scripts to your `angular.json`
```
"styles": [
	...
	"node_modules/ngx-toastr/toastr.css",
	"node_modules/froala-editor/css/froala_editor.pkgd.min.css",
	"node_modules/froala-editor/css/froala_style.min.css",
	"node_modules/froala-editor/css/themes/dark.min.css",
	"node_modules/froala-editor/css/themes/gray.min.css",
	"node_modules/froala-editor/css/themes/red.min.css",
	"node_modules/froala-editor/css/themes/royal.min.css",
	"node_modules/font-awesome/css/font-awesome.min.css",
	...
],
"scripts": [
	...
	"node_modules/jquery/dist/jquery.min.js",
	"node_modules/froala-editor/js/froala_editor.pkgd.min.js",
	...
]
```

Using source for this module:

- [Froala Editor](https://www.froala.com)
- [Toastr](https://codeseven.github.io/toastr/)