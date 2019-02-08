import {Inject, Injectable, PLATFORM_ID} from "@angular/core";
import {ToastrService} from "ngx-toastr";
import {isPlatformBrowser} from "@angular/common";
import {environment} from "../../environments/environment";

@Injectable()
export class AfeEditorService {
	
	UPLOAD_IMAGE_API: string = environment.serverAddress + "/image";
	UPLOAD_FILE_API: string = environment.serverAddress + "/file";
	
	constructor(private toastrService: ToastrService,
	@Inject(PLATFORM_ID) private platformId: Object) {
	}
	
	public requestHeaders() {
		const tokenJson = JSON.parse(localStorage.getItem(environment.authCookie));
		if (tokenJson && tokenJson.token) {
			return {
				Authorization: tokenJson.token
			};
		} else {
			return null;
		}
	}
	
	public error(e, editor, error, response) {
		if (isPlatformBrowser(this.platformId)) {
			const serverError = response && JSON.parse(response) ? JSON.parse(response) : null;
			if (serverError) {
				this.toastrService.error(serverError.message, "Error from server with code: " + serverError.code);
				this.toastrService.error(error.message, "Error editor " + error.code);
			} else {
				this.toastrService.error(error.message, "Error editor " + error.code);
			}
		} else {
			console.warn("Error editor " + error.code, error.massage);
		}
	}
	
	public get_current_address() {
		return "https://api.yourticket.com.ua"
	}
}