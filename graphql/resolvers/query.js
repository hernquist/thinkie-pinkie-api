const prepare = (obj) => {
  if (obj) {
    obj._id = obj._id.toString();
  }
  return obj;
};

module.exports = {
  Query: {
    user: async (__, ___, context) => {
      const { User } = context;
      if (context.authUser) {
        const { _id } = context.authUser;
        const user = await User.find({ _id });

        return prepare(user[0]);
      } else {
        return new Error("user not authenticated");
      }
    },
    getThinkiePinkie: async (__, { id }, context) => {
      const { ThinkiePinkie } = context;
      const thinkiePinkie = await ThinkiePinkie.find({ _id: id });

      return prepare(thinkiePinkie[0]);
    },
    getRandomThinkiePinkie: async (_, __, context) => {
      const { ThinkiePinkie } = context;
      const all = await ThinkiePinkie.find({});
      const numberOfThinkiePinkies = all?.length || 0;
      if (numberOfThinkiePinkies > 0) {
        const index = Math.floor(numberOfThinkiePinkies * Math.random());
        return prepare(all[index]);
      }
      return null;
    },
  },
};
