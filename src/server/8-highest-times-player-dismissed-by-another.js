import { deliveries_summary } from "./deliveries.js";

const dismiss = async (dissmised_player, dismissed_by) => {
    const deliveries = await deliveries_summary()

    const result = deliveries.reduce((i, delivery) => {
        if (delivery.bowler === dismissed_by && delivery.player_dismissed === dissmised_player) { return i }
        return i

    }, 0);

    console.log(`${dismissed_by} dismissed ${dissmised_player} max ${result} no of times in all seasons.`)
}


dismiss('MS Dhoni', 'YS Chahal')