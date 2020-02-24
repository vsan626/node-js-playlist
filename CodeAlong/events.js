let Events = require('events');

class Person extends Events {
  constructor(name){
    super()
    this.name = name

    this.on('talk', function(words){
      console.log(`${this.name} saying ${words}`)
    })

    this.on('speak', (words) => {
      console.log(`${this.name} is trying to say ${words}`)
    })
  }
  someMethod(fruit) {
    console.log(`${this.name} likes ${fruit}`)
  }

}

const danny = new Person('Danny');
const tommy = new Person('Tommy')
const jen = new Person('Jen')

danny.emit('speak', 'heyyyy')
tommy.emit('speak', 'woot woot')
jen.emit('talk', 'PPPOOOOOPPP')

danny.someMethod('Mangosss')

