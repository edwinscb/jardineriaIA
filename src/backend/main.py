from fastapi import FastAPI

app = FastAPI(
    title="Jardineria IA Backend",
    description="API para monitoreo, diagnóstico y gestión de plantas con IA.",
    version="0.1.0",
)

@app.get("/")
async def read_root():
    return {"message": "Welcome to Jardineria IA Backend!"}

@app.get("/health")
async def health_check():
    return {"status": "ok", "message": "Backend is running and healthy!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)