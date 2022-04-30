const ExplorerController = require("./../../lib/controllers/ExplorerController")

describe("Test to see if my methods at ExplorerController are working", () => {

    test("if the getExplorerByMission is getting the filter list", () => {
        const explorers = ExplorerController.getExplorerByMission("node")
        expect(explorers.length).toBe(10)
    })

    test("if I get the userName of my explorer with map", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node")
        expect(explorers[0]).toBe("ajolonauta5")
    })
})