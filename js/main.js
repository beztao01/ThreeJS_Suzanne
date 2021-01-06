const scene = new THREE.Scene();

const light = new THREE.AmbientLight(0xFFFFFF, 0.5);
scene.add(light);

const light1 = new THREE.PointLight(0xFFFFFF, 0.5);
scene.add(light1);

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

//const renderer = new THREE.WebGLRenderer({antialias: true });

//renderer.setSize(window.innerWidth, window.innerHeight);

//document.body.appendChild(renderer.domElement);

/*
const loader = new THREE.GLTFLoader();
loader.load('sussane.glb', handle_load);

const mesh;

function handle_load(gltf){
    mesh = gltf.scene.childent[0];
    scene.add(mesh);
    mesh.position.z = -10;
}


render();

const delta = 0;
const prevTime = Date.now();

function render(){
    delta += 0.1;
    if (mesh){
        mesh.rotation += 0.01;
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
*/
