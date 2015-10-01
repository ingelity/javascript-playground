/*
function clearModuleCache() {
  for (var module in require.cache) {
    delete require.cache[ module ];
  }
}

var x = require('./es7');
console.log(x);
console.log([1,2,3,4,5].map(item => item*2));
*/

require('./styles.scss');

import React from 'react';
import ReactApp from './reactApp';

React.render(<ReactApp />, document.getElementById('page'));
