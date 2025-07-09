from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database.database import get_db
from schemas.wifi import WifiConfigCreate
from schemas.common import SuccessResponse
from services import wifi_service

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

@router.post("/config", response_model=SuccessResponse)
def create_wifi_config(wifi: WifiConfigCreate, db: Session = Depends(get_db)):
    print("get wifi config request")
    wifi_service.add_wifi_config(db, wifi)
    return {"result": "success"}
