const { Score } = require("../../../models");

module.exports = {
  submitSolution: async (
    __,
    { solved, thinkiePinkieId },
    { Score, authUser }
  ) => {
    const userId = authUser?._id || process.env.ADMIN_ID;
    const [score] = await Score.find({ thinkiePinkieId, userId });
    const numberOfAttempts = score?.attempts || 0;
    const { _id } = score;

    if (!score) {
      const newScore = {
        thinkiePinkieId,
        userId,
        attempts: 1,
        solved,
      };
      const savedScore = await Score(newScore).save();

      return !!savedScore?._id;
    }

    if (score.solved) {
      return false; // already solved
    }

    const attempts = numberOfAttempts + 1;
    const savedScore = await Score.updateOne(
      {
        _id,
      },
      {
        attempts,
        solved,
      }
    );

    return true;
  },
};
