from sqlalchemy.orm import Session
from repositories import wifi_repository
from schemas.wifi import WifiConfigCreate
from core.exception_handler import AppException

def add_wifi_config(db: Session, wifi: WifiConfigCreate):
    try:
        print(wifi)
        return wifi_repository.create_wifi_config(db, wifi)
    except Exception as e:
        raise AppException(err_code=101, reason="ERR_DB_SESSION_FAILED")
def fetch_wifi_configs(db: Session):
    return wifi_repository.get_wifi_configs(db)