const {sum} = require("./sum");

describe('Sum Component', () => {
    test("shoud sum two numbers", () => {
        expect(sum(2, 2)).toBe(4);
    })
})