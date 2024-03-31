const express = require("express");
const router = express.Router();

const BASE_URL_OPEN5E = 'api.open5e.com';

router.post('/', (req,res) => {
    axios
        .get(
            `https://${BASE_URL_OPEN5E}/v1/races`
        )
        .then((racesResponse) => {
            console.log('RACE SUCCESS', racesResponse.data);
            const simpleResults = racesResponse.data.map((raceData) => {
                return {
                    name: raceData.name,
                    desc: raceData.desc,
                    asi_desc: raceData.asi_desc,
                    asi: raceData.asi,
                    size_raw: raceData.size_raw,
                    speed: raceData.speed,
                    languages: raceData.languages,
                    vision: raceData.vision,
                    traits: raceData.traits

                };
            });
            res.send(simpleResults);
        })
        .catch((error) => {
            console.log('error:', error);
            res.sendStatus(500);
        });
});

module.exports = router;