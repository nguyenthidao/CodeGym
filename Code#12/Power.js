/**
 * Created by dao on 5/22/17.
 */
function power(){
    this.get_damage_index = function () {
        return this.damage_index;
    };
    this.set_damage_index = function (damage_index) {
        this.damage_index = damage_index;
    };
    this.get_blood_indicator = function () {
        return this.blood_indicator;
    };
    this.set_blood_indicator = function (blood_indicator) {
        this.blood_indicator = blood_indicator;
    }
}
