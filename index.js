const 
express = require('express'),
cors = require('cors'),
ytdl = require('ytdl-core'),
fs = require('fs'),
app = express();

let port = process.env.PORT || 8080;

app.use(cors());
 
app.get('/download', (req,res) => {
    let URL = req.query.URL;

    res.header('Content-Disposition', 
    'attachment;filename="video.mp4"');

    ytdl(URL, {
        format: '.mp4'
    }).pipe(res);
});

app.listen(port, () => console.log(`Server runing at port: ${port}`));

