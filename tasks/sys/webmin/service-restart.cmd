echo "<pre style='color: #ccc; background-color: black'>" && service xtuple restart $xtName $xtVersion $instanceType | ansi2html && echo "</pre>"
Restart a Particular xTuple Server (service xtuple <name> <version> <type> restart)
root 1 1 0 0 1 3600 0 -
xtVersion:0:4.5.0:1,1:xTuple Version
xtName:1::1,1:xTuple User Account Name
instanceType:9:/etc/webmin/xtuple/types.menu:1,1:Instance Type
