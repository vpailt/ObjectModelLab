import expect from 'expect';

import * as model from '../../src/model';
import  { data }  from './sensors_data'

describe('Sensor model tests', () => {
    describe('Sensor type', () => {


        it('Sensor should be Temperature', () => {
            let sensorTemp = model.TypeSensor(data[0]);
            expect((sensorTemp instanceof model.Temperature)).toBe(true);
        });

        it('should not be Door', () => {
            let sensorTemp = model.TypeSensor(data[0]);
            expect((sensorTemp instanceof model.Door)).toBe(false);
        });
        it('should not be Fan_speed', () => {
            let sensorTemp = model.TypeSensor(data[0]);
            expect((sensorTemp instanceof model.Fan_speed)).toBe(false);
        });
        it('should be Door', () => {
            let sensorTemp = model.TypeSensor(data[1]);
            expect((sensorTemp instanceof model.Door)).toBe(true);
        });

        it('should not be Temperature', () => {
            let sensorTemp = model.TypeSensor(data[1]);
            expect((sensorTemp instanceof model.Temperature)).toBe(false);
        });
        it('should not be Fan_speed', () => {
            let sensorTemp = model.TypeSensor(data[1]);
            expect((sensorTemp instanceof model.Fan_speed)).toBe(false);
        });
        it('should be Fan_speed', () => {
            let sensorTemp = model.TypeSensor(data[2]);
            expect((sensorTemp instanceof model.Fan_speed)).toBe(true);
        });

        it('should not be Temperature', () => {
            let sensorTemp = model.TypeSensor(data[2]);
            expect((sensorTemp instanceof model.Temperature)).toBe(false);
        });
        it('should not be Door', () => {
            let sensorTemp = model.TypeSensor(data[2]);
            expect((sensorTemp instanceof model.Door)).toBe(false);
        });

    });
    describe('Data type', () => {
        it('should be TimeSeries', () => {
            let sensorTemp = model.TypeSensor(data[0]);
            expect((sensorTemp.data instanceof model.TimeSeries)).toBe(true);
        });
        it('should not be Datum', () => {
            let sensorTemp = model.TypeSensor(data[0]);
            expect((sensorTemp.data instanceof model.Datum)).toBe(false);
        });
        it('should be Datum', () => {
            let sensorTemp = model.TypeSensor(data[1]);
            expect((sensorTemp.data instanceof model.Datum)).toBe(true);
        });
        it('should not be TimeSeries', () => {
            let sensorTemp = model.TypeSensor(data[1]);
            expect((sensorTemp.data instanceof model.TimeSeries)).toBe(false);
        });
        it('should be TimeSeries', () => {
            let sensorTemp = model.TypeSensor(data[2]);
            expect((sensorTemp.data instanceof model.TimeSeries)).toBe(true);
        });
        it('should not be Datum', () => {
            let sensorTemp = model.TypeSensor(data[2]);
            expect((sensorTemp.data instanceof model.Datum)).toBe(false);
        });
    });
    describe('Tests parameters', () => {
        describe('Sensor :', () => {
            it('Id should be Integer', () => {
                expect(() => {
                    new model.Sensor({"id": "test", "name": "test", "data": {"value": 1}})
                }).toThrow("Id should be integer");
            });
            it('Name should be String', () => {
                expect(() => {
                    new model.Sensor({"id": 13, "name": 35, "data": {"value": 1}})
                }).toThrow("Name should be string");
            });
        });
        describe('Datum :', () => {
            it('Value should be Integer', () => {
                let val = 'test';
                expect( () => {new model.Datum(val)} ).toThrow("Value should be integer");
            });
        });

        describe('TimeSeries :', () => {
            let val = [23,23,22,21,23,23,23,25,25];
            let val2 = 15;
            let val3 = ['t',23,22,21,23,23,23,25,25];
            let val4 = [23,22,21,23,23,23,25,25];

            let lab = ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z",
                "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z",
                "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.000Z"];
            let lab2 = "test";

            let lab3 = [13, "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z",
                "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z", "2016-10-19T13:00:00.000Z",
                "2016-10-19T14:00:00.000Z", "2016-10-19T15:00:00.000Z", "2016-10-19T16:00:00.000Z"];

            it('Values should be an array', () => {
                expect( () => {new model.TimeSeries(val2,lab)} ).toThrow("values should be an array");
            });
            it('Values should be an array of Integer', () => {
                expect( () => {new model.TimeSeries(val3,lab)} ).toThrow("Values should be integers");
            });
            it('Labels should be an array', () => {
                expect( () => {new model.TimeSeries(val,lab2)} ).toThrow("labels should be an array");
            });
            it('Labels should be an array of String', () => {
                expect( () => {new model.TimeSeries(val,lab3)} ).toThrow("Labels should be strings");
            });
            it('Labels and Values should have the same size', () => {
                expect( () => {new model.TimeSeries(val4,lab)} ).toThrow("values and labels arrays must have the same length");
            });
        });
    });
});
