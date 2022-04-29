const Reader = require("./../../lib/utils/Reader")

describe("Test To see if it is reading", () => {
    test("if it is catching objects from the path", () => {
        const explorers = Reader.readJsonFile("./explorers.json")
        expect(explorers.length).toBe(0)

    })
})