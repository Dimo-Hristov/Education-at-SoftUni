function heroesOfCodeAndLogic(input) {
    const heroesAmound = Number(input.shift());
    const maxHp = 100;
    const maxMp = 200;

    let heroesList = {}

    for (let i = 0; i < heroesAmound; i++) {
        let currentHero = input.shift().split(' ');
        let name = currentHero.shift();
        let hp = Number(currentHero.shift());
        let mp = Number(currentHero.shift());

        heroesList[name] = {
            hp,
            mp,
        }
    }

    let data = input.shift();

    while (data !== 'End') {
        data = data.split(' - ');
        let command = data.shift();
        let heroName = data.shift();

        switch (command) {
            case 'CastSpell':
                let mpNeeded = Number(data.shift());
                let spellName = data.shift();

                if (heroesList[heroName].mp >= mpNeeded) {
                    heroesList[heroName].mp -= mpNeeded;
                    console.log(`${heroName} has successfully cast ${spellName} and now has ${heroesList[heroName].mp} MP!`);
                } else {
                    console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
                }
                break;

            case 'TakeDamage':
                let damage = Number(data.shift());
                let attacker = data.shift();
                heroesList[heroName].hp -= damage;

                if (heroesList[heroName].hp > 0) {
                    console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroesList[heroName].hp} HP left!`);
                } else {
                    delete heroesList[heroName]
                    console.log(`${heroName} has been killed by ${attacker}!`);
                }
                break;

            case 'Recharge':
                let rechargeAmound = Number(data.shift());
                heroesList[heroName].mp += rechargeAmound;

                if (heroesList[heroName].mp > maxMp) {
                    let overRecharged = heroesList[heroName].mp - maxMp;
                    rechargeAmound = rechargeAmound - overRecharged;
                    heroesList[heroName].mp = maxMp
                }

                console.log(`${heroName} recharged for ${rechargeAmound} MP!`);
                break;

            case 'Heal':
                let healAmound = Number(data.shift());
                heroesList[heroName].hp += healAmound;

                if (heroesList[heroName].hp > maxHp) {
                    let overRecharged = heroesList[heroName].hp - maxHp;
                    healAmound = healAmound - overRecharged;
                    heroesList[heroName].hp = maxHp
                }

                console.log(`${heroName} healed for ${healAmound} HP!`);
                break;
        }


        data = input.shift();
    }

    for (const hero in heroesList) {
        console.log(hero);
        console.log(`  HP: ${heroesList[hero].hp}`);
        console.log(`  MP: ${heroesList[hero].mp}`);
    }
}
heroesOfCodeAndLogic(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',]);

//     You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic. You want to play it all day long! So cancel all other arrangements and create your party!
// On the first line of the standard input, you will receive an integer n – the number of heroes that you can choose for your party. On the next n lines, the heroes themselves will follow with their hit points and mana points separated by a single space in the following format:
// "{hero name} {HP} {MP}"
// -	HP stands for hit points and MP for mana points
// -	a hero can have a maximum of 100 HP and 200 MP
// After you have successfully picked your heroes, you can start playing the game. You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given.
// There are several actions that the heroes can perform:
// "CastSpell – {hero name} – {MP needed} – {spell name}"
// •	If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message:
// o	"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
// •	If the hero is unable to cast the spell print:
// o	"{hero name} does not have enough MP to cast {spell name}!"
// "TakeDamage – {hero name} – {damage} – {attacker}"
// •	Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
// o	"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
// •	If the hero has died, remove him from your party and print:
// o	"{hero name} has been killed by {attacker}!"
// "Recharge – {hero name} – {amount}"
// •	The hero increases his MP. If it brings the MP of the hero above the maximum value (200), MP is increased to 200. (the MP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} recharged for {amount recovered} MP!"
// "Heal – {hero name} – {amount}"
// •	The hero increases his HP. If a command is given that would bring the HP of the hero above the maximum value (100), HP is increased to 100 (the HP can't go over the maximum value).
// •	 Print the following message:
// o	"{hero name} healed for {amount recovered} HP!"
// Input
// •	On the first line of the standard input, you will receive an integer n
// •	On the following n lines, the heroes themselves will follow with their hit points and mana points separated by a space in the following format
// •	You will be receiving different commands, each on a new line, separated by " – ", until the "End" command is given
// Output
// •	Print all members of your party who are still alive, in the following format (their HP/MP need to be indented 2 spaces):
// "{hero name}
//   HP: {current HP}
//   MP: {current MP}"
// Constraints
// •	The starting HP/MP of the heroes will be valid, 32-bit integers will never be negative or exceed the respective limits.
// •	The HP/MP amounts in the commands will never be negative.
// •	The hero names in the commands will always be valid members of your party. No need to check that explicitly.
