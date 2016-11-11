
require('../style/main.less')

const THREE = require('three')
import DAT from 'dat-gui'
import Scene from '../framework/scene'

function initialize(callback) {
  var box = new THREE.BoxGeometry(1, 1, 1);
  var lambertWhite = new THREE.MeshLambertMaterial({ color: 0xeeeeee });
  var lambertCube = new THREE.Mesh(box, lambertWhite);
  var directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
  directionalLight.color.setHSL(0.1, 1, 0.95);
  directionalLight.position.set(1, 3, 2);
  directionalLight.position.multiplyScalar(10);

  var scene = new Scene(function() {
    scene.scene.add(lambertCube);
    scene.scene.add(directionalLight);

    scene.camera.position.set(1, 1, 2);
    scene.camera.lookAt(new THREE.Vector3(0,0,0));

    callback(scene)
  });
}

var gui = new DAT.GUI();

initialize(function(scene) {
  // edit params and listen to changes like this
  gui.add(scene.camera, 'fov', 0, 180).onChange(val => {
    scene.camera.updateProjectionMatrix();
  })
})
