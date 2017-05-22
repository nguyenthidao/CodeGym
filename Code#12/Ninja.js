/**
 * Created by dao on 5/19/17.
 */
function ninja() {
    this.get_power = function () {
        return this.power;
    };

    this.set_power = function (power) {
        this.power = power;
    };

    this.get_defensive_number = function () {
        return this.defensive_number;
    };

    this.set_defensive_number = function (defensive_number) {
        this.defensive_number = defensive_number;
    };

    this.get_horizontal_position = function () {
        return this.horizontal_position;
    };

    this.set_horizontal_position = function (horizontal_position) {
        this.horizontal_position = horizontal_position;
    };

    this.get_vertical_position = function () {
        return this.vertical_position;
    };

    this.set_vertical_position = function (vertical_position) {
        this.vertical_position = vertical_position;
    };

    this.move = function (key_press) {
        var jump_unit = 30;
        var current_vertical_position   = this.get_vertical_position();
        var current_horizontal_position = this.get_horizontal_position();


        const KEY_TURN_DOWN  = 40;
        const KEY_TURN_UP    = 38;
        const KEY_TURN_LEFT  = 37;
        const KEY_TURN_RIGHT = 39;


        if(key_press === KEY_TURN_DOWN){
            current_vertical_position += jump_unit;
            console.log('down');
            this.set_vertical_position(current_vertical_position);
        }else if(key_press === KEY_TURN_RIGHT){
            current_horizontal_position += jump_unit;
            this.set_horizontal_position(current_horizontal_position);
        }else if(key_press === KEY_TURN_UP){
            current_vertical_position -= jump_unit;
            this.set_vertical_position(current_vertical_position);
        }else if(key_press === KEY_TURN_LEFT){
            current_horizontal_position -= jump_unit;
            this.set_horizontal_position(current_horizontal_position);
        }

    };

    this.launching_attacks = function () {

    };

    this.turn_on_protection_mode = function () {
        
    };
}

ninja = new ninja();

ninja.set_horizontal_position(0);
ninja.set_vertical_position(0);
displaytion = new displaytion();

function key_press(event) {
    ninja.move(event.which);
    displaytion.show_ninja(ninja);
}




