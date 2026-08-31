const express = require ('express');
const app = express();
const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Selamat Datang di JelajahPo API!')
});

app.listen(PORT, () => {
    console.log(`Sever JelajahPo jalan di http://localhost:${PORT}`);
});