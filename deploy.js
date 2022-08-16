const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: "nexus_ftp",
  // Password optional, prompted if none given
  password: "fA3rOjbf9@zMN!Dp",
  host: "ftp.eclecticboom.space",
  port: 21,
  localRoot: __dirname + "/dist/",
  remoteRoot: "/public_html",
  // include: ["*", "**/*"],      // this would upload everything except dot files
  include: ["**"],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: [],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: false,
};

ftpDeploy
  .deploy(config)
  .then((res) => console.log("finished:", res))
  .catch((err) => console.log(err));
