output "server_app_repository_url" {
  value = aws_ecr_repository.server_app.repository_url
}

output "react_app_repository_url" {
  value = aws_ecr_repository.react_app.repository_url
}