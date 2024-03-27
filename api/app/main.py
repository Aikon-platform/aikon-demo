from . import config
from flask import Flask

import dramatiq
from dramatiq.brokers.redis import RedisBroker
from dramatiq_abort import Abortable, backends
from dramatiq.middleware import CurrentMessage
from dramatiq.results.backends import RedisBackend
from .utils.logging import LoggedResults

# Flask setup
app = Flask(__name__)
app.config.from_object(config.FLASK_CONFIG)

# Dramatiq setup
broker = RedisBroker(url=config.BROKER_URL)

event_backend = backends.RedisBackend(client=broker.client)
abortable = Abortable(backend=event_backend)

result_backend = RedisBackend(client=broker.client)
results = LoggedResults(backend=result_backend)

broker.add_middleware(abortable)
broker.add_middleware(CurrentMessage())
broker.add_middleware(results)

dramatiq.set_broker(broker)

# Import routes and tasks
from .routes import *
from .routes_watermarks import *
from .tasks import *