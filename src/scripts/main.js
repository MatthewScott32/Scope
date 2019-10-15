// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]


// for (let x = 1; x < cookies.length; x++) {
//     const currentCookie = cookies[x]
//    console.log("Mmmmmmm... that's a good" + currentCookie);
// }

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log(conjoinedWord)
// }

// conjunction("Visa", "Card")


// {
//     const ModSquad = {
//         members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
//         series: {
//             start: "1968",
//             end: "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     ModSquad.members.forEach(member => {
//         let htmlRepresentation = `<div>${member}</div>`
//         document.querySelector(".show-info").innerHTML = htmlRepresentation
//     })
// }

const locations = [[3,1], [1,2], [1,3], [2,1], [3,2], [2,3]]
let counter = 0;
for (let k = 0; k < locations.length; k++) {
    let currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        counter++
        const invalidLocation = true
        console.log("This location is invalid")
    }
    
}

console.log(`There were ${counter} invalid locations`);
/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/