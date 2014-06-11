/**
 * Created by Kmilo on 10/4/13.
 */
var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');

module.exports = {
    root: rootPath,
    port: process.env.PORT || 3001
}
