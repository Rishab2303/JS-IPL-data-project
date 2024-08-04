import { num_of_matches_played_every_year } from "./1-matches-per-year.js"
import { won_matches } from "./2-matches-won-per-team-per-year.js"
import { extra_runs } from "./3-Extra_runs-conceded-per-team-in-2016.js"
import { Economic_bowler } from "./4-Top-10-Economical-Bowler.js"
import { won_toss_won_match } from "./5-won-toss-won-match.js"
import { player_of_the_match_per_season } from "./6-most-player-of-the-match-per-season.js"
import fs from 'fs'

const getRawdata = async () => {
    const [...problem] = await Promise.all([

        num_of_matches_played_every_year(),
        won_matches(),
        extra_runs(),
        Economic_bowler(),
        won_toss_won_match(),
        player_of_the_match_per_season(),




    ])
    return [...problem]

}

const convertToJson = async () => {
    const rawdata = await getRawdata()
    const jsonstring = JSON.stringify(rawdata)
    return jsonstring

}
const saveJsonFile = async () => {
    const jsonString = await convertToJson();
    fs.writeFileSync('getRawdata.json', jsonString);
    console.log('JSON file has been saved.');
};

saveJsonFile();