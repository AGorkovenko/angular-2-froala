import {Injectable} from "@angular/core";
import {AfeEditorService} from "./afe-editor.service";

@Injectable()
export class AfeEditorOptionsInit {
	
	constructor(private editorService: AfeEditorService) {
	}
	
	AFE_EDITOR_OPTIONS = {
		requestHeaders: this.editorService.requestHeaders(),
		
		codeViewKeepActiveButtons: [
			"fullscreen"
		],
		toolbarButtons: [
			"paragraphFormat",
			"bold",
			"italic",
			"underline",
			"strikeThrough",
			"align",
			"subscript",
			"superscript",
			"|",
			"fontFamily",
			"fontSize",
			"color",
			"inlineClass",
			// "inlineStyle",
			// "paragraphStyle",
			"lineHeight",
			"|",
			"formatOL",
			"formatUL",
			"quote",
			"-",
			"insertLink",
			"insertImage",
			"insertVideo",
			"insertFile",
			"insertTable",
			"|",
			"emoticons",
			"fontAwesome",
			"specialCharacters",
			"selectAll",
			"clearFormatting",
			"|",
			"print",
			// "getPDF",
			"spellChecker",
			"help",
			"html",
			"|",
			"undo",
			"redo",
			"fullscreen"
		],
		quickInsertButtons: ['image', 'embedly', 'table', 'ul', 'ol'],
		toolbarSticky: true,
		toolbarInline: false,
		toolbarVisibleWithoutSelection: true,
		charCounterCount: false,
		theme: "gray", //dark
		fontFamily: {
			"Nunito": "Default (Nunito)",
			"Arial,Helvetica,sans-serif": "Arial",
			"Georgia,serif": "Georgia",
			"'Times New Roman',Times,serif": "Times New Roman",
			"Verdana,Geneva,sans-serif": "Verdana"
		},
		emoticonsStep: 10,
		
		// Link
		linkInsertButtons: [],
		linkList: [
			{
				text: "Your site",
				href: this.editorService.get_current_address(),
				target: "",
				rel: ""
			}
		],
		
		// Images
		imageAllowedTypes: [
			"jpg",
			"png",
			"gif",
			"jpeg"
		],
		imageMaxSize: 1024 * 1024 * 2,
		imageUpload: true,
		imageUploadMethod: "POST",
		imageUploadParam: "image",
		imageUploadURL: this.editorService.UPLOAD_IMAGE_API,
		imageUploadParams: {
			identification: "admin_editor",
			folder: "editor"
		},
		imageStyles: {},
		imageEditButtons: [
			"imageReplace",
			"imageAlign",
			"imageRemove",
			"|",
			"imageLink",
			"linkOpen",
			"linkEdit",
			"linkRemove",
			"-",
			"imageDisplay",
			"imageAlt",
			"imageSize"],
		imagePaste: false,
		
		// Image manager
		imageManagerLoadMethod: "GET",
		imageManagerLoadParams: {
			page: 1
		},
		imageManagerLoadURL: this.editorService.UPLOAD_IMAGE_API,
		imageManagerDeleteMethod: "DELETE",
		imageManagerDeleteParams: {},
		imageManagerDeleteURL: this.editorService.UPLOAD_IMAGE_API,
		imageManagerPageSize: 12,
		imageManagerPreloader: "",
		imageManagerScrollOffset: 500,
		
		// File
		fileAllowedTypes: [
			// http://htmlbook.ru/html/value/mime
			'application/vnd.ms-excel',
			'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			'application/msword',
			'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
			'application/vnd.ms-powerpoint',
			'application/vnd.openxmlformats-officedocument.presentationml.presentation',
			'application/x-rar-compressed',
			'application/zip',
			'application/x-7z-compressed',
			'application/x-tar',
			'text/plain',
			'application/rtf',
			'application/pdf',
		],
		fileMaxSize: 1024 * 1024 * 4,
		fileUpload: true,
		fileUploadMethod: "POST",
		fileUploadParam: "file",
		fileUploadParams: {
			identification: "admin_editor",
			folder: "editor/files"
		},
		fileUploadURL: this.editorService.UPLOAD_FILE_API,
		fileUseSelectedText: true,
		fileUploadToS3: false,
		
		// Video
		videoUpload: false,
		videoInsertButtons: [
			"videoEmbed",
			"videoUpload"],
		
		// Event
		events: {
			// Image
			"froalaEditor.image.beforePasteUpload": (e, editor, img) => {
			},
			"froalaEditor.image.beforeRemove": (e, editor, $img) => {
			},
			"froalaEditor.image.beforeUpload": (e, editor, images) => {
			},
			"froalaEditor.image.error": (e, editor, error, response) => {
				this.editorService.error(e, editor, error, response);
			},
			"froalaEditor.image.inserted": (e, editor, $img, response) => {
			},
			"froalaEditor.image.loaded": (e, editor, $img) => {
			},
			"froalaEditor.image.removed": (e, editor, $img) => {
			},
			"froalaEditor.image.replaced": (e, editor, $img, response) => {
			},
			"froalaEditor.image.resize": (e, editor, $img) => {
			},
			"froalaEditor.image.resizeEnd": (e, editor, $img) => {
			},
			"froalaEditor.image.uploaded": (e, editor, response) => {
			},
			"froalaEditor.image.uploadedToS3": (e, editor, link, key, response) => {
			},
			
			// Image manager
			"froalaEditor.imageManager.beforeDeleteImage": (e, editor, $img) => {
			},
			"froalaEditor.imageManager.error": (e, editor, error, response) => {
				this.editorService.error(e, editor, error, response);
			},
			"froalaEditor.imageManager.imageDeleted": (e, editor, data) => {
			},
			"froalaEditor.imageManager.imageLoaded": (e, editor, $img) => {
			},
			"froalaEditor.imageManager.imagesLoadede": (e, editor, data) => {
			},
			
			// File
			"froalaEditor.file.beforeUpload": (e, editor, files) => {
				console.warn('froalaEditor.file.beforeUpload', e, editor, files);
			},
			"froalaEditor.file.inserted": (e, editor, $file, response) => {
				console.warn('froalaEditor.file.inserted', e, editor, $file, response);
			},
			"froalaEditor.file.unlink": (e, editor, link) => {
				console.warn('froalaEditor.file.unlink', e, editor, link);
			},
			"froalaEditor.file.uploaded": (e, editor, response) => {
				console.warn('froalaEditor.file.uploaded', e, editor, response);
			},
		}
	};
}