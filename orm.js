const connection = require('./connect');




module.exports = {
    view: (choice, cb) => {
        return connection.query('SELECT * FROM ??', [choice], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    add: (choice,obj, cb) => {
        const keys = Object.keys(obj);
        const values = Object.values(obj);
        const keys_ = keys.map(item => '??').join(',');
        const values_ = keys.map(item => '?').join(',');
        return connection.query(`INSERT INTO ?? (${keys_}) VALUES (${values_})`, [choice,...keys,...values], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    update: (choice, cb) => {
        return connection.query('SELECT * FROM ??', [choice], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
    delete: (choice, cb) => {
        return connection.query('SELECT * FROM ??', [choice], (err,result) => {
            if (err) throw err;
            cb(result);
        });
    },
}