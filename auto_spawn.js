module.exports = {
  run: function(type, num=4) {
    const spawn1 = Game.spawns['Spawn1']
    const creeps = _.filter(Game.creeps, (creep) => creep.memory.role === type)

    if (creeps.length < num) {
      const newName = type + Game.time
      spawn1.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: type}})
    }

    if (spawn1.spawning) {
      const spawningName = spawn1.spawning.name
      const spawningCreep = Game.creeps[spawningName].memory.role
      spawn1.room.visual.text(
        spawningCreep, spawn1.pos.x + 1, spawn1.pos.y, {align: 'left', opacity: 0.8}
      )
    }
  }
}