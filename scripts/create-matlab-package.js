//Create symlink that points npm-named directory to actual MATLAB package
fs = require('fs-extra');
fs.copySync('../MatPack', '../+MatPack', {clobber: true});
