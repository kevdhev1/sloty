from fastapi import FastAPI

from sloty.config import Settings

settings = Settings()  # pyright: ignore[reportCallIssue]

app = FastAPI()


@app.get("/health")
async def health():
    return {"status": "ok"}
