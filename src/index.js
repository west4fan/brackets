module.exports = function check(str, bracketsConfig) {
    for (let j = 0; j < str.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
          if (str[str.length - 1] === bracketsConfig[i][0] && str[0] !== bracketsConfig[i][1] || str.length % 2 !== 0) {
              return false
        }

        if (bracketsConfig[0][0] === str[j]) {
          if(bracketsConfig[i][0] === str[j] && bracketsConfig[i][1] === str[j+2]) return false
          if (bracketsConfig[i][1] === str[j + 1]) {
            str = str.split(bracketsConfig[i][0], bracketsConfig[i][1]).join('');
          } else if (bracketsConfig[i][1] !== str[j + 1]) {
            str = str.split(bracketsConfig[i][0], bracketsConfig[i][1]).join('');
          }
        }
        
      }        
    }
    return str === '';
  }
