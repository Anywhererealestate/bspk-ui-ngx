import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Output,
    ViewEncapsulation,
    computed,
    effect,
    input,
    signal,
    viewChild,
} from '@angular/core';
import { AsSignal } from '../../types/common';
import { randomString } from '../../utils/random';
import { UIButton } from '../button/button';
import { IconCloudUpload } from '../icons/cloud-upload';
import { UIInlineAlert } from '../inline-alert/inline-alert';
import { UITxtDirective } from '../txt/txt.directive';
import { UIFileUploadItem, FileUploadStatus, DEFAULT_ERROR_MESSAGE } from './file-upload-item';

const MB = 1048576;

/** Common MIME types for file upload. Not an exhaustive list; extend as needed. */
export type MimeType =
    | 'application/json'
    | 'application/octet-stream'
    | 'application/pdf'
    | 'application/x-www-form-urlencoded'
    | 'application/xml'
    | 'application/zip'
    | 'audio/mpeg'
    | 'audio/wav'
    | 'image/gif'
    | 'image/jpeg'
    | 'image/png'
    | 'image/svg+xml'
    | 'image/webp'
    | 'text/css'
    | 'text/html'
    | 'text/javascript'
    | 'text/plain'
    | 'video/mp4'
    | 'video/webm';

/** A single file entry in the upload list (matches React FileEntry). */
export interface FileEntry {
    /**
     * The unique identifier for the file entry. Generated client-side; should be unique for each file. Useful for
     * tracking during upload and cancellation.
     *
     * @required
     */
    id: string;
    /** The name of the file. */
    fileName: string;
    /**
     * The status of the uploading file.
     *
     * @default idle
     */
    status?: FileUploadStatus;
    /**
     * The size of the file being uploaded in MB.
     *
     * @required
     */
    fileSize: number;
    /**
     * A number between 0 and 100 representing the percentage of the upload completed.
     *
     * @default 0
     * @minimum 0
     * @maximum 100
     */
    progress?: number;
    /**
     * The error message to display when the upload fails. If status is 'error', this message will be displayed by
     * default: "There was an error uploading the file. Please try again."
     */
    errorMessage?: string;
}

/** File entry with the underlying File object (e.g. when starting upload). */
export interface FileEntryUpload extends FileEntry {
    file: File;
}

/** Props for the FileUpload component (matches React FileUploadProps). */
export interface FileUploadProps {
    /**
     * Whether to enable drag and drop functionality
     *
     * @default false
     */
    dragAndDrop?: boolean;
    /**
     * The subtitle for the upload area. It is recommended to include the accepted file types and maximum file size in
     * the subtitle.
     */
    uploadSubtitle?: string;
    /**
     * Whether to allow multiple file uploads
     *
     * @default false
     */
    multipleFiles?: boolean;
    /**
     * The accepted file types for upload, e.g. ['image/png', 'image/gif', 'image/svg+xml'] If not provided, all file
     * types are accepted.
     *
     * @type MimeType[]
     */
    acceptedFileTypes?: MimeType[] | string[];
    /**
     * The maximum file size allowed for upload in MB. If not provided, defaults to 2 MB.
     *
     * @default 2
     */
    maxFileSize?: number;
    /**
     * The files currently being uploaded. This is updated as files are being uploaded. If not provided, the component
     * will not display any file upload items.
     *
     * @type FileEntry[]
     */
    files?: FileEntry[];
    /**
     * The label used for tooltip text for the Cancel button on each file item.
     *
     * @default Cancel
     */
    cancelButtonLabel?: string;
}

/**
 * A widget that allows customers to upload and attach one or more files.
 *
 * ```html
 * <ui-file-upload
 *     [dragAndDrop]="true"
 *     [multipleFiles]="true"
 *     [acceptedFileTypes]="['image/png', 'image/gif', 'image/svg+xml']"
 *     [files]="fileEntries()"
 *     [maxFileSize]="5"
 *     uploadSubtitle="SVG, PNG, JPG or GIF (max. 5MB)"
 *     (onUpload)="onUpload($event)"
 *     (onError)="onError($event)"
 *     (onCancel)="onCancel($event)" />
 * ```
 *
 * ```typescript
 *         fileEntries = signal(undefined);
 *         onUpload(files: FileEntryUpload[]) {
 *             console.log(files);
 *         }
 *         onError(files: FileEntry[]) {
 *             console.log(files);
 *         }
 *         onCancel(event: { fileName: string }) {
 *             console.log(event.fileName);
 *         }
 * ```
 *
 * @name FileUpload
 * @phase Stable
 */
@Component({
    standalone: true,
    selector: 'ui-file-upload',
    imports: [CommonModule, UIFileUploadItem, UIButton, UITxtDirective, UIInlineAlert, IconCloudUpload],
    styleUrl: './file-upload.scss',
    host: {
        '[attr.data-bspk]': '"file-upload"',
        '[class.drag-over]': 'isDragOver()',
        '(dragleave)': 'handleDragLeave($event)',
        '(dragover)': 'handleDragOver($event)',
        '(drop)': 'handleDrop($event)',
    },
    template: `
        <icon-cloud-upload width="24" />
        <span ui-txt="body-large">{{ uploadTitle() }}</span>
        <span ui-txt="body-small">{{ uploadSubtitle() }}</span>
        <input
            #fileInput
            type="file"
            [attr.accept]="acceptString()"
            [attr.multiple]="multipleFiles() ? '' : null"
            hidden
            (change)="onFileChange($event)" />
        <ui-button label="Browse" (onClick)="browseClick()" />
        @if (singleFileError()) {
            <ui-inline-alert [label]="singleFileError()!" variant="error" />
        }
        <div data-bspk-owner="file-upload" data-file-entries>
            @for (entry of sortedEntries(); track entry.id) {
                <ui-file-upload-item
                    [id]="entry.id"
                    [fileName]="entry.fileName"
                    [fileSize]="entry.fileSize"
                    [status]="entry.status"
                    [progress]="entry.progress ?? 0"
                    [errorMessage]="entry.errorMessage ?? DEFAULT_ERROR_MESSAGE"
                    [cancelButtonLabel]="cancelButtonLabel()"
                    (onCancel)="handleCancel(entry)" />
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIFileUpload implements AsSignal<FileUploadProps> {
    /** The function called when the upload starts. */
    @Output() onUpload = new EventEmitter<FileEntryUpload[]>();
    /** The function called when an error occurs during upload. */
    @Output() onError = new EventEmitter<FileEntry[]>();
    /** The function to call when the Cancel button is clicked on a file item. */
    @Output() onCancel = new EventEmitter<{ fileName: string }>();

    readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

    readonly dragAndDrop = input<FileUploadProps['dragAndDrop']>(false);
    readonly uploadSubtitle = input<FileUploadProps['uploadSubtitle']>();
    readonly multipleFiles = input<FileUploadProps['multipleFiles']>(false);
    readonly acceptedFileTypes = input<FileUploadProps['acceptedFileTypes']>([]);
    readonly maxFileSize = input<FileUploadProps['maxFileSize']>(2);
    readonly files = input<FileUploadProps['files']>([]);
    readonly cancelButtonLabel = input<FileUploadProps['cancelButtonLabel']>('Cancel');

    readonly isDragOver = signal(false);
    readonly fileEntries = signal<FileEntry[]>([]);

    readonly maxFileSizeBytes = computed(() => (this.maxFileSize() ?? 2) * MB);

    readonly acceptString = computed(() => {
        const types = this.acceptedFileTypes();
        return Array.isArray(types) && types.length > 0 ? types.join(', ') : null;
    });

    readonly uploadTitle = computed(() => {
        if (this.dragAndDrop()) return 'Drag and Drop';
        return this.multipleFiles() ? 'Upload Files' : 'Upload a File';
    });

    readonly sortedEntries = computed(() => {
        const list = this.fileEntries();
        return [...list].sort(
            (a, b) =>
                (a.status === 'error' ? 1 : -1) + (b.status === 'error' ? -1 : 1) ||
                a.fileName.localeCompare(b.fileName) ||
                0,
        );
    });

    readonly singleFileError = computed(() => {
        const list = this.fileEntries();
        if (list.length !== 1) return null;
        const first = list[0];
        if (first.status !== 'error') return null;
        return first.errorMessage ?? DEFAULT_ERROR_MESSAGE;
    });

    protected readonly DEFAULT_ERROR_MESSAGE = DEFAULT_ERROR_MESSAGE;

    constructor() {
        effect(() => {
            const files = this.files() ?? [];
            const current = this.fileEntries();
            const next: (FileEntry & { updated?: boolean })[] = [...current];

            files.forEach((file) => {
                const idx = current.findIndex((e) => e.id === file.id);
                if (idx !== -1) {
                    const existing = current[idx];
                    const updated =
                        existing.status !== file.status ||
                        existing.progress !== file.progress ||
                        existing.errorMessage !== file.errorMessage;
                    if (updated) {
                        next[idx] = {
                            ...existing,
                            status: file.status,
                            progress: file.progress ?? 0,
                            errorMessage: file.errorMessage,
                            updated: true,
                        };
                    }
                    return;
                }
                next.push({ ...file, updated: true });
            });

            if (next.some((e) => e.updated)) {
                this.fileEntries.set(next.map((e) => ({ ...e, updated: undefined })));
            }
        });
    }

    browseClick(): void {
        this.fileInput().nativeElement.click();
    }

    onFileChange(evt: Event): void {
        const inputEl = evt.target as HTMLInputElement | null;
        const fileList = inputEl?.files;
        if (!fileList?.length) return;
        this.updateFiles(Array.from(fileList));
        if (inputEl) inputEl.value = '';
    }

    handleDragOver(e: DragEvent): void {
        if (!this.dragAndDrop()) return;
        e.preventDefault();
        this.isDragOver.set(true);
    }

    handleDragLeave(e: DragEvent): void {
        if (!this.dragAndDrop()) return;
        e.preventDefault();
        this.isDragOver.set(false);
    }

    handleDrop(e: DragEvent): void {
        if (!this.dragAndDrop()) return;
        e.preventDefault();
        this.isDragOver.set(false);
        const fileList = e.dataTransfer?.files;
        if (!fileList?.length) return;
        this.updateFiles(Array.from(fileList));
    }

    handleCancel(entry: FileEntry): void {
        this.onCancel.emit({ fileName: entry.fileName });
        this.fileEntries.update((list) => list.filter((e) => e.id !== entry.id));
    }

    private updateFiles(nextFiles: File[]): void {
        const acceptedTypes = this.acceptedFileTypes() ?? [];
        const maxBytes = this.maxFileSizeBytes();
        const hasAcceptFilter = Array.isArray(acceptedTypes) && acceptedTypes.length > 0;

        const nextEntries: FileEntryUpload[] = nextFiles.map((file) => {
            let status: FileUploadStatus = 'idle';
            let errorMessage = '';

            if (hasAcceptFilter && !acceptedTypes.includes(file.type as MimeType)) {
                status = 'error';
                errorMessage = `File type not accepted: ${file.name}`;
            }
            if (file.size > maxBytes) {
                status = 'error';
                errorMessage = `File too large. Please upload a smaller file: ${file.name}`;
            }

            return {
                id: randomString(8),
                fileName: file.name,
                status,
                fileSize: file.size / MB,
                progress: 0,
                errorMessage,
                file,
            };
        });

        const toAdd: FileEntry[] = nextEntries.map((e) => ({ ...e, file: undefined }));
        this.fileEntries.update((prev) => [...prev, ...toAdd]);

        const withError = nextEntries.filter((e) => e.status === 'error');
        if (withError.length) this.onError.emit(withError);

        const toUpload = nextEntries.filter((e) => e.status === 'idle');
        if (toUpload.length) this.onUpload.emit(toUpload);
    }
}
