function initialize()
{
    playerStrength = document.getElementById("playerstrength");
    playerCunning = document.getElementById("playercunning");
    playerSpeed = document.getElementById("playerspeed");
    playerFatigue = document.getElementById("playerfatigue");

    enemyStrength = document.getElementById("enemystrength");
    enemyCunning = document.getElementById("enemycunning");
    enemySpeed = document.getElementById("enemyspeed");
    enemyFatigue = document.getElementById("enemyfatigue");

    player = {strength: 6, cunning: 6, speed: 6, fatigue: 30, maxFatigue: 30, prevFatigue: 30, attack: 0, defense: 0, state: "", dead: "n", log: ""};
    enemy = {strength: 6, cunning: 6, speed: 6, fatigue: 30, maxFatigue: 30, prevFatigue: 30, attack: 0, defense: 0, state: "", dead: "n", log: ""};

    playerLog = document.getElementById("playerlog");
    enemyLog = document.getElementById("enemylog");

    makeStats();
}

function makeStats()
{
    //player stat increase
    playerStats = [1, 2, 3, 4]
    for (i = 0; i < 2; i++)
    {
        let index = Math.floor(Math.random() * (playerStats.length))
        if (playerStats[index] === 1)
        {
            player.strength += Math.floor(Math.random() * 2);
            console.log("player strength inc: "+ player.strength);
            playerStats.splice(index, 1);
        }
        else if (playerStats[index] === 2)
        {
            player.cunning += Math.floor(Math.random() * 2);
            console.log("player cunning inc: "+ player.cunning);
            playerStats.splice(index, 1);
        }
        else if (playerStats[index] === 3)
        {
            player.speed += Math.floor(Math.random() * 2);
            console.log("player speed inc: "+ player.speed);
            playerStats.splice(index, 1);
        }
        else if (playerStats[index] === 4)
        {
            player.fatigue += Math.floor(Math.random() * 7);
            console.log("player fatigue inc: "+ player.fatigue)
            playerStats.splice(index, 1);
        }
    }

    // player stat decrease
    if (playerStats[0] === 1)
    {
        player.strength += (Math.floor(Math.random() * 2) * -1);
        console.log("player strength dec: "+ player.strength);
    }
    else if (playerStats[0] === 2)
    {
        player.cunning += (Math.floor(Math.random() * 2) * -1);
        console.log("player cunning dec: "+ player.cunning);
    }
    else if (playerStats[0] === 3)
    {
        player.speed += (Math.floor(Math.random() * 2) * -1);
        console.log("player speed dec: "+ player.speed);
    }
    else if (playerStats[0] === 4)
    {
        player.fatigue += (Math.floor(Math.random() * 7) * -1);
        console.log("player fatigue dec "+ player.fatigue)
    }

    if (playerStats[1] === 1)
    {
        player.strength += (Math.floor(Math.random() * 2) * -1);
        console.log("player strength dec: "+ player.strength);
    }
    else if (playerStats[1] === 2)
    {
        player.cunning += (Math.floor(Math.random() * 2) * -1);
        console.log("player cunning dec: "+ player.cunning);
    }
    else if (playerStats[1] === 3)
    {
        player.speed += (Math.floor(Math.random() * 2) * -1);
        console.log("player speed dec: "+ player.speed);
    }
    else if (playerStats[1] === 4)
    {
        player.fatigue += (Math.floor(Math.random() * 7) * -1);
        console.log("player fatigue dec "+ player.fatigue)
    }

    // enemy stat increase
    enemyStats = [1, 2, 3, 4]
    for (i = 0; i < 2; i++)
    {
        let index = Math.floor(Math.random() * (enemyStats.length))
        if (enemyStats[index] === 1)
        {
            enemy.strength += Math.floor(Math.random() * 2);
            console.log("enemy strength inc: "+ enemy.strength);
            enemyStats.splice(index, 1);
        }
        else if (enemyStats[index] === 2)
        {
            enemy.cunning += Math.floor(Math.random() * 2);
            console.log("enemy cunning inc: "+ enemy.cunning);
            enemyStats.splice(index, 1);
        }
        else if (enemyStats[index] === 3)
        {
            enemy.speed += Math.floor(Math.random() * 2);
            console.log("enemy speed inc: "+ enemy.speed);
            enemyStats.splice(index, 1);
        }
        else if (enemyStats[index] === 4)
        {
            enemy.fatigue += Math.floor(Math.random() * 7);
            console.log("enemy fatigue inc: "+ enemy.fatigue)
            enemyStats.splice(index, 1);
        }
    }

    // enemy stat decreases
    if (enemyStats[0] === 1)
    {
        enemy.strength += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy strength dec: "+ enemy.strength);
    }
    else if (enemyStats[0] === 2)
    {
        enemy.cunning += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy cunning dec: "+ enemy.cunning);
    }
    else if (enemyStats[0] === 3)
    {
        enemy.speed += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy speed dec: "+ enemy.speed);
    }
    else if (enemyStats[0] === 4)
    {
        enemy.fatigue += (Math.floor(Math.random() * 7) * -1);
        console.log("enemy fatigue dec "+ enemy.fatigue)
    }

    if (enemyStats[1] === 1)
    {
        enemy.strength += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy strength dec: "+ enemy.strength);
    }
    else if (enemyStats[1] === 2)
    {
        enemy.cunning += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy cunning dec: "+ enemy.cunning);
    }
    else if (enemyStats[1] === 3)
    {
        enemy.speed += (Math.floor(Math.random() * 2) * -1);
        console.log("enemy speed dec: "+ enemy.speed);
    }
    else if (enemyStats[1] === 4)
    {
        enemy.fatigue += (Math.floor(Math.random() * 7) * -1);
        console.log("enemy fatigue dec "+ enemy.fatigue)
    }

    player.maxFatigue = player.fatigue;
    player.prevFatigue = player.fatigue;

    enemy.maxFatigue = enemy.fatigue;
    enemy.prevFatigue = enemy.fatigue;

    display();
}

//Moves
function turn(p, e)
{
    if (player.dead === "n" && enemy.dead === "n")
    {
        //computer decides move and calculates
        let enemyChoice = (Math.floor(Math.random() * 2)) + 1;
        if (enemy.fatigue >= (player.fatigue * 2) || player.fatigue < 0)
        {
            finishingMoveCalc(enemy);
        }
        else if (enemyChoice == 1)
        {
            attackCalc(enemy);
        }
        else if (enemyChoice == 2)
        {
            defendCalc(enemy);
        }

        //checks what the player picked
        if (player.state == "attacking")
        {
            if (p.attack > e.defense)
            {
            e.fatigue -= (p.attack - e.defense)
            }

            if (e.state == "attacking")
            {
                if (e.attack > p.defense)
                {
                    p.fatigue -= (e.attack - p.defense);
                }
            }

            if (enemy.state == "finishing move") 
            {
                if ((e.attack - p.defense) > 1)
                {
                    p.dead = "y";
                }
                else if (p.state == "defending")
                {
                    restore(p);
                }
            }
            
        }
        else if (player.state == "defending")
        {
            if (e.state == "defending")
            {
                restore(player);
                restore(enemy);
            }
            else if (e.attack > p.defense)
            {
                p.fatigue -= (e.attack - p.defense);
            }
            else
            {
                restore(p);
            }

            if (enemy.state == "finishing move") 
            {
                if ((e.attack - p.defense) > 1)
                {
                    p.dead = "y";
                }
                else if (p.state == "defending")
                {
                    restore(p);
                }
            }

        }
        else if (player.state == "finishing move") 
        {
            if ((p.attack - e.defense) > 1)
            {
                e.dead = "y";
            }
            else if (e.state == "defending")
            {
                restore(e);
            }
        }

        if ((player.prevFatigue - player.fatigue) / 5 != 0)
        {
            if (Math.floor((player.prevFatigue - player.fatigue) / 5) < 0)
            {
                player.strength -= Math.floor((player.prevFatigue - player.fatigue) / 5) + 1;
                player.cunning -= Math.floor((player.prevFatigue - player.fatigue) / 5) + 1;
                player.speed -= Math.floor((player.prevFatigue - player.fatigue) / 5) + 1;
                player.prevFatigue = player.fatigue;
            }
            else
            {
                player.strength -= Math.floor((player.prevFatigue - player.fatigue) / 5);
                player.cunning -= Math.floor((player.prevFatigue - player.fatigue) / 5);
                player.speed -= Math.floor((player.prevFatigue - player.fatigue) / 5);
                player.prevFatigue = player.fatigue;
            }
        }
        if ((enemy.prevFatigue - enemy.fatigue) / 5 != 0)
        {
            if (Math.floor((enemy.prevFatigue - enemy.fatigue) / 5) < 0)
            {
                enemy.strength -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5) + 1;
                enemy.cunning -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5) + 1;
                enemy.speed -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5) + 1;
                enemy.prevFatigue = enemy.fatigue;
            }
            else
            {
                enemy.strength -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5);
                enemy.cunning -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5);
                enemy.speed -= Math.floor((enemy.prevFatigue - enemy.fatigue) / 5);
                enemy.prevFatigue = enemy.fatigue;
            }
        }

    }
    if (player.dead == "n" && enemy.dead == "y")
    {
        p.log += "You Win!"
        display();
    }
    else if (player.dead == "y" && enemy.dead == "n")
    {
        p.log += "You Lose";
        display();
    }
    //reset state
    player.state = "";
    player.attack = 0;
    player.defense = 0;

    enemy.state = "";
    enemy.attack = 0;
    enemy.defense = 0;

    display();
}

function attackCalc(p)
{
    p.state = "attacking";
    p.attack = (p.strength + p.speed + p.cunning) / ((Math.floor(Math.random() * 3)) + 1 );
    p.defense = p.speed + ((Math.floor(Math.random() * 6)) + 1 );
    p.log += "Attack, ";
}

function defendCalc(p)
{
    p.state = "defending";
    p.defense = p.speed + p.cunning;
    p.log += "Defend, ";
}

function finishingMoveCalc(p)
{
    p.state = "finishing move";
    p.attack = (p.strength + p.speed) / ((Math.floor(Math.random() * 3)) + 1 );
    p.defense = p.speed + ((Math.floor(Math.random() * 6)) + 1 );
    p.log += "Finishing Move, ";
}

function attack(p)
{
    // Player Attack
    p.state = "attacking";
    p.attack = (p.strength + p.speed + p.cunning) / ((Math.floor(Math.random() * 3)) + 1 );
    p.defense = p.speed + ((Math.floor(Math.random() * 6)) + 1 );
    p.log += "Attack, ";
    turn(player, enemy);
    display();
}

function defend(p)
{
    p.state = "defending";
    p.defense = p.speed + p.cunning;
    p.log += "Defend, ";
    turn(player, enemy);
    display();
}

function finishingMove(p)
{
    p.state = "finishing move";
    p.attack = (p.strength + p.speed) / ((Math.floor(Math.random() * 3)) + 1 );
    p.defense = p.speed + ((Math.floor(Math.random() * 6)) + 1 );
    p.log += "Finishing Move, ";
    turn(player, enemy);
    display();
}

function restore(r)
{
    let restoreF = ((Math.floor(Math.random() * 6)) + 1);
    if ((r.fatigue + restoreF) > r.maxFatigue)
    {
        r.fatigue = r.maxFatigue;
    }
    else
    {
        r.fatigue += restoreF;
    }
}

function display()
{
    playerStrength.innerHTML = player.strength;
    playerCunning.innerHTML = player.cunning;
    playerSpeed.innerHTML = player.speed;
    playerFatigue.innerHTML = player.fatigue;

    enemyStrength.innerHTML = enemy.strength;
    enemyCunning.innerHTML = enemy.cunning;
    enemySpeed.innerHTML = enemy.speed;
    enemyFatigue.innerHTML = enemy.fatigue;

    playerLog.innerHTML = player.log;
    enemyLog.innerHTML = enemy.log;

    if (player.fatigue >= (enemy.fatigue * 2) || enemy.fatigue < 0)
    {
        document.getElementById("finishingMove").style.display = "block";
    }
    else
    {
        document.getElementById("finishingMove").style.display = "none";
    }
}