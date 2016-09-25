// TODO Toggle whitespace behavior?
// Real-time updating instead of submit buttons?
// Perhaps account for paragraphs and such?
// Do browsers/devices handle characters differently?

$(function() {
  var findASCII = function(input, type) {
    var ascii = '';
    input = input.split(' ');

    switch (type) {
      case 'decimal': {
        input.forEach(function(decimal) {
          ascii += String.fromCharCode(decimal) + ' ';
        });
        break;
      }
      case 'hex': {
        input.forEach(function(hex) {
          if (hex[0] == 0 && hex[1] == 'x') {
            hex = hex.slice(2);
          }

          ascii += String.fromCharCode(parseInt(hex, 16)) + ' ';
        });
        break;
      }
      case 'binary': {
        input.forEach(function(binary) {
          ascii += String.fromCharCode(parseInt(binary, 2)) + ' ';
        });
        break;
      }
      default:
        console.log(
            'Something went wrong. Here\'s the input: ' + input + ' ' + type
        );
    }

    return ascii.trim();
  };

  var findDecimal = function(ascii) {
    var decimal = '';
    ascii = ascii.split('');

    ascii.forEach(function(char) {
      decimal += char.charCodeAt(0) + ' ';
    });

    return decimal.trim();
  };

  var findHex = function(decimal) {
    var hex = '';
    decimal = decimal.split(' ');

    decimal.forEach(function(number) {
      number = Number(number);

      hex += '0x' + number.toString(16) + ' ';
    });

    return hex.trim();
  };

  var findBinary = function(decimal) {
    var binary = '';
    decimal = decimal.split(' ');

    decimal.forEach(function(number) {
      number = Number(number);

      binary += number.toString(2) + ' ';
    });

    return binary.trim();
  };

  var computeConversions = function(id, value) {
    var ascii, binary, decimal, hex;

    switch (id) {
      case 'ascii': {
        ascii = value;
        break;
      }
      case 'decimal': {
        decimal = value;
        break;
      }
      case 'hex': {
        hex = value;
        break;
      }
      case 'binary': {
        binary = value;
        break;
      }
      default:
        console.log(
            'Something went wrong. Here\'s the input: ' + id + ' ' + value
        );
    }

    if (id != 'ascii') {
      ascii = findASCII(value, id);
    }

    if (id != 'decimal') {
      decimal = findDecimal(ascii);
    }

    if (id != 'hex') {
      hex = findHex(decimal);
    }

    if (id != 'binary') {
      binary = findBinary(decimal);
    }

    $('#ascii-result').text(ascii);
    $('#binary-result').text(binary);
    $('#decimal-result').text(decimal);
    $('#hex-result').text(hex);
  };

  $('#btn-ascii').click(function() {
    var el = $('#ascii');
    var value = el.val();

    computeConversions('ascii', value);
    el.val('');
  });

  $('#btn-binary').click(function() {
    var el = $('#binary');
    var value = el.val();

    computeConversions('binary', value);
    el.val('');
  });

  $('#btn-decimal').click(function() {
    var el = $('#decimal');
    var value = el.val();

    computeConversions('decimal', value);
    el.val('');
  });

  $('#btn-hex').click(function() {
    var el = $('#hex');
    var value = el.val();

    computeConversions('hex', value);
    el.val('');
  });
});
