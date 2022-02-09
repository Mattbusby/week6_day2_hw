const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaurs;
  beforeEach(function () {
    park = new Park('Jurassic Park', 50, dinosaurs)
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 50)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs.length;
    assert.equal(actual, 0)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDino(['t-rex', 'carnivore', 50]);
    const actual = park.dinosaurs.length;
    assert.equal(actual, 1)
  });

  // THE BELOW ONLY WORKS TO REMOVE THE SECOND DINOSAUR
  it('should be able to remove a dinosaur from its collection', function(){
    park.addDino(['t-rex', 'carnivore', 50]);
    park.addDino(['pterodactyl', 'carnivore', 35]);
    park.removeDino(['pterodactyl', 'carnivore', 35]);
    const actual = park.dinosaurs.length;
    assert.equal(actual, 1)
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDino(['t-rex', 'carnivore', 50]);
    park.addDino(['pterodactyl', 'carnivore', 35]);
    const actual = park.biggestAttraction();
    const expected = ['t-rex', 'carnivore', 50];
    assert.equal(actual, expected)
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDino(['t-rex', 'carnivore', 50]);
    park.addDino(['t-rex', 'carnivore', 45]);
    park.addDino(['pterodactyl', 'carnivore', 35]);
    park.addDino(['pterodactyl', 'carnivore', 30]);
    const actual = park.dinosBySpecies('t-rex');
    const expected = (['t-rex', 'carnivore', 50], ['t-rex', 'carnivore', 45]);
    assert.equal(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
