import { matches_summary } from "./matches.js";


export const num_of_matches_played_every_year = async () => {
    const summary = await matches_summary();


    const count = summary.reduce((acc, match) => {
        if (!acc[match.season]) {
            acc[match.season] = 1
        }
        else {
            acc[match.season] += 1
        }
        return acc
    }, {})
    return (count)

}


// const dataJson = async () => {
//     let jsonString = await num_of_matches_played_every_year().then(problem1 => {
//         JSON.stringify(problem1)
//     })
//     const blob = new Blob([jsonString], { type: "application/json" })
//     const url = URL.createObjectURL(blob)
//     console.log(url)

// }

// dataJson()


