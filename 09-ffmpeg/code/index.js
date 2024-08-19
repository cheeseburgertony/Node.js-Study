const { execSync } = require('child_process')

// 1.基本格式转换 avi mp4 gif 等
// 2.提取视频中的音频
// 3.裁剪水印
// 4.加水印
// 5.删除水印

// 1.基本格式转换 avi mp4 gif 等
// 加上{ stdio: 'inherit' }可以显示执行过程中的参数
// execSync('ffmpeg -i test.mp4 test.gif', { stdio: 'inherit' })
// execSync('ffmpeg -i test.mp4 test.avi', { stdio: 'inherit' })

// 2.提取视频中的音频
// execSync('ffmpeg -i test.mp4 test.mp3', { stdio: 'inherit' })

// 3.裁剪水印 (这里是从原视频的第10秒到原视频的第20秒)
// execSync('ffmpeg -ss 10 -to 20 -i test.mp4 test2.mp4', { stdio: 'inherit' })

// 4.加水印
// execSync('ffmpeg -i test.mp4 -vf drawtext=text="TONY":fontsize=30:x=10:y=10:fontcolor=white test3.mp4', { stdio: 'inherit' })

// 5.删除水印
execSync('ffmpeg -i test3.mp4 -vf delogo=w=120:h=30:x=10:y=10 test4.mp4', { stdio: 'inherit' })