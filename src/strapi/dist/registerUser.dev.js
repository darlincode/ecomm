"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _URL = _interopRequireDefault(require("../utils/URL"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import setupUser from "./setupUser";
function registerUser(_ref) {
  var email, password, username, response;
  return regeneratorRuntime.async(function registerUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = _ref.email, password = _ref.password, username = _ref.username;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post("".concat(_URL["default"], "/auth/local/register"), {
            username: username,
            email: email,
            password: password
          })["catch"](function (error) {
            return console.log(error);
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

var _default = registerUser;
exports["default"] = _default;