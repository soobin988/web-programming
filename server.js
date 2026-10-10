const express = require('express');
const path = require('path');
const app = express();

//ejs설정
app.set('view engine', 'ejs');
app.use(express.static('public'));


//메인페이지
app.get('/', (req, res) => {
    res.render('index', {
        name: '이수빈',
        hobby: '그림 그리기',
        mail: 'mio11125@naver.com',
        favorite: '먼작귀',
        id: '202445055',
        major: '정보통신공학과'
    });
});

//동적라우팅
app.get('/page/:id', (req, res) => {
     const id = req.params.id;
     res.send('사용자 id ' + id);
});


//없는페이지
    app.use( (req, res) => {
    res.status(404);
    res.set('methodA', 'ABCDE');
    res.send('존재하지 않는 페이지입니다.');
});

//서버실행
app.listen(3000, () => {
    console.log('http://localhost:3000');
});