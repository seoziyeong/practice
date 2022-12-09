const person = {
    name: {
        first: ['Bob', 'Smith'],
        second: ['Jone', 'Bart']
    },
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
    console.log(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    },
    greeting: function() {
    console.log('Hi! I\'m ' + this.name[0] + '.');
    }
    };
    //object 접근
    //1. 점 표기법
        // person.name
        // person.name[0]
        // person.age
        // person.interests[1]
        // person.bio()
        // person.greeting()
    //2. 괄호 표기법
    console.log(person['name']['first']);
    console.log(person['name'][0]);