/* eslint-disable no-console */
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FileEntry, FileEntryUpload, UIFileUpload } from './file-upload';

@Component({
    selector: 'ui-file-upload-example',
    standalone: true,
    imports: [CommonModule, UIFileUpload],
    template: `
        <h4>Basic usage</h4>
        <ui-file-upload
            [files]="fileEntries()"
            uploadSubtitle="Any file type (max. 2MB)"
            (onUpload)="onUpload($event)"
            (onError)="onError($event)"
            (onCancel)="onCancel($event)" />

        <h4>Multiple files, drag and drop</h4>
        <ui-file-upload
            [dragAndDrop]="true"
            [multipleFiles]="true"
            [acceptedFileTypes]="['image/png', 'image/gif', 'image/svg+xml']"
            [files]="fileEntries()"
            [maxFileSize]="5"
            uploadSubtitle="SVG, PNG, JPG or GIF (max. 5MB)"
            (onUpload)="onUpload($event)"
            (onError)="onError($event)"
            (onCancel)="onCancel($event)" />

        <h4>Single file only</h4>
        <ui-file-upload
            [multipleFiles]="false"
            [files]="fileEntries()"
            uploadSubtitle="One file, max 2MB"
            (onUpload)="onUpload($event)"
            (onError)="onError($event)"
            (onCancel)="onCancel($event)" />

        <h4>With existing file entries</h4>
        <ui-file-upload
            [files]="sampleEntries()"
            uploadSubtitle="Pre-populated list"
            (onUpload)="onUpload($event)"
            (onError)="onError($event)"
            (onCancel)="onCancel($event)" />
    `,
})
export class UIFileUploadExample {
    readonly fileEntries = signal<FileEntry[] | undefined>(undefined);

    /** Sample entries for the "With existing file entries" section. */
    readonly sampleEntries = signal<FileEntry[]>([
        {
            id: 'ex-1',
            fileName: 'document.pdf',
            fileSize: 0.5,
            status: 'idle',
            progress: 0,
        },
        {
            id: 'ex-2',
            fileName: 'image.png',
            fileSize: 1.2,
            status: 'uploading',
            progress: 45,
        },
    ]);

    onUpload(files: FileEntryUpload[]): void {
        // Example: handle upload start
        console.log(files);
    }

    onError(files: FileEntry[]): void {
        // Example: handle validation errors
        console.log(files);
    }

    onCancel(event: { fileName: string }): void {
        // Example: handle cancel
        console.log(event.fileName);
    }
}
