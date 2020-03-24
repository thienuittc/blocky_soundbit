
Blockly.Blocks['block_stringtonumber'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_stringtonumber",
        "message0": "đổi chữ thành số %1",
        "args0": [
          {
            "type": "input_value",
            "name": "numbercv"
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_stringtonumber'] = function(block) {
  var value_numbercv = Blockly.Python.valueToCode(block, 'numbercv', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'int('+value_numbercv+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['block_create_car'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_create_car",
        "message0": "khởi động xe",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_create_car'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var code = 'new_car = Car()\nled_car = RGBcar()\n';
  return code;
};

Blockly.Blocks['block_car_forward'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_car_forward",
        "message0": "chạy thẳng với tốc độ %1",
        "args0": [
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "tốc độ từ 0 đến 1000",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_car_forward'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'new_car.forward('+value_speed+')\n';
  return code;
};

Blockly.Blocks['block_car_backward'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_car_backward",
        "message0": "lùi lại với tốc độ %1",
        "args0": [
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "tốc độ từ 0 đến 1000",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_car_backward'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'new_car.backward('+value_speed+')\n';
  return code;
};

Blockly.Blocks['block_car_stop'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_car_stop",
        "message0": "dừng lại",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_car_stop'] = function(block) {
  
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var code = 'new_car.stop()\n';
  return code;
};

Blockly.Blocks['block_car_left'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_car_left",
        "message0": "xoay trái với tốc độ %1",
        "args0": [
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "tốc độ từ 0 đến 1000",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_car_left'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'new_car.left('+value_speed+')\n';
  return code;
};

Blockly.Blocks['block_car_right'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_car_right",
        "message0": "xoay phải với tốc độ %1",
        "args0": [
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "tốc độ từ 0 đến 1000",
        "helpUrl": ""
      }
    );
  }
};
Blockly.Python['block_car_right'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'new_car.right('+value_speed+')\n';
  return code;
};


Blockly.Blocks['block_line_sensor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_type",
        "message0": "kiểm tra cảm biến dò đường %1 %2 %3",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "NAME1",
            "options": [
              [
                "Trái",
                "pin1"
              ],
              [
                "Phải",
                "pin0"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "NAME",
            "options": [
              [
                ">",
                ">"
              ],
              [
                "<",
                "<"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "num"
          }
        ],
        "inputsInline": true,
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_line_sensor'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  var dropdown_name1 = block.getFieldValue('NAME1');
  var dropdown_name = block.getFieldValue('NAME');
  var value_name = Blockly.Python.valueToCode(block, 'num', Blockly.Python.ORDER_ATOMIC);
  var code = dropdown_name1+'.read_analog()'+dropdown_name+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Blocks['block_led_car'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_led_car",
        "message0": "mở tất cả led với màu %1",
        "args0": [
          {
            "type": "field_colour",
            "name": "color",
            "colour": "#33ccff"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
      );
    }
  };
  

Blockly.Python['block_led_car'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_RGB'] = 'led_car = RGBcar()';
  var colour_color = block.getFieldValue('color');
  // TODO: Assemble Python into code variable.
  var code = 'led_car.all_led("'+colour_color+'")\n';
  return code;
};


Blockly.Blocks['block_speed_car'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_speed_car",
        "message0": "tốc độ %1",
        "args0": [
          {
            "type": "field_number",
            "name": "NAME",
            "value": 500,
            "min": 0,
            "max": 1000
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Tối đa 1000",
        "helpUrl": ""
      }
      );
    }
  };

  Blockly.Python['block_speed_car'] = function(block) {
    Blockly.Python.definitions_['import_car'] = 'from carbit import *';
    Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
    var number_name = block.getFieldValue('NAME');
    // TODO: Assemble Python into code variable.
    var code = 'new_car.setspeed('+number_name+')\n';
    return code;
  };

  
Blockly.Blocks['block_control_motor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_control_motor",
        "message0": "điều khiển động cơ %1 %2 với tốc độ %3",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "motor",
            "options": [
              [
                "Trái",
                "motor_left"
              ],
              [
                "Phải",
                "motor_right"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "state",
            "options": [
              [
                "Tiến tới",
                "True"
              ],
              [
                "Lùi lại",
                "False"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "tốc độ từ 0 đến 1000",
        "helpUrl": ""
      }
      );
    }
  };

Blockly.Python['block_control_motor'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
    var dropdown_motor = block.getFieldValue('motor');
    var dropdown_state = block.getFieldValue('state');
    var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'new_car.'+dropdown_motor+'('+dropdown_state+','+value_speed+')\n';
    return code;
  };


Blockly.Blocks['block_led'] = {
    init: function() {
      this.jsonInit(
        {
          "type": "block_led",
          "message0": "%2 đèn %1 ",
          "args0": [
            {
              "type": "field_dropdown",
              "name": "led",
              "options": [
                [
                  "Trái",
                  "led_left"
                ],
                [
                  "Phải",
                  "led_right"
                ]
              ]
            },
            {
              "type": "field_dropdown",
              "name": "state",
              "options": [
                [
                  "Bật",
                  "True"
                ],
                [
                  "Tắt",
                  "False"
                ]
              ]
            }
          ],
          "previousStatement": null,
          "nextStatement": null,
          "colour": 230,
          "tooltip": "",
          "helpUrl": ""
        }
        );
      }
    };

Blockly.Python['block_led'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_car'] = 'new_car = Car()';
      var dropdown_led = block.getFieldValue('led');
      var dropdown_state = block.getFieldValue('state');
      // TODO: Assemble Python into code variable.
      var code = 'new_car.'+dropdown_led+'('+dropdown_state+')\n';
      return code;
    };


Blockly.Blocks['block_single_led'] = {
      init: function() {
        this.jsonInit(
          {
            "type": "block_single_led",
            "message0": "đổi màu led số %1 thành màu %2",
            "args0": [
              {
                "type": "input_value",
                "name": "number_led"
              },
              {
                "type": "input_value",
                "name": "color"
              }
            ],
            "inputsInline": true,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "",
            "helpUrl": ""
          }
          );
        }
      };

Blockly.Python['block_single_led'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_RGB'] = 'led_car = RGBcar()';
        var value_number_led = Blockly.Python.valueToCode(block, 'number_led', Blockly.Python.ORDER_ATOMIC);
        var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
        // TODO: Assemble Python into code variable.
        var code = 'led_car.singleLed('+value_number_led+','+value_color+')\n';
        return code;
      };

Blockly.Blocks['block_ultrasonic'] = {
        init: function() {
          this.jsonInit(
            {
              "type": "block_ultrasonic",
              "message0": "tạo cảm biến khoảng cách",
              "previousStatement": null,
              "nextStatement": null,
              "colour": 230,
              "tooltip": "",
              "helpUrl": ""
            }
            );
          }
        };


Blockly.Python['block_ultrasonic'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_ultrasonic'] = 'ultrasonic_car = Ultrasonic_car()';
  // TODO: Assemble Python into code variable.
  var code = 'ultrasonic_car = Ultrasonic_car(trigger_pin=pin13.pin, echo_pin=pin14.pin)\n';
  return code;
};

Blockly.Blocks['block_ultrasonic_checkdistance'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_ultrasonic_checkdistance",
        "message0": "đọc cảm khoảng cách theo đơn vị %1",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "distance",
            "options": [
              [
                "cm",
                "cm"
              ],
              [
                "mm",
                "mm"
              ]
            ]
          }
        ],
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_ultrasonic_checkdistance'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_ultrasonic'] = 'ultrasonic_car = Ultrasonic_car()';
  var dropdown_distance = block.getFieldValue('distance');
  // TODO: Assemble Python into code variable.
  var code = 'ultrasonic_car.distance_'+dropdown_distance+'()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['block_bluetooth_car'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_checkchar",
        "message0": "khởi tạo Bluetooth",
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_bluetooth_car'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_bluetooth'] = 'bluetooth = Bluetooth_car()';
  // TODO: Assemble Python into code variable.
  var code = 'bluetooth = Bluetooth_car()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return code;
};

Blockly.Blocks['block_checkchar'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_type",
        "message0": "khi nhận được tin nhắn từ bluetooth  %1 %2",
        "args0": [
          {
            "type": "input_dummy"
          },
          {
            "type": "input_statement",
            "name": "NAME"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_checkchar'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_bluetooth'] = 'bluetooth = Bluetooth_car()';
  var statements_name = Blockly.Python.statementToCode(block, 'NAME');
  //if (statements_name=="")
  //    statements_name = "   pass";
  //var namefunc = "runabc"+Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  //Blockly.Python.definitions_['def car'] = 'def '+namefunc+'():\n'+statements_name+'';
  var code = 'if bluetooth.check_bluetooth():\n'+statements_name+'\n';
  
  return code;
};

Blockly.Blocks['block_mes_bluetooth'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_mes_bluetooth",
        "message0": "tin nhắn từ bluetooth ",
        "output": null,
        "colour": 230,
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python['block_mes_bluetooth'] = function(block) {
  Blockly.Python.definitions_['import_car'] = 'from carbit import *';
  Blockly.Python.definitions_['create_bluetooth'] = 'bluetooth = Bluetooth_car()';
  // TODO: Assemble Python into code variable.
  var code = 'bluetooth.msg_ble()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

// Blockly.Blocks['block_check_line'] = {
//   init: function() {
//     this.jsonInit(
//       {
//         "type": "block_check_line",
//         "message0": "giá trị cảm biến dò đường %1 %2",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "NAME",
//             "options": [
//               [
//                 ">",
//                 "1"
//               ],
//               [
//                 "<",
//                 "0"
//               ]
//             ]
//           },
//           {
//             "type": "input_value",
//             "name": "NAME"
//           }
//         ],
//         "inputsInline": true,
//         "output": null,
//         "colour": 230,
//         "tooltip": "",
//         "helpUrl": ""
//       }
//     );
//   }
// };

// Blockly.Python['block_check_line'] = function(block) {
//   var dropdown_name = block.getFieldValue('NAME');
//   var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//   // TODO: Assemble Python into code variable.
//   var code = '...';
//   // TODO: Change ORDER_NONE to the correct strength.
//   return [code, Blockly.Python.ORDER_NONE];
// };