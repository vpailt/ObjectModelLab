import expect from 'expect';

// import { ??? } from '../../src/model';

import * as model from '../../src/model';
import  { data }  from './sensors_data'
console.log('lenght ',data.length);
console.log(data[0].id, ' TimeSeries');
let dataArray =[];
let SensorArray = [];
//console.log('TEST enum ',model.SensorType.test)

for(let i =0;i<data.length;i++) {
    if(data[i].data.value===undefined)
        dataArray.push(new model.TimeSeries(data[i].data.values,data[i].data.labels));
    else
        dataArray.push(new model.Datum(data[i].data.value));
    if(data[i].type=='TEMPERATURE')
        SensorArray.push(new model.Temperature(data[i].id,data[i].name,dataArray[i]));
    else if(data[i].type=='DOOR')
        SensorArray.push(new model.Door(data[i].id,data[i].name,dataArray[i]));
    else if(data[i].type=='FAN_SPEED')
        SensorArray.push(new model.Fan_speed(data[i].id,data[i].name,dataArray[i]));
}
let modelTimeSeries =new model.TimeSeries(data[0].data.values,data[0].data.labels);
let modelTemp = new model.Temperature(data[0].id,data[0].name,modelTimeSeries);
console.log('TEST 1 ',data[0].id,modelTemp.id);
console.log('TEST 2 ',data[0].name,modelTemp.name);
console.log('TEST 3 ',data[0].data,modelTemp.data);
console.log('TEST ULTIME' ,SensorArray[0].toString());
console.log('TEST ULTIME' ,(SensorArray[0] instanceof model.Temperature));
var is_same = (SensorArray[0].data.values.length == [ 23, 23, 22, 21, 23, 23, 23, 25, 25 ].length) && SensorArray[0].data.values.every(function(element, index) {
        return element === [ 23, 23, 22, 21, 23, 23, 23, 25, 25 ][index];
    });
console.log("testsetst",is_same);
/*modelTemp.id = data[0].id;
console.log('TEST temp ',data[0].id,modelTemp.id);*/
describe('Sensor model tests', () => {
    describe('Sensor type', () => {
        it('Sensor should be Temperature', () => {
            expect((SensorArray[0] instanceof model.Temperature)).toBe(true);
        });
        it('should not be Door', () => {
            expect((SensorArray[0] instanceof model.Door)).toBe(false);
        });
        it('should be Fan_speed', () => {
            expect((SensorArray[0] instanceof model.Fan_speed)).toBe(false);
        });
        it('should be Door', () => {
            expect((SensorArray[1] instanceof model.Door)).toBe(true);
        });
        it('should not be Temperature', () => {
            expect((SensorArray[1] instanceof model.Temperature)).toBe(false);
        });
        it('should not be Fan_speed', () => {
            expect((SensorArray[1] instanceof model.Fan_speed)).toBe(false);
        });
        it('should be Fan_speed', () => {
            expect((SensorArray[2] instanceof model.Fan_speed)).toBe(true);
        });
        it('should not be Temperature', () => {
            expect((SensorArray[2] instanceof model.Temperature)).toBe(false);
        });
        it('should not be Door', () => {
            expect((SensorArray[2] instanceof model.Door)).toBe(false);
        });

    });
    describe('Sensor get and set', () => {
        it('id should be 1234', () => {
            expect((SensorArray[0].id===1234)).toBe(true);
        });
        it('name should be \"Température Bureau\"', () => {
            expect((SensorArray[0].name==="Température Bureau")).toBe(true);
        });
        var is_same = (SensorArray[0].data.values.length == [ 23, 23, 22, 21, 23, 23, 23, 25, 25 ].length)
            && SensorArray[0].data.values.every(function(element, index) {
                return element === [ 23, 23, 22, 21, 23, 23, 23, 25, 25 ][index];
            });
        it('values should be [23,23,22,21,23,23,23,25,25]', () => {

            expect(is_same).toBe(true);
        });

    });
});
