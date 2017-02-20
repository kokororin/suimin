const assert = require('power-assert');
const suimin = require('.');

describe('suimin', function() {
  it('should sleep 1500ms', async function() {
    this.timeout(10000);
    const startTime = +new Date();
    await suimin(1500);
    const endTime = +new Date();
    assert.strictEqual((endTime - startTime) > 1500, true);
  });
});
