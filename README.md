# Afe - Angular (current v.6) Froala Editor
### What I developed?
Own module (afe-editor) with editor (Froala) included and visual notification (Toastr) for error
### How to use
**Step 1**

Download from gihub

`https://github.com/AGorkovenko/angular-2-froala`

and put in your project (exp. in folder `./app` )

**Step 2**
```typescript
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";

// Import to your module
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
	
	...
	
}

...
```