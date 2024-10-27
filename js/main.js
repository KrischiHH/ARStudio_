// Zugriff auf die Eingabefelder und das 3D-Modell
const modelUpload = document.getElementById('model-upload');
const modelEntity = document.getElementById('model');
const imageUpload = document.getElementById('image-upload');

// Event-Listener für das Hochladen von Modellen
modelUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        modelEntity.setAttribute('gltf-model', e.target.result);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Event-Listener für das Hochladen von Bildern
imageUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const markerUrl = e.target.result;
        const markerElement = document.querySelector('#marker');

        // Setze die Marker-URL für das AR.js Marker-Element
        markerElement.setAttribute('url', markerUrl);
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Funktionen zum Bewegen und Skalieren des Modells
document.getElementById('move-up').addEventListener('click', () => {
    const position = modelEntity.getAttribute('position');
    modelEntity.setAttribute('position', { x: position.x, y: position.y + 0.1, z: position.z });
});

document.getElementById('move-down').addEventListener('click', () => {
    const position = modelEntity.getAttribute('position');
    modelEntity.setAttribute('position', { x: position.x, y: position.y - 0.1, z: position.z });
});

document.getElementById('scale-up').addEventListener('click', () => {
    const scale = modelEntity.getAttribute('scale');
    modelEntity.setAttribute('scale', { x: scale.x + 0.1, y: scale.y + 0.1, z: scale.z + 0.1 });
});

document.getElementById('scale-down').addEventListener('click', () => {
    const scale = modelEntity.getAttribute('scale');
    modelEntity.setAttribute('scale', { x: scale.x - 0.1, y: scale.y - 0.1, z: scale.z - 0.1 });
});
