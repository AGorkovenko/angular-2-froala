import {Component, forwardRef} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AfeEditorOptionsInit} from "./afe-editor-options-init";

@Component({
	selector: "afe-editor",
	template: `
      <textarea [froalaEditor]="config" (froalaModelChange)="onChange($event)" [(froalaModel)]="model"></textarea>
	`,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => AfeEditorComponent),
			multi: true
		}
	]
})
export class AfeEditorComponent implements ControlValueAccessor {
	
	model: any;
	config = this.initEditorOptions.GA_EDITOR_OPTIONS;
	
	constructor(private initEditorOptions: AfeEditorOptionsInit) {
	}
	
	onChange  = (_) => {
	};
	onTouched = () => {
	};
	
	writeValue(content: any): void {
		this.model = content;
	}
	
	registerOnChange(fn: (_: any) => void): void {
		this.onChange = fn;
	}
	
	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}
}