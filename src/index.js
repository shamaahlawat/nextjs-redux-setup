import express from 'express';
import renderer from './helpers/renderer'
import createStore from './helpers/createStore'
import 'babel-polyfill';

const app = express();

app.use(express.static('public'));
app.get('*',(req,res) => {
    const store = createStore();

    //some logic to initilize and load data into the store

    res.send(renderer(req));
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})