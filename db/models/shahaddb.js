// const mongoose = require("mongoose");


// REVIEW: This should be gitignored
const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb+srv://salmashaan:Shahad123@cluster0.olubp.mongodb.net/Cluster0?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  );
  console.log(`mongo connected: ${conn.connection.host}`);
};

// const connectDB = async () => {
//   const conn = await mongoose.connect(
//     "mongodb+srv://salmashaan:Shahad123@cluster0.olubp.mongodb.net/Cluster0?retryWrites=true&w=majority",
//     {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     }
//   );
//   console.log(`mongo connected: ${conn.connection.host}`);
// };

// module.exports = connectDB;
