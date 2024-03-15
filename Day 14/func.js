//Q:40
function make_album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album['track'] = track;
    }
    return album;
}
console.log(make_album("Atif Aslam", "Rabta"));
console.log(make_album("Arjit Singh", "O Maahi"));
console.log(make_album("NFAK", "Kamli Waly", 12));
//Q:41
var mag_name = ["Harry Houdini", "Derren Brown", "Dynamo"];
function find_mag(mag_name) {
    mag_name.forEach(function (mag_name) {
        console.log(mag_name);
    });
}
find_mag(mag_name);
//Q:42
function add_mag(mag_name) {
    mag_name.splice(3, 0, "The Great");
    console.log(mag_name);
}
add_mag(mag_name);
