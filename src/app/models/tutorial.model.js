module.exports = mongoose => {
    const Tutorial = mongoose.model(
      "tutorial",
      mongoose.Schema(
        {   
            userType: String,
            password: String,
            username: String
        },
        { timestamps: true }
      )
    );
  
    return Tutorial;
  };