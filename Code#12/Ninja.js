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

    this.get_image_path = function(){
        return this.image_path;
    };

    this.set_image_path = function(image_path){
        this.image_path = image_path;
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

        if(key_press === KEY_TURN_DOWN && this.get_vertical_position() < 500){
            current_vertical_position += jump_unit;
            console.log('down');
            this.set_vertical_position(current_vertical_position);
        }else if(key_press === KEY_TURN_RIGHT && this.get_horizontal_position() < 735){
            current_horizontal_position += jump_unit;
            this.set_horizontal_position(current_horizontal_position);
            console.log('right');
        }else if(key_press === KEY_TURN_UP && this.get_vertical_position() > 0){
            current_vertical_position -= jump_unit;
            this.set_vertical_position(current_vertical_position);
            console.log('up');
        }else if(key_press === KEY_TURN_LEFT && this.get_horizontal_position() >0){
            current_horizontal_position -= jump_unit;
            this.set_horizontal_position(current_horizontal_position);
            console.log('left');
        }
    };

    this.launching_attacks = function () {

    };

    this.turn_on_protection_mode = function () {
        
    };
}









