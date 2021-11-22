module.exports = function TaxiTrips(pool) {

async function totalTripCount(){
    const sql = await pool.query(`select count(*) from trip`)
    return sql.rows
}
async function findAllRegions (){
    const sql = await pool.query(`select region_name  from region`)
    return sql.rows

}   
async function findTaxiForRegions (name){
    const sql = await pool.query(`select regNum from taxi join region on taxi_id = taxi.region_id where region_name = $1`,[name])
    return sql.rows

}
async function findTripsByRegNumber (reg,id){
    const sql = await pool.query(`select * from trip join taxi on trip.taxi_id = trip.trip_id where taxi.regNum = $1 and taxi.taxi_id = $2  `,[reg,id])
    return sql.rows

}
async function findTripsByRegions (){
    const sql = await pool.query(`select count(*) from taxi join `)
    return sql.rows

}
async function findIncomeByRegNumber(){

}
async function findTotalIncomePerTaxi(){

}
async function findTotalIncome(){
    const sql = await pool.query(`select sum(fare) from routes`)
    return sql.rows

}
async function findTotalIncomeByRegion(){
    const sql = await pool.query(``)
    return sql.rows

}
return{
    totalTripCount,
    findAllRegions,
    findTaxiForRegions,
    findTripsByRegNumber,
    findTripsByRegions,
    findIncomeByRegNumber,
    findTotalIncomePerTaxi,
    findTotalIncome,
    findTotalIncomeByRegion

    }
	
}