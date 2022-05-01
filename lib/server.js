const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (req, res)=>{
    res.json({message: "FuzzBuzz Api, welcome"});
});

app.get("/v1/explorers/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersInMission = ExplorerController.getExplorerByMission(mission);
    res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    const mission = req.params.mission;
    const amountOfExplorersByMission = ExplorerController.getExplorersAmountByMission(mission);
    res.json({mission: req.params.mission, quantity: amountOfExplorersByMission});
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    const mission = req.params.mission;
    const explorersUsernames = ExplorerController.getExplorersUsernamesByMission(mission);
    res.json({mission: req.params.mission, explorers:[explorersUsernames] });
});

app.get("/v1/fizzbuzz/:score",  (req, res) => {
    const score = req.params.score;
    const numberInputed = ExplorerController.getNumberAssignedByUser(score);
    res.json({score: req.params.score, trick: numberInputed});
    
    
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});