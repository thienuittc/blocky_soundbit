
Blockly.Blocks['block_sound_firstplay'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_firstplay",
        "message0": "khởi động máy nghe nhạc",
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_sound_firstplay'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['import_soundbit'] = 'from soundbit import *';
  Blockly.Python.definitions_['create_sound'] = 'sound = SoundBit()';
  var code = 'time.sleep_ms(1000)\nsound.first_play()\n';
  return code;
};
Blockly.Blocks['block_sound_playback'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_playback",
        "message0": "chế độ lặp %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "mode",
            "options": [
              [
                "lặp toàn bộ",
                "0x00"
              ],
              [
                "lặp trong thư mục",
                "0x01"
              ],
              [
                "lặp 1 bài",
                "0x02"
              ],
              [
                "ngẫu nhiên",
                "0x03"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_sound_playback'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(100)\nsound.playback('+dropdown_mode+')\n';
  return code;
};

Blockly.Blocks['block_sound_button'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_button",
        "message0": "nút nhấn %1 được nhấn",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "nutnhan",
            "options": [
              [
                "S1",
                "15"
              ],
              [
                "S2",
                "14"
              ],
              [
                "S3",
                "13"
              ]
            ]
          }
        ],
        "output": "Boolean",
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_sound_button'] = function(block) {
  var dropdown_nutnhan = block.getFieldValue('nutnhan');
  // TODO: Assemble Python into code variable.
  var code = 'pin'+dropdown_nutnhan+'.read_digital()==0';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['block_sound_action'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_action",
        "message0": "%1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "action",
            "options": [
              [
                {
                  "src": "https://raw.githubusercontent.com/thienuittc/blocky_soundbit/master/icon-tian/PLAY.gif",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "play"
              ],
              [
                {
                  "src": "https://raw.githubusercontent.com/thienuittc/blocky_soundbit/master/icon-tian/pause.gif",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "pause"
              ],
              [
                {
                  "src": "https://raw.githubusercontent.com/thienuittc/blocky_soundbit/master/icon-tian/next.gif",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "playNext"
              ],
              [
                {
                  "src": "https://raw.githubusercontent.com/thienuittc/blocky_soundbit/master/icon-tian/pre.gif",
                  "width": 50,
                  "height": 20,
                  "alt": "*"
                },
                "playPrevious"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_sound_action'] = function(block) {
  var dropdown_action = block.getFieldValue('action');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(100)\nsound.'+dropdown_action+'()\n';
  return code;
};

Blockly.Blocks['block_sound_vol'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_vol",
        "message0": "mở âm lượng %1 %%",
        "args0": [
          {
            "type": "input_value",
            "name": "vol"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_sound_vol'] = function(block) {
  var number_vol = Blockly.Python.valueToCode(block, 'vol', Blockly.Python.ORDER_ATOMIC);
  // number_vol = number_vol/100;
  // TODO: Assemble Python into code variable.
  var code = 'sound.volume('+number_vol+')\n';
  return code;
};


Blockly.Blocks['block_sound_sound'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_sound_sound",
        "message0": "đổi thể loại nhạc %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "class",
            "options": [
              [
                "mặc định",
                "0x00"
              ],
              [
                "Rock",
                "0x01"
              ],
              [
                "Pop",
                "0x02"
              ],
              [
                "Jazz",
                "0x03"
              ],
              [
                "Classic",
                "0x04"
              ],
              [
                "Base",
                "0x05"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#780779",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_sound_sound'] = function(block) {
  var dropdown_class = block.getFieldValue('class');
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep_ms(20)\nsound.class_mucsic('+dropdown_class+')\n';
  return code;
};