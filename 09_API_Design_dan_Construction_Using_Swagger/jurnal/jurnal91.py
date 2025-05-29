# Import library
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn

# Inisialisasi FastAPI
app = FastAPI()

# Konfigurasi ngrok (ganti dengan auth_token milikmu)
conf.get_default().auth_token = "2wD8rcIDAJCX8DomoxwQdb6JwhX_5pQTkn8qd58sd1Gx1UzaN"

# MODEL
class Movie(BaseModel):
    Title: str
    Director: str
    Stars: List[str]
    Description: str

# DATA DEFAULT (Top 3 IMDb per Mei 2025)
movie_list = [
    {
        "Title": "The Shawshank Redemption",
        "Director": "Frank Darabont",
        "Stars": ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
        "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
    },
    {
        "Title": "The Godfather",
        "Director": "Francis Ford Coppola",
        "Stars": ["Marlon Brando", "Al Pacino", "James Caan"],
        "Description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
    },
    {
        "Title": "The Dark Knight",
        "Director": "Christopher Nolan",
        "Stars": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests."
    },
]

# ENDPOINTS
@app.get("/api/Movies")
def get_all_movies():
    return movie_list

@app.get("/api/Movies/{id}")
def get_movie_by_id(id: int):
    if 0 <= id < len(movie_list):
        return movie_list[id]
    return {"error": "Movie tidak ditemukan"}

@app.post("/api/Movies")
def add_movie(movie: Movie):
    movie_list.append(movie.dict())
    return {"pesan": "Movie berhasil ditambahkan"}

@app.delete("/api/Movies/{id}")
def delete_movie(id: int):
    if 0 <= id < len(movie_list):
        deleted = movie_list.pop(id)
        return {"pesan": "Movie berhasil dihapus", "data": deleted}
    return {"error": "Movie tidak ditemukan"}

# Jalankan server
nest_asyncio.apply()
public_url = ngrok.connect(8000)
print("🎬 Swagger UI:", public_url.public_url + "/docs")
print("🎬 API URL:", public_url.public_url)

uvicorn.run(app, port=8000)