// - Para este exercício, você tentará adivinhar a saída dos console.log dos testes abaixo sem executá-los, vendo se compreendeu bem o funcionamento do beforeEach e do afterEach.
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});