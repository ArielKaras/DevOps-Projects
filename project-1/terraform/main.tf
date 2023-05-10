resource "aws_ecr_repository" "server_app" {
  name = "server-app"
}

resource "aws_ecr_repository" "react_app" {
  name = "react-app"
}
