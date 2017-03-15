export const data = (context, callback) => {
  const { staticPath } = context;

  return callback(null, { staticPath });
};
