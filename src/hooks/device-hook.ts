import { useMediaQuery } from "react-responsive";

interface IUseDeviceHook {
  CheckResponsive: () => boolean;
}
export const useDevice = (): IUseDeviceHook => {
  const CheckResponsive = () => {
    return useMediaQuery({ query: "(max-width: 767px)" });
  };

  return { CheckResponsive };
};
