// Zugriff auf die Eingabefelder
const modelUpload = document.getElementById('model-upload');
const imageUpload = document.getElementById('image-upload');

// Event-Listener für das Hochladen von Modellen
modelUpload.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        // Hier wird das 3D-Modell gespeichert
        console.log('Modell hochgeladen:', e.target.result);
        // Du kannst das Modell in einer Datenstruktur speichern
        // z.B. in einer globalen Variable oder einer Datenbank
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
        // Hier wird das Trigger-Bild gespeichert
        console.log('Bild hochgeladen:', e.target.result);
        // Auch das Bild kannst du in einer Datenstruktur speichern
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

// Funktion zum Speichern der Szene
document.getElementById('save-scene').addEventListener('click', () => {
    // Hier kannst du die Logik zum Speichern der Szene implementieren
    // Zum Beispiel kannst du die hochgeladenen Daten in einer JSON-Datei speichern
    console.log('Szene gespeichert');
    // Beispiel für das Speichern in einer JSON-Struktur
    const sceneData = {
        model: modelUpload.files[0] ? modelUpload.files[0].name : null,
        image: imageUpload.files[0] ? imageUpload.files[0].name : null
    };

    console.log('Szene Daten:', sceneData);
    // Du müsstest hier auch den Code hinzufügen, um die Daten tatsächlich zu speichern
});
