"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _uuid = require("uuid");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var users = [{
  email: 'fiacre@SpeechGrammarList.com',
  password: '123456',
  role: 'admin'
}, {
  email: 'console@dm.com',
  password: '123456',
  role: 'user'
}, {
  email: 'celine@cr.com',
  password: '123456',
  role: 'user'
}, {
  email: 'cynthia@mk.com',
  password: '123456',
  role: 'user'
}, {
  email: 'paul@mtr.com',
  password: '123456',
  role: 'user'
}];
users = users.map(function (user) {
  return _objectSpread({
    id: (0, _uuid.v4)()
  }, user);
});
var _default = users;
exports["default"] = _default;
//# sourceMappingURL=users.js.map