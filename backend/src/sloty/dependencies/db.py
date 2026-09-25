from collections.abc import AsyncIterator

from sqlalchemy.ext.asyncio import AsyncSession

from sloty.db.session import async_session


async def get_db_session() -> AsyncIterator[AsyncSession]:
    async with async_session() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
