# insulin
- heroku cli
- webpack

webpack.config.js
```
var path = require('path');

module.exports = {
    entry : {
        main: './public/main.js',
        adjust:'./public/adjustModel.js',
        test: './public/test.js',
    },
    output : {
        filename    : '[name].bundle.js',
        path        : path.resolve(__dirname, './public/dist')
    },
    target: 'node',
};
```
- node

- ルートディレクトリにindex.js
- サブディレクトリとしてこのリポジトリを置く
