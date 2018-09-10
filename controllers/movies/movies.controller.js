const c = require('../../config/db.config');
const jwt = require('jsonwebtoken');
const cnfg = require('../../config/config');

exports.getAll = (req, res) => {
    const sql = `select * from movies`;
    c.connection.query(sql, (err, result, fields) => {
        if (err) { throw err; }
        if (result.length > 0) {
            res.json({ 'success': true, 'message': 'movies found!', result });
        } else {
            res.json({ 'success': false, 'message': 'not movies found' });
        }
    })
}

exports.Category = (req, res) => {
    const sql = `select * from movies where category = '${req.params.category}'`
    c.connection.query(sql, (err, result, fields) => {
        if (err) { throw err; }
        if (result.length > 0) {
            res.json({ 'success': true, 'message': 'movies found!', result });
        } else {
            res.json({ 'success': false, 'message': 'not category found' });
        }
    })
}

exports.UserList = (req, res) => {
    res.send('user movie list');
}

exports.getMovie = (req, res) => {
    const sql = `select * from movies where title like '%${req.params.movie_name}%'`
    c.connection.query(sql, (err, result, fields) => {
        if (err) { throw err; }
        if (result.length > 0) {
            res.json({ 'success': true, 'message': 'movies found!', result });
        } else {
            res.json({ 'success': false, 'message': 'not movies found' });
        }
    })
}