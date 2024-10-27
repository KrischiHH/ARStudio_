// main.js
const fileInput = document.getElementById('file-input');
const modelList = document.getElementById('model-list');
const modelEntity = document.getElementById('model');

// Modell laden und zur Liste hinzufügen
fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const url = URL.createObjectURL(file);
        const listItem = document.createElement('li');
        listItem.textContent = file.name;

        // Drag & Drop hinzufügen
        listItem.draggable = true;
        listItem.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', url);
        });

        modelList.appendChild(listItem);
    }
});

// Modell ins Arbeitsfeld ziehen und anzeigen
modelEntity.addEventListener('model-loaded', () => {
    console.log('Modell geladen');
});

// Drag & Drop für das Modell im Arbeitsbereich
modelEntity.addEventListener('dragover', (e) => {
    e.preventDefault();
});

modelEntity.addEventListener('drop', (e) => {
    e.preventDefault();
    const url = e.dataTransfer.getData('text/plain');
    modelEntity.setAttribute('gltf-model', url);
});
