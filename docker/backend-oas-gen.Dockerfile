FROM golang:1.22

RUN mkdir /go/src/openapi
RUN mkdir /go/src/model
WORKDIR /go/src

RUN go install github.com/deepmap/oapi-codegen/cmd/oapi-codegen@latest
