// import * as model from './model';

class Point {
  constructor(x, y) {
    this.data = [];
    this.data.push(x);
    this.data.push(y);
  }
  get x() {
    return this.data[0] || 0;
  }
  set x(val) {
    this.data[0] = val;
  }
  set y(val) {
    this.data[1] = val;
  }
  get y() {
    return this.data[1] || 0;
  }
}
class Point3D extends Point {
  constructor(x, y, z) {
    super(x, y);
    this.data[2] = z;
  }
  get z() {
    return this.data[2] || 0;
  }
  set z(val) {
    this.data[2] = val;
  }
  toString() {
    return (`(${this.x}, ${this.y}, ${this.z})`);
  }
}

const d3 = new Point3D(1, 2, 3);

const toto = ['un', 'deux', 'trois'];
const [un, deux, trois] = toto;
console.log(un, deux, trois);
const arr = [...toto, 'quatre'];
console.log(arr);

console.log('ok', d3.toString());

console.log('Hello World!');
