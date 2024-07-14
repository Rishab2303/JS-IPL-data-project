import { matches_summary } from "./matches.js";


const num_of_matches_played_every_year = async () => {
    const summary = await matches_summary();
    summary.shift()
    let years = []
    for (let year of summary) {
        years.push(year[1])
    }

    const count = years.reduce((acc, year) => {
        if (!acc[year]) {
            acc[year] = 1
        }
        else {
            acc[year]++
        }
        return acc
    }, {})
    console.log(count)

}

num_of_matches_played_every_year()