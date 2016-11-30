
import {vec2} from 'gl-matrix'
import Stats from 'stats-js'


export default function BioCrowds(scene) {
  var shouldRun = false
  var agents = []

  var biocrowds = {
    stats: new Stats(),
    
    start: function() {
      shouldRun = true
      biocrowds.tick()
    },

    stop: function() {
      shouldRun = false
    },

    restart: function() {

    },

    tick: function() {
      if (shouldRun) {
        biocrowds.stats.begin()
        for (let i = 0; i < agents.length; ++i) {
          vec2.scaleAndAdd(agents[i].position, agents[i].position, agents[i].velocity, 0.1)
          agents[i].updateMesh()
        }
        
        scene.render()
        biocrowds.stats.end()
        requestAnimationFrame(biocrowds.tick)
      }
    },

    addAgent: function(agent) {
      agents.push(agent)
      scene.scene.add(agent.getMesh())
    }
  }

  return biocrowds
}