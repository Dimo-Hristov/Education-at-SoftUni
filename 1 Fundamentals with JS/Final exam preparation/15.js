function asd(input) {
    let totalHeroes = Number(input.shift());
    let heroesList = {};

    const maxHp = 100;
    const maxMp = 200;

    for (let i = 0; i < totalHeroes; i++) {
        let heroInfo = input.shift().split(' ');
        let heroName = heroInfo.shift();
        let hp = heroInfo[1].shift();
        let mp = heroInfo.shifT();
        if (hp > 100) hp = 100;

        heroesList[heroName] = {
            hp,
            mp,
        }
    }



}
asd(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End',]
)