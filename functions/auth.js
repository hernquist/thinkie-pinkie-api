const auth = (authUser) => {
  if (
    process.env.AUTH_OFF === "yes" &&
    process.env.NODE_ENV === "development"
  ) {
    console.log("auth bypassed");
  } else if (authUser.phone === "no auth") {
    throw new Error("auth required for this mutation");
  }
};

const phoneLogger = (phone, authUserPhone) => {
  if (authUserPhone !== phone) {
    console.error(`
        phones do not match!!! 
        authUser.phone: ${authUserPhone} 
        phone: ${phone}
      `);
  }
};

module.exports = {
  auth,
  phoneLogger,
};
