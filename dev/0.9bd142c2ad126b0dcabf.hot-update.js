webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _class;

	var _react = __webpack_require__(178);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(95);

	var _lib = __webpack_require__(80);

	var _lib2 = _interopRequireDefault(_lib);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_Component) {
		_inherits(List, _Component);

		function List(props, context) {
			_classCallCheck(this, List);

			var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

			_this.state = {
				heroes: [{
					id: 1,
					name: "Earthshaker"
				}, {
					id: 2,
					name: "Sven"
				}, {
					id: 3,
					name: "Tiny"
				}, {
					id: 4,
					name: "Kunkka"
				}]
			};

			_this.heros = [{
				id: 1,
				name: "Earthshaker"
			}, {
				id: 2,
				name: "Sven"
			}, {
				id: 3,
				name: "Tiny"
			}, {
				id: 4,
				name: "Kunkka"
			}, {
				id: 5,
				name: "BeastMaster"
			}, {
				id: 6,
				name: "Dragon Knight"
			}];
			return _this;
		}

		List.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
			return true;
		};

		List.prototype.componentDidMount = function componentDidMount() {
			var _this2 = this;

			setTimeout(function () {
				var heroes = _this2.heros;
				_this2.setState({
					heroes: heroes
				});
			}, 3000);
		};

		List.prototype.render = function render() {

			console.log(this.state.heroes);
			return _react2.default.createElement(
				'ul',
				null,
				this.state.heroes.map(function (item) {
					return _react2.default.createElement(
						'li',
						{ key: item.id },
						item.name
					);
				})
			);
		};

		return List;
	}(_react.Component);

	var Wrapper = (0, _lib2.default)(_class = function (_Component2) {
		_inherits(Wrapper, _Component2);

		function Wrapper(props, context) {
			_classCallCheck(this, Wrapper);

			var _this3 = _possibleConstructorReturn(this, _Component2.call(this, props, context));

			_this3.state = {};
			return _this3;
		}

		Wrapper.prototype.componentDidMount = function componentDidMount() {};

		Wrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
			return false;
		};

		Wrapper.prototype.render = function render() {

			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(List, null)
			);
		};

		return Wrapper;
	}(_react.Component)) || _class;

	(0, _reactDom.render)(_react2.default.createElement(Wrapper, null), document.getElementById('root'));

/***/ }
])