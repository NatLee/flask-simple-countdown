FROM python:3.9-alpine
ENV WORDIR /src
WORKDIR $WORDIR

COPY ./src $WORDIR
RUN pip install -r requirements.txt
