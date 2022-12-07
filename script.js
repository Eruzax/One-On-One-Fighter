function initialize()
{
    playerHealth = documnet.getElementById("playerhealth");
    enemyHealth = document.getElementById("enemyhealth");
    pHealth = 100;
    eHealth = 100;

    display();
}

function turn()
{
    if (ehealth !=0 && pHealth != 0)
    {
        
    }
    else
    {
        if (pHealth <= 0)
        {
            console.log("Enemy Wins")
        }
        else if (eHealth <= 0)
        {
            console.log("Player Wins")
        }
    }
}

function attack()
{

}

function display()
{
    playerHealth.innerHTML = pHealth;
    enemyHealth.innerHTML = eHealth;
}