import mongoose from "mongoose";

let post = new mongoose.Schema({
      title: {
        type: String,
        required: [true, "Molim vas upisete naslov"],
      }, 
      author: {
        type: String,
        required: [true, "Molim vas upisete autora"],
      }, 
      body: {
        type: String,
        required: [true, "Molim vas upisite text"],
      },
      datum: {
        type: Date,
        default: new Date()
      },
      likes: {
        type: Number,
        default: 0
      },
    },
    {
      timestamps: true,
    }
  );

let UserModel = mongoose.model('Post',post);

export default UserModel; 