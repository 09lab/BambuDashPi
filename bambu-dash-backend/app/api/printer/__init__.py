from fastapi import APIRouter

router = APIRouter(
    prefix="/printer",
    tags=["printer"],
    responses={404: {"description": "Not found"}},
)

@router.get('/')
async def printer():
    return 'printer'

@router.get('/config')
async def config():
    return 'getPrinterConfig'
