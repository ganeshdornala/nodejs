const cp=require('child_process');
cp.execSync('calc');
cp.execSync('start chrome https://www.youtube.com/watch?v=ttmecaJuh1o');
cp.execSync('output '+cp.execSync('node demo.js'));