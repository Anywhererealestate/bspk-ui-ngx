export interface CompodocJsDocTag {
    pos?: number;
    end?: number;
    kind?: number;
    tagName?: { pos?: number; end?: number; escapedText?: string; text?: string };
    comment?: string;
    name?: string;
    type?: string;
    optional?: boolean;
}

export interface CompodocInterfaceProperty {
    name: string;
    deprecated: boolean;
    deprecationMessage: string;
    type: string;
    indexKey?: string;
    optional: boolean;
    description?: string;
    line?: number;
    rawdescription?: string;
    jsdoctags?: CompodocJsDocTag[];
}

export interface CompodocInterface {
    name: string;
    id: string;
    file: string;
    deprecated: boolean;
    deprecationMessage: string;
    type: string;
    sourceCode?: string;
    properties: CompodocInterfaceProperty[];
    indexSignatures: unknown[];
    kind?: number;
    methods: unknown[];
    extends: (string | CompodocInterface)[];
}

export interface CompodocInputOutput {
    name: string;
    defaultValue?: string;
    deprecated: boolean;
    deprecationMessage: string;
    type: string;
    indexKey?: string;
    optional: boolean;
    description?: string;
    line?: number;
    modifierKind?: number[];
    required?: boolean;
}

export interface CompodocComponentDirective {
    name: string;
    id: string;
    file: string;
    type: 'component' | 'directive';
    selector?: string;
    description?: string;
    rawdescription?: string;
    sourceCode?: string;
    inputsClass: CompodocInputOutput[];
    outputsClass: CompodocInputOutput[];
    deprecated?: boolean;
    deprecationMessage?: string;
    [key: string]: unknown;
}

export interface CompodocTypeAlias {
    name: string;
    ctype: string;
    subtype: string;
    rawtype: string;
    file?: string;
    deprecated?: boolean;
    deprecationMessage?: string;
    description?: string;
    kind?: number;
}

export interface CompodocMiscellaneous {
    variables?: unknown[];
    typealiases: CompodocTypeAlias[];
    [key: string]: unknown;
}

export interface CompodocDocumentation {
    pipes: unknown[];
    interfaces: CompodocInterface[];
    injectables: unknown[];
    guards: unknown[];
    interceptors: unknown[];
    classes: unknown[];
    directives: CompodocComponentDirective[];
    components: CompodocComponentDirective[];
    modules: unknown[];
    miscellaneous: CompodocMiscellaneous;
    routes: Record<string, unknown>;
    coverage: Record<string, unknown>;
}

export type Interface = CompodocInterface;
export type Component = CompodocComponentDirective;
export type ComponentInput = Component['inputsClass'][number];
export type ComponentOutput = Component['outputsClass'][number];
export type InterfaceProp = Interface['properties'][number];
