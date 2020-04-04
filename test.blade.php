<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>test</title>
</head>
<body>
    
    <form action="{{route('some')}}" method="POST">
    @csrf
    <input type="text" name="username">
    <br><br>
    <input type="text" name="password">
    <br><br>
    <input type="submit" value="submit">
    </form>
</body>
</html>