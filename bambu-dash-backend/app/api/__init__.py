from fastapi import APIRouter
from . import wifi, printer

router = APIRouter(
    prefix="/api/v1",
    tags=["main_router"],
    responses={404: {"description": "Not found"}},
)

router.include_router(wifi.router)
router.include_router(printer.router)