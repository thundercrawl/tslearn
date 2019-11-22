class Team
{
    teameet:string[];
    [manager,...teamers]:string[];
    constructor(teameet:string[])
    {
        let [manager,...teamers]=teameet;
        console.log(manager);
        console.log(teamers);
    }

}


let t1:Team=new Team(['jimmy','tinna'])