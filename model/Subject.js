// model/Subject.js
import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},
  code: { type: String, 
    required: true, 
    unique: true 
},
  email:{ 
    type: String, 
    required: true, 
    unique: true 
}
  // createdBy: { 
  //   type: mongoose.Schema.Types.ObjectId, 
  //   ref: "User", 
  //   required: true },
});

const subjectModel = mongoose.model("Subject", SubjectSchema);

export default subjectModel;