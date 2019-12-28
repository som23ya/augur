#SPDX-License-Identifier: MIT
"""
Non-metric API route definitions
"""

import importlib
import os
import glob

from .user import create_user_routes
from .repo import create_repo_routes
from .broker import create_broker_routes

def create_routes(server):
    create_user_routes(server)
    create_repo_routes(server)
    create_broker_routes(server)
