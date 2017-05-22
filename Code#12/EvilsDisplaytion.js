/**
 * Created by dao on 5/22/17.
 */
function evil_creator(evil){
    this.evil_image;

    this.create_evil_image = function () {
        var game_board_id = "map";
        var game_board_object = document.getElementById(game_board_id);
        var evil_div = document.createElement('div');
        this.evil_image = document.createElement('img');

        game_board_object.appendChild(evil_div);
        evil_div.appendChild(this.evil_image);

        this.evil_image.style.position = "absolute";
    };

    this.set_evil_id = function(evil_id){
        this.evil_image.id = evil_id;
    };

    this.set_path_evil_image = function (evil_image_path) {
        this.evil_image.src = evil_image_path;
    };

    this.set_evil_horizontal_position = function (size_unit) {
        this.evil_image.style.left = evil.set_horizontal_position + size_unit;
    };

    this.set_evil_vertical_position = function (vertical_position, size_unit) {
        this.evil_image.style.top  = evil.set_vertical_position + size_unit;
    };
}



function evils_creation() {
    var evils = [];
    const MAX_EVILS = 3;

    for(var i = 0; i <= MAX_EVILS; i++){
        var evil = new evil_creator(evil);
        var evil_vertical_position = Math.floor((Math.random() * 100) + 1);
        var evil_horizontal_position = Math.floor((Math.random() * 100) + 1);
        evil.create_evil_image();
        evil.set_evil_id("evil" + i);
        evil.set_path_evil_image("evil.jpg");
        evil.set_evil_horizontal_position(evil_horizontal_position,"px");
        evil.set_evil_vertical_position(evil_vertical_position,"px");
        evils[i] = evil;
    }
}

evils_creation();

function running() {

}

