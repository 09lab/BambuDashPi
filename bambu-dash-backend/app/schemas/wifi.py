from pydantic import BaseModel
from datetime import datetime

class WifiConfigCreate(BaseModel):
    ssid: str
    password: str

class WifiConfigResponse(BaseModel):
    id: int
    ssid: str
    created_at: datetime

    model_config = {
        "from_attributes": True
    }
