module.exports = {
    server: {
        port: process.env.PORT
    },

    mongodb: {
        connectionString: process.env.MONGOHQ_URL
    }
};