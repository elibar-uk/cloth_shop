describe('clothShopController', function() {
  beforeEach(module('clothShopApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('clothShopController');
  }));
  it('initialises with empty array', function() {
    expect(ctrl.cart).toEqual([]);
  });
});
