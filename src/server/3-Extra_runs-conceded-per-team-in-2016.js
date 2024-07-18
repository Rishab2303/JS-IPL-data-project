import { matches_summary } from "./matches.js";
import { deliveries_summary } from "./deliveries.js";

const matchesPlayedInYear = (summary, year) => {
    const matches = {}
    summary.forEach((match) => {

        if (match.season === year) {
            matches[match["id"]] = 1
        }

    });
    return matches
}

const extra_runs = async () => {
    const summary = await matches_summary()
    const deliveries_ = await deliveries_summary()

    const matches2016 = matchesPlayedInYear(summary, '2016')

    return deliveries_.reduce((acc, curr) => {
        if (matches2016[curr.match_id]) {
            let extra_run = Number.parseInt(curr.extra_runs)
            if (isNaN(extra_run)) {
                extra_run = 0
            }
            if (acc[curr.batting_team]) {

                acc[curr.batting_team] += extra_run

            }
            else {
                acc[curr.batting_team] = extra_run
            }

        }
        return acc
    }, {})
}
extra_runs().then(data => {
    console.log(data)
})
