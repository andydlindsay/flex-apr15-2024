let dog = {
  name: 'benjie',
  breed: 'labrador retriever',
  speak: function() {
    // console.log(dog.name);
    console.log(this.name, this.breed);
    // my === this
  },
};

// dog.speak();
const copy = dog; // copy the reference
dog = null;

const another = copy;

another.speak(); // dog.speak();
