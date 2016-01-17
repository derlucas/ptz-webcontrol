/**
 * Created by lucas on 17.01.16.
 */

var btnCount = 48;
var url = "http://192.168.191.21/cgi-bin/aw_ptz?cmd=/cgi-bin/aw_ptz?cmd=%23R02&res=1";


var pad = function(number) {
    if(number < 10) {
        return "0" + number;
    }
    return "" + number;
};

var btnRow = function(container, iframe, ip) {
    for(var i = 1; i <= btnCount; i++) {
        var r = $('<button />').attr({ type: "button", class: "btn btn-default", value: i}).html(pad(i));
        $(container).append(r).append(" ");
        r.click(function() {
            $(iframe).attr("src", "http://" + ip + "/cgi-bin/aw_ptz?cmd=/cgi-bin/aw_ptz?cmd=%23R" + pad(this.value-1) + "&res=1");
        });
    }
};

$(function () {

    btnRow("#kamera1", "#hidden_iframe1", "192.168.191.21");
    btnRow("#kamera2", "#hidden_iframe2", "192.168.191.22");
    btnRow("#kamera3", "#hidden_iframe3", "192.168.191.23");
    btnRow("#kamera4", "#hidden_iframe4", "192.168.191.24");


});


