const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const port = 3000;

// Nastavení pro ukládání souborů
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');  // Místo, kam se soubory uloží
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Přejmenuje soubor
    }
});

const upload = multer({ storage: storage });

// Endpoint pro nahrávání souborů
app.post('/upload', upload.single('profileImage'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'Žádný soubor nebyl nahrán.' });
    }
    // Zde můžete přidat logiku pro uložení cesty k souboru v databázi
    const filePath = `/uploads/${req.file.filename}`;
    res.json({ success: true, profileImage: filePath });
});

app.listen(port, () => {
    console.log(`Server běží na http://localhost:${port}`);
});

