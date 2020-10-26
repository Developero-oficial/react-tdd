describe('matchers', () => {
  test('toBe', () => {
    expect(true).toBe(true);
  });

  test('toEqual', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});

    const arr = ['one', 'two'];
    expect(arr).toEqual(['one', 'two']);
  });

  test('not', () => {
    expect(true).not.toBe(false);
  });

  test('string', () => {
    expect('team').not.toMatch(/I/);
  });

  test('thrown', () => {
    // expect(compileAndroidCode).toThrow();
    // expect(compileAndroidCode).toThrow(Error);

    // // You can also use the exact error message or a regexp
    // expect(compileAndroidCode).toThrow('you are using the wrong JDK');
    // expect(compileAndroidCode).toThrow(/JDK/);
  });
});
