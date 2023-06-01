<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="JavaScript_W3S.Home" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>   
    <script type="text/javascript" src="JS/W3School_Tutorials.js"></script>
</head>
<body>
    <%--<form id="form1" runat="server">--%>
        <div>

            <p id="resultPara"></p> <br />

            <div>
                <button onclick="JS_Function(10, 17)">Function</button>
                <button onclick="JS_Object()">Object</button>
                <button onclick="JS_Event()">Event</button>
                <button onclick="JS_String_Methods1()">String Methods 1</button>
                <button onclick="JS_String_Methods2()">String Methods 2</button>
                <button onclick="JS_String_Search()">String Search</button>
                <button onclick="JS_Numbers()">Numbers</button>
                <button onclick="JS_Other_Numbers()">Other Numbers</button>
                <button onclick=" JS_BigInt()">BigInt</button>
            </div>
        </div>
    <%--</form>--%>
          
</body>
</html>


