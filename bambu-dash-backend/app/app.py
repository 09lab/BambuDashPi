from fastapi import FastAPI

from api import router as main_router
from database.database import engine, Base
from core.exception_handler import AppException, app_exception_handler

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.include_router(main_router)
app.add_exception_handler(AppException, app_exception_handler)