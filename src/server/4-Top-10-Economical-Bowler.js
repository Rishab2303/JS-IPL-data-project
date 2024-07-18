import { matches_summary } from "./matches.js";
import { deliveries_summary } from "./deliveries.js";

const Economic_bowler = async () => {
    const summary = await matches_summary()
    const deliveries = await deliveries_summary()


    const _2015_matches = summary.filter(match => ["2015"].includes(match.season)).map((match) => match["id"])

    const _2015_balls = deliveries.filter(balls => _2015_matches.includes(balls.match_id))

    // {
    //     bowlerName: {
    //         total_runs,
    //         total_balls
    //     }
    // }

    let bowlers = _2015_balls.reduce((acc, curr) => {
        if (!acc.includes(curr.bowler)) {
            acc.push(curr.bowler)
        }
        return acc
    }, [])
    // console.log(bowlers)

    let _economy = {}
    for (let bowler of bowlers) {

        let runs = 0
        let balls_bowled = 0

        for (let balls of _2015_balls) {
            if (balls.bowler === bowler) {
                let balls_total_runs = parseInt(balls.total_runs) || 0
                runs += balls_total_runs
                balls_bowled++
            }
            let overs_bowled = balls_bowled / 6
            let bowler_economy = runs / overs_bowled
            bowler_economy = parseInt(bowler_economy.toFixed(2))
            _economy[bowler] = bowler_economy
        }

    }
    _economy = Object.entries(_economy)
    let _economy_sort = _economy.sort((a, b) => b[1] - a[1])
    let top_10_economy = _economy_sort.slice(0, 10)

    console.log(top_10_economy)
    // bowlers_economy()

}

Economic_bowler()