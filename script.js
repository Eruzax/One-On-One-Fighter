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

    player = {strength: 6, cunning: 6, speed: 6, fatigue: 30}
    enemy = {strength: 6, cunning: 6, speed: 6, fatigue: 30}
    display();
}

function play()
{
    //modify player stats
    playerStats = [player.strength, player.cunning, player.speed, player.fatigue]
    for (i = 0; i < 2; i++)
    {
        index = Math.floor(Math.random() * (playerStats.length))
        if (playerStats[index] === player.fatigue)
        {
            modifier(player.fatigue, Math.floor(Math.random() * 7))
            playerStats.splice(index, 1);
        }
        else
        {
            modifier(playerStats[index], Math.floor(Math.random() * 2))
            playerStats.splice(index, 1);
        }
    }

    if (playerStats[0] === player.fatigue)
    {
        modifier(player.fatigue, Math.floor(Math.random() * 7) * -1)
    }
    else
    {
        modifier(playerStats[0], Math.floor(Math.random() * 2) * -1)
    }

    if (playerStats[1] === player.fatigue)
    {
        modifier(player.fatigue, Math.floor(Math.random() * 7) * -1)
    }
    else
    {
        modifier(playerStats[1], Math.floor(Math.random() * 2) * -1)
    }

    //modify enemy stats
    enemyStats = [enemy.strength, enemy.cunning, enemy.speed, enemy.fatigue]
    for (i = 0; i < 2; i++)
    {
        index = Math.floor(Math.random() * (enemyStats.length))
        if (enemyStats[index] === enemy.fatigue)
        {
            modifier(enemy.fatigue, Math.floor(Math.random() * 7))
            enemyStats.splice(index, 1);
        }
        else
        {
            modifier(enemyStats[index], Math.floor(Math.random() * 2))
            enemyStats.splice(index, 1);
        }
    }

    if (enemyStats[0] === enemy.fatigue)
    {
        modifier(enemy.fatigue, Math.floor(Math.random() * 7) * -1)
    }
    else
    {
        modifier(enemyStats[0], Math.floor(Math.random() * 2) * -1)
    }

    if (enemyStats[1] === enemy.fatigue)
    {
        modifier(enemy.fatigue, Math.floor(Math.random() * 7) * -1)
    }
    else
    {
        modifier(enemyStats[1], Math.floor(Math.random() * 2) * -1)
    }
}

function attack(p, e)
{

}

function defend(p)
{

}

function finishingMove()
{

}

function modfier(stat, mod)
{
    stat += mod;
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
}