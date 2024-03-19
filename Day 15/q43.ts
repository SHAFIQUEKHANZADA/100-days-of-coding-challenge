//Q:43
function make_great(magicians: string[]): string[] {
    // Make a copy of the array
    const greatMagicians = [...magicians];
    
    // Add "the Great" to each magician's name
    for (let i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] += " the Great";
    }
    return greatMagicians;
}
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const magiciansOriginal: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
const greatMagicians: string[] = make_great([...magiciansOriginal]);

console.log("Original Magicians:");
show_magicians(magiciansOriginal);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
