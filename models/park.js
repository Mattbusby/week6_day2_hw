const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
  }
  
Park.prototype.addDino = function(dino){
    this.dinosaurs.push(dino);
}

Park.prototype.removeDino = function(dinosaur){
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(indexOfDinosaur, 1);
}

Park.prototype.biggestAttraction = function(){
    let visitorsAttracted = 0;
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay > visitorsAttracted) {
            visitorsAttracted = dinosaur.guestsAttractedPerDay
        }
    }
    let bigBoi; 
    for (let dinosaur of this.dinosaurs){
        if (dinosaur.guestsAttractedPerDay === visitorsAttracted){
        bigBoi = dinosaur;
        }
    }
    return bigBoi
}

Park.prototype.dinosBySpecies = function(species){
    let speciesList = [];
    for (let dinosaur of this.dinosaurs){
        if (species === dinosaur.species){
            speciesList.push(dinosaur)
        }
    }
    return speciesList
}



  module.exports = Park;
  