describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("Cloth Shop");
  });
});
describe("app", function() {
  it("should say 'Hello world' on the page", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello world");
  });
});
