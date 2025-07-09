from sqlalchemy import Column, Integer, String, DateTime
from database.database import Base
from datetime import datetime

class WifiConfig(Base):
    __tablename__ = 'wifi_config'

    id = Column(Integer, primary_key=True, index=True)
    ssid = Column(String(255), nullable=False)
    password = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)
