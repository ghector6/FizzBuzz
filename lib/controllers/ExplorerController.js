const ExplorerServices = require("./../services/ExplorerServices")
const FizzbuzzService = require("./../services/FIzzbuzzServices")
const Reader = require("./../utils/Reader")

class ExplorerConroller {
    static getExplorerBymMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerServices.filterByMission(explorers, mission)

    }
}