export * from './utils/common';
export type ListItems<T> = Array<T>;
export type ListItem = {
    text: string;
    depth?: number;
};
export type TaskItem = {
    text: string;
    checked?: boolean;
};
export declare class Markdown {
    LINES: string[];
    constructor(title: string);
    tableOfContent(onTop?: boolean): this;
    render(): string;
    addLine(data?: string): this;
    paragraph(data: string | number): this;
    header(title: string, n?: number): this;
    image(filepath: string, altText?: string): this;
    table(columns?: any[], rows?: any[]): this;
    list(items?: ListItems<ListItem>, numbered?: boolean): this;
    tasks(items?: ListItems<TaskItem>): this;
}
