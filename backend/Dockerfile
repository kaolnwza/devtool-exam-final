FROM golang:1.17.2

WORKDIR /go/app

COPY . .

RUN go mod download

# ENV PORT 3000

RUN go build

CMD ["./devtool-exam-final"]