
const THREE = require('three')
const OrbitControls = require('three-orbit-controls')(THREE)

export default function Scene() {
  var scene = {}

  // initialize scene and camera
  scene.camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  scene.scene  = new THREE.Scene();

  // create a promise so we know when the scene is done loading
  scene.loaded = new Promise(function(doneLoading) {

    // LOOK: initialize the scene on load because we need to gl canvas to exist
    window.addEventListener('load', function() {
      // initialize the scene renderer
      scene.renderer = new THREE.WebGLRenderer( { antialias: true } );
      
      // set up renderer params
      scene.renderer.setPixelRatio(window.devicePixelRatio);
      scene.renderer.setSize(window.innerWidth, window.innerHeight);
      scene.renderer.setClearColor(0x020202, 0);

      // set up camera controls
      var controls = new OrbitControls(scene.camera, scene.renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = true;
      controls.target.set(0, 0, 0);
      controls.rotateSpeed = 0.3;
      controls.zoomSpeed = 1.0;
      controls.panSpeed = 2.0;

      // render the scene
      scene.render();

      document.body.appendChild(scene.renderer.domElement);

      doneLoading() // fulfill the Promise so anything waiting on this can run
    })
  })

  // add an event listener to resize the canvas on window resize
  window.addEventListener('resize', function() {
    scene.camera.aspect = window.innerWidth / window.innerHeight;
    scene.camera.updateProjectionMatrix();

    scene.renderer.setSize(window.innerWidth, window.innerHeight);
  }, false);

  scene.render = function() {
    scene.renderer.render(scene.scene, scene.camera)
  }

  return scene
}