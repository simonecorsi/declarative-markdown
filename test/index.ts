// @ts-n
import tap from 'tap';
import { Markdown, italic, bold, link, quote, inlineCode, code } from '../src';
import fs from 'fs/promises';

tap.test('Shoud generate Markdown', async (t) => {
  t.throws(() => {
    // @ts-ignore
    return new Markdown();
  });

  const mkd = new Markdown('Declarative Markdown Generator');
  t.equal(mkd.render(), '# Declarative Markdown Generator');

  mkd
    .header('Paragraphs', 2)
    .paragraph(`My ${italic('Italic')} text and the ${bold('bold')} one`)
    .paragraph(
      `Let's add a ${link(
        'link',
        'http://google.com'
      )}, why not a quote: ${quote("I've become death, destructor of worlds")}`
    )
    .paragraph(
      `Do you want to see my fancy ${inlineCode(
        "alert('x')"
      )}, but I've a better example here: ${code(
        'package main\n func main(){}',
        'go'
      )}`
    )
    .header('Table', 2)
    .table(['id', 'name'], [['1', 'Simone']])
    .header('List', 2)
    .list([
      { text: 'list1', depth: 0 },
      { text: 'nested', depth: 1 },
      { text: 'nested2', depth: 1 },
      { text: 'list2' },
      { text: 'nested', depth: 1 },
      { text: 'nested2', depth: 1 },
    ])
    .header('Numbered List', 2)
    .list(
      [
        { text: 'list1' },
        { text: 'nested' },
        { text: 'nested2' },
        { text: 'list2' },
        { text: 'nested' },
        { text: 'nested2' },
      ],
      true
    )
    .header('Task List', 2)
    .tasks([
      { text: 'list1', checked: true },
      { text: 'nested' },
      { text: 'nested2' },
      { text: 'list2' },
      { text: 'nested' },
      { text: 'nested2' },
    ])
    .header('images', 2)
    .image('http://ajeje.com/image.png')
    .image('http://ajeje.com/image.png', 'ALTTEXT')
    .tableOfContent();

  const file = await fs.readFile('./test/fixtures/output', 'utf-8');
  const render = mkd.render() + '\n';
  t.equal(file, render);
  t.end();
});

tap.test('Check throws', (t) => {
  const mkd = new Markdown('Throw test');

  // @ts-ignore
  t.throws(() => mkd.list('test'));
  // @ts-ignore
  t.throws(() => mkd.tasks('test'));
  t.end();
});
