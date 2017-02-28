## pure-render-deepCompare-decorator

compare props and state automatically


### Usage

If you don't care the data in `shouldComponentUpdate`, you can just use the decorator way. But you have to install `babel-plugin-transform-decorators-legacy` plugin for compilation.

```
import pureRenderDecorator from "pure-render-deepcompare-decorator";

@pureRender
class List extends Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {

		return (
			<div></div>
		);
	}
}

```

If you need to modify logic in `shouldComponentUpdate`, you can use it like this:

```
import { deepCompare } from "pure-render-deepcompare-decorator";

class List extends Component {
	constructor(props, context) {
		super(props, context);
	}

	shouldComponentUpdate(nextProps, nextState) {

		// some logic

		var shouldUpdate = /* some logic */

		return deepCompare(this, nextProps, nextState) && shouldUpdate;

	}

	render() {

		return (
			<div></div>
		);
	}
}

```
