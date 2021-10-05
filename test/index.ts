import tap from 'tap';
import {
  table,
  link,
  code,
  inlineCode,
  quote,
  italic,
  bold,
} from '../utils/common';

tap.test('italic', (t) => {
  t.equal(italic('ok'), '*ok*');
  t.end();
});

tap.test('bold', (t) => {
  t.equal(bold('ok'), '**ok**');
  t.end();
});

tap.test('quote', (t) => {
  t.equal(quote('ok'), '> ok');
  t.end();
});

tap.test('link', (t) => {
  const l = 'http://google.com';
  const txt = 'link';
  t.equal(link(txt, link), `[${txt}](${link})`);
  t.end();
});

tap.test('code', (t) => {
  const codeBlock = "alert('x')";
  t.equal(inlineCode(codeBlock), '`' + codeBlock + '`');
  t.equal(code(codeBlock), '```\n' + codeBlock + '\n```');
  t.equal(
    code(codeBlock, 'javascript'),
    '```javascript\n' + codeBlock + '\n```'
  );
  t.end();
});

tap.test('table', (t) => {
  const headers = ['id', 'name'];
  const rows = ['1', 'Ajeje'];
  let out = '| id | name |\n';
  out += '| --- | --- |\n';
  out += '| 1 | Ajeje |\n';
  t.equal(table(headers, rows), out);
  t.end();
});
