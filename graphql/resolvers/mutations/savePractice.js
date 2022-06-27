module.exports = {
  savePractice: async (__, { practice }, { Practice, authUser }) => {
    if (!authUser) {
      return {
        success: false,
        message: "not authenticated",
      };
    }

    const savedUser = await Practice({
      ...practice,
      userId: authUser._id,
    }).save();

    return {
      success: true,
      message: "",
    };
  },
};
