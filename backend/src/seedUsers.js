const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('mongodb+srv://Priya11:priya1102@userapp.wvsylrc.mongodb.net/userRanking?retryWrites=true&w=majority&appName=userapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const initialUsers = [
    { name: 'Rahul' },
    { name: 'Kamal' },
    { name: 'Sanak' },
    { name: 'Amit' },
    { name: 'Priya' },
    { name: 'Neha' },
    { name: 'Vikas' },
    { name: 'Anjali' },
    { name: 'Rohit' },
    { name: 'Simran' }
];

async function seed() {
    await User.deleteMany({});
    await User.insertMany(initialUsers);
    console.log('Seeded users!');
    mongoose.disconnect();
}

seed();