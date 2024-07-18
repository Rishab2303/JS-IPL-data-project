import { deliveries_summary } from "./deliveries.js";

const best_economy_in_super_over = async () => {

    const deliveries = await deliveries_summary()

    let super_over_bowls = deliveries.filter(delivery => delivery.is_super_over === '1')
    let super_over_bowler = super_over_bowls.reduce((acc, curr) => {
        if (!acc.includes(curr.bowler)) {
            acc.push(curr.bowler)
        }
        return acc
    }, [])
    // console.log(super_over_bowler)
    let final_economy = {}
    for (let player of super_over_bowler) {

        let runs = 0
        let balls_bowled = 0

        for (let balls of super_over_bowls) {
            if (balls.bowler === player) {
                let balls_total_runs = parseInt(balls.total_runs) || 0
                runs += balls_total_runs
                balls_bowled++
            }
            let overs_bowled = balls_bowled / 6
            let bowler_economy = runs / overs_bowled
            bowler_economy = parseInt(bowler_economy.toFixed(2))
            final_economy[player] = bowler_economy
        }

    }
    // console.log(final_economy)
    function best_bowler() {
        let minValue = Infinity;
        let minKey = null;


        for (const key in final_economy) {

            if (final_economy[key] < minValue) {
                minValue = final_economy[key];
                minKey = key;
            }

        }

        return minKey;

    }
    console.log(best_bowler())
}

best_economy_in_super_over()