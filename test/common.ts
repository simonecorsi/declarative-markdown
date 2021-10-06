import tap from 'tap';
import {
  table,
  link,
  code,
  inlineCode,
  quote,
  italic,
  bold,
} from '../src/utils/common';

tap.test('italic', (t) => {
  t.equal(italic('ok'), '*ok*');
  t.equal(italic(null), '');
  t.end();
});

tap.test('bold', (t) => {
  t.equal(bold('ok'), '**ok**');
  t.equal(bold(null), '');
  t.end();
});

tap.test('quote', (t) => {
  t.equal(quote('ok'), '\n> ok');
  t.equal(quote(null), '');
  t.end();
});

tap.test('link', (t) => {
  const l = 'http://google.com';
  const txt = 'link';
  t.equal(link(txt, l), `[${txt}](${l})`);
  t.equal(link(null, null), '');
  t.end();
});

tap.test('code', (t) => {
  const codeBlock = "alert('x')";
  t.equal(inlineCode(codeBlock), '`' + codeBlock + '`');
  t.equal(inlineCode(null), '');
  t.equal(code(codeBlock), '\n\n```\n' + codeBlock + '\n```');
  t.equal(
    code(codeBlock, 'javascript'),
    '\n\n```javascript\n' + codeBlock + '\n```'
  );
  t.equal(code(null), '');
  t.end();
});

tap.test('table', (t) => {
  const headers = ['id', 'name'];
  const rows = ['1', 'Ajeje'];
  let out = '| id | name |\n';
  out += '| --- | --- |\n';
  out += '| 1 | Ajeje |';
  t.equal(table(headers, rows), out);
  t.end();
});
