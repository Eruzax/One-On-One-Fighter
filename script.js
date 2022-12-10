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

    player = {strength: 6, cunning: 6, speed: 6, fatigue: 30, maxFatigue: 30, isAttack: false, isDefending: false, isFinishingMove: false};
    enemy = {strength: 6, cunning: 6, speed: 6, fatigue: 30, maxFatigue: 30, isAttack: false, isDefending: false, isFinishingMove: false};

    playerLog = document.getElementById("playerlog");
    enemyLog = document.getElementById("enemylog");
    pLog = "";
    eLog = "";

    play();
    display();
}

function play()
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
            console.log("enemenemy fatigue inc: "+ enemy.fatigue)
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
    enemy.maxFatigue = enemy.fatigue;

    display();
}

function turn(p, e)
{
    //Attack
    if (p.isAttack == true)
    {
        atk = (p.strength + p.speed + p.cunning / ((Math.floor(Math.random() * 3)) + 1 ));
        if (e.isDefending == true)
        {
         def = e.speed + e.cunning;
        }
        else
        {
         def = e.speed + ((Math.floor(Math.random() * 6)) + 1 )
        }
     
        if (atk > def)
        {
         e.fatigue -= (atk - def)
        }
        else
        {
            if (e.fatigue < e.maxFatigue)
            {
                restore = (Math.floor(Math.random() * 6)) + 1;
                if ((e.fatigue + restore) > e.maxFatigue)
                {
                    e.fatigue = e.maxFatigue;
                }
                else
                {
                    e.fatigue += restore;
                }
            }
        }
    }

    //Defending
    if (p.isDefending == true && e.isDefending == true)
    {
        pRestore = (Math.floor(Math.random() * 6)) + 1;
        if ((p.fatigue + pRestore) > p.maxFatigue)
        {
            p.fatigue = p.maxFatigue;
        }
        else
        {
            p.fatigue += restore;
        }

        eRestore = (Math.floor(Math.random() * 6)) + 1;
        if ((e.fatigue + eRestore) > e.maxFatigue)
        {
            e.fatigue = e.maxFatigue;
        }
        else
        {
            e.fatigue += eRestore;
        }
   }

   //Finishing Move


   display();
}

function attack()
{
    player.isAttack = true;
}

function defend()
{
    player.isDefending = true;
}

function finishingMove()
{
    player.finishingMove = true;
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

    playerLog.innerHTML = pLog;
    enemyLog.innerHTML = eLog;

    if (player.fatigue >= (enemy.fatigue * 2) || enemy.fatigue < 0)
    {
        document.getElementById("finishingMove").style.visibility = "visable";
    }
    else
    {
        document.getElementById("finishingMove").style.visibility = "hidden";
    }
}