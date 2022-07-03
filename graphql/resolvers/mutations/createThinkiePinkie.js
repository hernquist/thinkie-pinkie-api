module.exports = {
  createThinkiePinkie: async (
    __,
    { hint, solutions, numberOfSyllables },
    { ThinkiePinkie, authUser }
  ) => {
    const userId = authUser?._id;

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
