const db = require('../config/db');

const RekamMedis = {
    getAll: (callback) => {
        db.query('SELECT * FROM rekam_medis', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM rekam_medis WHERE id = ?', [id], callback);
    },
    create: (data, callback) => {
        db.query('INSERT INTO rekam_medis SET ?', data, callback);
    },
    update: (id, data, callback) => {
        db.query('UPDATE rekam_medis SET ? WHERE id = ?', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM rekam_medis WHERE id = ?', [id], callback);
    }
};

module.exports = RekamMedis;
