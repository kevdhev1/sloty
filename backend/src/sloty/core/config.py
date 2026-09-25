from typing import Literal

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_env: Literal["development", "production", "testing"] = "development"
    app_host: str = "127.0.0.1"
    app_port: int = 8000

    database_url: str

    session_cookie_name: str = "sloty_session"
    session_ttl_days: int = 7
    session_cookie_secure: bool = False
    session_cookie_samesite: Literal["lax", "strict", "none"] = "lax"
    session_cookie_domain: str | None = None

    csrf_cookie_name: str = "sloty_csrf"
    csrf_secret: SecretStr

    frontend_url: str = "https://localhost:5173"

    resend_api_key: SecretStr | None = None
    resend_from_email: str | None = None

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
    )

settings = Settings()   # pyright: ignore[reportCallIssue]
