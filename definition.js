
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
                "1"
              ],
              [
                "S2",
                "2"
              ],
              [
                "S3",
                "3"
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
Blockly.Python['block_sound_button'] = function(block) {
  var dropdown_nutnhan = block.getFieldValue('nutnhan');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};

