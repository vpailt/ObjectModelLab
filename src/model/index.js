// import * as model from './model';

export class Data {
    constructor(){
        this.tab = [];
    };
}
export class TimeSeries extends Data {
    constructor(values, labels) {
        super();
        this.tab.push(values);
        this.tab.push(labels);
    }
    get values() {
        return this.tab[0] || 0;
    }
    set values(val) {
        this.tab[0] = val;
    }
    set labels(val) {
        this.tab[1] = val;
    }
    get labels() {
        return this.tab[1] || 0;
    }
    toString() {
        return (`([${this.values}],[${this.labels}])`);
    }
}
export class Datum extends Data {
    constructor(value) {
        super();
        this.tab.push(value);
    }
    get value() {
        return this.tab[0] || 0;
    }
    set value(val) {
        this.tab[0] = val;
    }
    toString() {
        return (`(${this.value})`);
    }
}
class Sensor {
    constructor(id,name,data) {
        this.tab = [];
        this.tab.push(id);
        this.tab.push(name);
        this.tab.push(data)
    }
    get id() {
        return this.tab[0] || 0;
    }
    set id(val) {
        this.tab[0] = val;
    }
    get name() {
    return this.tab[1] || '';
}
    set name(val) {
        this.tab[1] = val;
    }
    get data() {
        return this.tab[2] || {};
    }
    set data(val) {
        this.tab[2] = val;
    }
    toString() {
        return (`(${this.id},${this.name},${this.data})`);
    }
}
export class Temperature extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
class Humidity extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
class Light extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
class Switch extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
export class Door extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
export class Fan_speed extends Sensor {
    constructor(id,name,data) {
        super(id,name,data);
    }
}
export var SensorType = Object.freeze({
    TEMPERATURE: 1,
    HUMIDITY: 2,
    LIGHT: 3,
    SWITCH : 4,
    DOOR : 5,
    FAN_SPEED : 6
})

const dat = new Datum(1);
let val = [23,23,22,21,23,23,23,25,25];
let lab = ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z",
            "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z",
            "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.000Z"];
let lab2=["2016-10-19T10:00:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z",
            "2016-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z","2016-10-19T10:25:00.000Z"]

const testTimeSeries = new TimeSeries(val,lab)
console.log(SensorType.HUMIDITY);
console.log(dat.value);
dat.value=3;
console.log('ok', dat.toString());

console.log('TimeSeries');
console.log(testTimeSeries.values);
console.log(testTimeSeries.labels[1]);
testTimeSeries.values=[23,23,22];
testTimeSeries.labels=lab2;
console.log('ok', testTimeSeries.toString());