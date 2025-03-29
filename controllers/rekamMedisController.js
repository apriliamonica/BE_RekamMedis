const RekamMedis = require('../models/rekamMedisModel');

exports.getAllRekamMedis = (req, res) => {
    RekamMedis.getAll((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

exports.getRekamMedisById = (req, res) => {
    const id = req.params.id;
    RekamMedis.getById(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results[0] || {});
        }
    });
};

exports.createRekamMedis = (req, res) => {
    const data = req.body;
    RekamMedis.create(data, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data rekam medis berhasil ditambahkan', id: results.insertId });
        }
    });
};

exports.updateRekamMedis = (req, res) => {
    const id = req.params.id;
    const data = req.body;
    RekamMedis.update(id, data, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data rekam medis berhasil diperbarui' });
        }
    });
};

exports.deleteRekamMedis = (req, res) => {
    const id = req.params.id;
    RekamMedis.delete(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ message: 'Data rekam medis berhasil dihapus' });
        }
    });
};
