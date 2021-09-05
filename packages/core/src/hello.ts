import os from "os";

export const hello = () => {
  return `Hello ${os.hostname()}`;
};
