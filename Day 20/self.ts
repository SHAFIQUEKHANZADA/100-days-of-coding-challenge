let userProfile = (function() {
    let name = "Shafique"
    let age = 21
    return {
        displyinfo : function() {
            console.log(`Name: ${name}, Age: ${age}`);
            
        }
    }
})()
userProfile.displyinfo();