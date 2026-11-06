const express = require('express');
const app = express();
const port = 3000;

let totalFichiers = 0;
let totalOctets = 0;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Dashboard Chef</title>
                <meta http-equiv="refresh" content="2">
                <style>
                    body { font-family: sans-serif; background: #121212; color: white; text-align: center; padding: 50px; }
                    .card { background: #1e1e1e; padding: 20px; border-radius: 10px; display: inline-block; margin: 10px; min-width: 200px; border: 1px solid #333; }
                    h1 { color: #00ff88; }
                    .val { font-size: 2.5em; font-weight: bold; color: #00ffff; }
                </style>
            </head>
            <body>
                <h1>BYTEFLOW - SUPERVISION</h1>
                <p>Statut du réseau : <span style="color:#00ff88;font-weight:bold;">EN LIGNE</span></p>
                <div class="card">
                    <p>Fichiers Transférés</p>
                    <div class="val">${totalFichiers}</div>
                </div>
                <div class="card">
                    <p>Données Transitées</p>
                    <div class="val">${(totalOctets / 1024).toFixed(2)} KB</div>
                </div>
            </body>
        </html>
    `);
});

app.post('/transfert', (req, res) => {
    totalFichiers++;
    totalOctets += req.body.taille || 1024;
    res.json({ statut: "Paquets reçus avec succès !" });
});

app.listen(port, () => console.log("Serveur entreprise en ligne sur le port " + port));
