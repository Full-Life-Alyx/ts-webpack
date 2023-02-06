const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');
console.log("Dev config")
module.exports = merge(common, { 
    mode: "production",
})