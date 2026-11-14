describe('About Scope (about_scope.js)', function () {
  it('global variables', function () {
    window.thisIsAGlobalVariable = 77;
    // определено ли thisIsAGlobalVariable в этой области видимости?
    expect(77).toBe(thisIsAGlobalVariable);
    delete window.thisIsAGlobalVariable;
  });

  it('variables declared inside of a function', function () {
    let outerVariable = 'outer';

    // это самовызывающаяся функция. Обратите внимание, что она вызывает себя в конце на скобки вызова: ().
    (function () {
      let innerVariable = 'inner';
      // определено ли outerVariable в этой области видимости?
      expect('outer').toBe(outerVariable);
      // определено ли innerVariable в этой области видимости?
      expect('inner').toBe(innerVariable);
    })();

    // определено ли outerVariable в этой области видимости?
    expect('outer').toBe(outerVariable);
    // определено ли innerVariable в этой области видимости?
    expect('undefined').toBe(typeof innerVariable);
  });
});
