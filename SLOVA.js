var vowels = "AEIOUY";
var consonants = "BCDFGHJKLMNPQRSTVWXZ";
function get(text) {
  var re = text;
  var count = 0;
  var tokens = re.split(/[^A-Z0-9]+/i); //разделение слов без учета регистра
  for(var j = 0; j < tokens.length;j++) {
    var key = tokens[j];
    if (key.length <= 1 ) {
      continue;
    }
    var isvalid = true;
    for (var i = 0; i < key.length - 1; i++) {
      if (vowels.indexOf(key[i]) != -1 && vowels.indexOf(key[i + 1]) != -1)  {
        isvalid = false;
        break;
      }
      if (consonants.indexOf(key[i]) != -1 && consonants.indexOf(key[i + 1]) != -1)  {
        isvalid = false;
        break;
      }
    }
      if (isvalid) {
        count++;
      }
  }
return count;
}
get('My Dog is name Lord');
