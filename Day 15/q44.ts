//Q:44
function make_sandwich(...item: string[]) {
     console.log(`Making a sandwich with: ${item.join( ', ')}.`);   
}
make_sandwich("ham", "cheese")
make_sandwich("deli meat", "lettuce", "tomato")
make_sandwich("mayonnaise", "mustard", "Olives", "Avocado")