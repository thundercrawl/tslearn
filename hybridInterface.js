//first create function
var c_f = function (x, y) {
    console.log("center position: (" + x + ", " + y + ")");
};
var s = function (s) {
    console.log('print:', s);
};
var circle = c_f; //type assertion on right side
circle = s;
circle.radius = 10;
circle.display = function (d) {
    console.log('circle displayed: ' + d);
};
circle['interactive'] = true;
circle['maximumRadius'] = 20;
console.log(circle);
circle(2, 5); // calling position function
circle(3);
circle.display(true);
var mime = {
    'jpeg': 'jpeg/image',
    png: 'png/image'
};
console.log(mime['jpeg']);
