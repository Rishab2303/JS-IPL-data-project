import { matches_summary } from "./matches.js";

export const player_of_the_match_per_season = async () => {
    const summary = await matches_summary();
    const result = summary.reduce((acc, match) => {
        if (acc[match.season]) {
            if (acc[match.season][match.player_of_match]) {
                acc[match.season] = {
                    ...acc[match.season],
                    [match.player_of_match]: acc[match.season][match.player_of_match] + 1
                };
            } else {
                acc[match.season] = {
                    ...acc[match.season],
                    [match.player_of_match]: 1
                };
            }
        } else {
            acc[match.season] = {
                ...acc[match.season],
                [match.player_of_match]: 1
            };
        }

        return acc
    }, {});

    let obj = {}
    for (const [year, players] of Object.entries(result)) {
        let maxPlayer = ''
        let maxawards = 0
        for (const [player, awards] of Object.entries(players)) {
            if (awards > maxawards)
                maxPlayer = player
        }
        obj[year] = maxPlayer
    }
    return obj
}
player_of_the_match_per_season()