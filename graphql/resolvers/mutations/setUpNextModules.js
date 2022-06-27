const e = require("express");

module.exports = {
  setUpNextModules: async (
    __,
    ___,
    { Practice, User, authUser, ContentMap }
  ) => {
    if (!authUser) {
      return {
        success: false,
        message: "not authenticated",
      };
    }

    const userId = authUser._id;

    const contentMaps = await ContentMap.find({});
    const assessments = await Practice.find({
      userId,
      assessmentType: "assess",
    });

    const upNextModules = contentMaps.reduce((prev, curr) => {
      curr.engagement.forEach((engagement, i) => {
        [...Array(curr.level[i])].forEach((_, j) => {
          const foundAssessments = assessments.filter(
            (assessment) =>
              assessment.topic === curr.topic &&
              assessment.engagement === engagement &&
              assessment.level === j + 1
          );
          const passed = foundAssessments.some(
            (assessment) => assessment.score === 1
          );
          if (!passed) {
            prev.push(`${curr.topic}/${engagement}/${j + 1}`);
          }
        });
      });
      return prev;
    }, []);

    const savedUser = await User.updateOne(
      { _id: userId },
      {
        upNextModules,
      }
    );

    if (savedUser.ok) {
      return {
        upNextModules,
      };
    } else {
      const user = await User.find({
        _id: userId,
      });
      return {
        upNextModules: user.upNextModules,
      };
    }
  },
};
