function Person(first, last, age, gender, interests) {
    this.name = {
        'first': first,
        'last': last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        var pronoun = 'He';
        if (gender === 'female') {
            pronoun = 'She';
        } else {
            pronoun = 'He';
        }
    }
    this.interestsList = function() {
        for (i = 0; i < interests.length; i++) {
            if (i < interests.length) {
                interestsList += interests[i] + ', ';
            } else {
                interestsList += ' and ' + interests[i] + '. ';
            }
        }
    };
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + pronoun + ' likes ' + interestsList);
}
this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

var person1 = new Person('Susan', 'Smith', 32, 'female', ['music', 'skiing']);