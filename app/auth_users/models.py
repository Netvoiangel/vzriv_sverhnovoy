from sqlalchemy import Enum, text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db import Base, int_pk, str_uniq 

class User(Base):
    id: Mapped[int_pk]
    first_name: Mapped[str]
    last_name: Mapped[str]
    email: Mapped[str_uniq]
    password: Mapped[str]

    extend_existing = True
