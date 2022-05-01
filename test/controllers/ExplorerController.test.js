const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test to see if my methods at ExplorerController are working", () => {

    test("if the getExplorerByMission is getting the filter list", () => {
        const explorers = ExplorerController.getExplorerByMission("node");
        expect(explorers.length).toBe(10);
    });

    test("if I get the userName of my explorer with map", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers[0]).toBe("ajolonauta1");
    });

    test("if getting the number input bu user is working ", () => {
        const fizz = ExplorerController.getNumberAssignedByUser(9)  
        const buzz = ExplorerController.getNumberAssignedByUser(10)
        const fizzbuzz = ExplorerController.getNumberAssignedByUser(15)      
        expect(fizzbuzz).toBe("FIZZBUZZ!!")
        expect(buzz).toBe("BUZZ")
        expect(fizz).toBe("FIZZ")
    })

    
});