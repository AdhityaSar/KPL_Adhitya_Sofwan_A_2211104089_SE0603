from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
import nest_asyncio
from pyngrok import ngrok, conf
import uvicorn

# Inisialisasi FastAPI
app = FastAPI()

# Konfigurasi ngrok (ganti dengan token kamu jika perlu)
conf.get_default().auth_token = "2wD8rcIDAJCX8DomoxwQdb6JwhX_5pQTkn8qd58sd1Gx1UzaN"

# MODEL
class Mahasiswa(BaseModel):
    Name: str
    Nim: str
    Course: List[str]
    Year: int

# DATA DEFAULT (Anggota kelompok TUBES)
mahasiswa_list = [
    {
        "Name": "Kholil Abdi Prasetyo",
        "Nim": "2211104071",
        "Course": ["Pemrograman", "Matematika Diskrit", "Pancasila"],
        "Year": 2022
    },
    {
        "Name": "Afif Ramadhani",
        "Nim": "2211104066",
        "Course": ["Pemrograman", "Kalkulus", "Basis Data"],
        "Year": 2022
    },
    {
        "Name": "Rosyid Mukti Wibowo",
        "Nim": "2211104076",
        "Course": ["Pemrograman", "UI/UX", "Bahasa Inggris"],
        "Year": 2022
    }
]

# ENDPOINTS
@app.get("/api/Mahasiswa")
def get_all_mahasiswa():
    return mahasiswa_list

@app.get("/api/Mahasiswa/{id}")
def get_mahasiswa_by_id(id: int):
    if 0 <= id < len(mahasiswa_list):
        return mahasiswa_list[id]
    return {"error": "Mahasiswa tidak ditemukan"}

@app.post("/api/Mahasiswa")
def add_mahasiswa(mahasiswa: Mahasiswa):
    mahasiswa_list.append(mahasiswa.dict())
    return {"pesan": "Mahasiswa berhasil ditambahkan"}

@app.delete("/api/Mahasiswa/{id}")
def delete_mahasiswa(id: int):
    if 0 <= id < len(mahasiswa_list):
        deleted = mahasiswa_list.pop(id)
        return {"pesan": "Mahasiswa berhasil dihapus", "data": deleted}
    return {"error": "Mahasiswa tidak ditemukan"}

# Jalankan server dengan ngrok
nest_asyncio.apply()
public_url = ngrok.connect(8000)
print("🎓 Swagger UI:", public_url.public_url + "/docs")
print("🎓 API URL:", public_url.public_url)

uvicorn.run(app, port=8000)