const alias = require('./src/config/importAlias');

module.exports = {
    presets: [require.resolve('@babel/preset-env')],
    plugins: [
        [ require.resolve('babel-plugin-module-resolver'), { alias } ],
    ]
};
