import { matches_summary } from "./matches.js";

export const won_matches = async () => {
    // const years = await num_of_matches_played_every_year()
    const summary = await matches_summary();

    const result = summary.reduce((acc, match) => {
        if (acc[match.season]) {
            if (acc[match.season][match.winner]) {
                acc[match.season] = {
                    ...acc[match.season],
                    [match.winner]: acc[match.season][match.winner] + 1
                };
            } else {
                acc[match.season] = {
                    ...acc[match.season],
                    [match.winner]: 1
                };
            }
        } else {
            acc[match.season] = {
                ...acc[match.season],
                [match.winner]: 1
            };
        }

        return acc
    }, {});

    return result

}
won_matches();