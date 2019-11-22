var Team = /** @class */ (function () {
    function Team(teameet) {
        var manager = teameet[0], teamers = teameet.slice(1);
        console.log(manager);
        console.log(teamers);
    }
    return Team;
}());
var t1 = new Team(['jimmy', 'tinna']);
