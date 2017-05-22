/**
 * Created by dao on 5/22/17.
 */
function start() {

    var evil_name = ['kankui', 'kaibo', 'minlo', 'gisan'];
    var evils     = [];
    power = new power();
    ninja = new ninja();

    power.set_damage_index(100);
    ninja.set_power(power);
    ninja.set_defensive_number(100);
    ninja.move(40);



    // for(var i = 0; i< evil_name.length; i++){
    //     evils[i] = new evil(evil_name[i], power);
    // }
    //
    // game_board = new game_board(ninja, evils, 600, 600, '#000');

}

start();