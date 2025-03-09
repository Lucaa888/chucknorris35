document.getElementById('loadJoke').addEventListener('click', async () => {
    const category = document.getElementById('category').value;
    const url = category 
        ? https://api.chucknorris.io/jokes/random?category=${category} 
         'https://api.chucknorris.io/jokes/random';

    try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('joke').textContent = data.value;
    } catch (error) {
        console.error('Errore nel caricamento della battuta:', error);
        document.getElementById('joke').textContent = 'Errore nel caricamento della battuta.';
    }
});