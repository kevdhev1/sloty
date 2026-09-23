from fastapi import FastAPI

from sloty.core.config import Settings

settings = Settings()  # pyright: ignore[reportCallIssue]

app = FastAPI()


@app.get("/health")
async def health():
    return {"status": "ok"}
