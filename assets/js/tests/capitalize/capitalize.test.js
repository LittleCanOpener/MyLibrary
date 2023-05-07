const {capitalize} = require('./capitalize');
test('Captialize The First Letter',()=>{
    const text = 'communism';
    expect(capitalize(text)).toBe('Communism');
});