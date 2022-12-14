import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    nom:{
        type: String,
        required: true,
    },
    prenom:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isFormateur:{
        type: Boolean,
        default: false,
    },
    isEtudiant:{
        type: Boolean,
        default: false,
    }
})

export default mongoose.model("User", UserSchema);