var assert = require('assert');
var path = require('path');
var empty = require(process.env.STACKLINE_TEST_PACKAGE || path.resolve(__dirname, '..'));
[[undefined,true],[null,true],[0,true],[1,false],['',true],[' ',false],['Error',false],[false,false],[true,false],[[],true],[[0],false],[{},true],[{length:0},false],[new Map(),true],[new Map([['a',1]]),false],[new Set(),true],[new Set([0]),false],[new Error(),true],[new Error('x'),false],[new Date('invalid'),false],[new Date(),false],[function(){},true],[function(a){},false],[Object.create(null),false]].forEach(function(c){assert.strictEqual(empty(c[0]),c[1]);});
assert.strictEqual(empty(Object.create({inherited: true})), true);
console.log('25 value/collection/prototype/legacy emptiness contracts passed.');
