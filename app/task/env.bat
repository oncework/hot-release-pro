echo %*
@setx ONCE_PATH "%*"
@setx PATH "%PATH%;%%ONCE_PATH%%"
