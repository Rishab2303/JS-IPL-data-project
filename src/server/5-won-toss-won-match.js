import { matches_summary } from "./matches.js";

const won_toss_won_match = async () => {
    const summary = await matches_summary()
    const winner_tally = summary.reduce((acc, curr) => {
        if (curr.toss_winner === curr.winner) {
            if (acc[curr.toss_winner]) {
                acc[curr.toss_winner] += 1
            }
            else {
                acc[curr.toss_winner] = 1;
            }
        }
        // else {
        //     if (!acc[curr.toss_winner]) {
        //         acc[curr.toss_winner] = 0
        //     }
        // }
        return acc
    }, {})
    console.log(winner_tally)

}

won_toss_won_match()