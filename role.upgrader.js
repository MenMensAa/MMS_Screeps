module.exports = {
  /**
   * 
   * @param {Creep} creep 
   */
  run: function(creep) {
    if (creep.memory.harvesting && creep.store.energy === creep.store.getCapacity()) {
      creep.memory.harvesting = false
      creep.memory.upgrading = true
    } else if (creep.memory.upgrading && creep.store.energy === 0) {
      creep.memory.upgrading = false
      creep.memory.harvesting = true
    } else {
      creep.memory.upgrading = false
      creep.memory.harvesting = true
    }

    if (creep.memory.harvesting) {
      const reousrces = creep.room.find(RESOURCE_ENERGY)
      if (creep.harvest(reousrces[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(reousrces[0])
      }
    }

    if (creep.memory.upgrading) {
      if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller)
      }
    }
  }
}