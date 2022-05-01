const ExplorerServices = require("./../services/ExplorerServices")
const FizzbuzzServices = require("./../services/FIzzbuzzServices")
const Reader = require("./../utils/Reader")

class ExplorerConroller {

    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerServices.filterByMission(explorers, mission)
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json")
        return ExplorerServices.getExplorersUserNameByMission(explorers, mission)
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json")
        return ExplorerServices.getAmountOfExplorersByMission(explorers, mission)
    }

    static getNumberAssignedByUser(number){
        const inputNumber = FizzbuzzServices.applyValidationInNumber(number)
        return inputNumber

    }
}

module.exports = ExplorerConroller