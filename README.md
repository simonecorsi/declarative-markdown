# declarative-markdown

<!-- PROJECT SHIELDS -->

<!-- ![tests](https://github.com/simonecorsi/declarative-markdown/workflows/test/badge.svg) -->

<!-- toc -->

- [About The Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

<!-- tocstop -->

## About The Project

The purpose of this package is to generate markdown with javascript/typescript in a declarative way without having to deal with string templating!

This is already what I need for my project but feel free to open PR if you have some ideas!

<!-- GETTING STARTED -->

## Installation

```sh
npm i --save @scdev/declarative-markdown
# OR
yarn add
```

<!-- USAGE EXAMPLES -->

## Usage

You can see output of the following snippet [here](./test/fixtures/output)

```js
import { Markdown, italic, bold, link, quote, inlineCode, code } from '../src';

const mkd = new Markdown('Declarative Markdown Generator');

mkd
  .header('Paragraphs', 2)
  .paragraph(`My ${italic('Italic')} text and the ${bold('bold')} one`)
  .paragraph(
    `Let's add a ${link('link', 'http://google.com')}, why not a quote: ${quote(
      "I've become death, destructor of worlds"
    )}`
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
  .table(['id', 'name'], ['1', 'Simone'])
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

const string = mkd.render();
```

<!-- CONTRIBUTING -->

## Contributing

Project is pretty simple and straight forward for what is my needs, but if you have any idea you're welcome.

This projects uses [commitizen](https://github.com/commitizen/cz-cli) so be sure to use standard commit format or PR won't be accepted

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'feat(scope): some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Simone Corsi - [@im_simonecorsi](https://twitter.com/im_simonecorsi)
