const { Buffer } = require('node:buffer');


//const buf = Buffer.from('Hello xterm');
//console.log(buf);//buffer
//console.log(buf.toString());//converted to string

//const bufTwo = Buffer.allocUnsafe(10)// sensitive data
//console.log(bufTwo);
//const buf = Buffer.alloc(10)
//buf.write('Hello')
//console.log(buf.toJSON())
//console.log(buf.toString())
//const buf = Buffer.from('ded')
//console.log(buf.toString());
//console.log(buf.toString('utf-8',0, 4))
//const buf = Buffer.from("kaizokuu")
//buf[0] = 0x4A
//console.log(buf)

const buf1 = Buffer.from("Xterm")
const buf2 = Buffer.from(" coder")
const merged = Buffer.concat([buf1, buf2])
console.log(merged.toString());
console.log(merged.length);