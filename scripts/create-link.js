//Create symlink that points npm-named directory to actual MATLAB package
fs = require('fs');
fs.renameSync('../MatPack', '../+MatPack');
fs.symlinkSync('+MatPack','../MatPack');
