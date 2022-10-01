var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose
  .connect(
    "mongodb+srv://smitdonda:smitdonda123@cluster0.undvynq.mongodb.net/redux"
  )
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));

module.exports = mongoose.connection;