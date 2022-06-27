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
    module: async (__, { slug }, { Module }) => {
      const [mod] = await Module.find({ slug });

      return {
        _id: mod._id,
        numberOfTurns: mod.numberOfTurns,
        slug: mod.slug,
        content: mod.content,
      };
    },
    content: async (__, { type, name }, { Content }) => {
      const [content] = await Content.find({ type, name });
      return content;
    },
    contentMap: async (__, ___, { ContentMap }) => {
      const contentMaps = await ContentMap.find({});
      return contentMaps;
    },
  },
};
