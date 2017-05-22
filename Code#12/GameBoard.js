/**
 * Created by dao on 5/22/17.
 */
function game_board(){
    this.get_ninja = function () {
        return this.ninja;
    };

    this.set_ninja = function (ninja) {
        this.ninja = ninja;
    };

    this.get_evils = function () {
        return this.evils;
    };

    this.set_evils = function (evils) {
        this.evils = evils;
    }

    this.get_height = function () {
        return this.height;
    };

    this.set_height = function (height) {
        this.height = height;
    };

    this.get_width = function () {
        return this.width;
    };

    this.set_width = function (width) {
        this.width = width;
    };

    this.get_background_color = function () {
        return this.background_color;
    };

    this.set_background_color = function (background_color) {
        this.background_color = background_color;
    };
}
