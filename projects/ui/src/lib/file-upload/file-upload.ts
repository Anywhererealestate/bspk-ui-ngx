import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';
import { UIFileUploadItem, FileUploadItemStatus } from './file-upload-item';

export interface FileUploadSelectedFile {
    file: File;
    status?: FileUploadItemStatus;
    errorMessage?: string;
}

export interface FileUploadProps {
    files?: FileUploadSelectedFile[];
    /** @default true */
    multiple?: boolean;
    accept?: string;
    disabled?: boolean;
    /** Whether to enable drag and drop. @default false */
    dragAndDrop?: boolean;
    /** Subtitle for the upload area (e.g. accepted types, max size). */
    uploadSubtitle?: string;
    /** Alias for multiple; whether to allow multiple files. @default false */
    multipleFiles?: boolean;
    /** Max file size in MB. @default 2 */
    maxFileSize?: number;
    /** Label for cancel button on items. @default Cancel */
    cancelButtonLabel?: string;
}

/**
 * A file upload control that lets users select one or more files and displays a list of selected items.
 *
 * ```html
 * <ui-file-upload
 *     [multiple]="true"
 *     accept=".pdf,.doc"
 *     [files]="selectedFiles()"
 *     (add)="onFilesAdded($event)"
 *     (remove)="onFileRemove($event)" />
 * ```
 *
 * ```typescript
 * // imports UIFileUploadItem
 *
 * selectedFiles = signal<FileUploadSelectedFile[]>([]);
 *
 * onFilesAdded(files: File[]) {
 *   sendSnackbar(`Files added:${files.map((f) => f.name).join(', ')}`);
 * }
 * onFileRemove(index: number) {
 *   sendSnackbar(`File removed: ${index}`);
 * }
 * ```
 *
 * @name FileUpload
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-file-upload',
    imports: [CommonModule, UIFileUploadItem],
    template: `
        <div data-bspk="file-upload">
            <input
                type="file"
                [attr.multiple]="multiple() ? '' : null"
                [attr.accept]="accept() || null"
                [disabled]="disabled()"
                (change)="onFilesSelected($event)" />

            @if (files()?.length) {
                <div
                    data-list
                    style="margin-top:var(--spacing-sizing-03); display:flex; flex-direction:column; gap:var(--spacing-sizing-02);">
                    @for (f of files()!; track $index; let idx = $index) {
                        <ui-file-upload-item
                            [name]="f.file.name"
                            [sizeBytes]="f.file.size"
                            [status]="f.status || 'idle'"
                            [errorMessage]="f.errorMessage"
                            (remove)="removeAt(idx)"></ui-file-upload-item>
                    }
                </div>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIFileUpload implements AsSignal<FileUploadProps> {
    @Output() add = new EventEmitter<File[]>();
    @Output() remove = new EventEmitter<number>();

    readonly files = input<FileUploadSelectedFile[] | undefined>();

    readonly multiple = input<boolean>(true);
    readonly accept = input<string | undefined>();
    readonly disabled = input<boolean>(false);
    readonly dragAndDrop = input<boolean>(false);
    readonly uploadSubtitle = input<string | undefined>();
    readonly multipleFiles = input<boolean | undefined>();
    readonly maxFileSize = input<number>(2);
    readonly cancelButtonLabel = input<string>('Cancel');

    onFilesSelected(evt: Event) {
        const inputEl = evt.target as HTMLInputElement | null;
        const list = inputEl?.files ? Array.from(inputEl.files) : [];
        if (list.length) this.add.emit(list);
        // reset input so selecting same file twice still triggers change
        if (inputEl) inputEl.value = '';
    }

    removeAt(index: number) {
        this.remove.emit(index);
    }
}
