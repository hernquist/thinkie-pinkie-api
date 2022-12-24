const { Score } = require("../../../models");

module.exports = {
  submitSolution: async (
    __,
    { solved, thinkiePinkieId, wrongSolution },
    { Score, authUser }
  ) => {
    const userId = authUser?._id || process.env.ADMIN_ID;
    const [score] = await Score.find({ thinkiePinkieId, userId });
    const numberOfAttempts = score?.attempts || 0;
    const wrongSolutions = score?.wrongSolutions || [];
    const scoreId = score?._id || null;

    if (!scoreId) {
      const wrongSolutions = [];

      if (!solved) {
        wrongSolutions.push(wrongSolution);
      }

      const newScore = {
        thinkiePinkieId,
        userId,
        attempts: 1,
        solved,
        wrongSolutions,
      };
      const savedScore = await Score(newScore).save();

      return !!savedScore?._id;
    }

    if (score?.solved) {
      return false; // already solved -- TODO: we should send a puzzle to a user who already solved it
    }

    const attempts = numberOfAttempts + 1;

    if (!solved && wrongSolution) {
      wrongSolutions.push(wrongSolution);
    }

    const savedScore = await Score.updateOne(
      {
        _id: scoreId,
      },
      {
        attempts,
        solved,
        wrongSolutions,
      }
    );

    return !!savedScore?._id;
  },
};
