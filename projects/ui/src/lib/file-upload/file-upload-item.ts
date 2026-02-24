import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Output,
    ViewEncapsulation,
    computed,
    input,
} from '@angular/core';
import { AsSignal } from '../../types/common';
import { UIButton } from '../button/button';
import { IconDelete } from '../icons/delete';
import { IconDraft } from '../icons/draft';
import { UIInlineAlert } from '../inline-alert/inline-alert';
import { UIProgressBar } from '../progress-bar/progress-bar';

/** Default error message when upload fails. */
export const DEFAULT_ERROR_MESSAGE = 'There was an error uploading the file. Please try again.';

/** Status of the uploading file. */
export type FileUploadStatus = 'complete' | 'error' | 'failed' | 'idle' | 'uploading';

/** Props for a single file upload item (matches React FileEntry + onCancel + cancelButtonLabel). */
export interface FileUploadItemProps {
    /** The unique identifier for the file entry. Generated client-side; should be unique per file. */
    id: string;
    /** The name of the file. */
    fileName: string;
    /**
     * The status of the uploading file.
     *
     * @default idle
     */
    status?: FileUploadStatus;
    /** The size of the file being uploaded in MB. */
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
    /**
     * The label used for tooltip text for the Cancel button.
     *
     * @default Cancel
     */
    cancelButtonLabel?: string;
}

const KB = 1024;
const MB = 1024 * KB;
const GB = 1024 * MB;

/** Format file size (given in MB) to a human-readable string. Does not support terabytes or petabytes. */
function fileSizeFormat(fileSizeMb?: number): string | undefined {
    if (fileSizeMb == null || !Number.isFinite(fileSizeMb)) return 'Unknown size';
    const bytes = fileSizeMb * MB;
    const roundUp2 = (num: number) => Math.ceil(num * 100) / 100;
    if (bytes < MB) return `${roundUp2(bytes / KB)} KB`;
    if (bytes < GB) return `${roundUp2(bytes / MB)} MB`;
    return `${roundUp2(bytes / GB)} GB`;
}

/**
 * A component that represents an uploaded item and its status. Usually used with FileUpload to display individual files
 * being uploaded.
 *
 * @name FileUploadItem
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-file-upload-item',
    imports: [CommonModule, UIButton, IconDraft, UIInlineAlert, UIProgressBar],
    styleUrl: './file-upload-item.scss',
    template: `
        <div data-bspk="file-upload-item">
            <div data-row>
                <div data-icon>
                    <icon-draft />
                </div>
                <div data-info>
                    <span data-file-name style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">{{
                        fileName()
                    }}</span>
                    <span data-file-details>{{ fileDetails() }}</span>
                </div>
                <ui-button
                    [icon]="iconDelete"
                    [iconOnly]="true"
                    [label]="cancelButtonLabel() ?? 'Cancel'"
                    size="large"
                    variant="tertiary"
                    (onClick)="emitCancel()" />
            </div>
            <div data-status>
                @if (status() === 'error') {
                    <ui-inline-alert [label]="errorMessage() ?? defaultErrorMessage" variant="error" />
                } @else {
                    <ui-progress-bar align="left" [completion]="progressClamped()" [label]="progressLabel()" />
                }
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIFileUploadItem implements AsSignal<FileUploadItemProps> {
    /** Emitted when the Cancel button is clicked. */
    @Output() onCancel = new EventEmitter<{ fileName: string }>();

    /** Used in template for icon-only cancel button. */
    readonly iconDelete = IconDelete;

    readonly id = input.required<FileUploadItemProps['id']>();
    readonly fileName = input<FileUploadItemProps['fileName']>('');
    readonly status = input<FileUploadItemProps['status']>('idle');
    readonly fileSize = input.required<FileUploadItemProps['fileSize']>();
    readonly progress = input<FileUploadItemProps['progress']>(0);
    readonly errorMessage = input<FileUploadItemProps['errorMessage']>(DEFAULT_ERROR_MESSAGE);
    readonly cancelButtonLabel = input<FileUploadItemProps['cancelButtonLabel']>('Cancel');

    /** Subtext: formatted file size and status joined by bullet (matching React). */
    readonly fileDetails = computed(() => {
        const parts = [fileSizeFormat(this.fileSize()), this.status()].filter(Boolean);
        return parts.join(' • ');
    });

    readonly progressClamped = computed(() => Math.max(0, Math.min(100, Math.round(this.progress() ?? 0))));

    readonly progressLabel = computed((): string => `${this.progressClamped()}%`);
    /** Used in template for default error label. */
    protected readonly defaultErrorMessage = DEFAULT_ERROR_MESSAGE;

    emitCancel(): void {
        this.onCancel.emit({ fileName: this.fileName() });
    }
}
