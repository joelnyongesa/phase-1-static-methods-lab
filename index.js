class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string){
    const lowercaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
        
        const words = string.split(' ').map((word, index) => {
            if (index === 0 || !lowercaseWords.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word.toLowerCase();
            }
        });
        
        return words.join(' ');
  }
}