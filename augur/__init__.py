#SPDX-License-Identifier: MIT
"""
Augur's main module
"""

# Metadata
from .metadata import __version__

# Functions
from .util import logger

# Classes
from .application import Application

# Plugins
from .augurplugin import AugurPlugin
