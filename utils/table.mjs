export default (
  headers = [],
  rowsLabels = [],
  dataset = [],
  fmtFnc = (d) => d
) => {
  let t = '';
  t += `\n| | ${headers.join(' | ')} |\n|${' --- |'.repeat(
    headers.length + 1
  )}\n`;
  for (let i = 0; i < dataset.length; i++) {
    const data = dataset.map(fmtFnc);
    t += `| ${rowsLabels[i]} | ${data.join(' | ')} |\n`;
  }
  return t;
};
