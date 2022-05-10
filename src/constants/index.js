import LOGO from "../assets/images/web/logo.jpg";
import SEPARATING_IMAGE from "../assets/images/web/separating.jpg";
import VOLTAGE_IMAGE from "../assets/images/web/voltage.jpg";
import SOAP_IMAGE from "../assets/images/web/soap.jpg";
import METHOD_WATER from "../assets/images/soap/screen1/water.png";
import METHOD_SOAP from "../assets/images/soap/screen1/soap.png";
import METHOD_WATER_RED from "../assets/images/soap/screen1/waterRed.png";
import METHOD_SOAP_RED from "../assets/images/soap/screen1/soapRed.png";

import FLOW_SOAP_10_A from "../assets/images/soap/screen2/soap10/flowA.mp4";
import FLOW_SOAP_10_B from "../assets/images/soap/screen2/soap10/flowB.mp4";
import FLOW_SOAP_10_C from "../assets/images/soap/screen2/soap10/flowC.mp4";
import FLOW_SOAP_10_D from "../assets/images/soap/screen2/soap10/flowD.mp4";
import FLOW_SOAP_10_E from "../assets/images/soap/screen2/soap10/flowE.jpg";

import FLOW_SOAP_20_A from "../assets/images/soap/screen2/soap20/flowA.mp4";
import FLOW_SOAP_20_B from "../assets/images/soap/screen2/soap20/flowB.mp4";
import FLOW_SOAP_20_C from "../assets/images/soap/screen2/soap20/flowC.mp4";
import FLOW_SOAP_20_D from "../assets/images/soap/screen2/soap20/flowD.mp4";
import FLOW_SOAP_20_E from "../assets/images/soap/screen2/soap20/flowE.jpg";

import FLOW_SOAP_30_A from "../assets/images/soap/screen2/soap30/flowA.mp4";
import FLOW_SOAP_30_B from "../assets/images/soap/screen2/soap30/flowB.mp4";
import FLOW_SOAP_30_C from "../assets/images/soap/screen2/soap30/flowC.mp4";
import FLOW_SOAP_30_D from "../assets/images/soap/screen2/soap30/flowD.mp4";
import FLOW_SOAP_30_E from "../assets/images/soap/screen2/soap30/flowE.jpg";

import FLOW_WATER_10_A from "../assets/images/soap/screen2/water10/flowA.mp4";
import FLOW_WATER_10_B from "../assets/images/soap/screen2/water10/flowB.mp4";
import FLOW_WATER_10_C from "../assets/images/soap/screen2/water10/flowC.mp4";
import FLOW_WATER_10_D from "../assets/images/soap/screen2/water10/flowD.mp4";
import FLOW_WATER_10_E from "../assets/images/soap/screen2/water10/flowE.jpg";

import FLOW_WATER_20_A from "../assets/images/soap/screen2/water20/flowA.mp4";
import FLOW_WATER_20_B from "../assets/images/soap/screen2/water20/flowB.mp4";
import FLOW_WATER_20_C from "../assets/images/soap/screen2/water20/flowC.mp4";
import FLOW_WATER_20_D from "../assets/images/soap/screen2/water20/flowD.mp4";
import FLOW_WATER_20_E from "../assets/images/soap/screen2/water20/flowE.jpg";

import FLOW_WATER_30_A from "../assets/images/soap/screen2/water30/flowA.mp4";
import FLOW_WATER_30_B from "../assets/images/soap/screen2/water30/flowB.mp4";
import FLOW_WATER_30_C from "../assets/images/soap/screen2/water30/flowC.mp4";
import FLOW_WATER_30_D from "../assets/images/soap/screen2/water30/flowD.mp4";
import FLOW_WATER_30_E from "../assets/images/soap/screen2/water30/flowE.jpg";

import SEPARATING_DISSOLVING from "../assets/images/separating/2A.mp4";
import SEPARATING_FILTRATION from "../assets/images/separating/2B.mp4";
import SEPARATING_EVAPORATION from "../assets/images/separating/2C.mp4";

const Constant = {
  BASE_URL: "https://localhost:7071",
  LOGO: LOGO,
  SEPARATING_IMAGE: SEPARATING_IMAGE,
  VOLTAGE_IMAGE: VOLTAGE_IMAGE,
  SOAP_IMAGE: SOAP_IMAGE,

  METHOD_WATER: METHOD_WATER,
  METHOD_SOAP: METHOD_SOAP,
  METHOD_SOAP_REd: METHOD_SOAP_RED,
  METHOD_WATER_RED: METHOD_WATER_RED,

  METHOD_TEXT_WATER: "METHOD WATER",
  METHOD_TEXT_SOAP: "METHOD ANTISEPTIC SOAP + WATER",

  FLOW_SOAP_10: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_10_A,
    },
    B: {
      description: "Washing of hands with water for 10 S with soap",
      type: "video",
      url: FLOW_SOAP_10_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_10_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_10_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_10_E,
    },
  },
  FLOW_SOAP_20: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_20_A,
    },
    B: {
      description: "Washing of hands with water for 20 S with soap",
      type: "video",
      url: FLOW_SOAP_20_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_20_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_20_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_20_E,
    },
  },
  FLOW_SOAP_30: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_SOAP_30_A,
    },
    B: {
      description: "Washing of hands with water for 30 S with soap",
      type: "video",
      url: FLOW_SOAP_30_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_SOAP_30_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_SOAP_30_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_SOAP_30_E,
    },
  },
  FLOW_WATER_10: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_10_A,
    },
    B: {
      description: "Washing of hands with water for 10 S",
      type: "video",
      url: FLOW_WATER_10_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_10_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_10_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_10_E,
    },
  },
  FLOW_WATER_20: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_20_A,
    },
    B: {
      description: "Washing of hands with water for 20 S",
      type: "video",
      url: FLOW_WATER_20_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_20_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_20_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_20_E,
    },
  },
  FLOW_WATER_30: {
    A: {
      description: "Streaking of agar plate with unwashed finger",
      type: "video",
      url: FLOW_WATER_30_A,
    },
    B: {
      description: "Washing of hands with water for 30 S",
      type: "video",
      url: FLOW_WATER_30_B,
    },
    C: {
      description: "Streaking of a new agar plate with washed finger",
      type: "video",
      url: FLOW_WATER_30_C,
    },
    D: {
      description: "Incubate for 24hrs",
      type: "video",
      url: FLOW_WATER_30_D,
    },
    E: {
      description: "Compare no of colonies on both agar plates",
      type: "image",
      url: FLOW_WATER_30_E,
    },
  },

  METHOD_SEPARATING_DISSOLVING: {
    text: "dissolving",
    video: SEPARATING_DISSOLVING,
  },

  METHOD_SEPARATING_FILTRATION: {
    text: "filtration",
    video: SEPARATING_FILTRATION,
  },

  METHOD_SEPARATING_EVAPORATION: {
    text: "evaporation",
    video: SEPARATING_EVAPORATION,
  },
};
Object.freeze(Constant);
export default Constant;
