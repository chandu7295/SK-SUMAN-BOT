const _0x229b68=_0x99ea;(function(_0x1b914e,_0x451f65){const _0x56744a=_0x99ea,_0x148b7c=_0x1b914e();while(!![]){try{const _0x3e184f=-parseInt(_0x56744a(0x8e))/0x1+-parseInt(_0x56744a(0x75))/0x2*(-parseInt(_0x56744a(0x7a))/0x3)+parseInt(_0x56744a(0x80))/0x4+-parseInt(_0x56744a(0x83))/0x5+parseInt(_0x56744a(0x72))/0x6+-parseInt(_0x56744a(0x90))/0x7+-parseInt(_0x56744a(0x76))/0x8;if(_0x3e184f===_0x451f65)break;else _0x148b7c['push'](_0x148b7c['shift']());}catch(_0x212f32){_0x148b7c['push'](_0x148b7c['shift']());}}}(_0x2fd4,0x90df4),module['exports']['config']={'name':_0x229b68(0x7d),'version':_0x229b68(0x70),'hasPermission':0x0,'credits':_0x229b68(0x85),'description':_0x229b68(0x8b),'commandCategory':_0x229b68(0x8a),'usage':_0x229b68(0x77),'cooldowns':0x5});function _0x99ea(_0x3798ff,_0x2f47c0){const _0x2fd4c4=_0x2fd4();return _0x99ea=function(_0x99ea41,_0x249601){_0x99ea41=_0x99ea41-0x6f;let _0x2e44c6=_0x2fd4c4[_0x99ea41];return _0x2e44c6;},_0x99ea(_0x3798ff,_0x2f47c0);}function _0x2fd4(){const _0x47bfd5=['CHARDS\x20BOT','trim','run','get','sendMessage','entertainment','Mirai\x20Bard\x20Version','We\x20regret\x20to\x20inform\x20you\x20that\x20the\x20attempt\x20to\x20fetch\x20data\x20from\x20the\x20API\x20has\x20failed.\x20We\x20apologize\x20for\x20the\x20inconvenience\x20and\x20will\x20address\x20the\x20issue\x20promptly.','push','387350rWfooq','https://chards-test-api.joshuag06.repl.co/bard?text=','5439931WpnMDg','arraybuffer','slice','axios','We\x20are\x20currently\x20searching\x20for\x20an\x20answer.\x20Please\x20hold\x20on\x20while\x20we\x20find\x20the\x20information\x20you\x27re\x20looking\x20for...','newResponse','0.0.1','Could\x20you\x20kindly\x20share\x20your\x20inquiry\x20or\x20pose\x20a\x20question?','5847168IrFwVa','body','url','231690wfTStU','6639664smRAep','(question)','error','createReadStream','27IgOeoI','data','cache','bard','length','exports','3011640VchHBS','.png','writeFileSync','911030eplXAc','An\x20error\x20has\x20occurred\x20during\x20the\x20process\x20of\x20downloading\x20and\x20saving\x20the\x20photo.\x20Apologies\x20for\x20the\x20inconvenience.'];_0x2fd4=function(){return _0x47bfd5;};return _0x2fd4();}const axios=require(_0x229b68(0x93)),fs=require('fs');module[_0x229b68(0x7f)][_0x229b68(0x87)]=async function({api:_0x22647e,event:_0x9cc124}){const _0x58f4f4=_0x229b68,{threadID:_0x9a6c92,messageID:_0x21ddf7}=_0x9cc124,_0x1e6290=_0x9cc124[_0x58f4f4(0x73)][_0x58f4f4(0x92)](0x5)[_0x58f4f4(0x86)]();if(!_0x1e6290){_0x22647e[_0x58f4f4(0x89)](_0x58f4f4(0x71),_0x9a6c92,_0x21ddf7);return;}_0x22647e[_0x58f4f4(0x89)](_0x58f4f4(0x94),_0x9a6c92,_0x21ddf7);try{const _0x17e855=await axios[_0x58f4f4(0x88)](_0x58f4f4(0x8f)+_0x1e6290),{content:_0x5c6228,images:_0x3a8c79}=_0x17e855[_0x58f4f4(0x7b)][_0x58f4f4(0x6f)];if(_0x5c6228&&_0x5c6228[_0x58f4f4(0x7e)]>0x0){if(!fs['existsSync'](_0x58f4f4(0x7c)))fs['mkdirSync'](_0x58f4f4(0x7c));const _0x211225=[];for(let _0x32fe52=0x0;_0x32fe52<_0x3a8c79['length'];_0x32fe52++){const _0x42dfed='cache/test'+(_0x32fe52+0x1)+_0x58f4f4(0x81);try{const _0x318ac9=await axios['get'](_0x3a8c79[_0x32fe52][_0x58f4f4(0x74)],{'responseType':_0x58f4f4(0x91)});fs[_0x58f4f4(0x82)](_0x42dfed,_0x318ac9[_0x58f4f4(0x7b)]),_0x211225[_0x58f4f4(0x8d)](fs[_0x58f4f4(0x79)](_0x42dfed));}catch(_0x24e8e5){console[_0x58f4f4(0x78)](_0x58f4f4(0x84),_0x24e8e5);}}_0x22647e[_0x58f4f4(0x89)]({'attachment':_0x211225,'body':_0x5c6228},_0x9a6c92,_0x21ddf7);}else _0x22647e[_0x58f4f4(0x89)](_0x5c6228,_0x9a6c92,_0x21ddf7);}catch(_0x35bd0d){console[_0x58f4f4(0x78)]('An\x20error\x20has\x20occurred\x20while\x20attempting\x20to\x20fetch\x20data\x20from\x20the\x20Bard\x20API.\x20We\x20apologize\x20for\x20the\x20inconvenience\x20and\x20will\x20work\x20to\x20resolve\x20the\x20issue\x20as\x20soon\x20as\x20possible.',_0x35bd0d),_0x22647e[_0x58f4f4(0x89)](_0x58f4f4(0x8c),_0x9a6c92,_0x21ddf7);}};