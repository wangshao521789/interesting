import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import 'element-theme-default';
import store from './redux/store/store';
import { Provider} from 'react-redux';

ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, document.getElementById('root'))