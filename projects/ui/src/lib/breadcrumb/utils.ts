import { ListItemProps } from '../list-item/list-item';

export interface BreadcrumbItem extends ListItemProps {
    /**
     * The label of the breadcrumb item.
     *
     * @required
     */
    label: string;
    /**
     * The href of the breadcrumb item.
     *
     * @required
     */
    href: string;
}
