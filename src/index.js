module.exports = function check(str, bracketsConfig) {
  let stack = [];

  let lenstr = str.length;
  if (lenstr % 2 != 0) return false;

  let lenConfig = bracketsConfig.length,
      checkeven = 1,
      cheven,
      chClose;
  for (let i = 0; i < lenstr; i++) {
      let ch = str.charAt(i),
          close = false,
          open = false,
          even = false;
      for (let j = 0; j < lenConfig; j++) {
          if (bracketsConfig[j][0] == bracketsConfig[j][1] && ch == bracketsConfig[j][0]) {
              even = true;
              checkeven = (-1) * checkeven;
              cheven = ch;

              break;
          }
          if (ch == bracketsConfig[j][0]) {
              open = true;
              break;
          }
          if (ch == bracketsConfig[j][1]) {
              close = true;
              chClose = bracketsConfig[j][0];
              break;
          }
      }
      if (even == true) {
          if (checkeven == -1) {
              stack.push(ch);

          }
          if (checkeven == 1 && cheven == stack[stack.length - 1]) {

              stack.pop();
          }
      } else {

          if (open === true) {
              stack.push(ch);

          }
          if (close === true && chClose == stack[stack.length - 1]) {

              stack.pop();
          }
      }
  }
  return (stack.length === 0);
};
