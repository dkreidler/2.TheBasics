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
        var interestsList = '';
        if (gender === 'female') {
            pronoun = 'She';
        } else {
            pronoun = 'He';
        }
        switch (interests.length) {
            case 0:
                interestsList = pronoun + ' doesn\'t like anything.';
                break;
            case 1:
                interestsList = pronoun + ' likes ' + interests[0] + '.';
                break;
            case 2:
                interestsList = pronoun + ' likes ' + interests[0] + ' and ' + interests[1] + '.';
                break;
            default:
                interestsList = pronoun + ' likes ';
                for (i = 0; i < interests.length; i++) {
                    if (i < interests.length - 1) {
                        interestsList += interests[i] + ', ';
                    } else {
                        interestsList += 'and ' + interests[i] + '. ';
                    }
                }
        }
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + interestsList);

    }

}
this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

var person1 = new Person('Dave', 'Smith', 32, 'male', ['death metal', 'bebop', 'cats']);