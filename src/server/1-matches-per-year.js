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
    console.log(count)

}


num_of_matches_played_every_year()