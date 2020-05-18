const Questions = require('./Questions')

const testCapitals = new Questions

testCapitals.addQuestion({
    question:"What is the capital of South Africa?",
    choices:[
        'Pretoria',
        'Bloemfontein',
        'Johannesburg',
        'Cape Town'
    ],
    answer:'Cape Town',
    image:'./img/south-africa.png'
})
testCapitals.addQuestion({
    question:'What is the capital of Thailand?',
    choices:[
        'Bangkok',
        'Hadyai',
        'Krabi',
        'Phuket'
    ],
    answer:'Bangkok',
    image:'./img/thailand.jpg'
})
testCapitals.addQuestion({
    question: 'What is the capital of Malaysia?',
    choices:[
        'Penang',
        'Kuala Lumpur',
        'Langkawi',
        'Ipoh'
    ],
    answer:'Kuala Lumpur',
    image:'./img/malaysia.jpg'
})
testCapitals.addQuestion({
    question:'What is the capital of America?',
    choices:[
        'New York',
        'Kentucky',
        'Washington, D.C',
        'Texas'
    ],
    answer:'Washington, D.C',
    image:'./img/america.png'
})
testCapitals.addQuestion({
    question:'What is the capital of South Korea?',
    choices:[
        'Seoul',
        'New York',
        'Beijing',
        'Hong Kong'
    ],
    answer:"Seoul",
    image:'./img/south-korea.png'
})
testCapitals.addQuestion({
    question:'What is the capital of China?',
    choices:[
        'Shanghai',
        'Shenzhen',
        'Beijing',
        'Hong Kong'
    ],
    answer:'Beijing',
    image:'./img/china.png'
})

module.exports = testCapitals

