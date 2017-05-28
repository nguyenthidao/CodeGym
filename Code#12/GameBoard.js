/**
 * Created by dao on 5/22/17.
 */
function game_board(){
    var game_board_id      = "map";
    var game_board_element = document.getElementById(game_board_id);  
    var ninja_element = document.createElement('img');
    var evil_element = document.createElement('img');

    game_board_element.appendChild(ninja_element);
    game_board_element.appendChild(evil_element);

    this.get_ninja = function () {
        return this.ninja;
    };

    this.get_evil = function () {
        return this.evil;
    };

    this.get_height = function () {
        return this.height;
    };

    this.set_height = function (height) {
        game_board_element.height = height;
    };

    this.get_width = function () {
        return this.width;
    };

    this.set_width = function (width) {
        game_board_element.width = width;
    };

    this.get_background_color = function () {
        return this.background_color;
    };

    this.set_background_color = function (background_color) {
        game_board_element.style.background_color = background_color;
    };

    this.set_ninja = function(ninja){
        ninja_element.style.position = "absolute";
        ninja_element.src        = ninja.get_image_path();
        ninja_element.style.left = ninja.get_horizontal_position() + "px";
        ninja_element.style.top  = ninja.get_vertical_position() + "px";
    };

    this.set_evil = function create_evil(evil){
        evil_element.style.position = "absolute";
        evil_element.src        = evil.get_image_path();
        evil_element.style.left = evil.get_horizontal_position() + "px";
        evil_element.style.top  = evil.get_vertical_position() + "px";
    };
}

window.onload = function() {
    game_board = new game_board();
    ninja = new ninja();
    evil = new evil();

    ninja.set_image_path("ninja.jpg");
    ninja.set_horizontal_position(0);
    ninja.set_vertical_position(0);

    game_board.set_ninja(ninja);

    evil.set_image_path("evil.jpeg");
    evil.set_horizontal_position(Math.floor(Math.random() * 700));
    evil.set_vertical_position(Math.floor(Math.random() * 500));
    game_board.set_evil(evil);

    evil.move_random();
    game_board.set_evil(evil);
}

window.onkeydown = function(event){
    ninja.move(event.which);
    game_board.set_ninja(ninja);
    
    // setTimeout(start, 500)
}
