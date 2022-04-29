const Reader = require("../../lib/utils/Reader");
const ExplorerServices = require("./../../lib/services/ExplorerServices")

describe("Test para ExplorerService", () => {

    test("Requerimiento 1 y 2, Prueba de que el static method filterByMission funcione y por ende el length del getAmountOfExplorersByMission", () => {
        const explorers = Reader.readJsonFile("./explorers.json")
        const explorersInNode = ExplorerServices.filterByMission(explorers, "node")
        expect(explorersInNode.length).toBe(10)

    })

    test("Requerimiento 3, Prueba que imprima el nombre de ajolonauta en mission de node", () => {
        const explorers = Reader.readJsonFile("./explorers.json")
        const nameByMission = ExplorerServices.getExplorersUserNameByMission(explorers, "node");
        expect(nameByMission[0]).toBe("ajolonauta1")
    })
    

        
        

    })
