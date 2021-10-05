import { table } from './utils/common';
export * from './utils/common';

export type ListItems = Array<{ text: string; depth: number } | string>;

export default class Markdown {
  LINES: string[];

  constructor() {
    this.LINES = [];
  }

  render() {
    return this.LINES.join('\n');
  }

  addLine(data = '\n'): this {
    this.LINES.push(`${data}`);
    return this;
  }

  text(data: string | number): this {
    this.addLine(`\n${data}\n`);
    return this;
  }

  header(title: string, n = 1): this {
    this.addLine(`${'#'.repeat(n)} ${title}`);
    return this;
  }

  image(filepath: string): this {
    const str = `\n<img src="./${filepath}" />\n`;
    this.addLine(str);
    return this;
  }

  table(columns = [], labels = [], datarows = []): this {
    this.addLine(table(columns, labels, datarows));
    return this;
  }

  list(items: ListItems = [], numbered = false): this {
    if (!Array.isArray(items)) {
      throw new TypeError('List items should be an array of strings');
    }
    for (const item of items) {
      let parsed;
      if (numbered) parsed = `${i + 1}. ${item}`;
      parsed = ` ${item}`;
      this.addLine(parsed);
    }
    return this;
  }

  tasks(items: string[] = []): this {
    if (!Array.isArray(items)) {
      throw new TypeError('List items should be an array of strings');
    }
    for (const item of items) {
      this.addLine(`- [ ] ${item}`);
    }

    return this;
  }
}
