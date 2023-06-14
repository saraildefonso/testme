const assert = require("assert");

it("has a text input", async () => {
  const dom = await render("index.html");
  const input = dom.window.document.querySelector("input");

  assert(input);
});

it("show a msg with valid email", async () => {
  const dom = await render("index.html");

  const input = dom.window.document.querySelector("input");
  input.value = "asdfggh@asdff.com";
  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  //console.log("content h1", h1.innerHTML);
  assert.strictEqual(h1.innerHTML, "looks good");
});

it("show a msg with fail email", async () => {
  const dom = await render("index.html");

  const input = dom.window.document.querySelector("input");
  input.value = "asdfgghasdff";
  dom.window.document
    .querySelector("form")
    .dispatchEvent(new dom.window.Event("submit"));

  const h1 = dom.window.document.querySelector("h1");

  //console.log("content h1", h1.innerHTML);
  assert.strictEqual(h1.innerHTML, "looks bad");
});
