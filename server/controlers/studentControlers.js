const studentModel = require('../models/studentModel');

async function getAllStudents(req, res) {
  try {
    await studentModel.find({}, (error, result) => {
      if (error) throw error;
      res.json({ msg: 'success', data: result });
      //   res.send({msg:"success",data:result});
    });
  } catch (error) {
    res.json({ msg: 'error ', error: error });
  }
}

async function postStudent(req, res) {
  try {
    await studentModel.insertMany(req.body.student, (error, result) => {
      if (error) throw error;
      res.json({ msg: 'success', data: result });
    });
  } catch (error) {
    res.send({ msg: 'error', error: error });
  }
}
async function upDateById(req, res) {
  try {
    await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body.student,
      (error, result) => {
        if (error) throw error;
        res.json({ msg: 'success', data: result });
      }
    );
  } catch (error) {
    res.send({ msg: 'error', error: error });
  }
}
async function deleteById(req, res) {
  try {
    await studentModel.findByIdAndDelete(req.params.id, (error, result) => {
      if (error) throw error;
      res.json({ msg: 'success', data: result });
    });
  } catch (error) {
    res.send({ msg: 'error', error: error });
  }
}
module.exports = {
  getAllStudents,
  postStudent,
  upDateById,
  deleteById,
};
