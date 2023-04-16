const model = new NeuralNetwork(2, 3, 1); // Création du réseau de neurones avec 2 entrées, 3 neurones dans la couche cachée et 1 sortie
model.train(5000); // Entraînement du réseau de neurones avec 5000 itérations

function predict() {
  // Récupération des valeurs d'entrée
  const x = document.getElementById("input-x").value;
  const y = document.getElementById("input-y").value;

  // Prédiction avec le réseau de neurones
  const input = [x, y];
  const output = model.predict(input);

  // Affichage de la prédiction
  document.getElementById("prediction").textContent = output[0].toFixed(2);
}
