//Create symlink that points npm-named directory to actual MATLAB package
fs = require('fs');
fs.symlinkSync('+MatPack','../MatPack')
