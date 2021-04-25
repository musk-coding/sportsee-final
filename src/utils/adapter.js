import { Translation } from "../shared/constants";

export const getAdaptedRadarData = (raw) => {
  return raw.data.data.map((o) => {
    return {
      subject: Translation[raw.data.kind[o.kind]],
      value: o.value,
      fullMark: 250,
    };
  });
};
