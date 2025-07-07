from fastapi import APIRouter

router = APIRouter(
    prefix="/wifi",
    tags=["wifi"],
    responses={404: {"description": "Not found"}},
)

@router.get('/')
async def wifi():
    return 'wifi'

@router.get('/config')
async def config():
    return 'getWifiConfig'
