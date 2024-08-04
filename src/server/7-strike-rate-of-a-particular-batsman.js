import { matches_summary } from "./matches.js";
import { deliveries_summary } from "./deliveries.js";

export const strike_rate_per_season = async (player_name) => {
    const deliveries = await deliveries_summary()
    const summary = await matches_summary()

    const count = summary.reduce((acc, match) => {
        if (acc[match.season]) {
            acc[match.season].push(match.id)

        }
        else {
            acc[match.season] = [match.id]
        }
        return acc
    }, {})
    // console.log(count)

    const batsman_deliveries = deliveries.filter(delivery => delivery.batsman === player_name && delivery.wide_runs === '0')
    // console.log(batsman_deliveries)
    for (const [year, _id] of Object.entries(count)) {
        let batsman_run = 0
        let balls_played = 0
        for (let _delivery of batsman_deliveries) {
            let _delivery_total_runs = parseInt(_delivery.total_runs) || 0

            if (_id.includes(_delivery.match_id)) {

                batsman_run += _delivery_total_runs
                balls_played++

            }
        }
        let strike_rate = (batsman_run / balls_played) * 100
        strike_rate = strike_rate.toFixed(2)
        console.log(`${year} : ${strike_rate}`)
    }
}

strike_rate_per_season('S Dhawan')