export const table = (
  headers: string[] = [],
  rows: string[] = [],
  fmtFnc = (rowValue: any) => rowValue
) => {
  let t = '';
  t += `| ${headers.join(' | ')} |\n|${' --- |'.repeat(headers.length)}\n`;
  t += `| ${rows.map(fmtFnc).join(' | ')} |\n`;
  return t;
};

export const italic = (text = '') => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  return `*${text}*`;
};

export const bold = (text = '') => {
  if (!text || typeof text !== 'string') {
    return '';
  }
  return `**${text}**`;
};

export const link = (text, url) => {
  return `[${text}](${url})`;
};

export const quote = (text) => {
  return `> ${text}`;
};

export const code = (text, language = '') => {
  return '```' + language + '\n' + text + '\n```';
};

export const inlineCode = (text) => {
  return '`' + text + '`';
};
