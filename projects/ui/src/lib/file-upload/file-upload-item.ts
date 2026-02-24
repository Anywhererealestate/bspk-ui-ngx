import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { AsSignal } from '../../types/common';

export type FileUploadItemStatus = 'error' | 'idle' | 'success' | 'uploading';

export interface FileUploadItemProps {
    name: string;
    sizeBytes?: number;
    status?: FileUploadItemStatus;
    errorMessage?: string;
    /** Upload progress 0–100. */
    progress?: number;
    /** Label for cancel/remove button tooltip. @default Cancel */
    cancelButtonLabel?: string;
}

function formatBytes(bytes?: number): string | undefined {
    if (bytes == null || !Number.isFinite(bytes)) return undefined;
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let v = bytes;
    let i = 0;
    while (v >= 1024 && i < units.length - 1) {
        v /= 1024;
        i++;
    }
    return `${v.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

/**
 * A single file item in a file upload list, showing name, size, status, and a remove action.
 *
 * ```html
 * <ui-file-upload-item [name]="file().name" [sizeBytes]="file().size" status="idle" (remove)="removeFile()" />
 * ```
 *
 * ```typescript
 * file = signal({ name: '', size: 0 });
 * removeFile() {
 *   sendSnackbar('File removed');
 * }
 * ```
 *
 * @name FileUploadItem
 * @phase Dev
 */
@Component({
    standalone: true,
    selector: 'ui-file-upload-item',
    imports: [CommonModule],
    styleUrl: './file-upload-item.scss',
    template: `
        <div data-bspk="file-upload-item" [attr.data-status]="status()">
            <div data-main style="display:flex; justify-content:space-between; gap:var(--spacing-sizing-03);">
                <div data-name style="min-width:0;">
                    <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                        {{ name() }}
                    </div>
                    @if (sizeLabel) {
                        <div data-size style="opacity:0.7;">{{ sizeLabel }}</div>
                    }
                </div>

                <button type="button" (click)="remove.emit()" [attr.aria-label]="cancelButtonLabel()">
                    <!-- icon removed -->
                    Remove
                </button>
            </div>

            @if (status() === 'error' && errorMessage()) {
                <div data-error style="margin-top:var(--spacing-sizing-02);">
                    {{ errorMessage() }}
                </div>
            }
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class UIFileUploadItem implements AsSignal<FileUploadItemProps> {
    @Output() remove = new EventEmitter<void>();

    readonly name = input.required<string>();
    readonly sizeBytes = input<number | undefined>();
    readonly status = input<FileUploadItemStatus>('idle');
    readonly errorMessage = input<string | undefined>();
    readonly progress = input<number | undefined>();
    readonly cancelButtonLabel = input<string>('Cancel');

    get sizeLabel(): string | undefined {
        return formatBytes(this.sizeBytes());
    }
}
