const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
//const cors = require('cors');

//app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/100/100/1',
            'name': '정인선',
            'birthday': '930601',
            'gender': '여자',
            'job': '트레이더'
          },
          {
            'id': 2,
            'image': 'https://placeimg.com/100/100/2',
            'name': '홍길동',
            'birthday': '620406',
            'gender': '남자',
            'job': 'CEO'
          },
          {
            'id': 3,
            'image': 'https://placeimg.com/100/100/3',
            'name': '홍길순',
            'birthday': '880601',
            'gender': '여자',
            'job': '프로그래머'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

