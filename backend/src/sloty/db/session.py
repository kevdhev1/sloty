from sqlalchemy.ext.asyncio import (
    AsyncEngine,
    AsyncSession,
    async_sessionmaker,
    create_async_engine,
)

from sloty.core.config import settings

engine: AsyncEngine = create_async_engine(
    settings.database_url, connect_args={"ssl": "require"}
)

async_session = async_sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)
