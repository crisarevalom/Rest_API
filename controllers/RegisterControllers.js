const Register = require("./../models/Register");

const insert = (req, res)=>{
    const student = new Register(req.body);
    student.save((error,document) =>{
        if (error)
      res.status(500).json({
        msg: "Hubo error"
      });
      return res.status(201).json({
          msg:"creado",
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

const getOneRegister = (req,res)=>{
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

module.exports = {
    getRegister,
    insert,
    getOneRegister
};