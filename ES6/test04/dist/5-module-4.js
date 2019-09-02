'use strict';

var _module = require('./3-module.js');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./4-module.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入3，4
//引3模块中的default的导出
//引4模块中的n,a的导出
console.log(_module2.default, _module3.a, _module3.n);