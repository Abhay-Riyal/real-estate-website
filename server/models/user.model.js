import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar:{
      type:String,
      default: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fvectors%2Fdefault-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392%3Fk%3D20%26m%3D1223671392%26s%3D612x612%26w%3D0%26h%3DlGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0%3D&f=1&nofb=1&ipt=2c3cbc5d818e2d2ea0dc306ec9c3020fa238c8c5cfed0538b8ab07e4c582370c&ipo=images"
    },
  },
  { timestamps: true }
);

const User=mongoose.model('User', userSchema);
export default User;
