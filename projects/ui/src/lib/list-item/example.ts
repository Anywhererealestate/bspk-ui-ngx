import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UIListItem } from './list-item';
import { IconFolder } from '../icons/folder';
import { IconChevronRight } from '../icons/chevron-right';
import { IconDelete } from '../icons/delete';
import { sendSnackbar } from '../../utils/sendSnackbar';
import { UIButton } from '../button';

@Component({
    selector: 'ui-list-item-example',
    standalone: true,
    imports: [CommonModule, UIListItem, IconFolder, IconChevronRight, IconDelete, UIButton],
    template: `
        <h2>List Item</h2>

        <h3>Basic with leading folder and trailing chevron (as="button")</h3>
        <div style="width: 360px; display: grid; gap: 16px">
            <ui-list-item
                as="button"
                label="Death Star Plans"
                subText="Last modified: May 25, 1977"
                (clicked)="onClick('Downloading blueprints...')">
                <span data-leading><icon-folder></icon-folder></span>
                <span data-trailing><icon-chevron-right></icon-chevron-right></span>
            </ui-list-item>
        </div>

        <h3>Leading avatar and trailing delete (as="div")</h3>
        <div style="width: 360px; display: grid; gap: 16px">
            <ui-list-item
                as="div"
                label="File 13 nice"
                subText="Last modified: Jan 21, 2024"
                (clicked)="onClick('Clicked Open Folder button')">
                <span data-leading>
                    <span
                        style="
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            background: #4b6bfb;
                            color: white;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            font-weight: 600;
                        "
                        >FR</span
                    >
                </span>
                <span data-trailing>
                    <icon-delete (click)="onClick('Delete clicked')"></icon-delete>
                </span>
            </ui-list-item>
        </div>

        <h3>As anchor (as="a") with href</h3>
        <div style="width: 360px; display: grid; gap: 16px">
            <ui-list-item
                as="a"
                href="#example"
                target="_blank"
                rel="noopener"
                label="Spec Document"
                subText="View online">
                <span data-leading><icon-folder></icon-folder></span>
                <span data-trailing><icon-chevron-right></icon-chevron-right></span>
            </ui-list-item>
        </div>

        <h3>Trailing button</h3>
        <div style="width: 360px; display: grid; gap: 16px">
            <ui-list-item
                as="button"
                label="Project Report Q4"
                subText="Edited: Nov 11, 2025"
                (clicked)="onClick('Open Report')">
                <span data-leading>
                    <span
                        style="
                            width: 28px;
                            height: 28px;
                            border-radius: 50%;
                            background: #10b981;
                            color: white;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 12px;
                            font-weight: 600;
                        "
                        >PR</span
                    >
                </span>
                <span data-trailing>
                    <ui-button
                        label="Download"
                        variant="tertiary"
                        size="x-small"
                        (clicked)="onClick('Download clicked')" />
                </span>
            </ui-list-item>
        </div>

        <h3>As plain container (as="div") with secondary action</h3>
        <div style="width: 360px; display: grid; gap: 16px">
            <ui-list-item as="div" label="Design Assets" subText="Updated: Oct 03, 2025">
                <span data-leading><icon-folder></icon-folder></span>
                <span data-trailing>
                    <ui-button label="Rename" variant="tertiary" size="x-small" (clicked)="onClick('Rename clicked')" />
                </span>
            </ui-list-item>
        </div>
    `,
})
export class UIListItemExample {
    onClick(msg: string) {
        sendSnackbar(msg);
    }
}
