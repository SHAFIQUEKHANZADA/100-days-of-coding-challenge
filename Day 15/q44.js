//Q:44
function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(item.join(', '), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("deli meat", "lettuce", "tomato");
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado");
