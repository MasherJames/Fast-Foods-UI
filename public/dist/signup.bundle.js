/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/signup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/signup.js":
/*!***********************!*\
  !*** ./src/signup.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var signUp = document.querySelector("#signup_form");

signUp.addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.querySelector("#username").value;
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  fetch("https://foods-fasty.herokuapp.com/api/v1/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    if (data["message"] === "Invalid username") {
      document.querySelector(".output").innerHTML = "Username should have a min of 6, max of 20 and be alphanumeric";
      document.querySelector(".output").style.color = "red";
    }
    if (data["message"] === "Invalid email, enter a valid email") {
      document.querySelector(".output").innerHTML = "Enter a valid email";
      document.querySelector(".output").style.color = "red";
    }
    if (data["message"] === "Enter a valid password") {
      document.querySelector(".output").innerHTML = "Password should have a min of 8, max of 15 chars, atleast one lowercase, uppercase and number";
      document.querySelector(".output").style.color = "red";
    }
    if (data["message"] === "User with username " + username + " already exists") {
      document.querySelector(".output").innerHTML = "User with username " + username + " already exists";
      document.querySelector(".output").style.color = "red";
    }
    if (data["message"] === "User with email " + email + " already exists") {
      document.querySelector(".output").innerHTML = "User with email " + email + " already exists";
      document.querySelector(".output").style.color = "red";
    }
    if (data["message"] === "Account for " + username + " has been created successfully") {
      document.querySelector(".output").innerHTML = "Account for " + username + " has been created successfully";
      document.querySelector(".output").style.color = "green";
      window.location.assign("login.html");
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NpZ251cC5qcyJdLCJuYW1lcyI6WyJzaWduVXAiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlcm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImlubmVySFRNTCIsInN0eWxlIiwiY29sb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBYjs7QUFFQUYsT0FBT0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsYUFBSztBQUNyQ0MsSUFBRUMsY0FBRjs7QUFFQSxNQUFJQyxXQUFXTCxTQUFTQyxhQUFULENBQXVCLFdBQXZCLEVBQW9DSyxLQUFuRDtBQUNBLE1BQUlDLFFBQVFQLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsRUFBaUNLLEtBQTdDO0FBQ0EsTUFBSUUsV0FBV1IsU0FBU0MsYUFBVCxDQUF1QixXQUF2QixFQUFvQ0ssS0FBbkQ7O0FBRUFHLFFBQU0sc0RBQU4sRUFBOEQ7QUFDNURDLFlBQVEsTUFEb0Q7QUFFNURDLGFBQVM7QUFDUCxzQkFBZ0I7QUFEVCxLQUZtRDtBQUs1REMsVUFBTUMsS0FBS0MsU0FBTCxDQUFlO0FBQ25CVCxnQkFBVUEsUUFEUztBQUVuQkUsYUFBT0EsS0FGWTtBQUduQkMsZ0JBQVVBO0FBSFMsS0FBZjtBQUxzRCxHQUE5RCxFQVdHTyxJQVhILENBV1E7QUFBQSxXQUFPQyxJQUFJQyxJQUFKLEVBQVA7QUFBQSxHQVhSLEVBWUdGLElBWkgsQ0FZUSxnQkFBUTtBQUNaLFFBQUlHLEtBQUssU0FBTCxNQUFvQixrQkFBeEIsRUFBNEM7QUFDMUNsQixlQUFTQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDa0IsU0FBbEMsR0FDRSxnRUFERjtBQUVBbkIsZUFBU0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ21CLEtBQWxDLENBQXdDQyxLQUF4QyxHQUFnRCxLQUFoRDtBQUNEO0FBQ0QsUUFBSUgsS0FBSyxTQUFMLE1BQW9CLG9DQUF4QixFQUE4RDtBQUM1RGxCLGVBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NrQixTQUFsQyxHQUE4QyxxQkFBOUM7QUFDQW5CLGVBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsRUFBa0NtQixLQUFsQyxDQUF3Q0MsS0FBeEMsR0FBZ0QsS0FBaEQ7QUFDRDtBQUNELFFBQUlILEtBQUssU0FBTCxNQUFvQix3QkFBeEIsRUFBa0Q7QUFDaERsQixlQUFTQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDa0IsU0FBbEMsR0FDRSwrRkFERjtBQUVBbkIsZUFBU0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ21CLEtBQWxDLENBQXdDQyxLQUF4QyxHQUFnRCxLQUFoRDtBQUNEO0FBQ0QsUUFBSUgsS0FBSyxTQUFMLDhCQUEwQ2IsUUFBMUMsb0JBQUosRUFBeUU7QUFDdkVMLGVBQVNDLGFBQVQsQ0FDRSxTQURGLEVBRUVrQixTQUZGLDJCQUVvQ2QsUUFGcEM7QUFHQUwsZUFBU0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ21CLEtBQWxDLENBQXdDQyxLQUF4QyxHQUFnRCxLQUFoRDtBQUNEO0FBQ0QsUUFBSUgsS0FBSyxTQUFMLDJCQUF1Q1gsS0FBdkMsb0JBQUosRUFBbUU7QUFDakVQLGVBQVNDLGFBQVQsQ0FDRSxTQURGLEVBRUVrQixTQUZGLHdCQUVpQ1osS0FGakM7QUFHQVAsZUFBU0MsYUFBVCxDQUF1QixTQUF2QixFQUFrQ21CLEtBQWxDLENBQXdDQyxLQUF4QyxHQUFnRCxLQUFoRDtBQUNEO0FBQ0QsUUFDRUgsS0FBSyxTQUFMLHVCQUNlYixRQURmLG1DQURGLEVBR0U7QUFDQUwsZUFBU0MsYUFBVCxDQUNFLFNBREYsRUFFRWtCLFNBRkYsb0JBRTZCZCxRQUY3QjtBQUdBTCxlQUFTQyxhQUFULENBQXVCLFNBQXZCLEVBQWtDbUIsS0FBbEMsQ0FBd0NDLEtBQXhDLEdBQWdELE9BQWhEO0FBQ0FDLGFBQU9DLFFBQVAsQ0FBZ0JDLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0Q7QUFDRixHQWpESDtBQWtERCxDQXpERCxFIiwiZmlsZSI6InNpZ251cC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9zaWdudXAuanNcIik7XG4iLCJsZXQgc2lnblVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaWdudXBfZm9ybVwiKTtcblxuc2lnblVwLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBsZXQgdXNlcm5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJuYW1lXCIpLnZhbHVlO1xuICBsZXQgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VtYWlsXCIpLnZhbHVlO1xuICBsZXQgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bhc3N3b3JkXCIpLnZhbHVlO1xuXG4gIGZldGNoKFwiaHR0cHM6Ly9mb29kcy1mYXN0eS5oZXJva3VhcHAuY29tL2FwaS92MS9hdXRoL3NpZ251cFwiLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgfSlcbiAgfSlcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhW1wibWVzc2FnZVwiXSA9PT0gXCJJbnZhbGlkIHVzZXJuYW1lXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIlVzZXJuYW1lIHNob3VsZCBoYXZlIGEgbWluIG9mIDYsIG1heCBvZiAyMCBhbmQgYmUgYWxwaGFudW1lcmljXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhW1wibWVzc2FnZVwiXSA9PT0gXCJJbnZhbGlkIGVtYWlsLCBlbnRlciBhIHZhbGlkIGVtYWlsXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuaW5uZXJIVE1MID0gXCJFbnRlciBhIHZhbGlkIGVtYWlsXCI7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChkYXRhW1wibWVzc2FnZVwiXSA9PT0gXCJFbnRlciBhIHZhbGlkIHBhc3N3b3JkXCIpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuaW5uZXJIVE1MID1cbiAgICAgICAgICBcIlBhc3N3b3JkIHNob3VsZCBoYXZlIGEgbWluIG9mIDgsIG1heCBvZiAxNSBjaGFycywgYXRsZWFzdCBvbmUgbG93ZXJjYXNlLCB1cHBlcmNhc2UgYW5kIG51bWJlclwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm91dHB1dFwiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gICAgICB9XG4gICAgICBpZiAoZGF0YVtcIm1lc3NhZ2VcIl0gPT09IGBVc2VyIHdpdGggdXNlcm5hbWUgJHt1c2VybmFtZX0gYWxyZWFkeSBleGlzdHNgKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIub3V0cHV0XCJcbiAgICAgICAgKS5pbm5lckhUTUwgPSBgVXNlciB3aXRoIHVzZXJuYW1lICR7dXNlcm5hbWV9IGFscmVhZHkgZXhpc3RzYDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICAgICAgfVxuICAgICAgaWYgKGRhdGFbXCJtZXNzYWdlXCJdID09PSBgVXNlciB3aXRoIGVtYWlsICR7ZW1haWx9IGFscmVhZHkgZXhpc3RzYCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLm91dHB1dFwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gYFVzZXIgd2l0aCBlbWFpbCAke2VtYWlsfSBhbHJlYWR5IGV4aXN0c2A7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgZGF0YVtcIm1lc3NhZ2VcIl0gPT09XG4gICAgICAgIGBBY2NvdW50IGZvciAke3VzZXJuYW1lfSBoYXMgYmVlbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseWBcbiAgICAgICkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwiLm91dHB1dFwiXG4gICAgICAgICkuaW5uZXJIVE1MID0gYEFjY291bnQgZm9yICR7dXNlcm5hbWV9IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5YDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdXRwdXRcIikuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24oXCJsb2dpbi5odG1sXCIpO1xuICAgICAgfVxuICAgIH0pO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9