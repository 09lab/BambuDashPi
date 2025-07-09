from fastapi import Request
from fastapi.responses import JSONResponse
from datetime import datetime

class AppException(Exception):
    def __init__(self, err_code: int, reason: str):
        self.err_code = err_code
        self.reason = reason

async def app_exception_handler(request: Request, exc: AppException):
    return JSONResponse(
        status_code=400,
        content={
            "err_code": exc.err_code,
            "reason": exc.reason,
            "created_at": datetime.utcnow().isoformat() + "Z"
        }
    )
