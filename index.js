//::Trying ytdl-core npm module::
'use strict';

const 
express = require('express'),
cors = require('cors'),
ytdl = require('ytdl-core'),
hbs = require('hbs'),
app = express();

let port = process.env.PORT || 8080;

hbs.registerPartials('__dirname' + '/src/views');
app.set('view engine', 'hbs');

//Middleware
app.use(cors());
app.use(express.static(__dirname + '/src'));

app.use((req, res) => {
 res.status(404).render('ERROR 404');
});

//Routing 
app.get('/download', (req,res) => {
    let URL = req.query.URL;

    res.header('Content-Disposition', 
    'attachment;filename="video.mp4"');

    ytdl(URL, {
        format: '.mp4'
    }).pipe(res);
});

app.get('/', (req, res) => {
   res.render('index');
});

app.listen(port, () => console.log(`Server runing at port: ${port}`));

