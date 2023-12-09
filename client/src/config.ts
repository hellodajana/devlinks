const localhost = {
    api: {
        endpoint: 'http://localhost:3000/'
    }
};

// const prod = {
//     api: {
//         endpoint: 'https://api.example.com/'
//     }
// };

// const config = process.env.NODE_ENV === 'production' ? prod : localhost;

const config = localhost

export default {
    ...config
};

