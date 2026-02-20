import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation, input } from '@angular/core';
import { UIFileUploadItem, FileUploadItemStatus } from './file-upload-item';

export interface FileUploadSelectedFile {
  file: File;
  status?: FileUploadItemStatus;
  errorMessage?: string;
}

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
        (change)="onFilesSelected($event)"
      />

      <div *ngIf="files()?.length" data-list style="margin-top:var(--spacing-sizing-03); display:flex; flex-direction:column; gap:var(--spacing-sizing-02);">
        <ui-file-upload-item
          *ngFor="let f of files()!; let idx = index"
          [name]="f.file.name"
          [sizeBytes]="f.file.size"
          [status]="f.status || 'idle'"
          [errorMessage]="f.errorMessage"
          (remove)="removeAt(idx)"
        ></ui-file-upload-item>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class UIFileUpload {
  readonly files = input<FileUploadSelectedFile[] | undefined>(undefined);

  readonly multiple = input<boolean>(true);
  readonly accept = input<string | undefined>(undefined);
  readonly disabled = input<boolean>(false);

  @Output() add = new EventEmitter<File[]>();
  @Output() remove = new EventEmitter<number>();

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