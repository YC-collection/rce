cmdList = [{"info": "Authentication Message", "cmd": {"robotID": "testRobot", "userID": "testUser"}, "name": "cmd_AU_debug"}, {"info": "Initialization Message", "cmd": {"data": {"robotID": "testRobot", "userID": "testUser", "key": "addKeyHere"}, "type": "IN"}, "name": "cmd_IN_debug"}, {"info": "Create Container", "cmd": {"data": {"containerTag": "containerTag01"}, "type": "CC"}, "name": "cmd_CC_debug"}, {"info": "Destroy Container", "cmd": {"data": {"containerTag": "containerTag01"}, "type": "DC"}, "name": "cmd_CC_debug"}, {"info": "Service Test - Configure Components", "cmd": {"data": {"addNodes": [{"containerTag": "testRobot", "namespace": "/testNode", "pkg": "Test", "nodeTag": "srvTestNode", "exe": "Test.py"}], "addInterfaces": [{"className": "Test/QueryTest", "interfaceType": "ServiceProviderConverter", "addr": "", "endpointTag": "testRobot", "interfaceTag": "srvTestConverter"}, {"className": "Test/QueryTest", "interfaceType": "ServiceInterface", "addr": "/test", "endpointTag": "containerTag01", "interfaceTag": "srvTestInterface"}]}, "type": "CN"}, "name": "cmd_CN_srvTest"}, {"info": "Service Test - Configure Connection", "cmd": {"data": {"connect": [{"tagA": "srvTestConverter", "tagB": "srvTestInterface"}]}, "type": "CX"}, "name": "cmd_CN_srvTest"}, {"info": "Service Test - Data Message", "cmd": {"data": {"dest": "srvTestConverter", "msgID": "srvTest_01", "type": "Test/QueryTest", "msg": {"a": 5, "b": -3}, "orig": "testRobot"}, "type": "DM"}, "name": "cmd_DM_srvTest"}]