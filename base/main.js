
require('../style/main.less')

const THREE = require('three') // LOOK: some modules are imported like this. You shouldn't have to worry about this much
import DAT from 'dat-gui'
import Scene from '../framework/scene'
import Stats from 'stats-js'
import Module from './module' // LOOK: Import modules like this

function initialize() {
  var box = new THREE.BoxGeometry(1, 1, 1);
  var lambertWhite = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
  var lambertCube = new THREE.Mesh(box, lambertWhite);
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.color.setHSL(0.1, 1, 0.95);
  directionalLight.position.set(1, 3, 2);
  directionalLight.position.multiplyScalar(10);

  var gui = new DAT.GUI();

  var scene = Scene()
  scene.scene.add(lambertCube);
  scene.scene.add(directionalLight);

  scene.camera.position.set(1, 1, 2);
  scene.camera.lookAt(new THREE.Vector3(0,0,0));

  // edit params and listen to changes like this
  gui.add(scene.camera, 'fov', 0, 180).onChange(val => {
    scene.camera.updateProjectionMatrix();
  })

  var stats = new Stats()
  stats.setMode(1)
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement)

  var tick = function() {
    stats.begin()
    scene.render()
    stats.end()
    requestAnimationFrame(tick) // ask the browser to call this function again whenever ready
  }

  // execute this when the scene is done loading
  scene.loaded.then(function() {
    tick()
  })
}

initialize()

var list = Module.LinkedList()
list.append(1)
list.append(2)
console.log(list)