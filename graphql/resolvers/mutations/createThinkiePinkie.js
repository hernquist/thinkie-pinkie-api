module.exports = {
  createThinkiePinkie: async (
    __,
    { hint, solutions, numberOfSyllables },
    { ThinkiePinkie, authUser }
  ) => {
    const userId = authUser?._id || process.env.ADMIN_ID;

    const thinkiePinkie = {
      userId,
      hint,
      solutions,
      numberOfSyllables,
    };

    const savedThinkiePinkie = await ThinkiePinkie(thinkiePinkie).save();

    if (savedThinkiePinkie._id) {
      return true;
    } else {
      return false;
    }
  },
};
