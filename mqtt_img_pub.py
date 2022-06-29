import paho.mqtt.publish as publish

f= open("laptop.png")
filecontent = f.read()
byteArr = bytearray(filecontent)

publish.single('topic', byteArr, qos=1, hostname='m2m.eclipse.org')

