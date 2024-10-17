const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmIzZGIzYmE0MDE3ZmMzZjZlNTljNzllYjE1NzJjYSIsIm5iZiI6MTcyOTE2MDQ4NC4wMzQ2Niwic3ViIjoiNjcxMGUzODJkYjc5YzljZWFlMGVlYjVhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-MZfxUQRmcNHl7nP9xx0po3q3HvW5mQoqDMZ1rfXYWQ'
    }
};

fetch('https://api.themoviedb.org/3/trending/movie/day?language=fr-FR', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));