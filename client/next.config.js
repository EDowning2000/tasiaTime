// next.config.js
const withImages = require("next-images");

module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  webpack(config, options) {
    return config;
  },
});
env: {
  MONGO_URI: "mongodb+srv://ESD150:eb6qla2x@cluster0.tqxj9.mongodb.net/test?retryWrites=true&w=majority";
}
