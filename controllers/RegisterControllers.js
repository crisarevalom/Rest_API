const Register = require("./../models/Register");

const insert = (req, res) => {
  const student = new Register(req.body);
  student.save((error, document) => {
    if (error)
      res.status(500).json({
        msg: "Hubo error"
      });
    return res.status(201).json({
      msg: "creado",
      register: document
    })
  })
}

const getRegister = (req, res) => {
  Register.find({}, (error, documents) => {
    if (error)
      res.status(500).json({
        msg: "Hubo error"
      });
    return res.status(200).json({
      msg: "ok",
      regsiters: documents
    })
  });
};

const getOneRegister = (req, res) => {
  Register.findById(req.params.id, (error, document) => {
    if (error)
      res.status(500).json({
        msg: "Hubo error"
      });
    return res.status(200).json({
      msg: "ok",
      regsiter: document
    })
  });
}


const update = (req, res) => {
  let update = {
    carnet: req.body.carnet,
    schedule: req.body.schedule,
    isLate: req.body.isLate
  };
  Register.findByIdAndUpdate(req.params.id, update, function (err, old) {
    if (err) {
      res.status(500);
      res.json({ code: 500, err });
    } else {
      res.json({ ok: true, old, update });
    }

  });

}

const deleteR = (req, res) => {
  Register.deleteOne(req.params.id, function (err, eleminado) {
    if (err) {
      res.status(500);
      res.json({ code: 500, err });
    } else {
      res.json({ ok: true, eleminado });
    }
  });
}

module.exports = {
  getRegister,
  insert,
  getOneRegister,
  update,
  deleteR
  
};