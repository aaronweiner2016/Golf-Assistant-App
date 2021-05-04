// get total score at the end of the round
// select SUM(number_of_strokes) "total score" from golfhole where round_of_golf_id = 1;
const scoreQuery = 'SELECT SUM(number_of_strokes) FROM golfhole where ?';
connection.query(scoreQuery, {round_of_golf_id: ????}, (err, res) => {
    if (err) throw err;
    return res.send(scoreQuery)
});


// get total number of putts at the end of the round
// select SUM(number_of_putts) "total putts" from golfhole where round_of_golf_id = 1;
const puttQuery = 'SELECT SUM(number_of_putts) FROM golfhole where ?';
connection.query(puttQuery, {round_of_golf_id: ????}, (err, res) => {
    if (err) throw err;
    return res.send(puttQuery)
});

// get total number of fairways hit in round
// SELECT DISTINCT
// COUNT(DISTINCT IF(fairway_hit = 1,
//     IF(round_of_golf_id = 1,
//         id,
//         NULL),
//     NULL)) AS 'fairway hit'
// FROM
// golfhole;
const fairwayQuery = 'SELECT DISTINCT COUNT(DISTINCT IF(fairway_hit = 1, IF(round_of_golf_id = ????, id, NULL), NULL)) FROM golfhole';
connection.query(fairwayQuery, {round_of_golf_id: activeRound}, (err, res) => {
    if (err) throw err;
    return res.send(fairwayQuery)
});

//get total number of greens hit in round
// SELECT DISTINCT
// COUNT(DISTINCT IF(green_hit = 1,
//         IF(round_of_golf_id = 1,
//             id,
//             NULL),
//         NULL)) AS 'green hit'
// FROM
// golfhole;
const greenQuery = 'SELECT DISTINCT COUNT(DISTINCT IF(green_hit = 1, IF(round_of_golf_id = ????, id, NULL), NULL)) FROM golfhole';
connection.query(greenQuery, {round_of_golf_id: ????}, (err, res) => {
    if (err) throw err;
    return res.send(greenQuery)
});
