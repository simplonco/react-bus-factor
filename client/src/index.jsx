/**
* @desc react root component
* @import react
* @import react dom
* @import materialize css
* @import app
* @render app
*/

// @import vendor js
import {render} from 'react-dom';

// @import vendor css
import 'materialize-css/bin/materialize.css';

// @import app
import App from './app/App.jsx';

// @render app
render(<App/>, document.getElementById('app'));