"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signalOfHumanSchema = void 0;
exports.signalOfHumanSchema = {
    "type": "object",
    "properties": {
        lng: { type: "number", required: true },
        lat: { type: "number", required: true },
        trash_level: { type: "number", required: true },
        excitement_level: { type: "number", required: true }
    },
    "required": ["lng", "lat", "trash_level", "excitement_level"]
};
//# sourceMappingURL=signal.js.map