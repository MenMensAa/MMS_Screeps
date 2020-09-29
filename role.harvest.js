const { filter } = require("lodash")

module.exports = {
  /**
  * 
  * @param {Creep} creep 
  */
  run: function(creep) {
    const spwan1 = Game.spawns["Spawn1"]
    if (creep.store.energy === creep.store.getCapacity()) {
      if (creep.transfer(spwan1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(spwan1)
      }    
    } else {
      const resources = creep.room.find(FIND_SOURCES)
      if (creep.harvest(resources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(resources[0])
      }
    }
  }
}