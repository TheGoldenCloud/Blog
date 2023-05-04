import mongoose from "mongoose";

let user = new mongoose.Schema({
      name: {
        type: String,
        required: [true, "Molim vas upisete ime"],
      }, 
      lastname: {
        type: String,
        required: [true, "Molim vas upisete prezime"],
      }, 
      username: {
        type: String,
        required: [true, "Please add the user name"],
        unique: [true, "Username je vec uzet"],
      },
      email: {
        type: String,
        required: [true, "Molim vas upiste adresu"],
        unique: [true, "Email je vec uzet"],
      },
      password: {
        type: String,
        required: [true, "Molim vas upiste password"],
      },
      role: {
        type: String,
        enum: ["Admin","Moderator","Guest"],
        default: "User"
      },
    },
    {
      timestamps: true,
    }
  );

let UserModel = mongoose.model('User',user);

export default UserModel; 