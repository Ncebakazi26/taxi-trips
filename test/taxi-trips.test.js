let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxiapp';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{ count: '5' }], await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([{ "region_name": "Durban"},{"region_name": "Cape Town"}, {"region_name": "Gauteng" }],await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        // assert.deepStrictEqual([{"regnum": "CF 123 546"}], await taxiTrips.findTaxiForRegions('Durban'));
        assert.deepEqual([{"regnum": "CA 245 326"}], await taxiTrips.findTaxiForRegions('Cape Town'));
        // assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepEqual([{"routes_id":"6","trip_id":"2"}], await taxiTrips.findTripsByRegNumber('CA 123 546'));
        // assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('***'));

    });

    // it('should find the total number of trips by region', async function () {

    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    // });

    // it('find the total income for a given reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    // });

    // it('find the total income for each taxi', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    // });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepEqual([{sum:"193.00"}],await taxiTrips.findTotalIncome());
    });

    // it('find the total income by region', async function () {
    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    // });


    after(function () {
        pool.end();
    });

});