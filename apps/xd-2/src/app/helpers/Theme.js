import { DARK_0, DARK_a1, DARK_a2, DARK_a3, DARK_b1, DARK_b2, DARK_b3, LIGHT_0, LIGHT_a1, LIGHT_a2, LIGHT_a3, LIGHT_b1, LIGHT_b2, LIGHT_b3 } from "app/globalStyles/theme";

export function getShadows(color, type) {
  switch (type) {
    case 'embed':
      return null;
    case 'neumorphic-overlay':
      switch (color) {
        case (DARK_b3):
          return ('-10px 10px 20px #05070b,10px -10px 20px #131927')
        case (DARK_b2):
          return ('-10px 10px 20px #0c1119,10px -10px 20px #1c293b')
        case (DARK_b1):
          return ('-10px 10px 20px #131c28,10px -10px 20px #273850')
        case (DARK_0):
          return ('-10px 10px 20px #1c2939,10px -10px 20px #304761')
        case (DARK_a1):
          return ('-10px 10px 20px #233447,10px -10px 20px #3a5676')
        case (DARK_a2):
          return ('-10px 10px 20px #293e54,10px -10px 20px #45678c')
        case (DARK_a3):
          return ('-10px 10px 20px #2f4761, 10px -10px 20px #4f77a1')

        case (LIGHT_b3):
          return ('-5px 5px 20px #7c8ca6,5px -5px 20px #a8bee0;')
        case (LIGHT_b2):
          return ('-5px 5px 20px #8b98ad,5px -5px 20px #bbceeb;')
        case (LIGHT_b1):
          return ('-5px 5px 20px #8b98ad,5px -5px 20px #bbceeb;')
        case (LIGHT_0):
          return ('-10px 10px 20px #a7afbc, 10px -10px 20px #e3edfe')
        case (LIGHT_a1):
          return ('-5px 5px 20px #b5bbc4,5px -5px 20px #f5fdff')
        case (LIGHT_a2):
          return ('-5px 5px 20px #c4c6ca,5px -5px 20px #ffffff')
        case (LIGHT_a3):
          return ('-5px 5px 20px #cdcdcd,5px -5px 20px #ffffff')
        default:
          return "0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)";
      }
    case 'neumorphic-embed':

      switch (color) {
        case (DARK_b3):
          return ('inset -5px 5px 20px #05060a, inset 5px -5px 20px #131a28')
        case (DARK_b2):
          return ('inset -5px 5px 20px #090c12,inset 5px -5px 20px #1f2e42')
        case (DARK_b1):
          return ('inset -5px 5px 20px #101822,inset 5px -5px 20px #2a3c56;')
        case (DARK_0):
          return ('inset -5px 5px 20px #203041,inset 5px -5px 20px #2c4059;')
        case (DARK_a1):
          return ('inset -5px 5px 20px #1c2938,inset 5px -5px 20px #406184;')
        case (DARK_a2):
          return ('inset -5px 5px 20px #213143,inset 5px -5px 20px #4d739d;')
        case (DARK_a3):
          return ('inset -5px 5px 20px #26394d,inset 5px -5px 20px #5885b5;')

        case (LIGHT_b3):
          return ('inset -5px 5px 20px #7c8ca6,inset 5px -5px 20px #a8bee0;')
        case (LIGHT_b2):
          return ('inset -5px 5px 20px #8b98ad,inset 5px -5px 20px #bbceeb;')
        case (LIGHT_b1):
          return ('inset -5px 5px 20px #8b98ad,inset 5px -5px 20px #bbceeb;')
        case (LIGHT_0):
          return ('inset -5px 5px 20px #99a3b4,inset 5px -5px 20px #cfddf4')
        case (LIGHT_a1):
          return ('inset -5px 5px 20px #b5bbc4,inset 5px -5px 20px #f5fdff')
        case (LIGHT_a2):
          return ('inset -5px 5px 20px #c4c6ca,inset 5px -5px 20px #ffffff')
        case (LIGHT_a3):
          return ('inset -5px 5px 20px #cdcdcd,inset 5px -5px 20px #ffffff')

        default:
          return "0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)";
      }
    case 'overlay':
    default:
      return "0.5px 0.4px 16.7px -15px rgba(0, 0, 0, 0.012),1px 0.8px 20.1px -15px rgba(0, 0, 0, 0.017),1.7px 1.4px 21.4px -15px rgba(0, 0, 0, 0.02),2.6px 2.1px 21.8px -15px rgba(0, 0, 0, 0.023),3.8px 3px 21.8px -15px rgba(0, 0, 0, 0.025),5.3px 4.3px 21.5px -15px rgba(0, 0, 0, 0.028),7.5px 6px 21.3px -15px rgba(0, 0, 0, 0.032),11px 8.8px 21.5px -15px rgba(0, 0, 0, 0.036),16.9px 13.5px 22.8px -15px rgba(0, 0, 0, 0.043),30px 24px 29px -15px rgba(0, 0, 0, 0.06)"
    // switch (color) {
    //   case ('#26384D'):
    //     return ('20px -20px 30px #203041,-20px 20px 30px #2c4059')
    //   default:
    //     return null;
    // }
  }
}


export function hexToRgbA(hex, opacity) {
  const itemopacity = opacity ? opacity : 1;
  var c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',' + itemopacity + ')';
  }
  // throw new Error('Bad Hex');
}

export function LightenDarkenColor(col, amt) {
  var usePound = false

  if (!col) {
    return null
  }
  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  var num = parseInt(col, 16)
  var r = (num >> 16) + amt

  if (r > 255) r = 255
  else if (r < 0) r = 0

  var b = ((num >> 8) & 0x00ff) + amt

  if (b > 255) b = 255
  else if (b < 0) b = 0

  var g = (num & 0x0000ff) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export function standardizeColor(colour) {
  var colours = {
    "aliceblue": "#f0f8ff", "antiquewhite": "#faebd7", "aqua": "#00ffff", "aquamarine": "#7fffd4", "azure": "#f0ffff",
    "beige": "#f5f5dc", "bisque": "#ffe4c4", "black": "#000000", "blanchedalmond": "#ffebcd", "blue": "#0000ff", "blueviolet": "#8a2be2", "brown": "#a52a2a", "burlywood": "#deb887",
    "cadetblue": "#5f9ea0", "chartreuse": "#7fff00", "chocolate": "#d2691e", "coral": "#ff7f50", "cornflowerblue": "#6495ed", "cornsilk": "#fff8dc", "crimson": "#dc143c", "cyan": "#00ffff",
    "darkblue": "#00008b", "darkcyan": "#008b8b", "darkgoldenrod": "#b8860b", "darkgray": "#a9a9a9", "darkgreen": "#006400", "darkkhaki": "#bdb76b", "darkmagenta": "#8b008b", "darkolivegreen": "#556b2f",
    "darkorange": "#ff8c00", "darkorchid": "#9932cc", "darkred": "#8b0000", "darksalmon": "#e9967a", "darkseagreen": "#8fbc8f", "darkslateblue": "#483d8b", "darkslategray": "#2f4f4f", "darkturquoise": "#00ced1",
    "darkviolet": "#9400d3", "deeppink": "#ff1493", "deepskyblue": "#00bfff", "dimgray": "#696969", "dodgerblue": "#1e90ff",
    "firebrick": "#b22222", "floralwhite": "#fffaf0", "forestgreen": "#228b22", "fuchsia": "#ff00ff",
    "gainsboro": "#dcdcdc", "ghostwhite": "#f8f8ff", "gold": "#ffd700", "goldenrod": "#daa520", "gray": "#808080", "green": "#008000", "greenyellow": "#adff2f",
    "honeydew": "#f0fff0", "hotpink": "#ff69b4",
    "indianred ": "#cd5c5c", "indigo": "#4b0082", "ivory": "#fffff0", "khaki": "#f0e68c",
    "lavender": "#e6e6fa", "lavenderblush": "#fff0f5", "lawngreen": "#7cfc00", "lemonchiffon": "#fffacd", "lightblue": "#add8e6", "lightcoral": "#f08080", "lightcyan": "#e0ffff", "lightgoldenrodyellow": "#fafad2",
    "lightgrey": "#d3d3d3", "lightgreen": "#90ee90", "lightpink": "#ffb6c1", "lightsalmon": "#ffa07a", "lightseagreen": "#20b2aa", "lightskyblue": "#87cefa", "lightslategray": "#778899", "lightsteelblue": "#b0c4de",
    "lightyellow": "#ffffe0", "lime": "#00ff00", "limegreen": "#32cd32", "linen": "#faf0e6",
    "magenta": "#ff00ff", "maroon": "#800000", "mediumaquamarine": "#66cdaa", "mediumblue": "#0000cd", "mediumorchid": "#ba55d3", "mediumpurple": "#9370d8", "mediumseagreen": "#3cb371", "mediumslateblue": "#7b68ee",
    "mediumspringgreen": "#00fa9a", "mediumturquoise": "#48d1cc", "mediumvioletred": "#c71585", "midnightblue": "#191970", "mintcream": "#f5fffa", "mistyrose": "#ffe4e1", "moccasin": "#ffe4b5",
    "navajowhite": "#ffdead", "navy": "#000080",
    "oldlace": "#fdf5e6", "olive": "#808000", "olivedrab": "#6b8e23", "orange": "#ffa500", "orangered": "#ff4500", "orchid": "#da70d6",
    "palegoldenrod": "#eee8aa", "palegreen": "#98fb98", "paleturquoise": "#afeeee", "palevioletred": "#d87093", "papayawhip": "#ffefd5", "peachpuff": "#ffdab9", "peru": "#cd853f", "pink": "#ffc0cb", "plum": "#dda0dd", "powderblue": "#b0e0e6", "purple": "#800080",
    "rebeccapurple": "#663399", "red": "#ff0000", "rosybrown": "#bc8f8f", "royalblue": "#4169e1",
    "saddlebrown": "#8b4513", "salmon": "#fa8072", "sandybrown": "#f4a460", "seagreen": "#2e8b57", "seashell": "#fff5ee", "sienna": "#a0522d", "silver": "#c0c0c0", "skyblue": "#87ceeb", "slateblue": "#6a5acd", "slategray": "#708090", "snow": "#fffafa", "springgreen": "#00ff7f", "steelblue": "#4682b4",
    "tan": "#d2b48c", "teal": "#008080", "thistle": "#d8bfd8", "tomato": "#ff6347", "turquoise": "#40e0d0",
    "violet": "#ee82ee",
    "wheat": "#f5deb3", "white": "#ffffff", "whitesmoke": "#f5f5f5",
    "yellow": "#ffff00", "yellowgreen": "#9acd32"
  };
  if (!colour) { return null }
  if (typeof colours[colour.toLowerCase()] != 'undefined')
    return colours[colour.toLowerCase()];

  return colour;
}