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
        alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + pronoun + ' likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        alert('Hi! I\'m ' + this.name.first + '.');
    };
}
var person1 = new Person('Susan', 'Smith', 32, 'female', ['music', 'skiing']);