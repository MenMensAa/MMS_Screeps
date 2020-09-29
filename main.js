var harvest = require('./role.harvest')
var upgrade = require('./role.upgrader')
var autoSpawn = require('./auto_spawn')

module.exports.loop = function() {

	const spawn1 = Game.spawns['Spawn1']

	autoSpawn.run('harvester')
	autoSpawn.run('upgrader')

	for (const creepName in Game.creeps) {
		let creep = Game.creeps[creepName]
		if (creep.memory.role = 'harvester') {
			harvest.run(creep)
		}
		if (creep.memory.role = 'upgrader') {
			upgrade.run(creep)
		}
	}
}