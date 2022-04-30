const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Test to see if my methods at ExplorerController are working", () => {

    test("if the getExplorerByMission is getting the filter list", () => {
        const explorers = ExplorerController.getExplorerByMission("node")
        expect(explorers.length).toBe(10)
    })
})