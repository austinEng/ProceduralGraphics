
const THREE = require('three')
import {vec2} from 'gl-matrix'

var cylinder = new THREE.CylinderGeometry(1, 1, 2)
var lambertGreen = new THREE.MeshLambertMaterial({ color: 0x00ee00 })

export default function Agent() {
  var agent = {}

  var mesh = new THREE.Mesh(cylinder, lambertGreen)
  mesh.position.y = 1;

  agent.position = vec2.fromValues(0, 0)
  agent.velocity = vec2.fromValues(Math.random() - 0.5, Math.random() - 0.5)
  
  agent.updateMesh = function() {
    mesh.position.x = agent.position[0]
    mesh.position.z = agent.position[1]
  }

  agent.getMesh = function() {
    return mesh
  }

  return agent
}