module.exports = {
    database: {
        host: process.env.HOST,
        database: process.env.DB,
        user: process.env.USER,
        password: process.env.PASS,
        port: process.env.P
    },
    jwt: {
        secret: process.env.CST
    }
}