export const CR = '\n\n';
export const LB = '\n';

export const table = (headers: string[] = [], rows: string[][] = []) => {
  let t = '';
  t += `| ${headers.join(' | ')} |${LB}|${' --- |'.repeat(headers.length)}`;

  for (const row of rows) {
    t += `${LB}| ${row.join(' | ')} |`;
  }

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
  if (!text && !url) return '';
  return `[${text}](${url})`;
};

export const inlineCode = (text) => {
  if (!text) return '';
  return '`' + text + '`';
};

export const quote = (text) => {
  if (!text) return '';
  return `${LB}> ${text}`;
};

export const code = (text, language = '') => {
  if (!text) return '';
  return CR + '```' + language + LB + text + LB + '```';
};
