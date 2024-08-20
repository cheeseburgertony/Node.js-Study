const { exec } = require('node:child_process');

// exec('pngquant test.png --output test-out.png')

// --quality 取值0-100，数值越大，图片质量越高，体积大  数值越小，图片质量越低，体积小
// exec('pngquant test.png --quality=80 --output test-out-quality.png')

// --speed 取值1-10，数值越大，压缩速度越快，质量低  数值越小，压缩速度越慢，质量高
exec('pngquant test.png --speed=1 --quality=80 --output test-out-speed.png')