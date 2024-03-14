//Q:37
function large_shirt(size: string = "large", message:string = "I love Typescript") {
   console.log(`Size should be "${size}", and the message is ${message}!`);
}
large_shirt()
large_shirt("medium")
large_shirt("small", "I love Coding")

//Q:38
function cities(city: string = "Karachi", county: string = "Pakistan") {
    console.log(`${city} is in ${county}`);    
}
cities()
cities("Lahore")
cities("Dehli", "India")
cities("London", "UK")

//Q:39
function city_county(city: string, county: string) {
    console.log(`${city}, ${county}`);  
}
city_county("Islamabad", "Pakistan")
city_county("Mossco", "Russia")
city_county("Toranto", "Canada")
city_county("Tehran", "Iran")