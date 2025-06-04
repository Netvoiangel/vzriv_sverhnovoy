from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .auth_router import router as auth_router

app = FastAPI(
    title="Authentication API",
    description="API for user authentication with JWT tokens, including login and user information endpoints.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include authentication router
app.include_router(auth_router)

@app.get(
    "/",
    summary="Root endpoint",
    description="Returns a welcome message for the Authentication API.",
    responses={
        200: {
            "description": "Welcome message",
            "content": {
                "application/json": {
                    "example": {"message": "Welcome to the Authentication API"}
                }
            }
        }
    }
)
async def root():
    return {"message": "Welcome to the Authentication API"}
