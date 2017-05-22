/**
 * Created by dao on 5/22/17.
 */
function displaytion() {
    var game_board_id = "map";
    var ninja_id = "ninja";
    var evils_id = "evil";
    var ninja_object = document.getElementById(ninja_id);
    var game_board_object = document.getElementById(game_board_id);
    var evil_objects = document.getElementById(evils_id);

    // this.show_game_board = function (game_board) {
    //     game_board_object.style.height = game_board.get_height() + "px";
    //     game_board_object.style.width  = game_board.get_width() + "px";
    //     game_board_object.style.backgroundColor = game_board.get_background_color();
    // };

    this.show_ninja = function show_ninja(ninja) {
        ninja_object.style.top  = ninja.get_vertical_position() + "px";
        ninja_object.style.left = ninja.get_horizontal_position() + "px";
    };
}
