(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{398:function(e,n,a){e.exports=a.p+"assets/img/2020-06-02-16-55-07.0e357f82.png"},399:function(e,n,a){e.exports=a.p+"assets/img/2020-06-03-08-25-46.794d8d56.png"},454:function(e,n,a){"use strict";a.r(n);var t=a(54),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"lua引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lua引擎"}},[e._v("#")]),e._v(" Lua引擎")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=hnZyZio5FBQ&list=PLNffuWEygffbbT9Vz-Y1NXQxv2m6mrmHr&index=69",target:"_blank",rel:"noopener noreferrer"}},[e._v("视频教程"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://wiki.cheatengine.org/index.php?title=Lua",target:"_blank",rel:"noopener noreferrer"}},[e._v("ce lua api"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("通用修改器，文件->从表单中生成通用修改器，会打开一个ui编辑器，可也打包为exe可执行文件，和运行lua脚本")]),e._v(" "),t("p",[e._v("内存浏览器 -> 工具-> Lua引擎, 快捷键 ctrl+l 可以打开一个lua的调试器")]),e._v(" "),t("p",[e._v("这里使用了"),t("code",[e._v("xxx")]),e._v("符号，所以脚本需要打开，不然会失败：\n"),t("img",{attrs:{src:a(398),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"添加断点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加断点"}},[e._v("#")]),e._v(" 添加断点")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('debugProcess()\n\nmyaddress = getAddress("game.exe+4BA45")\ndebug_setBreakpoint(myaddress);\n')])])]),t("p",[e._v("在断下后，可以获取数据:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('debugProcess()\nmyaddress = getAddress("PlantsVsZombies.exe+4BA45")\n\nmyvar=EAX\nprint(myvar)\nprint(EAX)\nprint(EDI)\ndebug_removeBreakpoint(myaddress);\n')])])]),t("h2",{attrs:{id:"读写指针"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#读写指针"}},[e._v("#")]),e._v(" 读写指针")]),e._v(" "),t("p",[t("img",{attrs:{src:a(399),alt:""}})]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("print(readInteger('[[\"PlantsVsZombies.exe\"+0x379618]+0x868]+0x5578'))\nwriteInteger('[[\"PlantsVsZombies.exe\"+0x379618]+0x868]+0x5578', 200)\n")])])]),t("h2",{attrs:{id:"将aa脚本转化为lua"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将aa脚本转化为lua"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=eEg3q2qocwQ&list=PLNffuWEygffbbT9Vz-Y1NXQxv2m6mrmHr&index=71",target:"_blank",rel:"noopener noreferrer"}},[e._v("将AA脚本转化为Lua"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("AA脚本:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('define(address,"PlantsVsZombies.exe"+B2FF0)\ndefine(bytes,3B 47 28 7E 12)\n\n[ENABLE]\nAssert(address,bytes)\nAlloc(newmem,$1000)\n\nlabel(return)\n\nnewmem:\n  cmp eax,[edi+28]\n  nop\n  nop\n  jmp return\n\naddress:\n  jmp newmem\nreturn:\n\n[DISABLE]\naddress:\n  db bytes\n\ndeAlloc(newmem)\n')])])]),t("p",[e._v("Lua AA Script:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{$lua}\n\n[ENABLE]\nbytes = {0x3B , 0x47 , 0x28 , 0x7E , 0x12}\n\n-- 要创建符号autoAssemble里面才能访问\naddress = \'"PlantsVsZombies.exe"+B2FF0\'\nregisterSymbol("address", address)\n\nmem = allocateMemory(0x1000)\nregisterSymbol("newmem", mem)\n\nautoAssemble([[\n  label(return)\n\n  newmem:\n    cmp eax,[edi+28]\n    nop\n    nop\n    jmp return\n\n  address:\n    jmp newmem\n  return:\n]])\n\n[DISABLE]\nwriteBytes(address, bytes)\n\nunregisterSymbol("newmem")\nunregisterSymbol("address")\ndeAlloc(mem, 0x1000)\n\naddress = nil\nmem = nil\nbytes = nil\n')])])]),t("p",[e._v("在Lua引擎中:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('function initYg()\n  bytes = {0x3B , 0x47 , 0x28 , 0x7E , 0x12}\n\n  -- 要创建符号autoAssemble里面才能访问\n  address = \'"PlantsVsZombies.exe"+B2FF0\'\n  registerSymbol("address", address)\n\n  mem = allocateMemory(0x1000)\n  registerSymbol("newmem", mem)\n\n  autoAssemble([[\n    label(return)\n\n    newmem:\n      cmp eax,[edi+28]\n      nop\n      nop\n      jmp return\n\n    address:\n      jmp newmem\n    return:\n  ]])\nend\n\nfunction disposeYg()\n  writeBytes(address, bytes)\n\n  unregisterSymbol("newmem")\n  unregisterSymbol("address")\n  deAlloc(mem, 0x1000)\n\n  address = nil\n  mem = nil\n  bytes = nil\nend\n')])])]),t("h2",{attrs:{id:"使用settimeout和setinterval更简单的计时器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用settimeout和setinterval更简单的计时器"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/januwA/CEScript-timer",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用"),t("code",[e._v("setTimeout")]),e._v("和"),t("code",[e._v("setInterval")]),e._v("更简单的计时器"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"自动附加到进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自动附加到进程"}},[e._v("#")]),e._v(" 自动附加到进程")]),e._v(" "),t("p",[e._v("每隔1s去找'game2.exe'是否运行，找到后附加进程并且结束计时器")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("local PROCESS_NAME = 'game2.exe'\n\nid = setInterval(function()\n  print('find...')\n  if getProcessIDFromProcessName(PROCESS_NAME) ~= nil then\n     print('finded.')\n    clearInterval(id)\n    openProcess(PROCESS_NAME)\n  end\nend, 1000)\n")])])]),t("h2",{attrs:{id:"使用ini配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用ini配置"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://santoslove.github.io/inifile.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("使用ini配置"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("将"),t("code",[e._v("inifile.lua")]),e._v("文件放在autorun文件夹中，并且将inifile改为全局对象")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{$lua}\nif syntaxcheck then return end\n\n[ENABLE]\n\n--[[iniTable = {}\n\niniTable['1'] = {x = 10, y = 100, z = 22}\niniTable['2'] = {x = 20, y = 200, z = 33}\niniTable['3'] = {x = 30, y = 300, z = 44}\n\ninifile.save('example.ini', iniTable)\n--]]\n\n iniTable = inifile.parse('example.ini')\n showMessage(iniTable['1']['x'])\n \n[DISABLE]\n")])])]),t("p",[e._v("或者将"),t("code",[e._v("inifile.lua")]),e._v("放在脚本同目录，然后导入使用")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{$lua}\nif syntaxcheck then return end\n\nlocal INI = require \"inifile\"\n\n[ENABLE]\n iniTable = INI.parse('example.ini')\n showMessage(iniTable['1']['x'])\n \n[DISABLE]\n")])])]),t("h2",{attrs:{id:"导入lua文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入lua文件"}},[e._v("#")]),e._v(" 导入lua文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('-- 只会在第一次导入\nrequire("mmm")\n\n-- 每次使用都会导入\ndofile("mmm.lua")\n')])])]),t("p",[e._v("如果你要调试就用"),t("code",[e._v("dofile")]),e._v("否则就用"),t("code",[e._v("require")]),e._v("，lua脚本需要和CT文件放在同一级目录")]),e._v(" "),t("ul",[t("li",[e._v("https://wiki.cheatengine.org/index.php?title=Tutorials:Lua:Basics#Script_windows")])]),e._v(" "),t("h2",{attrs:{id:"转换工具函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#转换工具函数"}},[e._v("#")]),e._v(" 转换工具函数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("local bt = floatToByteTable(1000.0)\n\n for k, v in pairs(bt) do\n   print(string.format('%02X', v))\n end\n\n print( byteTableToFloat({0x00, 0x00, 0x7a, 0x44}) )\n\nprint('-----')\nbt =  dwordToByteTable(10)\n for k, v in pairs(bt) do\n   print(string.format('%02X', v))\n end\n print(\tbyteTableToDword({0x0a,0x00,0x00,0x00}) )\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("00 \n00 \n7A \n44 \n1000.0 \n----- \n0A \n00 \n00 \n00 \n10 \n")])])]),t("h2",{attrs:{id:"在远程进程中执行messageboxa-x64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在远程进程中执行messageboxa-x64"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://forum.cheatengine.org/viewtopic.php?t=604716&sid=69f971193a403f527ea8d96f48007867",target:"_blank",rel:"noopener noreferrer"}},[e._v("在远程进程中执行MessageBoxA x64"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("if messageBoxACaller==nil then\n  if autoAssemble([[\n    alloc(messageBoxACaller,128)\n    registersymbol(messageBoxACaller)\nmessageBoxACaller:\n    sub rsp,0x28\n    mov r9,[rcx+18] //button\n    mov r8,[rcx+10] //caption\n    mov rdx,[rcx+8] //text\n    mov rcx,[rcx] //hwnd\n    call MessageBoxA\n\n    add rsp,0x28\n    ret\n\n  ]]) then\n    messageBoxACaller=getAddressSafe('messageBoxACaller')\n  end\nend\n\nif messageBoxACaller==nil then\n  error('autoAssemble failed')\nend\n\nfunction MessageBox(hwnd, message, caption, button)\n  -- 申请一块内存,返回地址\n  local mymem=allocateMemory(512)\n\n  -- 从申请得到的地址开始写入数据\n  local captionaddress\n  writeString(mymem, message)\n  writeBytes(mymem+#message,0) --0 terminator\n  captionaddress=mymem+#message+1\n\n  -- 偏移地址后，继续写入数据\n  writeString(captionaddress,caption)\n  writeBytes(captionaddress+#caption,0)\n\n  -- 偏移地址后，继续写入数据\n  local params=captionaddress+#caption+1\n  writeQword(params,hwnd) --hwnd\n  writeQword(params+8,mymem) --text\n  writeQword(params+16,captionaddress) --caption\n  writeQword(params+24,button) --button (0=ok)\n\n  -- 执行函数传入params地址，并等待返回\n  local r = executeCode(messageBoxACaller,params)\n\n  deAlloc(mymem)\n  return r\nend\n\nprint( MessageBox(0, 'BLA','XXX',2) )\n")])])]),t("h2",{attrs:{id:"设置游戏速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置游戏速度"}},[e._v("#")]),e._v(" 设置游戏速度")]),e._v(" "),t("p",[e._v("1为正常,大于1加速，小于1减速")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("speedhack_setSpeed(1.5)\nspeedhack_getSpeed()\n")])])]),t("h2",{attrs:{id:"aobscan-找到过于复杂的字节集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aobscan-找到过于复杂的字节集"}},[e._v("#")]),e._v(" AOBScan 找到过于复杂的字节集")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("local res = AOBScan(\"A3 24 37 4B 00\")\n\nif res == nil then return end\n\n-- 可能返回多个相同字节集的地方\nfor i=0, res.Count-1, 1 do\n  -- print( type(res[i]) ) string\n  -- print(  res[i] + 3 ) 移动3字节\n\n  -- 判断其中一个字节,找到自己想要的位置\n  if  readBytes( '0x'..(res[i]+3) ) ~= 0 then\n\n    -- 注册helloSymbol符号\n    registerSymbol('helloSymbol', res[i])\n  end\nend\nres.destroy()\n")])])]),t("h2",{attrs:{id:"重写多个相同的字节集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#重写多个相同的字节集"}},[e._v("#")]),e._v(" 重写多个相同的字节集")]),e._v(" "),t("p",[e._v("将找到的所有字节集全部指向设置的函数")]),e._v(" "),t("p",[e._v("创建函数newmemTest:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[ENABLE]\n// 申请100字节大小的内存来存放函数\nalloc(newmemTest,$100)\nregistersymbol(newmemTest)\n\nnewmemTest:\n  mov [ecx+70],(float)0\n  ret\n\n[DISABLE]\nunregistersymbol(newmemTest)\ndealloc(newmemTest)\n")])])]),t("p",[e._v("扫描所有字节集，全部重写：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{$lua}\n\nif syntaxcheck then return end\n\n[ENABLE]\n-- 获取秒杀函数地址\nlocal funAddres = getAddressSafe('newmemTest')\nif funAddres == nil then return end\n\n\n-- 获取所有\naobs = AOBScan(\"F3 0F 11 49 70\")\nif aobs == nil then return end\n\n\nfor i=0, aobs.Count-1, 1 do\n  -- 获取新的字节集\n  -- https://github.com/januwA/ce-plugins/blob/master/getJmpNewBytes.lua\n  local newJmpBytes = getJmpNewBytes('0x'..aobs[i], funAddres, 5, { 0xE8 })\n  -- 写入新的字节集\n  writeBytes('0x'..aobs[i], newJmpBytes)\nend\n \n \n[DISABLE]\n-- 恢复所有字节集\nfor i=0, aobs.Count-1, 1 do\n  writeBytes('0x'..aobs[i], {0xF3, 0x0F, 0x11, 0x49, 0x70})\nend\naobs.destroy()\naobs = nil\n")])])]),t("h2",{attrs:{id:"获取当前脚本memoryrecord上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取当前脚本memoryrecord上下文"}},[e._v("#")]),e._v(" 获取当前脚本MemoryRecord上下文")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" -- getAddressList().getMemoryRecordByDescription('des').Active = false\n memrec.Active = false\n")])])]),t("h2",{attrs:{id:"aa脚本调用lua函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#aa脚本调用lua函数"}},[e._v("#")]),e._v(" AA脚本调用LUA函数")]),e._v(" "),t("ul",[t("li",[e._v("https://forum.cheatengine.org/viewtopic.php?t=605733")])]),e._v(" "),t("p",[e._v("x86")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{$lua}\nfunction myfunction(p1, p2, p3)\n  print(p1, p2, p3)\n  -- mov eax,#100\n  return 100\nend\n{$asm}\n\n// =================================== 加载dll\nloadlibrary(luaclient-i386.dll)\nluacall(openLuaServer('CELUASERVER'))\nCELUA_ServerName:\n  db 'CELUASERVER',0\n// ===================================\n\n\ndefine(address,\"game2.exe\"+1575)\ndefine(bytes,A3 24 37 4B 00)\n\n[ENABLE]\n\nassert(address,bytes)\nalloc(newmem,$1000)\n\nlabel(code)\nlabel(return)\n\n// ==================== 函数id和函数名\nalloc(functionid,4)\nalloc(functionname,16)\nfunctionid:\ndd 0\nfunctionname:\ndb 'myfunction',0\n// ====================\n\n\nnewmem:\n  push eax\n  push edx\n  push ecx\n\n  mov ecx,[functionid]\n  test ecx,ecx\n  jne call_my_fun // 有functionid 跳\n\n  // functionid = CELUA_GetFunctionReferenceFromName(functionname)\n  push eax\n  push functionname\n  call CELUA_GetFunctionReferenceFromName\n  mov [functionid],eax\n  mov ecx,eax\n  pop eax\n\ncall_my_fun:\n  push ebp\n  mov ebp,esp\n\n  // 参数顺序 从左向右\n  sub esp,0C //allocate space ofr 1 parameter\n  mov [ebp-04],3   // p3\n  mov [ebp-08],2   // p2\n  mov [ebp-0c],eax // p1\n\n  // CELUA_ExecuteFunctionByReference(函数id, 函数需要多少参数, 函数参数地址, 同步还是异步)\n  push 0 //0 同步跟新gui, 1 异步不会跟新gui\n  lea edx,[ebp-0C]\n  push edx //address of the parameter list\n  push 3 //number of parameters (1)\n  push ecx //functionid reference\n\n  call CELUA_ExecuteFunctionByReference\n\n  mov esp,ebp\n  pop ebp\n\n  pop ecx\n  pop edx\n  pop eax\n\ncode:\n  mov [game2.exe+B3724],eax\n  jmp return\n\naddress:\n  jmp newmem\nreturn:\n\n[DISABLE]\naddress:\n  db bytes\n\ndealloc(newmem)\n")])])]),t("p",[e._v("x64")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{$lua}\nfunction myfunction(p1, p2, p3)\n  print(p1, p2, p3)\n  -- mov eax,0\n  return 0\nend\n{$asm}\n\n//======================================\nloadlibrary(luaclient-x86_64.dll)\nluacall(openLuaServer('CELUASERVER'))\nCELUA_ServerName:\n  db 'CELUASERVER',0\n\nalloc(functionid,4)\nalloc(functionname,16)\nfunctionid:\n  dd 0\nfunctionname:\n  db 'myfunction',0\n//======================================\n\n\ndefine(address,\"Tutorial-x86_64.exe\"+2B08C)\ndefine(bytes,29 83 F0 07 00 00)\n\n[ENABLE]\nassert(address,bytes)\nalloc(newmem,$1000,\"Tutorial-x86_64.exe\"+2B08C)\n\nlabel(code)\nlabel(return)\n\nnewmem:\n  // 保存旧寄存器、函数调用和paramlist分配空间（并保持16字节对齐）\n  // 旧寄存器 7*8=56\n  // 函数调用 4*8=32\n  // paramlist 3*8=24\n  // 56+32+24=112=0x70\n  sub rsp,70\n  mov [rsp+20],rcx // 这里偏移20，将前面的位置留给函数内部\n  mov [rsp+28],rdx\n  mov [rsp+30],r8\n  mov [rsp+38],r9\n  mov [rsp+40],r10\n  mov [rsp+48],r11\n  mov [rsp+50],rax\n  //[rsp+58]=paramlist\n\n  mov ecx,[functionid]\n  test ecx,ecx\n  jne hasrefid\n\n  // functionid = CELUA_GetFunctionReferenceFromName(functionname)\n  mov rcx,functionname\n  call CELUA_GetFunctionReferenceFromName\n  mov [functionid],eax\n  mov ecx,eax\n\nhasrefid:\n\n  // CELUA_ExecuteFunctionByReference(rcx 函数id, rdx 函数需要多少参数, r8 函数参数地址, r9 同步还是异步)\n  mov rdx,3\n\n  lea r8,[rsp+58] // paramlist\n\n  mov rax,[rsp+50]\n  mov [r8],rax            // p1\n\n  mov rax,2\n  mov [r8+8],rax  // p2\n\n  mov rax,3\n  mov [r8+10],rax  // p3\n\n  mov r9,0\n  call CELUA_ExecuteFunctionByReference\n\n  mov rcx,[rsp+20]\n  mov rdx,[rsp+28]\n  mov r8,[rsp+30]\n  mov r9,[rsp+38]\n  mov r10,[rsp+40]\n  mov r11,[rsp+48]\n  //mov rax,[rsp+50]\n  add rsp,70\ncode:\n  sub [rbx+000007F0],eax\n  jmp return\n\naddress:\n  jmp newmem\n  nop\nreturn:\n\n[DISABLE]\naddress:\n  db bytes\n\ndealloc(newmem)\n")])])]),t("h2",{attrs:{id:"xbox-按键"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xbox-按键"}},[e._v("#")]),e._v(" XBOX 按键")]),e._v(" "),t("ul",[t("li",[e._v("https://wiki.cheatengine.org/index.php?title=Lua:getXBox360ControllerState")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("xboxState = getXBox360ControllerState()\nrequire 'pl.pretty'.dump(xboxState)\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\n  ControllerID = 0,\n  PacketNumber = 4587,\n\n  GAMEPAD_A = false,\n  GAMEPAD_B = false,\n  GAMEPAD_X = false,\n  GAMEPAD_Y = false,\n\n  GAMEPAD_BACK = false,\n  GAMEPAD_START = false,\n  \n  // 十字键\n  GAMEPAD_DPAD_DOWN = false,\n  GAMEPAD_DPAD_LEFT = false,\n  GAMEPAD_DPAD_RIGHT = false,\n  GAMEPAD_DPAD_UP = false,\n  \n  // LB和RB\n  GAMEPAD_LEFT_SHOULDER = false,\n  GAMEPAD_RIGHT_SHOULDER = false,\n  \n  // LT和RT\n  LeftTrigger = 0,\n  RightTrigger = 97,\n  \n  //左摇杆按下和右摇杆按下\n  GAMEPAD_LEFT_THUMB = false,\n  GAMEPAD_RIGHT_THUMB = false,\n  \n  // 左摇杆 -32768至32767\n  ThumbLeftX = 328,\n  ThumbLeftY = -1536,\n  \n  // 右摇杆 -32768至32767\n  ThumbRightX = 649,\n  ThumbRightY = -3097,\n\n  // 不知道是什么\n  wButtons = 0\n} \n")])])]),t("h2",{attrs:{id:"获取打开的进程id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取打开的进程id"}},[e._v("#")]),e._v(" 获取打开的进程ID")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("pid = getOpenedProcessID()\n")])])]),t("h2",{attrs:{id:"获取目标进程的窗口句柄"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取目标进程的窗口句柄"}},[e._v("#")]),e._v(" 获取目标进程的窗口句柄")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("w=getWindow(getForegroundWindow(), GW_HWNDFIRST)\n\npid=getOpenedProcessID()\n\nwhile w and (w~=0) do\n  if getWindowProcessID(w)==pid then\n    print(w..' - '..getWindowCaption(w)..'('..getWindowClassName(w)..')')\n  end\n  w=getWindow(w,GW_HWNDNEXT)\nend\n")])])]),t("h2",{attrs:{id:"获取窗口的rect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取窗口的rect"}},[e._v("#")]),e._v(" 获取窗口的RECT")]),e._v(" "),t("ul",[t("li",[e._v("https://www.cheatengine.org/forum/viewtopic.php?t=613162&postdays=0&postorder=asc&start=0&sid=5ae16ed6a3b6d91917d56252b0d82046")]),e._v(" "),t("li",[e._v("https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getwindowrect")]),e._v(" "),t("li",[e._v("https://docs.microsoft.com/en-us/windows/win32/api/windef/ns-windef-rect")]),e._v(" "),t("li",[e._v("https://wiki.cheatengine.org/index.php?title=Lua:createMemoryStream")]),e._v(" "),t("li",[e._v("使用getTargetWindowRect https://github.com/januwA/ce-plugins")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("dump( getTargetWindowRect() )\n")])])]),t("h2",{attrs:{id:"在lua中调用win32-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在lua中调用win32-api"}},[e._v("#")]),e._v(" 在LUA中调用win32 API")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('if executeCodeLocalEx("MessageBoxA", 0, "a", "title", 0) then\n  print("ok")\nend\n')])])])])}),[],!1,null,null,null);n.default=s.exports}}]);