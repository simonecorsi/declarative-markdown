import { table, LB, CR } from './utils/common';
export * from './utils/common';

export type ListItems<T> = Array<T>;
export type ListItem = { text: string; depth?: number };
export type TaskItem = { text: string; checked?: boolean };

export default class Markdown {
  LINES: string[];

  constructor(title: string) {
    this.LINES = [];
    if (!title) {
      throw new TypeError('Must Provide a title for this markdown');
    }
    this.header(title, 1);
  }

  tableOfContent(onTop = true) {
    let list = [];
    if (!this.LINES.length) return;

    for (const line of this.LINES) {
      if (line.startsWith('#')) {
        const depth = line.split('#').filter((c) => c === '').length - 1;
        const text = line.match(/^\#+\s?(.*)$/)?.[1];
        if (!text && !depth) continue;
        list.push({ text, depth });
      }
    }

    this.list(list);

    if (onTop) {
      const lng = this.LINES.length;
      const toc = this.LINES.splice(lng - 1, 1);
      this.LINES.splice(1, 0, '## Table of Contents', ...toc);
    }

    return this;
  }

  render() {
    return this.LINES.join(CR);
  }

  addLine(data = LB): this {
    this.LINES.push(`${data}`);
    return this;
  }

  paragraph(data: string | number): this {
    this.addLine(`${data}`);
    return this;
  }

  header(title: string, n = 1): this {
    this.addLine(`${'#'.repeat(n)} ${title}`);
    return this;
  }

  image(filepath: string, altText?: string): this {
    const str = `![${altText || filepath}](${filepath})`;
    this.addLine(str);
    return this;
  }

  table(columns = [], rows = [], fmtFnc?): this {
    this.addLine(table(columns, rows, fmtFnc));
    return this;
  }

  list(items: ListItems<ListItem> = [], numbered = false): this {
    if (!Array.isArray(items)) {
      throw new TypeError(
        'List items should be an array of { text: string, depth: number}'
      );
    }

    let list = [];

    for (let i = 0; i < items.length; i++) {
      let parsed;
      const { text, depth } = items[i];
      if (numbered) parsed = `${i + 1}. ${text}`;
      else {
        parsed = `${!depth ? '' : '  '.repeat(depth)}- ${text}`;
      }
      list.push(parsed);
    }

    this.addLine(list.join('\n'));

    return this;
  }

  tasks(items: ListItems<TaskItem> = []): this {
    if (!Array.isArray(items)) {
      throw new TypeError(
        'List items should be an array of { text: string, checked: boolean }'
      );
    }

    let list = [];

    for (let i = 0; i < items.length; i++) {
      const { text, checked } = items[i];
      const parsed = `- [${checked ? 'X' : ' '}] ${text}`;
      list.push(parsed);
    }

    this.addLine(list.join('\n'));

    return this;
  }
}
