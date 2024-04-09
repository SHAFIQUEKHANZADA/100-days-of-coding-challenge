//Q:115
function days (week: number) { 
switch(week) {
    case 1:
    console.log("Monday")
    break
    case 2:
    console.log("Tuesday")
    break
    case 3:
    console.log("Wednesday")
    break
    case 4:
    console.log("Thursday")
    break
    case 5:
    console.log("Friday")
    break
    case 6:
    console.log("Saturday")
    break
    case 7:
    console.log("Sunday")
    break
    default:
    console.log("Invalid day number");
    break;
}
}
days(2)

//Q:116
function matches (diff: string) {
    switch(diff) {
        case "tuesday":
        case "wednesday":
        case "Thursday":
        case "saturday":
            console.log("I go to university");
        break
        case "friday":
        case "sunday":
            console.log("I play Football");
        break
        case "monday":
            console.log("I go to governor house");
        break
        default:
        console.log("Nothing to do");
        break
    }
}
matches("friday")

//Q:117
function marks(grade: number) {
    switch(grade) {
        case 80:
        console.log("Excellent");
        break
        case 60:
        console.log("Good");
        break
        case 40:
        console.log("Not bad");
        break
        case 30:
        console.log("Fail");
        break
        default:
        console.log("Invalid Grade");
        break  
    }
}
marks(79)