require('isomorphic-fetch');
const path = require('path');


// Compile files on PROD or launch DEV server
if (process.env.NODE_ENV === 'production') {
    require(path.resolve('core/webpack.prod.js'));
} else {
    process.env.DEV = true;
    require(path.resolve('core/webpack.dev.js'));
}

ffff