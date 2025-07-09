from sqlalchemy.orm import Session
from model.wifi import WifiConfig
from schemas.wifi import WifiConfigCreate
from utils.tools import encrypt_string

def create_wifi_config(db: Session, wifi_config: WifiConfigCreate):
    try:
        #wifi_item = WifiConfig(**wifi_config.dict())
        #wifi_item.password = encrypt_string(wifi_item.password)
        wifi_item = WifiConfig(**wifi_config.dict())
        db.add(wifi_item)
        db.commit()
        db.refresh(wifi_item)
        return wifi_item
    except Exception as e:
        db.rollback()
        print(e)
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()