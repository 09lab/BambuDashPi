from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class SuccessResponse(BaseModel):
    result: str = "success"

class ErrorResponse(BaseModel):
    err_code: int
    reason: str
    created_at: datetime
