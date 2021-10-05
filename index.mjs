import generateTable from './utils/table.mjs';

export default class Markdown {
  constructor() {
    this.LINES = [];
  }

  render() {
    return this.LINES.join('\n');
  }

  push(data = '\n') {
    return this.LINES.push(`${data}`);
  }

  text(data) {
    return this.push(`\n${data}\n`);
  }

  header(title, n = 1) {
    return this.push(`${'#'.repeat(n)} ${title}`);
  }

  image(filepath) {
    const str = `\n<img src="./${filepath}" />\n`;
    return this.push(str);
  }

  table(columns = [], labels = [], datarows = []) {
    return this.push(generateTable(columns, labels, datarows));
  }

  list(items = [], numbered = false) {
    if (!Array.isArray(items)) {
      throw new TypeError('List items should be an array of strings');
    }
    this.push(
      items.map((item, i) => {
        if (numbered) return `${i + 1}. ${item}`;
        return ` ${item}`;
      })
    );
  }

  italic(text) {
    return `*${text}*`;
  }

  bold(text) {
    return `**${text}**`;
  }

  tasks(items = []) {
    if (!Array.isArray(items)) {
      throw new TypeError('List items should be an array of strings');
    }
    this.push(items.map((item) => `- [ ] ${item}`));
  }

  link(text, url) {
    this.push(`[${text}](${url})`);
  }

  quote(text) {
    this.push(`> ${text}`);
  }

  // eslint-disable-next-line no-dupe-class-members
  quote(text, label = '') {
    this.push('```' + label + '\n' + text + '\n```');
  }
}
