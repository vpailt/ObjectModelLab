// import * as model from './model';
class Data {
    constructor(){
        this.data = [];
    };
}
class TimeSeries extends Data {
    constructor(values, labels) {
        super();
        this.data.push(values);
        this.data.push(labels);
    }
    get values() {
        return this.data[0] || 0;
    }
    set values(val) {
        this.data[0] = val;
    }
    set labels(val) {
        this.data[1] = val;
    }
    get labels() {
        return this.data[1] || 0;
    }
    toString() {
        return (`([${this.values}],[${this.labels}])`);
    }
}
class Datum extends Data {
    constructor(value) {
        super();
        this.data.push(value);
    }
    get value() {
        return this.data[0] || 0;
    }
    set value(val) {
        this.data[0] = val;
    }
    toString() {
        return (`(${this.value})`);
    }
}

const dat = new Datum(1);
let val = [23,23,22,21,23,23,23,25,25];
let lab = ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z",
            "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z",
            "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.000Z"];
let lab2=["2016-10-19T10:00:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z",
            "2016-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z","2016-10-19T10:25:00.000Z"]

const testTimeSeries = new TimeSeries(val,lab)

console.log(dat.value);
dat.value=3;
console.log('ok', dat.toString());

console.log('TimeSeries');
console.log(testTimeSeries.values);
console.log(testTimeSeries.labels[1]);
testTimeSeries.values=[23,23,22];
testTimeSeries.labels=lab2;
console.log('ok', testTimeSeries.toString());