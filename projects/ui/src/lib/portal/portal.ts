import {
    AfterViewInit,
    ApplicationRef,
    Component,
    EmbeddedViewRef,
    Input,
    OnDestroy,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';

export type PortalContainer = HTMLElement | null | undefined;

/**
 * Utility component to render projected content into a different DOM container (defaults to document.body). SSR-safe:
 * renders nothing on the server, attaches on the client.
 *
 * @name Portal
 * @phase Utility
 */
@Component({
    selector: 'ui-portal',
    standalone: true,
    template: `<ng-template #contentTpl><ng-content></ng-content></ng-template>`,
    encapsulation: ViewEncapsulation.None,
})
export class UIPortal implements AfterViewInit, OnDestroy {
    /** The container element to render the portal into. Defaults to document.body in the browser. */
    @Input() container?: PortalContainer;

    @ViewChild('contentTpl', { static: true }) contentTpl!: TemplateRef<any>;

    private viewRef?: EmbeddedViewRef<any>;
    private hostNodes: Node[] = [];
    private target?: HTMLElement | null;

    constructor(private appRef: ApplicationRef) {}

    ngAfterViewInit(): void {
        // Skip on SSR
        if (typeof document === 'undefined') return;

        this.target = this.container ?? document.body;
        if (!this.target) return;

        // Create and attach the embedded view to the app so Angular runs change detection
        this.viewRef = this.contentTpl.createEmbeddedView({});
        this.appRef.attachView(this.viewRef);

        // Append all root nodes to the target container
        this.hostNodes = this.viewRef.rootNodes as Node[];
        for (const node of this.hostNodes) {
            try {
                this.target.appendChild(node);
            } catch {
                // ignore append failures
            }
        }
    }

    ngOnDestroy(): void {
        if (this.viewRef) {
            // Remove nodes from the DOM
            for (const node of this.hostNodes) {
                if (node.parentNode) {
                    try {
                        node.parentNode.removeChild(node);
                    } catch {
                        // ignore remove failures
                    }
                }
            }
            // Detach Angular view
            try {
                this.appRef.detachView(this.viewRef);
            } catch {
                // ignore detach failures
            }
            this.viewRef.destroy();
        }
        // No-op on SSR
        if (typeof document !== 'undefined') {
            // nothing else
        }
    }
}
