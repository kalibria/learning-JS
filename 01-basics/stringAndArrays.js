/*function string(word){
    var arr = word.split('');
    
    var vowels = ['a','o','y','e'];
    var numberVowels = 0;
    for(var i = 0; i < arr.length; i++){
        var number = vowels.indexOf(arr[i]);
        if(number != -1){
            numberVowels += 1;  
        }

    }
    console.log (numberVowels);
    return numberVowels
}*/

function string(word){
    var arr = word.split('');
    var vowels = ['a','o','y','e'];
    var numberVowels = arr.filter(function(letter){ //[m a s h a]  [ a a]
        return vowels.indexOf(letter) !== -1;
    });
    
    var i = numberVowels.length;
    return i
}
    
console.log(string('masha'))


