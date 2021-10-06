export declare const CR = "\n\n";
export declare const LB = "\n";
export declare const table: (headers?: string[], rows?: string[], fmtFnc?: (rowValue: any) => any) => string;
export declare const italic: (text?: string) => string;
export declare const bold: (text?: string) => string;
export declare const link: (text: any, url: any) => string;
export declare const inlineCode: (text: any) => string;
export declare const quote: (text: any) => string;
export declare const code: (text: any, language?: string) => string;
